import Link from "next/link";
import IvecoRosero from "../../components/offer/coaches33/IvecoRosero";
import IvecoMago2White from "../../components/offer/coaches33/IvecoMago2White";
import IvecoMago2Silver from "../../components/offer/coaches33/IvecoMago2Silver";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Coaches33 = () => {
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
        <span className="text-white mb-0 h5 mx-auto text-wrap">{t`coaches33.header`}</span>
      </div>
      <div className="container pb-5">
        <IvecoRosero options={options} />
        <IvecoMago2White options={options} />
        <IvecoMago2Silver options={options} />
      </div>
    </section>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Coaches33;
