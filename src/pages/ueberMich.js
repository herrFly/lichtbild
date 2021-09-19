import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import "@fontsource/lato/300.css"

import { slide as Menu } from "react-burger-menu"

import "../../static/assets/css/main.css"
import "../../static/assets/css/noscript.css"
import "../../static/assets/css/fontawesome-all.min.css"

import MyForm from "./kontakt"
import MyFooter from "../components/footer"

import ueberMichPic from "../../static/img/PROFIL/Über mich.jpeg"

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

        <Link to="https://www.instagram.com/lichtbild_enthusiastin/">
          <i className="fab fa-instagram" id="insta-logo"></i>
        </Link>
        <Link to="https://api.whatsapp.com/send?phone=4903091579337">
          <i className="fab fa-whatsapp" id="whatsapp-logo"></i>
        </Link>
        
      </Menu>
    <Helmet>
      <title>Lichtbildenthusiastin - Deine Fotografin</title>
    </Helmet>
    <header></header>
    <main>
      <div id="wrapper" className="divided">
      <section className="wrapper style1 align-center">
          <img id="uebermichPic" src={ueberMichPic}></img>


          <MyForm />
          <MyFooter />
        </section>
      </div>
    </main>
  </>
)
export default ueberMich