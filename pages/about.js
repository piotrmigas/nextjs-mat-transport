import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <section className="about">
      <div className="navbar navbar-dark bg">
        <span className="mb-0 text-white mx-auto h5">{t`about.header`}</span>
      </div>
      <div className="container pt-5 pb-4">
        <p className="pb-2">
          <Trans>{t`about.p1`}</Trans>
        </p>
        <p className="pb-2">
          <Trans>{t`about.p2`}</Trans>
        </p>
        <p className="pb-2">{t`about.p3`}</p>
        <p className="pb-2">{t`about.p4`}</p>
        <p className="font-weight-bold">Mirosław Mildner, Paweł Mildner</p>
      </div>
    </section>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default About;
