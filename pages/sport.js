import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Sport = () => {
  const { t } = useTranslation("common");

  return (
    <section className="sport">
      <div className="navbar navbar-dark bg mb-5">
        <div className="container">
          <span className="text-white mb-0 mx-auto h5">SPORT</span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-10 mx-auto">
            <div id="sport" className="carousel slide carousel-fade" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#sport" data-slide-to="0" className="active" />
                <li data-target="#sport" data-slide-to="1" />
                <li data-target="#sport" data-slide-to="2" />
                <li data-target="#sport" data-slide-to="3" />
                <li data-target="#sport" data-slide-to="4" />
                <li data-target="#sport" data-slide-to="5" />
                <li data-target="#sport" data-slide-to="6" />
                <li data-target="#sport" data-slide-to="7" />
                <li data-target="#sport" data-slide-to="8" />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active" data-interval="4000">
                  <img src="img/sport/1.jpg" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item" data-interval="4000">
                  <img src="img/sport/2.jpg" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item" data-interval="4000">
                  <img src="img/sport/3.jpg" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item" data-interval="4000">
                  <img src="img/sport/4.jpg" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item" data-interval="4000">
                  <img src="img/sport/5.jpg" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item" data-interval="4000">
                  <img src="img/sport/6.jpg" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item" data-interval="4000">
                  <img src="img/sport/7.jpg" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item" data-interval="4000">
                  <img src="img/sport/8.jpg" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item" data-interval="4000">
                  <img src="img/sport/9.jpg" className="d-block w-100" alt="" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#sport" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#sport" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-sm-8 mx-auto">
            <h4 className="pb-2">{t`sport.ul`}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{t`sport.li1`}</li>
              <li className="list-group-item">{t`sport.li1`}</li>
              <li className="list-group-item">{t`sport.li2`}</li>
              <li className="list-group-item">{t`sport.li3`}</li>
              <li className="list-group-item">{t`sport.li4`}</li>
              <li className="list-group-item">{t`sport.li5`}</li>
              <li className="list-group-item">{t`sport.li6`}</li>
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

export default Sport;
