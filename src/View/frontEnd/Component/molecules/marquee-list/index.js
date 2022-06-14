import Marquee from "react-fast-marquee";
import helper from "../../../../../Common/Helper";
import "./style.scss";

const MarqueeList = (props) => {
  let campaignAdminList = props.campaignAdminList
  return (
    <Marquee gradient={false} speed={50}>
      <div className="collection__list">

        {
          campaignAdminList && campaignAdminList.length > 0 &&
          campaignAdminList.map((list, i) => {
            return (
              <div className="icon__item" key={i}>
                <div className="icon__img-wrap">
                  <img
                    src={helper.CampaignAdminLogoPath+list.logo}
                    alt=""
                  />
                </div>
              </div>
            )
          })
        }
        {/* <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcad4a42b8bac4cd433607_output-onlinejpgtools.png"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcab55cf10475a1ab5a297_First-Word.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcab0342b8ba9de7433519_design-lab.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcb0c93fcd2a0d1b6f822d_Red_Cross_icon.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c38e4fd28a71363f4ac5d_Tree-Frog-Logo-Mock.png"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5b5e3abc89ff9c7e9224dfd8_tree-logo.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcaebf3c68ee63af6f9655_output-onlinejpgtools%20copy%203.png"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcb1627d67447436a3e4f8_output-onlinepngtools%20(2)%20copy%202.png"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5f7b73e417bfde455c8ffef7_Kids%20toys.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebc936932a58ab54859da40_output-onlinepngtools%20(1).png"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcae6ed960458f488e20bf_output-onlinejpgtools%20copy%202.png"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5f7b7f786f5281f103d70283_babyshop.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcb1d373e4e019a6242372_output-onlinejpgtools%20copy%205.png"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcb20504c5ea349df4c3e6_59f94b90269fd600013970e8_social-chain.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcb3524a439585345676d0_vet2.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/59f94ca93b328600018344bb_creative-elegant-seeklogo.com.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcaffa858adb57a592365c_output-onlinepngtools%20(2).png"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcaef94522d6165f6358bc_5a02232ad47dd70001e59c79_micro-fram.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5bb2ee3bb4bfa8556094aea1_194.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcb035e1ecc6331e1e7b0b_59f94b9878cc2d0001fda9d0_Panda.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcb086ee8fce115aebd471_output-onlinepngtools%20(2)%20copy.png"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcaf9c7fbd925df4f55956_output-onlinejpgtools%20copy%204.png"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcb3ea6371fe401a7cb43f_59fabe94ea359e000108f2ca_Hipster1.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcb2eb126ca656e47e890e_vet.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/6226f0558c2a5e88445efa17_59f94c42269fd60001397113_sport-seeklogo.com.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5f7b664ce06cd246cd1b893a_baby-care.svg"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcae0fc267df1c4b87a6dc_output-onlinejpgtools%20copy.png"
              alt=""
            />
          </div>
        </div>
        <div className="icon__item">
          <div className="icon__img-wrap">
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcb0f4cd81149c87556098_5a021f43adac4d0001902cd3_reino-dental.svg"
              alt=""
            />
          </div>
        </div> */}
      </div>
    </Marquee>
  );
};

export default MarqueeList;