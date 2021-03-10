import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Testimonials = () => {
  const { t } = useTranslation("common");

  const options = {
    buttons: {
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
      showAutoplayButton: false,
      showNextButton: false,
      showPrevButton: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
    progressBar: {
      showProgressBar: false,
    },
    settings: {
      disablePanzoom: true,
      disableWheelControls: true,
    },
    caption: {
      showCaption: false,
    },
  };

  return (
    <section className="testimonials">
      <div className="navbar navbar-dark bg mb-5">
        <div className="container">
          <span className="mb-0 text-white mx-auto h5">{t`testimonials.header`}</span>
        </div>
      </div>
      <div className="container pb-5">
        <h5 className="my-4">
          <Trans>{t`testimonials.title`}</Trans>
        </h5>
        <p className="text-justify mb-5">{t`testimonials.p1`}</p>
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <div className="row">
              <div className="col-sm-6">
                <div className="card mb-4">
                  <img src="img/testimonials/1.jpg" alt="" className="card-img-top" />
                  <div className="card-body border-top">
                    <p className="card-text">
                      <Trans>{t`testimonials.img1`}</Trans>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card mb-4">
                  <img src="img/testimonials/2.jpg" alt="" className="card-img-top" />
                  <div className="card-body border-top">
                    <p className="card-text pt-2 pb-3">
                      <Trans>{t`testimonials.img2`}</Trans>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="card mb-4">
                  <img src="img/testimonials/3.jpg" alt="" className="card-img-top" />
                  <div className="card-body border-top">
                    <p className="card-text">{t`testimonials.img3`}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card mb-4">
                  <img src="img/testimonials/4.jpg" alt="" className="card-img-top" />
                  <div className="card-body border-top">
                    <p className="card-text pt-2 pb-3">{t`testimonials.img4`}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-justify mt-4 mb-5">{t`testimonials.p2`}</p>
            <div className="row">
              <div className="col-sm-6">
                <div className="card mb-4">
                  <img src="img/testimonials/5.jpg" alt="" className="card-img-top" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card mb-4">
                  <img src="img/testimonials/6.jpg" alt="" className="card-img-top" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="card mb-4">
                  <img src="img/testimonials/7.jpg" alt="" className="card-img-top" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card mb-4">
                  <img src="img/testimonials/8.jpg" alt="" className="card-img-top" />
                </div>
              </div>
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
        <div className="row mt-5 mb-4">
          <div className="col-sm-10 mx-auto">
            <ul className="list-group list-group-flush ">
              <li className="list-group-item">
                <Trans>{t`testimonials.li1`}</Trans>
              </li>
              <li className="list-group-item">
                <Trans>{t`testimonials.li2`}</Trans>
              </li>
              <li className="list-group-item">
                <Trans>{t`testimonials.li3`}</Trans>
              </li>
              <li className="list-group-item">{t`testimonials.li4`}</li>
              <li className="list-group-item">{t`testimonials.li5`}</li>
              <li className="list-group-item">{t`testimonials.li6`}</li>
              <li className="list-group-item">
                <Trans>{t`testimonials.li7`}</Trans>
              </li>
              <li className="list-group-item">{t`testimonials.li8`}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Testimonials;
