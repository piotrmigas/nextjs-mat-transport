import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "next-i18next";

const MercedesAvantgarde = ({ options }) => {
  const { t } = useTranslation("common");

  const single = {
    buttons: {
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
      showAutoplayButton: false,
      showNextButton: false,
      showPrevButton: false,
    },
    progressBar: {
      showProgressBar: false,
    },
    settings: {
      disablePanzoom: true,
    },
    thumbnails: { showThumbnails: false },
    caption: {
      showCaption: false,
    },
  };

  return (
    <>
      <h5 className="mb-4">{t`buses8.mercedesavantgarde.header`}</h5>
      <div className="row">
        <div className="col-sm-12">
          <div className="card mb-3 bg">
            <div className="row">
              <div className="col-md-3">
                <div className="row order-1">
                  <div className="col-sm-12">
                    <SimpleReactLightbox>
                      <SRLWrapper options={single}>
                        <img
                          src="/img/offer/buses8/mercedes-v-avantgarde/1.jpg"
                          className="card-img top h-100"
                          alt=""
                        />
                      </SRLWrapper>
                    </SimpleReactLightbox>
                  </div>
                </div>
                <div className="row vip-row order-2">
                  <div className="col-sm-12 my-auto text-center">
                    <img src="/img/offer/buses8/mercedes-v-avantgarde/vip.png" alt="" width="30%" height="30%" />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">{t`buses8.mercedesavantgarde.seats`}</h5>
                  <p className="card-text">{t`buses8.mercedesavantgarde.info`}</p>
                  <p className="card-text">{t`buses8.mercedesavantgarde.info2`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
          <div className="row mb-3">
            <div className="col-sm-3">
              <img src="/img/offer/buses8/mercedes-v-avantgarde/2.jpg" alt="" className="card-img" />
            </div>
            <div className="col-sm-3">
              <img src="/img/offer/buses8/mercedes-v-avantgarde/3.jpg" alt="" className="card-img" />
            </div>
            <div className="col-sm-3">
              <img src="/img/offer/buses8/mercedes-v-avantgarde/4.jpg" alt="" className="card-img" />
            </div>
            <div className="col-sm-3">
              <img src="/img/offer/buses8/mercedes-v-avantgarde/5.jpg" alt="" className="card-img" />
            </div>
            <div className="col-sm-3">
              <img src="/img/offer/buses8/mercedes-v-avantgarde/6.jpg" alt="" className="card-img" />
            </div>
            <div className="col-sm-3">
              <img src="/img/offer/buses8/mercedes-v-avantgarde/7.jpg" alt="" className="card-img" />
            </div>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
};

export default MercedesAvantgarde;
