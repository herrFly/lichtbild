import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Media from "react-media"

import "@fontsource/lato/300.css"

import "../../static/assets/css/main.css"
import "../../static/assets/css/noscript.css"
import "../../static/assets/css/fontawesome-all.min.css"

import "react-slideshow-image/dist/styles.css"
import { Slide } from "react-slideshow-image"

import { slide as Menu } from "react-burger-menu"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import "../../static/assets/css/main.css"
import "../../static/assets/css/noscript.css"
import "../../static/assets/css/fontawesome-all.min.css"

import MyForm from "./../pages/kontakt"
import MyFooter from "./../components/footer"

import babybauchPreisliste from "./../../static/img/BABYBAUCH/Baybauch Preisliste_Final.jpeg"

import bb01 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-schoenower_heide-portraitfoto-claudia_nuernberger.jpg"
import bb02 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-bernau-paarfotos-claudia_nuernberger.jpg"
import bb03 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-bernau-portraitfoto-claudia_nuernberger.jpg"
import bb04 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-panketal-paarfotos-claudia_nuernberger.jpg"
import bb05 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-schoenower_heide-paarfotos-claudia_nuernberger.jpg"
import bb06 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-homeshooting-paarfotos-claudia_nuernberger.jpg"
import bb07 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-hennigsdorf-portraitfoto-claudia_nuernberger.jpg"

import bb08 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-panketal-portraitfoto-claudia_nuernberger.jpg"
import bb09 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-barnim-portraitfoto-claudia_nuernberger.jpg"
import bb10 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-harz-paarfotos-claudia_nuernberger.jpg"
import bb11 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-reinickendorf-paarfotos-claudia_nuernberger.jpg"
import bb12 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-reinickendorf-portraitfoto-claudia_nuernberger.jpg"
import bb13 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-homeshooting-portraitfoto-claudia_nuernberger.jpg"

const style = {
  textAlign: "center",
  background: "none",
  padding: "4rem 0px 0px 0px",
  fontSize: "0px",
}


const properties1 = {
  duration: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  indicators: true,
  autoplay: false,
  arrows: true,
  prevArrow: <div style={{width: "30px", marginRight: "-2.05rem", marginTop: "4rem", class:"arrowRechtsKleine"}}><i className="fas fa-chevron-circle-left"></i></div>,
  nextArrow: <div style={{width: "30px", marginLeft: "-2.6rem", marginTop: "4rem"}}><i className="fas fa-chevron-circle-right"></i></div>

}

const properties2 = {
  duration: 3000,
  slidesToShow: 2,
  slidesToScroll: 1,
  indicators: true,
  autoplay: false,
  arrows: true,
  prevArrow: <div style={{width: "30px", marginRight: "-30px", marginTop: "4rem"}}><i className="fas fa-chevron-circle-left"></i></div>,
  nextArrow: <div style={{width: "30px", marginLeft: "-2.8rem", marginTop: "4rem"}}><i className="fas fa-chevron-circle-right"></i></div>

}

const properties3 = {
  duration: 0.1,
  slidesToShow: 3,
  slidesToScroll: 1,
  indicators: true,
  autoplay: false,
  arrows: true,
  prevArrow: <div style={{width: "30px", marginRight: "-30px", marginTop: "4rem"}}><i className="fas fa-chevron-circle-left" id="leftArrowHZ1"></i></div>,
  nextArrow: <div style={{width: "30px", marginLeft: "-2.8rem", marginTop: "4rem"}}><i className="fas fa-chevron-circle-right"></i></div>

  // arrow rechts
  //    /* margin-right: 0rem; */
  //margin-left: -26rem;
  /* margin-bottom: -8rem; */
  //margin-top: 22.8rem;

  //arrow links

}

const arrowStylesNext = {
    color: '#ccc',
}

const arrowStyles = {
  color: '#ccc',
  position: 'absolute',
  zIndex: 2,
  top: 'calc(91.55%)',

};

