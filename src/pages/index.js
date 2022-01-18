import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// import Media from "react-media";
import Layout from "../components/Layout"

import CookieConsent from 'react-cookie-consent';


import "@fontsource/lato/300.css";

import "../../static/assets/css/main.css";
import "../../static/assets/css/noscript.css";
import "../../static/assets/css/fontawesome-all.min.css";



const Home = () => {
  return (
    <>
  {/*     <Helmet>
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
      </header> */}

      <Layout>
      {/* <CookieConsent
          location="bottom"
          buttonText="Annehmen">
Diese Webseite benutzt Cookies, um Dir die bestmögliche Nutzerfreundlichkeit zu bieten. Wenn Du diese Webseite weiterhin nutzen, wird von Deinem Einverständnis ausgegangen.
</CookieConsent> */}
      <main>
        <section
          id="starterSektion"
          className="banner onload-image-fade-in onload-content-fade-right - style3 fullscreen orient-right content-align-left image-position-center"
        >
          {/* <Media
            query="(max-width: 767px)"
            render={() => (

                <p id="imgTextMobile" className="imgText_mobile">
                  <div id="nameBerufMobile">
                    Claudia Nürnberger - Fotografenmeisterin
                  </div>
                  Brandenburg | Berlin | deutschlandweit
                </p>
            )}
            
          /> */}
          <div className="image" id="ersterAbsatz">
            <StaticImage
              src="../../static/img/STARTSEITE/logo.webp"
              alt=""
              placeholder="blurred"
              layout="fullWidth"
              className="bannerImg"
            />

            <p id="imgTextDesktop" className="imgText_desktop">
              <div id="nameBerufDesktop">
                Claudia Nürnberger - Fotografenmeisterin
              </div>
              Brandenburg | Berlin | deutschlandweit
            </p>
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
                Ich strebe danach, Euer: „Ach weißt Du noch damals!“, mit Fotos
                zu ergänzen und Euch Erinnerungen zu schenken, an die Ihr noch
                lange zurückdenkt.
              </p>
              <p>
                In den letzten 10 Jahren durfte ich viele Menschen auf einem
                Stück Ihres Weges begleiten. Wie am ersten Tag bin ich Feuer und
                Flamme für meinen Beruf, der mir so viel Abwechslung verschafft
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
              <StaticImage
                src="../../static/img/STARTSEITE/claudia_nuernberger-berlin-fotografin.webp"
                alt=""
                placeholder="blurred"
                layout="constrained"
                quality="100"
                id="portraitStartseite"
              />
              {/*  //<GatsbyImage image={data.childImageSharp.gatsbyImageData}alt="Team Meeting" />
              <img
                src={index02}
                alt=""
              />
              <Img
                fluid={this.props.data.index02.childImageSharp.fluid}
                alt="Portrait der Fotografin Lichtbild-Enthusiastin"
              /> */}
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
                Mit viel Erfahrung und einer ordentlichen Prise Humor begleite
                ich Euch gerne.
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
              <StaticImage
                src="../../static/img/STARTSEITE/startseite-familie-claudia_nuernberger.webp"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
              />
              {/* <img
                src={index03}
                alt=""
              /> 
              <Img
                fluid={this.props.data.index03.childImageSharp.fluid}
                alt="Familie sitzt auf einer Wiese"
              />*/}
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
              <StaticImage
                src="../../static/img/STARTSEITE/startseite-hochzeit-claudia_nuernberger.webp"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
              />
              {/* <img
                src={index04}
                alt=""
              /> 
              <Img
                fluid={this.props.data.index04.childImageSharp.fluid}
                alt="ein Hochzeitspaar"
              />*/}
            </div>
          </section>

          <section className="spotlight onscroll-image-fade-in style2 content-align-left image-position-center orient-left">
            <div className="content">
              <h2>Babybauch</h2>
              <p>
                Es ist eine Zeit der Vorfreude und der Veränderung.
                <br /> Lasst uns zusammen diese besondere Zeit festhalten.
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
              <StaticImage
                src="../../static/img/STARTSEITE/startseite-babybauch-claudia_nuernberger.webp"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
              />
              {/* <img
                src={index05}
                alt=""
              /> 
              <Img
                fluid={this.props.data.index05.childImageSharp.fluid}
                alt="schwangeres Pärchen"
              />*/}
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
              <StaticImage
                src="../../static/img/STARTSEITE/spotlightHunde.webp"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
              />
              {/* <img src={
                index06
              } alt="" /> 
              <Img
                fluid={this.props.data.index06.childImageSharp.fluid}
                alt="ein Hund"
              /> */}
            </div>
          </section>

          {/* <section className="wrapper style1 align-center kontakt">
            <MyForm />
          </section>

          <footer className="wrapper style1 align-center randDesktop">
            <MyFooter />
          </footer> */}
        </div>
      </main>
      </Layout>
    </>
  );
};

export default Home;
