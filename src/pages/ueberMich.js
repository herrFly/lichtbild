import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import "@fontsource/lato/300.css";

import { slide as Menu } from "react-burger-menu";

import "../../static/assets/css/main.css";
import "../../static/assets/css/noscript.css";
import "../../static/assets/css/fontawesome-all.min.css";

import MyForm from "./kontakt";
import MyFooter from "../components/footer";

import ubermich from "../../static/img/PROFIL/UeberMich.png";

const ueberMich = () => (
  <>
    <Menu>
      <Link to="/" className="menu-item">
        Startseite
      </Link>
      <br />
      {/* <Link to="/home/" className="menu-item">
          Terminanfrage
        </Link> */}
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
    <Helmet>
      <title>Lichtbild-Enthusiastin - Claudia Nürnberger</title>
    </Helmet>
    <header></header>
    <main>
      <div className="divided">
        <section className="wrapper style1 align-center">
          <img id="uebermichPic" src={ubermich}></img>
        </section>
        <section />
        <footer className="wrapper style1 align-center randDesktop">
          <MyFooter />
        </footer>
      </div>
    </main>
  </>
);
export default ueberMich;
