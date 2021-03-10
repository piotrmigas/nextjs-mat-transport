import Link from "next/link";
import MercedesTurismo from "../../components/offer/coaches55/MercedesTurismo";
import Setra415 from "../../components/offer/coaches55/Setra415";
import NeoplanEuroliner from "../../components/offer/coaches55/NeoplanEuroliner";
import Mercedes350 from "../../components/offer/coaches55/Mercedes350";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Coaches55 = () => {
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
    <section className="coaches55">
      <div className="navbar navbar-dark bg mb-5">
        <Link href="/offer">
          <i className="fas fa-chevron-left pl-3" />
        </Link>
        <span className="text-white mb-0 mx-auto h5 text-wrap">{t`coaches55.header`}</span>
      </div>
      <div className="container pb-5">
        <MercedesTurismo options={options} />
        <Setra415 options={options} />
        <NeoplanEuroliner options={options} />
        <Mercedes350 options={options} />
      </div>
    </section>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Coaches55;
