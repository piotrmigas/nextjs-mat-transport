import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "next-i18next";

const BMW5Blue = ({ options }) => {
  const { t } = useTranslation("common");

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <h5 className="my-4">{t`cars.bmw5blue.header`}</h5>
        <div className="row">
          <div className="col-sm-12">
            <div className="card mb-3 bg">
              <div className="row">
                <div className="col-md-3">
                  <img src="/img/offer/cars/bmw-5-blue/1.jpg" className="card-img top h-100" alt="" />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title ">{t`cars.bmw5blue.seats`}</h5>
                    <p className="card-text">{t`cars.bmw5blue.info`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <img src="/img/offer/cars/bmw-5-blue/2.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/cars/bmw-5-blue/3.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/cars/bmw-5-blue/4.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/cars/bmw-5-blue/5.jpg" alt="" className="card-img" />
          </div>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default BMW5Blue;
