import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "next-i18next";

const IvecoRosero = ({ options }) => {
  const { t } = useTranslation("common");

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <h5 className="mb-4">IVECO ROSERO VIP 2018</h5>
        <div className="row">
          <div className="col-sm-12">
            <div className="card mb-3 bg">
              <div className="row">
                <div className="col-md-3">
                  <img src="/img/offer/coaches33/iveco-rosero/1.jpg" className="card-img top h-100" alt="" />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title ">{t`coaches33.ivecorosero.seats`}</h5>
                    <p className="card-text">{t`coaches33.ivecorosero.info`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <img src="/img/offer/coaches33/iveco-rosero/2.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/coaches33/iveco-rosero/3.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/coaches33/iveco-rosero/4.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/coaches33/iveco-rosero/5.jpg" alt="" className="card-img" />
          </div>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default IvecoRosero;
