import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "next-i18next";

const MinibusVianoVip = ({ options }) => {
  const { t } = useTranslation("common");

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <h5 className="my-4">MINIBUS VIANO VIP</h5>
        <div className="row">
          <div className="col-sm-12">
            <div className="card mb-3 bg">
              <div className="row">
                <div className="col-md-3">
                  <img src="/img/offer/buses8/minibus-viano-vip/1.jpg" className="card-img top h-100" alt="" />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title ">{t`buses8.minibusvianovip.seats`}</h5>
                    <p className="card-text">{t`buses8.minibusvianovip.info`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <img src="/img/offer/buses8/minibus-viano-vip/2.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/buses8/minibus-viano-vip/3.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/buses8/minibus-viano-vip/4.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/buses8/minibus-viano-vip/5.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/buses8/minibus-viano-vip/6.jpg" alt="" className="card-img" />
          </div>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default MinibusVianoVip;
