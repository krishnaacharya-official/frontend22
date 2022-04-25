import { Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import DefaultLayout from "../Component/templates/default-layout";
import AvatarImg from "../../../assets/images/avatar.jpeg";
import Avatar from "../Component/atoms/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import IconButton from "../Component/molecules/icon-button";
import ListItemImg from "../Component/atoms/list-item-img";
import settingApi from "../../../Api/admin/setting"
import FrontLoader from "../../../Common/FrontLoader"
import "./style.scss";

const Ranks = () => {
  const userAuthToken = localStorage.getItem('userAuthToken');
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState({
    captian: "",
    admiral: "",
    pirate: "",
    narwhal: "",
    beluga: "",
    fish: "",
})
const { captian, admiral, pirate, narwhal, beluga, fish } = state

useEffect(() => {
  (async () => {
 
      setLoading(true)
      const getSettingsValue = await settingApi.list(userAuthToken, Object.keys(state));
      if (getSettingsValue.data.data.length > 0) {
          let data = {}

          getSettingsValue.data.data.map((d, i) => {
              data[d.name] = d.value
          })

          setState({
              ...data
          })
      }
      setLoading(false)



  })()
}, [])
  return (
    <>
      <FrontLoader loading={loading} />
      <DefaultLayout>
        <Container fluid className="pt-5">
          <div className="d-flex align-items-center py-3 border-bottom">
            <Avatar
              size={35}
              avatarUrl={AvatarImg}
              border={0}
              shadow={false}
              className="mr-12p"
            />

            <span className="fs-7 text-light me-2">Your Rank</span>

            <IconButton
              bgColor="#a278fc"
              className="btn__xs rounded-pill"
              icon={<FontAwesomeIcon icon={solid("narwhal")} />}
            >
              Norwhal
            </IconButton>
            <a href="/" className="text-info fw-bold fs-5 ms-auto me-1">
              3,340 xp
            </a>
          </div>
          <div className="py-20p">
            <div className="note text-dark fs-7 mw-600">
              <div className="mb-12p">
                Learn how to earn XP through your interactions on Donorport
              </div>
              <a href="/" className="text-dark fw-bolder">
                Earn XP
              </a>
            </div>
          </div>

          <div className="rank__list mw-800 pb-5">
            <div className="rank__item d-sm-flex align-items-center py-4">
              <div className="xp__btn-wrap mb-2 mb-sm-0">
                <IconButton
                  bgColor="#000"
                  className="rounded-pill"
                  icon={<FontAwesomeIcon icon={solid("anchor")} />}
                >
                  Captain
                </IconButton>
              </div>
              <div className="mx-sm-4 flex__1 text-light mb-2 mb-sm-0">
                You have done it. You're the top donor on Donorport. Wear this
                badge with pride as your contributions have made a major impact in
                the community
              </div>
              <span className="fw-bold text-info">{captian} XP</span>
            </div>

            <div className="rank__item d-sm-flex align-items-center py-4">
              <div className="xp__btn-wrap mb-2 mb-sm-0">
                <IconButton
                  bgColor="#95dbb0"
                  className="rounded-pill"
                  icon={<FontAwesomeIcon icon={solid("ship")} />}
                >
                  Admiral
                </IconButton>
              </div>
              <div className="mx-sm-4 flex__1 text-light mb-2 mb-sm-0">
                The senior donor, you command the fleet. Your contributions are
                what drive the platform. You should feel proud of this rank
              </div>
              <span className="fw-bold text-info">{admiral} XP</span>
            </div>

            <div className="rank__item d-sm-flex align-items-center py-4">
              <div className="xp__btn-wrap mb-2 mb-sm-0">
                <IconButton
                  bgColor="#fc8c63"
                  className="rounded-pill"
                  icon={<FontAwesomeIcon icon={solid("swords")} />}
                >
                  Pirate
                </IconButton>
              </div>
              <div className="mx-sm-4 flex__1 text-light  mb-2 mb-sm-0">
                A master of the ports, you're revered for your efforts
              </div>
              <span className="fw-bold text-info">{pirate} XP</span>
            </div>

            <div className="rank__item d-sm-flex align-items-center py-4">
              <div className="xp__btn-wrap mb-2 mb-sm-0">
                <IconButton
                  bgColor="#a278fc"
                  className="rounded-pill"
                  icon={<FontAwesomeIcon icon={solid("narwhal")} />}
                >
                  Narwhal
                </IconButton>
              </div>
              <div className="mx-sm-4 flex__1 text-light mb-2 mb-sm-0">
                Poking your way around the ports, you're admired for your
                commitment to helping the community
              </div>
              <span className="fw-bold text-info">{narwhal} XP</span>
            </div>

            <div className="rank__item d-sm-flex align-items-center py-4">
              <div className="xp__btn-wrap mb-2 mb-sm-0">
                <IconButton
                  bgColor="#78bafc"
                  className="rounded-pill"
                  icon={<FontAwesomeIcon icon={solid("whale")} />}
                >
                  Beluga
                </IconButton>
              </div>
              <div className="mx-sm-4 flex__1 text-light mb-2 mb-sm-0">
                You've made your presence known on Donorport. We hear your calls
                to help the community
              </div>
              <span className="fw-bold text-info">{beluga} XP</span>
            </div>

            <div className="rank__item d-sm-flex align-items-center py-4">
              <div className="xp__btn-wrap mb-2 mb-sm-0">
                <IconButton
                  bgColor="hsla(0, 96.46%, 76.14%, 1.00)"
                  className="rounded-pill"
                  icon={<FontAwesomeIcon icon={solid("fish")} />}
                >
                  Fish
                </IconButton>
              </div>
              <div className="mx-sm-4 flex__1 text-light mb-2 mb-sm-0">
                There are plenty of fish in the sea but without you, there
                wouldn't be anything to fish for
              </div>
              <span className="fw-bold text-info">{fish} XP</span>
            </div>
          </div>
        </Container>
      </DefaultLayout>
    </>
  );
};

export default Ranks;
