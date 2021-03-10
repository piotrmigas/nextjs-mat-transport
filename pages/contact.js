import React from "react";
import Form from "../components/Form";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Loader from "react-loader-spinner";

const Contact = () => {
  const { t } = useTranslation("common");

  const [loading, setLoading] = React.useState(true);

  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
  };

  return (
    <section className="contact">
      <Provider template={AlertTemplate} {...options}>
        <div className="navbar navbar-dark bg mb-3">
          <div className="container">
            <span className="text-white mb-0 mx-auto h5">{t`contact.header`}</span>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-5">
              <h4 className="mb-5">{t`contact.name`}</h4>
              <div className="row">
                <div className="col-sm-2">
                  <span>
                    <i className="fas fa-map-marker-alt fa-2x" />
                  </span>
                </div>
                <div className="col-sm-9">
                  <h5>{t`contact.h1`}</h5>
                  <p>
                    <Trans>{t`contact.p1`}</Trans>
                  </p>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-sm-2" />
                <div className="col-sm-9">
                  <h5>{t`contact.h2`}</h5>
                  <p>
                    <Trans>{t`contact.p2`}</Trans>
                  </p>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-sm-2">
                  <span>
                    <i className="fas fa-phone-volume fa-2x" />
                  </span>
                </div>
                <div className="col-sm-9">
                  <h5>{t`contact.h3`}</h5>
                  <p>
                    +48 695 57 40 28
                    <br />
                    +48 601 55 49 81
                    <br />
                    TEL/FAX 12 655 49 81
                    <br />
                  </p>
                </div>
              </div>
              <p className="pt-5">
                e-mail: <a href="mailto:biuro@mattransport.pl">biuro@mattransport.pl</a>
              </p>
            </div>
            <div className="col-sm-7">
              {loading ? <Loader type="Watch" height={30} width={30} className="iframe-spinner" /> : null}
              <div className="row">
                <iframe
                  onLoad={() => setLoading(false)}
                  className="col-sm-12"
                  title="map"
                  width="600"
                  height="450"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.pl/maps?f=q&amp;source=s_q&amp;hl=pl&amp;geocode=+&amp;q=MATTRANSPORT&amp;g=Wodna+4,+Krak%C3%B3w&amp;ie=UTF8&amp;hq=FIRMA+MATTRANSPORT&amp;hnear=Krak%C3%B3w,+ma%C5%82opolskie&amp;t=m&amp;z=12&amp;iwloc=A&amp;output=embed"
                />
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sm-5 mx-auto">
              <h3 className="text-center pb-3">{t`contact.formHeader`}</h3>
              <div className="card">
                <div className="card-body">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    </section>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Contact;
