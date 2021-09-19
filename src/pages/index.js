import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import { slide as Menu } from "react-burger-menu"
import Media from "react-media"

import "@fontsource/lato/300.css"

import "../../static/assets/css/main.css"
import "../../static/assets/css/noscript.css"
import "../../static/assets/css/fontawesome-all.min.css"

import MyForm from "./kontakt"
import MyFooter from "./../components/footer"
 

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Lichtbildenthusiastin - Deine Fotografin</title>
        <link to="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
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
      <header>
        <script
          src="https://kit.fontawesome.com/d829a07913.js"
          crossOrigin="anonymous"
        ></script>
      </header>
      <main>
        <section className="banner onload-image-fade-in onload-content-fade-right - style3 fullscreen orient-right content-align-left image-position-center">
        <Media
            query="(max-width: 767px)"
            render={() => (

                <p id="imgTextMobile" className="imgText_mobile">
                  <div id="nameBerufMobile">
                    Claudia Nürnberger - Fotografenmeisterin
                  </div>
                  Brandenburg | Berlin | deutschlandweit
                </p>
            )}
            
          />
        <div className="image" id="bannerImg">
                <img src="img/profil/logo.png" />


          <Media
            query="(min-width: 768px)"
            render={() => (
              <p id="imgTextDesktop" className="imgText_desktop">
                <div id="nameBerufDesktop">
                  Claudia Nürnberger - Fotografenmeisterin
                </div>
                Brandenburg | Berlin | deutschlandweit
              </p>
            )}
          />
                        </div>


        </section>
        <div id="wrapper" className="divided">
          <section className="banner onload-image-fade-in onload-content-fade-right - style3 fullscreen orient-right content-align-left image-position-center">
            <div className="content" id="bannerText">
              <h3>SCHÖN, DASS DU DA BIST!</h3>
              <p>
                Nichts verfliegt so schnell wie die Zeit und ich möchte Euch zur
                Seite stehen um Eure großen und kleinen Momente für immer
                festzuhalten!
              </p>
              <p>
                Ich strebe danach, Euer: „Ach weißt du noch damals!“ mit Fotos
                zu ergänzen und Euch Erinnerungen zu schenken an die Ihr noch
                lange zurückdenkt.
              </p>
              <p>
                In den letzten 10 Jahren durfte ich viele Menschen auf einem
                Stück Ihres Weges begleiten. Wie am ersten Tag bin ich Feuer und
                Flamme für meinen Beruf der mir so viel Abwechslung verschafft
                und Einblicke eröffnet.
              </p>
              <p>
                Ich würde mich freuen auch Euch bald ein Stück begleiten zu
                dürfen! Lasst uns zusammen Erinnerungen erschaffen!
              </p>
              <ul className="actions default" id="buttonsBanner">
                <li>
                  <Link
                    to="#Terminanfrage"
                    className="button big wide smooth-scroll-middle"
                  >
                    Terminanfrage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ueberMich"
                    className="button big wide smooth-scroll-middle"
                  >
                    Über Mich
                  </Link>
                </li>
              </ul>
            </div>
            <div className="image rahmen">
              <img
                src="img/profil/claudia_nuernberger-berlin-fotografin.jpeg"
                alt=""
              />
            </div>
          </section>

          <section
            className="spotlight onscroll-image-fade-in style2 content-align-left image-position-center orient-left"
            id="first"
          >
            <div className="content">
              <h2>Familie</h2>
              <p>
                Für mich gibt es nichts Schöneres als natürliche Familienfotos.
                Mit viel Erfahrung und einer großen Prise Humor begleite ich
                Euch gerne bei Euren großen und kleinen Momenten.
              </p>
              <ul className="actions stacked">
                <li>
                  <Link to="/familie/" className="button">
                    Erfahre Mehr
                  </Link>
                </li>
              </ul>
            </div>
            <div className="image rahmen">
              <img
                src="img/startseite-familie-claudia_nuernberger.jpg"
                alt=""
              />
            </div>
          </section>

          <section className="spotlight onscroll-image-fade-in style2 content-align-left image-position-center orient-right">
            <div className="content">
              <h2>Hochzeiten</h2>
              <p>
                Mit dem Gespür für kleine und große Momente und dem Auge für
                Details begleite ich Euch gerne an Eurem großen Tag!
              </p>
              <ul className="actions stacked">
                <li>
                  <Link to="/hochzeiten/" className="button">
                    Erfahre Mehr
                  </Link>
                </li>
              </ul>
            </div>
            <div className="image rahmen">
              <img
                src="img/startseite-hochzeit-claudia_nuernberger.jpg"
                alt=""
              />
            </div>
          </section>

          <section className="spotlight onscroll-image-fade-in style2 content-align-left image-position-center orient-left">
            <div className="content">
              <h2>Babybauch</h2>
              <p>
                Es ist eine Zeit der Vorfreude und der Veränderung. Lasst uns
                zusammen diese besondere Zeit festhalten.
              </p>
              <ul className="actions stacked">
                <li>
                  <Link to="/babybauch/" className="button">
                    Erfahre Mehr
                  </Link>
                </li>
              </ul>
            </div>
            <div className="image rahmen">
              <img
                src="img/startseite-babybauch-claudia_nuernberger.jpg"
                alt=""
              />
            </div>
          </section>

          <section className="spotlight onscroll-image-fade-in style2 content-align-left image-position-center orient-right">
            <div className="content">
              <h2>Hunde</h2>
              <p>
                Ob groß oder klein, ob struppig oder glatt gekämmt, auch der
                beste Freund des Menschen gehört fest zur Familie.
              </p>
              <ul className="actions stacked">
                <li>
                  <Link to="/hunde/" className="button">
                    Erfahre Mehr
                  </Link>
                </li>
              </ul>
            </div>
            <div className="image rahmen">
              <img src="img/spotlightHunde.jpg" alt="" />
            </div>
          </section>

          <section className="wrapper style1 align-center kontakt">

            <MyForm />
          </section>

          <footer className="wrapper style1 align-center">
            <MyFooter />
          </footer>
        </div>
      </main>
    </>
  )
}
