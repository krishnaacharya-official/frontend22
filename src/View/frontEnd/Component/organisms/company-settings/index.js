import "./style.scss";
import { Outlet, Link, useLocation, useOutletContext } from "react-router-dom";
import React, { useState, useEffect,useContext } from "react";
import FrontLoader from "../../../../../Common/FrontLoader";
import helper from "../../../../../Common/Helper";
import { validateAll } from "indicative/validator";
import ToastAlert from "../../../../../Common/ToastAlert"
import adminCampaignApi from "../../../../../Api/admin/adminCampaign";
import { Button } from "react-bootstrap";
// import { UserContext } from '../../../../../App';
import { useSelector, useDispatch } from "react-redux";
import { setIsUpdateCart ,setIsUpdateOrganization} from "../../../../../user/user.action"

const CompanySettings = () => {
    const user = useSelector((state) => state.user);
    // const user = useContext(UserContext)
  const dispatch = useDispatch();
  const [data, setData] = useOutletContext();
  const [loading, setLoading] = useState(false)
  const [embedlink, setEmbedlink] = useState('')
  const [tempImg, setTempImg] = useState('')
  const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
  const [update, setUpdate] = useState(false)



  const [state, setState] = useState({
    logo: "",
    name: "",
    headline: "",
    mission: "",
    promoVideo: "",
    error: []
  })
  const { name, headline, mission, promoVideo, logo, error } = state

  const changefile = (e) => {
    let file = e.target.files[0] ? e.target.files[0] : '';
    setTempImg(URL.createObjectURL(file))

    setState({
      ...state,
      logo: file
    })
  }
  const changevalue = (e) => {
    let value = e.target.value;
    setState({
        ...state,
        [e.target.name]: value
    })
    if(e.target.name === 'promoVideo'){
      let url = value;
      let id = url && url.split("?v=")[1];
      let embedUrl = url ? "http://www.youtube.com/embed/" + id : "";
      setEmbedlink(embedUrl)
    }
}

  useEffect(() => {
    // console.log(data.description)
    setLoading(true)
    setState({
      ...state,
      name: data.name,
      mission: data.description,
      headline: data.headline,
      promoVideo: data.promoVideo,
      logo: data.logo,

    })
    let url = data.promoVideo;
    let id = url && url.split("?v=")[1];
    let embedUrl = url ? "http://www.youtube.com/embed/" + id : "";
    setEmbedlink(embedUrl)
    setLoading(false)

  }, [data._id,user.isUpdateOrg])

  const updateProfile = () => {
    const rules = {
      name: "required",
      mission: "required",
      promoVideo: "required",
    }

    const message = {
      'name.required': 'Name is Required.',
      'mission.required': 'mission is Required.',
      'promoVideo.required': 'Promo Video is Required.',






    }

    validateAll(state, rules, message).then(async () => {
      const formaerrror = {};
      setState({
        ...state,
        error: formaerrror
      })
      let data = {}
      data.name = name
      data.description = mission
      data.headline = headline
      data.promoVideo = promoVideo



      // data.password = password
      if (logo) {
        data.logo = logo
        // console.log(logo)
      }


      setLoading(true)
      const addUser = await adminCampaignApi.saveCampaignDetails(CampaignAdminAuthToken, data)
      if (addUser) {
        if (!addUser.data.success) {
          setLoading(false)
          ToastAlert({ msg: addUser.data.message, msgType: 'error' });
        } else {
          setUpdate(!update)
          // user.setUpdateOrg(!user.isUpdateOrg)
          dispatch(setIsUpdateOrganization(!user.isUpdateOrg))

          setData(state)
          setLoading(false)
          ToastAlert({ msg: addUser.data.message, msgType: 'success' });

        }

      } else {
        setLoading(false)
        ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
      }


    }).catch(errors => {
      // console.log(errors)
      setLoading(false)
      const formaerrror = {};
      if (errors.length) {
        errors.forEach(element => {
          formaerrror[element.field] = element.message
        });
      } else {
        ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
      }

      setState({
        ...state,
        error: formaerrror
      })

    });

  }
  return (
    <>
      <FrontLoader loading={loading} />
      <div className="mb-5 mw-400">
        <h4 className="fw-bolder">About</h4>
        <div className="text-subtext mb-3">
          This info appears on your organization's page:
        </div>

        <div className="ml-3 mb-5">
          <div className="row">

            <label className="filelabel col-sm-3">
              <i className="fa fa-paperclip ">
              </i>
              <span className="title">
                Logo
              </span>
              <input className="FileUpload1" id="FileInput" name="booking_attachment" type="file" onChange={(e) => changefile(e)} />
            </label>
            {
              tempImg !== "" || logo !== "" ?
                <div className="col-sm-6 ml-3">
                  <img src={tempImg ? tempImg : logo ? helper.CampaignAdminLogoPath + logo : ""} alt="Donorport Logo Icon" className="" style={{ width: "100px" }} />
                </div>
                : <></>
            }

          </div>
        </div>



        <div className="input__wrap mb-3">
          <label className="input__label flex__1">
            <input type="text" name="name" value={name} onChange={(e)=>changevalue(e)} />
            <span className="input__span">Organisation Name</span>
          </label>
        </div>

        <div className="input__wrap mb-3">
          <label className="input__label mb-2">
            <input type="text"  name="headline" value={headline} onChange={(e)=>changevalue(e)} />
            <span className="input__span" >Headline</span>
          </label>
          <div className="helper__text fs-7 text-end text-subtext">
            120 chars remaining
          </div>
        </div>
        <div className="note note--inputs mb-3">
          A headline is the subtitle that appears on your organization's page
          that describes your cause in 120 characters or less.
        </div>
        <div className="input__wrap mb-3">
          <label className="input__label mb-2">
            <textarea rows="6" name="mission" value={mission} onChange={(e)=>changevalue(e)}></textarea>
            <span className="input__span" >Mission</span>
          </label>
          <div className="helper__text fs-7 text-end text-subtext">
            240 chars remaining
          </div>
        </div>
      </div>

      <div className="mb-5 mw-400">
        <h4 className="fw-bolder">Promo Video</h4>
        <div className="text-subtext mb-3">
          This video appears on your organization's page:
        </div>
        <div className="input__wrap mb-3">
          <label className="input__label">
            <input
              className="input__text"
              type="text"
              name="promoVideo"
              onChange={(e)=>changevalue(e)}
              placeholder="Video URL"
              value={promoVideo}
            />
          </label>
        </div>
        <div className="post__video minh-120 border bg-lighter mb-3">
          <iframe
            title="post-video"
            width="200"
            height="200"
            src={embedlink}
          ></iframe>
        </div>
        <Button variant="info" className="mt-3 mb-3" onClick={() => updateProfile()}>Save Details</Button>
        <div className="fw-bolder mb-3">Account Deactivation</div>
        <div className="deactivate">
          <h5>Do you really want to leave us?</h5>
          <ul className="list list--deactivate">
            <li className="list__item">
              <div>
                All account information will be lost including order history and
                payment information.
              </div>
            </li>
            <li className="list__item">
              <div>Active orders will be cancelled.</div>
            </li>
            <li className="list__item">
              <div>This cannot be undone.</div>
            </li>
          </ul>
          <a href="#" className="btn btn--deactivate">
            Deactivate
          </a>
        </div>
      </div>
    </>
  );
};

export default CompanySettings;
