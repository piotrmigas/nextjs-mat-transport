import Link from "next/link";
import MercedesE2018 from "../../components/offer/cars/MercedesE2018";
import MercedesE2019 from "../../components/offer/cars/MercedesE2019";
import BMW5Black from "../../components/offer/cars/BMW5Black";
import BMW5Blue from "../../components/offer/cars/BMW5Blue";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Cars = () => {
  const { t } = useTranslation("common");

  const options = {
    buttons: {
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
      showAutoplayButton: false,
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
    <section className="coaches33">
      <div className="navbar navbar-dark bg mb-5">
        <Link href="/offer">
          <i className="fas fa-chevron-left pl-3" />
        </Link>
        <span className="text-white mb-0 h5 mx-auto text-wrap">{t`cars.header`}</span>
      </div>
      <div className="container pb-5">
        <MercedesE2018 options={options} />
        <MercedesE2019 options={options} />
        <BMW5Black options={options} />
        <BMW5Blue options={options} />
      </div>
    </section>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Cars;
