import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "next-i18next";

const Setra415 = ({ options }) => {
  const { t } = useTranslation("common");

  return (
    <SimpleReactLightbox>
      <h5 className="my-4">SETRA 415 HD ROYAL CLASS</h5>
      <div className="row">
        <div className="col-sm-12">
          <div className="card mb-3 bg">
            <div className="row">
              <div className="col-md-3">
                <img
                  src="/img/offer/coaches55/setra/1.jpg"
                  className="card-img top h-100"
                  alt=""
                  style={{ cursor: "default" }}
                />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title ">{t`coaches55.setra415.seats`}</h5>
                  <p className="card-text">{t`coaches55.setra415.info`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SRLWrapper options={options}>
        <div className="row">
          <div className="col-sm-3">
            <img src="/img/offer/coaches55/setra/2.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/coaches55/setra/3.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/coaches55/setra/4.jpg" alt="" className="card-img" />
          </div>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default Setra415;
