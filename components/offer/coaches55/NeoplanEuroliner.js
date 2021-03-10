import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "next-i18next";

const NeoplanEuroliner = ({ options }) => {
  const { t } = useTranslation("common");

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <h5 className="my-4">NEOPLAN EUROLINER</h5>
        <div className="row">
          <div className="col-sm-12">
            <div className="card mb-3 bg">
              <div className="row">
                <div className="col-md-3">
                  <img src="/img/offer/coaches55/neoplan/1.jpg" className="card-img top h-100" alt="" />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title ">{t`coaches55.neoplaneuroliner.seats`}</h5>
                    <p className="card-text">{t`coaches55.neoplaneuroliner.info`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <img src="/img/offer/coaches55/neoplan/2.jpg" alt="" className="card-img" />
          </div>
          <div className="col-sm-3">
            <img src="/img/offer/coaches55/neoplan/3.jpg" alt="" className="card-img" />
          </div>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default NeoplanEuroliner;
