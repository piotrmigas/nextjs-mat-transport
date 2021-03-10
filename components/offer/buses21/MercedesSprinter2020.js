import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "next-i18next";

const MercedesSprinter2020 = ({ options }) => {
  const { t } = useTranslation("common");

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <h5 className="my-4">BUS MERCEDES SPRINTER VIP 2020</h5>
        <div className="row">
          <div className="col-sm-12">
            <div className="card mb-3 bg">
              <div className="row">
                <div className="col-md-3">
                  <img src="/img/offer/buses21/mercedes-sprinter-2020/1.jpg" alt="" className="card-img top h-100" />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title ">{t`buses21.mercedessprinter2020.seats`}</h5>
                    <p className="card-text">{t`buses21.mercedessprinter2020.info`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <img src="/img/offer/buses21/mercedes-sprinter-2020/2.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/buses21/mercedes-sprinter-2020/3.jpg" alt="" className="card-img" height="90%" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/buses21/mercedes-sprinter-2020/4.jpg" alt="" className="card-img" height="90%" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/buses21/mercedes-sprinter-2020/5.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/buses21/mercedes-sprinter-2020/6.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <a href="/img/offer/buses21/mercedes-sprinter-2020/7.jpg">
              <img
                src="/img/offer/buses21/mercedes-sprinter-2020/7thumb.jpg"
                alt=""
                className="card-img"
                height="91%"
              />
            </a>
          </div>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default MercedesSprinter2020;
