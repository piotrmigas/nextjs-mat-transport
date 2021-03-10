import Link from "next/link";
import MercedesSprinter2013 from "../../components/offer/buses21/MercedesSprinter2013";
import MercedesSprinter2020 from "../../components/offer/buses21/MercedesSprinter2020";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Buses21 = () => {
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
    <section className="buses21">
      <div className="navbar navbar-dark bg mb-5">
        <Link href="/offer">
          <i className="fas fa-chevron-left pl-3" />
        </Link>
        <span className="text-white mb-0 h5 mx-auto text-wrap">{t`buses21.header`}</span>
      </div>
      <div className="container pb-5">
        <MercedesSprinter2020 options={options} />
        <MercedesSprinter2013 options={options} />
      </div>
    </section>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Buses21;
