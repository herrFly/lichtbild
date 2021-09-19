import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Media from "react-media"

import "@fontsource/lato/300.css"

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

import familiePreisliste from "../../static/img/FAMILIE/FamiliePreisliste_Final.jpeg"

import f01 from "../../static/img/FAMILIE/paarfotos-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
import f02 from "../../static/img/FAMILIE/kinderfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
import f03 from "../../static/img/FAMILIE/paarfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
import f04 from "../../static/img/FAMILIE/familienfotos-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
import f05 from "../../static/img/FAMILIE/familienfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
import f06 from "../../static/img/FAMILIE/paarfotos-berlin-brandenburg-regierungsviertel-claudia_nuernberger.jpg"
import f07 from "../../static/img/FAMILIE/kinderfotos-berlin-brandenburg-oranienburg-claudia_nuernberger.jpg"
import f08 from "../../static/img/FAMILIE/familienfotos-berlin-brandenburg-panketal-claudia_nuernberger.jpg"

import f09 from "../../static/img/FAMILIE/kinderfotos-berlin-brandenburg-panketal-claudia_nuernberger.jpg"
import f10 from "../../static/img/FAMILIE/familienfotos-berlin-brandenburg-harz-hamburger_wappen-claudia_nuernberger.jpg"
import f11 from "../../static/img/FAMILIE/kinderfotos-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
import f12 from "../../static/img/FAMILIE/familienfotos-berlin-brandenburg-blankenburg-harz-claudia_nuernberger.jpg"
import f13 from "../../static/img/FAMILIE/kinderfotos-berlin-brandenburg-barnim-claudia_nuernberger.jpg"
import f14 from "../../static/img/FAMILIE/paarfotos-berlin-brandenburg-museumsinsel-claudia_nuernberger.jpg"
import f15 from "../../static/img/FAMILIE/paarfotos-berlin-brandenburg-claudia_nuernberger.jpg"
import f16 from "../../static/img/FAMILIE/familienfotos-berlin-brandenburg-hennigsdorf-claudia_nuernberger.jpg"

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

const familie = () => (
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
                    <img src={f01} />
                  </div>
                  <div style={style}>
                    <img src={f02} />
                  </div>
                  <div style={style}>
                    <img src={f03} />
                  </div>
                  <div style={style}>
                    <img src={f04} />
                  </div>
                  <div style={style}>
                    <img src={f05} />
                  </div>
                  <div style={style}>
                    <img src={f06} />
                  </div>
                  <div style={style}>
                    <img src={f07} />
                  </div>
                  <div style={style}>
                    <img src={f08} />
                  </div>
                </Slide>
              )}
              {matches.medium && (
                <Slide {...properties2}>
                                    <div style={style}>
                    <img src={f01} />
                  </div>
                  <div style={style}>
                    <img src={f02} />
                  </div>
                  <div style={style}>
                    <img src={f03} />
                  </div>
                  <div style={style}>
                    <img src={f04} />
                  </div>
                  <div style={style}>
                    <img src={f05} />
                  </div>
                  <div style={style}>
                    <img src={f06} />
                  </div>
                  <div style={style}>
                    <img src={f07} />
                  </div>
                  <div style={style}>
                    <img src={f08} />
                  </div>
                </Slide>
              )}
              {matches.large && (
                <Slide {...properties3}>
                                   <div style={style}>
                    <img src={f01} />
                  </div>
                  <div style={style}>
                    <img src={f02} />
                  </div>
                  <div style={style}>
                    <img src={f03} />
                  </div>
                  <div style={style}>
                    <img src={f04} />
                  </div>
                  <div style={style}>
                    <img src={f05} />
                  </div>
                  <div style={style}>
                    <img src={f06} />
                  </div>
                  <div style={style}>
                    <img src={f07} />
                  </div>
                  <div style={style}>
                    <img src={f08} />
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
            <h2 className="align-center">Familie</h2>

            <p>
              Für mich gibt es nichts Schöneres als natürliche Familienfotos.
              Mit viel Erfahrung und einer großen Prise Humor begleite ich Euch
              gerne bei Euren großen und kleinen Momenten.
            </p>
            <p>
              Es bereitet mir enorme Freude, Eure Kids so einzufangen, wie Sie
              sind! Mal laut mal leise, mal wild oder auch zurückhaltend. Für
              ein schönes Foto hocke ich gerne im Sandkasten, hangle mich vom
              Klettergerüst zur Rutsche, renne den kleinen Wirbelwinden
              hinterher oder ziehe lustige Grimassen.
            </p>
            <p>
              Das Lachen, die Emotionen, aber auch die stillen und ruhigen
              Momente sind das was ich versuche bei einem Shooting einzufangen.
            </p>
            <p>
              Vor Eurem Termin bekommt Ihr von mir einen kleinen Leitfaden mit
              Tipps und Tricks per E-Mail zugesendet, aber natürlich stehe ich
              Euch auch für weitere Fragen oder bei der Wahl der richtigen
              Location mit Rat und Tat zur Seite!
            </p>
          </div>

          <div className="align-center">
          
          <img className="preislisten" src={familiePreisliste}></img>

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
              <img src={f09} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={f10} />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src={f11} />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={f12} />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={f13} />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={f14} />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={f15} />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={f16} />
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
export default familie