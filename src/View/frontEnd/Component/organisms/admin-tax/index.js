import { Button } from 'react-bootstrap';
// import { LadderMenuXp, AdminTaxTable } from "@components/organisms";
import LadderMenuXp from '../ladder-menu-xp';
import AdminTaxTable from '../admin-tax-table';
import "./style.scss";
import organizationApi from '../../../../../Api/frontEnd/organization';
import { useState, useEffect } from "react";
import FrontLoader from "../../../../../Common/FrontLoader";
import { Outlet, Link, useLocation, useOutletContext } from "react-router-dom";
import ToastAlert from "../../../../../Common/ToastAlert"

const AdminTax = () => {
  const [data, setData] = useOutletContext();
  const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
  const type = localStorage.getItem('type');
  const tempCampaignAdminAuthToken = localStorage.getItem('tempCampaignAdminAuthToken');
  const token = type ? type === 'temp' ? tempCampaignAdminAuthToken : CampaignAdminAuthToken : CampaignAdminAuthToken
  const [taxList, setTaxList] = useState([])
  const [loading, setLoading] = useState(false)
  const [pageNo, setPageNo] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalRecord, setTotalRecord] = useState(1)
  const [update, setUpdate] = useState(false)
  const [sortField, setSortField] = useState("created_at");
  const [order, setOrder] = useState("asc");

  const getTaxList = async (page, field, type) => {
    let formData = {}
    formData.pageNo = page
    formData.sortField = field
    formData.sortType = type
    formData.organizationId = data._id



    const taxList = await organizationApi.organizatationTaxlist(token, formData)
    if (taxList.data.success === true) {
      setTaxList(taxList.data.data)
      // console.log(taxList.data.data)
      setTotalPages(taxList.data.totalPages)
      setTotalRecord(taxList.data.totalRecord)
    }

  }


  useEffect(() => {
    (async () => {
      setLoading(true)
      await getTaxList(pageNo, sortField, order)
      setLoading(false)

    })()
  }, [data._id, update])


  const uploadImage = async (e, orderId, email, name) => {
    let file = e.target.files[0] ? e.target.files[0] : '';

    let fdata = {}
    fdata.image = file
    fdata.orderId = orderId
    fdata.email = email
    fdata.name = name
    fdata.organizationName = data.name

    setLoading(true)
    const uploadTax = await organizationApi.organizatationTaxUpload(token, fdata)
    if (uploadTax) {
      if (uploadTax.data.success === false) {
        setLoading(false)
        ToastAlert({ msg: uploadTax.data.message, msgType: 'error' });
      } else {
        setUpdate(!update)
        setLoading(false)
        ToastAlert({ msg: uploadTax.data.message, msgType: 'success' });
      }

    } else {
      setLoading(false)
      ToastAlert({ msg: 'something Went wrong', msgType: 'error' });
    }


  }

  return (
    <>
      <FrontLoader loading={loading} />
      <header className="py-sm-2 pb-2 w-100 d-sm-flex align-items-center">
        <div className="d-flex align-items-center me-sm-2 flex-grow-1 mb-3 mb-sm-0">
          <h1 className="d-none d-sm-flex page__title mb-0 fs-3 fw-bolder me-2">
            Tax
          </h1>
          <span className="d-none d-sm-flex text-light fs-5 ml-2">({totalRecord})</span>
        </div>
        <div className="ms-sm-auto d-flex">
          {/* <Button variant="info" size="lg" className='me-2 flex__1'>Download CSV</Button> */}
          {/* <LadderMenuXp /> */}
        </div>
      </header>

      <AdminTaxTable
        taxList={taxList}
        uploadImage={uploadImage}
      />
    </>
  );
};

export default AdminTax;
