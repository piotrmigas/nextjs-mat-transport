import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "next-i18next";

const MercedesVito111 = ({ options }) => {
  const { t } = useTranslation("common");

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <h5 className="my-4">MERCEDES VITO 111CDI/115CDI</h5>
        <div className="row">
          <div className="col-sm-12">
            <div className="card mb-3 bg">
              <div className="row">
                <div className="col-md-3">
                  <img src="/img/offer/buses8/mercedes-vito-111/1.jpg" className="card-img top h-100" alt="" />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title ">{t`buses8.mercedesvito111.seats`}</h5>
                    <p className="card-text">{t`buses8.mercedesvito111.info`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <img src="/img/offer/buses8/mercedes-vito-111/2.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/buses8/mercedes-vito-111/3.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/buses8/mercedes-vito-111/4.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/buses8/mercedes-vito-111/5.jpg" alt="" className="card-img" />
          </div>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default MercedesVito111;