const babybauch = () => (
  <>
    <Helmet>
      <title>Lichtbildenthusiastin - Deine Fotografin</title>
    </Helmet>
    <Menu>
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

        <Link to="https://www.instagram.com/lichtbild_enthusiastin/">
          <i className="fab fa-instagram" id="insta-logo"></i>
        </Link>
        <Link to="https://api.whatsapp.com/send?phone=4903091579337">
          <i className="fab fa-whatsapp" id="whatsapp-logo"></i>
        </Link>
        
    </Menu>
    <header></header>
    <main>

    <div className="slider">
        <Media
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)",
          }}
        >
          {matches => (
            <div>
              {matches.small && (
                <Slide {...properties1}>
                  <div style={style}>
                    <img src={bb01} />
                  </div>
                  <div style={style}>
                    <img src={bb02} />
                  </div>
                  <div style={style}>
                    <img src={bb03} />
                  </div>
                  <div style={style}>
                    <img src={bb04} />
                  </div>
                  <div style={style}>
                    <img src={bb05} />
                  </div>
                  <div style={style}>
                    <img src={bb06} />
                  </div>
                  <div style={style}>
                    <img src={bb07} />
                  </div>
                </Slide>
              )}
              {matches.medium && (
                <Slide {...properties2}>
                   <div style={style}>
                    <img src={bb01} />
                  </div>
                  <div style={style}>
                    <img src={bb02} />
                  </div>
                  <div style={style}>
                    <img src={bb03} />
                  </div>
                  <div style={style}>
                    <img src={bb04} />
                  </div>
                  <div style={style}>
                    <img src={bb05} />
                  </div>
                  <div style={style}>
                    <img src={bb06} />
                  </div>
                  <div style={style}>
                    <img src={bb07} />
                  </div>
                </Slide>
              )}
              {matches.large && (
                <Slide {...properties3}>
                   <div style={style}>
                    <img src={bb01} />
                  </div>
                  <div style={style}>
                    <img src={bb02} />
                  </div>
                  <div style={style}>
                    <img src={bb03} />
                  </div>
                  <div style={style}>
                    <img src={bb04} />
                  </div>
                  <div style={style}>
                    <img src={bb05} />
                  </div>
                  <div style={style}>
                    <img src={bb06} />
                  </div>
                  <div style={style}>
                    <img src={bb07} />
                  </div>
                </Slide>
              )}
            </div>
          )}
        </Media>

      </div>
      <div id="wrapper" className="divided">
        <section className="wrapper style1 content-align-left">
          <div className="inner">
            <h2 className="align-center">Babybauch</h2>
            <p>
              Es ist eine Zeit der Vorfreude, der Veränderung, und manchmal kann
              es auch ganz schön Turbulent zugehen...die Schwangerschaft!
            </p>
            <p>
              Schnell vergisst man, wie groß der Bauch doch eigentlich mal war.
            </p>
            <p>Lasst uns zusammen diese besondere Zeit festhalten.</p>
            <p>Ob nun allein, mit Eurem Partner oder auch mit Euren Kindern.</p>
            <p>
              Der beste Zeitpunkt für ein Babybauchshooting ist im achten Monat
              oder zu Beginn des neunten, denn dann ist der Bauch schön rund und
              die meisten Frauen fühlen sich in Ihrer Haut noch sehr wohl.
            </p>
            <p>
              Für den Termin komme ich gerne zu Euch nach Hause oder wir suchen
              uns zusammen eine schöne Location im Grünen aus. Da ich ein
              mobiles kleines Studio besitze, ist es auch möglich unter
              Studio-Bedingungen bei euch zu Hause die Fotos zu realisieren.
              Jede werdende Mutter hat andere Vorstellungen, wie ihr Babybauch
              am besten in Szene gesetzt werden soll. Bringt gerne Eure Ideen
              ein, falls Ihr etwas Bestimmtes umsetzen möchtet! Gerne berate ich
              Euch bei möglichen Fragen und Wünschen.
            </p>
            <p>
              Über die Zeit habe ich einige Kleider für Babybauchfotos in meinen
              Fundus aufgenommen, diese verleihe ich gern an Euch. Fast alle
              Outfits aus dieser Galerie gehören zu meinem Fundus, auf Wunsch
              schicke ich Euch auch gerne Bilder der einzelnen Kleider vorab.
            </p>
            <p>
              Vor Eurem Termin bekommt Ihr von mir darüber hinaus einen kleinen
              Leitfaden mit Tipps per E-Mail zugesendet. Ich stehe Euch aber
              natürlich auch für weitere Fragen oder bei der Wahl der richtigen
              Location beratend zur Seite!
            </p>
          </div>

          <div className="align-center">
          
          <img className="preislisten" src={babybauchPreisliste}></img>
          <Carousel
            infiniteLoop
            showThumbs={true}
            dynamicHeight={false}
            showStatus={false}
            showIndicators={false}
            swipeable={true}
            width={25 + "%"}
            className="hochkantCarousel"
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                      <i className="fas fa-chevron-circle-left leftArrowCarousel" id="leftArrowC1" onClick={onClickHandler} style={{ ...arrowStyles}}></i>

              )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                      <i className="fas fa-chevron-circle-right rightArrowCarousel" id="leftArrowC2" onClick={onClickHandler} style={{ ...arrowStylesNext}}></i>
              )
          }
          >
            <div>
              <img src={bb08} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={bb09} />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src={bb10} />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={bb11} />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={bb12} />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={bb13} />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
        </section>

        <section className="wrapper style1 align-center">
          <MyForm />
          <MyFooter />
        </section>
      </div>
    </main>
  </>
)
export default babybauch