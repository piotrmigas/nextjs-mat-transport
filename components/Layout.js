import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { useTranslation } from "next-i18next";

const Layout = ({ children }) => {
  const { t } = useTranslation("common");

  const description =
    "Oferujemy wynajem autokarów, wynajem busów i minibusów oraz wynajem samochodów osobowych z kierowcą. Nowoczesne pojazdy i doświadczeni kierowcy to nasz standard. Mat Transport, Kraków";

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Head>
          <title>{t`title`}</title>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:site_name" content={t`title`} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/img/logo.png" />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="og:title" content={t`title`} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
            integrity="sha512-xA6Hp6oezhjd6LiLZynuukm80f8BoZ3OpcEYaqKoCV3HKQDrYjDE1Gu8ocxgxoXmwmSzM4iqPvCsOkQNiu41GA=="
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css"
            integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK"
            crossOrigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.bundle.min.js"
            integrity="sha384-BOsAfwzjNJHrJ8cZidOg56tcQWfp6y72vEJ8xQ9w6Quywb24iOsW913URv1IS4GD"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <Navbar />
        <>{children}</>
        <Footer />
        <a
          href="https://api.whatsapp.com/send?phone=48695574028"
          className="whatsapp-button"
          target="_blank"
          rel="noopener"
          aria-label="Whatsapp"
        >
          <i className="fab fa-whatsapp" />
        </a>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/Wruczek/Bootstrap-Cookie-Alert@gh-pages/cookiealert.css"
        />
        <div className="alert text-center cookiealert" role="alert">
          {t`cookies`}
          <button type="button" className="btn btn-primary btn-sm acceptcookies">
            Ok
          </button>
        </div>
        <script src="https://cdn.jsdelivr.net/gh/Wruczek/Bootstrap-Cookie-Alert@gh-pages/cookiealert.js"></script>
      </div>
    </div>
  );
};

export default Layout;
