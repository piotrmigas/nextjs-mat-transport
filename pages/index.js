import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const [covid1Img, setCovid1Img] = React.useState("covid1");
  const [covid2Img, setCovid2Img] = React.useState("covid2");

  const router = useRouter();
  const { t } = useTranslation("common");

  React.useEffect(() => {
    if (router.locale === "en") {
      setCovid1Img("covid1en");
      setCovid2Img("covid2en");
    } else {
      setCovid1Img("covid1");
      setCovid2Img("covid2");
    }
  }, [router.locale]);

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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 mx-auto">
              <h3 className="text-center my-5">{t`home.header`}</h3>
              <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel" data-slide-to="0" className="active" />
                  <li data-target="#carousel" data-slide-to="1" />
                  <li data-target="#carousel" data-slide-to="2" />
                  <li data-target="#carousel" data-slide-to="3" />
                  <li data-target="#carousel" data-slide-to="4" />
                  <li data-target="#carousel" data-slide-to="5" />
                  <li data-target="#carousel" data-slide-to="6" />
                  <li data-target="#carousel" data-slide-to="7" />
                  <li data-target="#carousel" data-slide-to="8" />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-interval="4000">
                    <img src="/img/home/1.jpg" className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item" data-interval="4000">
                    <img src="/img/home/2.jpg" className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item" data-interval="4000">
                    <img src="/img/home/3.jpg" className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item" data-interval="4000">
                    <img src="/img/home/4.jpg" className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item" data-interval="4000">
                    <img src="/img/home/5.jpg" className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item" data-interval="4000">
                    <img src="/img/home/6.jpg" className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item" data-interval="4000">
                    <img src="/img/home/7.jpg" className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item" data-interval="4000">
                    <img src="/img/home/8.jpg" className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item" data-interval="4000">
                    <img src="/img/home/9.jpg" className="d-block w-100" alt="" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              <div className="row mt-5">
                <div className="col-sm-6">
                  <img src={`/img/home/${covid1Img}.jpg`} alt="" className="covid1" />
                </div>
                <div className="col-sm-6">
                  <img src={`/img/home/${covid2Img}.jpg`} alt="" />
                </div>
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
          <div className="row my-5">
            <div className="col-sm-12">
              <p className="text-justify">{t`home.content`}</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
