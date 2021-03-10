import Link from "next/link";
import MercedesAvantgarde from "../../components/offer/buses8/MercedesAvantgarde";
import MercedesVitoExtraLong from "../../components/offer/buses8/MercedesVitoExtraLong";
import MinibusVianoVip from "../../components/offer/buses8/MinibusVianoVip";
import MinibusVianoCdi from "../../components/offer/buses8/MinibusVianoCdi";
import MercedesVito111 from "../../components/offer/buses8/MercedesVito111";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Buses8 = () => {
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
    <section className="buses8">
      <div className="navbar navbar-dark bg mb-5">
        <Link href="/offer">
          <i className="fas fa-chevron-left pl-3" />
        </Link>
        <span className="text-white h5 mb-0 mx-auto text-wrap">{t`buses8.header`}</span>
      </div>
      <div className="container pb-5">
        <MercedesAvantgarde options={options} />
        <MercedesVitoExtraLong options={options} />
        <MinibusVianoVip options={options} />
        <MinibusVianoCdi options={options} />
        <MercedesVito111 options={options} />
      </div>
    </section>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Buses8;
