import Link from "next/link";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Offer = () => {
  const { t } = useTranslation("common");

  return (
    <section className="offer">
      <div className="navbar navbar-dark bg mb-5">
        <div className="container break-text">
          <span className="text-white mb-0 mx-auto h5 text-wrap">{t`offer.header`}</span>
        </div>
      </div>
      <div className="container pb-5">
        <h4 className="text-center my-5">{t`offer.title`}</h4>
        <p className="text-justify">{t`offer.content`}</p>
        <hr className="my-5" />
        <div className="row justify-content-center">
          <div className="col-sm-2 text-center">
            <p className="pb-4">{t`offer.cars`}</p>
            <Link href="/offer/cars">
              <a>
                <i className="fas fa-car fa-3x" />
              </a>
            </Link>
          </div>
          <div className="col-sm-2 text-center">
            <p>
              <Trans>{t`offer.buses8`}</Trans>
            </p>
            <Link href="/offer/buses8">
              <a>
                <i className="fas fa-shuttle-van fa-3x" />
              </a>
            </Link>
          </div>
          <div className="col-sm-2 text-center">
            <p>
              <Trans>{t`offer.buses21`}</Trans>
            </p>
            <Link href="/offer/buses21">
              <a>
                <i className="fas fa-shuttle-van fa-3x" />
              </a>
            </Link>
          </div>
          <div className="col-sm-2 text-center">
            <p>
              <Trans>{t`offer.coaches33`}</Trans>
            </p>
            <Link href="/offer/coaches33">
              <a>
                <i className="fas fa-bus fa-3x" />
              </a>
            </Link>
          </div>
          <div className="col-sm-2 text-center">
            <p>
              <Trans>{t`offer.coaches55`}</Trans>
            </p>
            <Link href="/offer/coaches55">
              <a>
                <i className="fas fa-bus fa-3x" />
              </a>
            </Link>
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

export default Offer;
