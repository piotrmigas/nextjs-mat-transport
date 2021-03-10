import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Navbar = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <img src="/img/logo.png" alt="" aria-label="logo" />
          </a>
        </Link>
        <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="navbar">
          <ul className="navbar-nav mx-auto">
            <li>
              <Link href="/">
                <a className={`nav-link ${router.pathname == "/" ? "active" : ""}`} aria-label="home">
                  <i className="fas fa-home" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={`nav-link ${router.pathname == "/about" ? "active" : ""}`} aria-label="about">
                  {t`navbar.about`}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/offer">
                <a className={`nav-link ${router.pathname.startsWith("/offer") ? "active" : ""}`} aria-label="offer">
                  {t`navbar.fleet`}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/testimonials">
                <a
                  className={`nav-link ${router.pathname == "/testimonials" ? "active" : ""}`}
                  aria-label="testimonials"
                >
                  {t`navbar.testimonials`}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={`nav-link ${router.pathname == "/contact" ? "active" : ""}`}>{t`navbar.contact`}</a>
              </Link>
            </li>
            <li>
              <Link href="/sport">
                <a className={`nav-link ${router.pathname == "/sport" ? "active" : ""}`}>Mat Sport</a>
              </Link>
            </li>
          </ul>
          <div className="social-icons">
            <a href="https://facebook.com/mattransportkrakow" aria-label="Facebook">
              <i className="fab fa-facebook-square" />
            </a>
            <a href="https://www.instagram.com/mattransport/" aria-label="Instagram">
              <i className="fab fa-instagram-square" />
            </a>
          </div>
          <div>
            <Link href={router.pathname} locale="pl">
              <img src="/langPl.png" alt="" className="flag ml-5" />
            </Link>
            <Link href={router.pathname} locale="en">
              <img src="/langEn.png" alt="" className="flag ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
