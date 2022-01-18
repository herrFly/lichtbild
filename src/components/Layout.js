import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import { slide as Menu } from "react-burger-menu";
import CookieConsent from 'react-cookie-consent';

import "@fontsource/lato/300.css";

import "../../static/assets/css/main.css";
import "../../static/assets/css/noscript.css";
import "../../static/assets/css/fontawesome-all.min.css";

import MyFooter from "./footer";
import MyForm from "../pages/kontakt";

export const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Lichtbild-Enthusiastin - Claudia Nürnberger</title>
      <link to="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    </Helmet>
    <Menu disableAutoFocus>
      <Link to="/" className="menu-item">
        Startseite
      </Link>
      <br />
      <Link to="/ueberMich" className="menu-item">
        Über Mich
      </Link>
      <Link to="/familie" className="menu-item">
        Familie
      </Link>
      <Link to="/hochzeiten" className="menu-item">
        Hochzeiten
      </Link>
      <Link to="/babybauch" className="menu-item">
        Babybauch
      </Link>
      <Link to="/hunde" className="menu-item">
        Hunde
      </Link>
      <br />
      <Link to="/faq" className="menu-item">
        FAQ
      </Link>

      <a
        href="https://www.instagram.com/lichtbild_enthusiastin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram" id="insta-logo"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=4903091579337"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp" id="whatsapp-logo"></i>
      </a>
    </Menu>
    <header>
      <script
        src="https://kit.fontawesome.com/d829a07913.js"
        crossOrigin="anonymous"
      ></script>
<script type="text/javascript" id="cookiebanner"
  src="https://cdn.jsdelivr.net/gh/dobarkod/cookie-banner@1.2.2/dist/cookiebanner.min.js" data-message="Diese Webseite benutzt Cookies, um Dir die bestmögliche Nutzerfreundlichkeit zu bieten. Wenn Du diese Webseite weiterhin nutzen, wird von Deinem Einverständnis ausgegangen."></script>
      
    </header>
    {/* <CookieConsent
          location="bottom"
          buttonText="Annehmen"
          declineButtonText=""
          cookieName="">
Diese Webseite benutzt Cookies, um Dir die bestmögliche Nutzerfreundlichkeit zu bieten. Wenn Du diese Webseite weiterhin nutzen, wird von Deinem Einverständnis ausgegangen.
</CookieConsent> */}


        {children}

    <section className="wrapper style1 align-center kontakt">
      <MyForm />
    </section>

    <footer className="wrapper style1 align-center randDesktop">
      <MyFooter />
    </footer>
  </>
);
export default Layout;
