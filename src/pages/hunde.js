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

import hundePreislsite from "./../../static/img/HUNDE/Hunde Preisliste_Final.jpeg"

// bilder import
import hund1 from "../../static/img/HUNDE/hund-japan_spitz-berlin-brandenburg-hundefotograf.jpg"
import hund2 from "../../static/img/HUNDE/hund-border_collie-australian_shepherd-berlin-brandenburg-hundefotograf.jpg"
import hund3 from "../../static/img/HUNDE/hund-frenchie_pei-chinese_shar_pei-french_bulldog-berlin-brandenburg-hundefotograf.jpg"
import hund4 from "../../static/img/HUNDE/hund-shiba_inu-berlin-brandenburg-hundefotografin-claudia_nuernberger.jpg"
import hund5 from "../../static/img/HUNDE/hund-deutscher_schäferhund-schutzhundausbildung-berlin-brandenburg-hundefotograf.jpg"
import hund6 from "../../static/img/HUNDE/hund-chihuahua-berlin-brandenburg-hundefotograf.jpg"
import hund7 from "../../static/img/HUNDE/hund-labrador-berlin-brandenburg-hundefotograf.jpg"

import hund8 from "../../static/img/HUNDE/hund-chihuahua-berlin-brandenburg-hundefotografin.jpg"
import hund9 from "../../static/img/HUNDE/hund-harzer_fuchs-berlin-brandenburg-hundefotograf.jpg"
import hund10 from "../../static/img/HUNDE/hund-dobermann-berlin-brandenburg-hundefotograf.jpg"
import hund11 from "../../static/img/HUNDE/hund-shiba_inu-berlin-brandenburg-hundefotograf.jpg"
import hund12 from "../../static/img/HUNDE/hund-australian_shepherd-bluemerle-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
//import hund13 from "../../static/img/hund-jack_russell_terrier-berlin-brandenburg-hundefotograf.jpg"
import hund14 from "../../static/img/HUNDE/hund-australian_shepherd-berlin-brandenburg-hundefotografin-claudia_nuernberger.jpg"

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

const hunde = () => (
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
                    <img src={hund1} />
                  </div>
                  <div style={style}>
                    <img src={hund2} />
                  </div>
                  <div style={style}>
                    <img src={hund3} />
                  </div>
                  <div style={style}>
                    <img src={hund4} />
                  </div>
                  <div style={style}>
                    <img src={hund5} />
                  </div>
                  <div style={style}>
                    <img src={hund6} />
                  </div>
                  <div style={style}>
                    <img src={hund7} />
                  </div>
                </Slide>
              )}
              {matches.medium && (
                <Slide {...properties2}>
                   <div style={style}>
                    <img src={hund1} />
                  </div>
                  <div style={style}>
                    <img src={hund2} />
                  </div>
                  <div style={style}>
                    <img src={hund3} />
                  </div>
                  <div style={style}>
                    <img src={hund4} />
                  </div>
                  <div style={style}>
                    <img src={hund5} />
                  </div>
                  <div style={style}>
                    <img src={hund6} />
                  </div>
                  <div style={style}>
                    <img src={hund7} />
                  </div>
                </Slide>
              )}
              {matches.large && (
                <Slide {...properties3}>
                   <div style={style}>
                    <img src={hund1} />
                  </div>
                  <div style={style}>
                    <img src={hund2} />
                  </div>
                  <div style={style}>
                    <img src={hund3} />
                  </div>
                  <div style={style}>
                    <img src={hund4} />
                  </div>
                  <div style={style}>
                    <img src={hund5} />
                  </div>
                  <div style={style}>
                    <img src={hund6} />
                  </div>
                  <div style={style}>
                    <img src={hund7} />
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
            <h2 className="align-center">Hunde</h2>
            <p>
              Ob groß oder klein, ob struppig oder glatt gekämmt, auch der beste
              Freund des Menschen gehört fest zur Familie.
            </p>
            <p>
              Schon als Kind habe ich Hunde geliebt und das hat sich nur noch
              gesteigert, als ich vor einigen Jahren meinen kleinen Jack Russel
              Terrier-Mix adoptierte!
            </p>
            <p>
              Wie jeder Mensch ist auch jeder Hund einzigartig und hat seinen
              eigenen Charakter. Mir macht es unglaublich Spaß diese
              Individualität festzuhalten.
            </p>
            <p>
              Hierfür muss dein Hund auch nichts Besonderes können! Schöne
              Portraits kann man auch ohne Kunststückchen machen. Das Laufen
              ohne Leine ist hierbei von Vorteil, aber auch kein Muss, denn ich
              weiß aus eigener Erfahrung das nicht jeder Hund frei laufen
              gelassen werden kann!
            </p>
            <p>
              Ich habe über die Jahre schon einige Hunde vor meiner Linse gehabt
              und habe mir Tricks und Kniffe angeeignet, um von jedem Hund
              schöne Momente einzufangen.
            </p>
            <p>
              Ob nun allein oder mit Euch zusammen! Hunde sind bei mir immer
              willkommen und ich freue mich auch bald deine Fellnase
              kennenzulernen!
            </p>
          </div>

        <div className="align-center">

        <img className="preislisten" src={hundePreislsite}></img>
    
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
              <img src={hund8} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={hund9} />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src={hund10} />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={hund11} />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={hund12} />
              <p className="legend">Legend 3</p>
            </div>

            <div>
              <img src={hund14} />
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
export default hunde
