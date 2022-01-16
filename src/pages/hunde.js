import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Media from "react-media";

import "@fontsource/lato/300.css";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import { slide as Menu } from "react-burger-menu";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../../static/assets/css/main.css";
import "../../static/assets/css/noscript.css";
import "../../static/assets/css/fontawesome-all.min.css";

import MyForm from "./../pages/kontakt";
import MyFooter from "./../components/footer";

import hundePreislsite from "./../../static/img/HUNDE/Hunde Preisliste_Final.png";

import hund8 from "../../static/img/HUNDE/hund-chihuahua-berlin-brandenburg-hundefotografin-claudia_nuernberger.jpg";
import hund9 from "../../static/img/HUNDE/hund-harzer_fuchs-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg";
import hund10 from "../../static/img/HUNDE/hund-dobermann-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg";
import hund11 from "../../static/img/HUNDE/hund-shiba_inu-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg";
import hund12 from "../../static/img/HUNDE/hund-australian_shepherd-bluemerle-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg";
import hund13 from "../../static/img/HUNDE/hund-jack_russell_terrier-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg";
import hund14 from "../../static/img/HUNDE/hund-australian_shepherd-berlin-brandenburg-hundefotografin-claudia_nuernberger.jpg";

const style = {
  textAlign: "center",
  background: "none",
  padding: "4rem 0px 0px 0px",
  fontSize: "0px",
};

const properties1 = {
  duration: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  indicators: true,
  autoplay: false,
  arrows: true,
  prevArrow: (
    <div
      style={{
        width: "30px",
        marginRight: "-2.05rem",
        marginTop: "4rem",
        class: "arrowRechtsKleine",
      }}
    >
      <i className="fas fa-chevron-circle-left"></i>
    </div>
  ),
  nextArrow: (
    <div style={{ width: "30px", marginLeft: "-2.6rem", marginTop: "4rem" }}>
      <i className="fas fa-chevron-circle-right"></i>
    </div>
  ),
};

const properties2 = {
  duration: 3000,
  slidesToShow: 2,
  slidesToScroll: 1,
  indicators: true,
  autoplay: false,
  arrows: true,
  prevArrow: (
    <div style={{ width: "30px", marginRight: "-30px", marginTop: "4rem" }}>
      <i className="fas fa-chevron-circle-left"></i>
    </div>
  ),
  nextArrow: (
    <div style={{ width: "30px", marginLeft: "-2.8rem", marginTop: "4rem" }}>
      <i className="fas fa-chevron-circle-right"></i>
    </div>
  ),
};

const properties3 = {
  duration: 0.1,
  slidesToShow: 3,
  slidesToScroll: 1,
  indicators: true,
  autoplay: false,
  arrows: true,
  prevArrow: (
    <div style={{ width: "30px", marginRight: "-30px", marginTop: "4rem" }}>
      <i className="fas fa-chevron-circle-left" id="leftArrowHZ1"></i>
    </div>
  ),
  nextArrow: (
    <div style={{ width: "30px", marginLeft: "-2.8rem", marginTop: "4rem" }}>
      <i className="fas fa-chevron-circle-right"></i>
    </div>
  ),

  // arrow rechts
  //    /* margin-right: 0rem; */
  //margin-left: -26rem;
  /* margin-bottom: -8rem; */
  //margin-top: 22.8rem;

  //arrow links
};

const arrowStylesNext = {
  color: "#ccc",
};

const arrowStyles = {
  color: "#ccc",
  position: "absolute",
  zIndex: 2,
  top: "calc(91%)",
};

const hunde = () => (
  <>
    <Helmet>
      <title>Lichtbild-Enthusiastin - Claudia Nürnberger</title>
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
          {(matches) => (
            <div>
              {matches.small && (
                <Slide {...properties1}>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-japan_spitz-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Weißer Spitz sitzt im herbstlich gefärbten Wald.
                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-border_collie-australian_shepherd-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Rettungshund Mix zwischen Border-Collie und Australian-Shepherd liegt zwischen Ästen.
                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-frenchie_pei-chinese_shar_pei-french_bulldog-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Hunderasse Frenchie-Pei liegt in einem großen Haufen Herbstlaub und Blätter fliegen um ihn herrum
                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-shiba_inu-berlin-brandenburg-hundefotografin-claudia_nuernberger.jpg"
                      alt="Hunderasse Shiba Inu sitzt vor dem Wasser und spigelt sich in der Wasseroberfläche.
                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-deutscher_schaeferhund-schutzhundausbildung-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Deutscher Schäferhund springt mit einer Hantel über ein Hinderniss während dem Schutzhundetraining.

                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-chihuahua-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Chihuahua Hündin mit Fellfarbe rot-weiß sitzt in einem Meer aus weißen Blüten.

                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-labrador-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Weißer Labrador springt ins Wasser, Wassertropfen fliegen um ihn herrum.

                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                </Slide>
              )}
              {matches.medium && (
                <Slide {...properties2}>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-japan_spitz-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Weißer Spitz sitzt im herbstlich gefärbten Wald.
                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-border_collie-australian_shepherd-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Rettungshund Mix zwischen Border-Collie und Australian-Shepherd liegt zwischen Ästen.
                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-frenchie_pei-chinese_shar_pei-french_bulldog-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Hunderasse Frenchie-Pei liegt in einem großen Haufen Herbstlaub und Blätter fliegen um ihn herrum
                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-shiba_inu-berlin-brandenburg-hundefotografin-claudia_nuernberger.jpg"
                      alt="Hunderasse Shiba Inu sitzt vor dem Wasser und spigelt sich in der Wasseroberfläche.
                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-deutscher_schaeferhund-schutzhundausbildung-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Deutscher Schäferhund springt mit einer Hantel über ein Hinderniss während dem Schutzhundetraining.

                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-chihuahua-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Chihuahua Hündin mit Fellfarbe rot-weiß sitzt in einem Meer aus weißen Blüten.

                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-labrador-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Weißer Labrador springt ins Wasser, Wassertropfen fliegen um ihn herrum.

                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                </Slide>
              )}
              {matches.large && (
                <Slide {...properties3}>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-japan_spitz-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Weißer Spitz sitzt im herbstlich gefärbten Wald.
                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-border_collie-australian_shepherd-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Rettungshund Mix zwischen Border-Collie und Australian-Shepherd liegt zwischen Ästen.
                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-frenchie_pei-chinese_shar_pei-french_bulldog-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Hunderasse Frenchie-Pei liegt in einem großen Haufen Herbstlaub und Blätter fliegen um ihn herrum
                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-shiba_inu-berlin-brandenburg-hundefotografin-claudia_nuernberger.jpg"
                      alt="Hunderasse Shiba Inu sitzt vor dem Wasser und spigelt sich in der Wasseroberfläche.
                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-deutscher_schaeferhund-schutzhundausbildung-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Deutscher Schäferhund springt mit einer Hantel über ein Hinderniss während dem Schutzhundetraining.

                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-chihuahua-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Chihuahua Hündin mit Fellfarbe rot-weiß sitzt in einem Meer aus weißen Blüten.

                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HUNDE/hund-labrador-berlin-brandenburg-hundefotograf-claudia_nuernberger.jpg"
                      alt="Weißer Labrador springt ins Wasser, Wassertropfen fliegen um ihn herrum.

                      Fotografin: Claudia Nürnberger / Berlin, Brandenburg"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                </Slide>
              )}
            </div>
          )}
        </Media>
      </div>

      <div className="divided">
        <section className="wrapper style1 content-align-left">
          <div className="inner">
            <h2 className="align-center">Hunde</h2>
            <p>
              Ob groß oder klein, ob struppig oder glatt gekämmt, auch der beste
              Freund des Menschen gehört fest zur Familie.
            </p>
            <p>
              Schon als Kind habe ich Hunde geliebt und das hat sich nur noch
              gesteigert, als ich vor einigen Jahren meinen kleinen
              Jack-Russel-Terrier-Mix adoptierte!
            </p>
            <p>
              Wie jeder Mensch ist auch jeder Hund einzigartig und hat seinen
              eigenen Charakter. Mir macht es unglaublich Spaß diese
              Individualität festzuhalten.
            </p>
            <p>
              Hierfür muss dein Hund auch nichts Besonderes können. Schöne
              Portraits kann man auch ohne Kunststückchen machen. Das Laufen
              ohne Leine ist hierbei von Vorteil, aber auch kein Muss, denn ich
              weiß aus eigener Erfahrung, dass nicht jeder Hund frei laufen
              gelassen werden kann.
            </p>
            <p>
              Ich habe über die Jahre schon einige Hunde vor meiner Linse gehabt
              und habe mir Tricks und Kniffe angeeignet, um von jedem Hund
              schöne Momente einzufangen.
            </p>
            <p>
              Ob nun allein oder mit Euch zusammen. Hunde sind bei mir immer
              willkommen und ich freue mich auch bald deine Fellnase
              kennenzulernen!
            </p>
          </div>

          <div className="align-center">
            <img className="preislisten" src={hundePreislsite}></img>

            <Media
              queries={{
                small: "(max-width: 599px)",
                mediumAndOver: "(min-width: 600px)",
              }}
            >
              {(matches) => (
                <div>
                  {matches.small && (
                    <Carousel
                      infiniteLoop
                      showThumbs={true}
                      dynamicHeight={false}
                      showStatus={false}
                      showIndicators={false}
                      swipeable={true}
                      width={25 + "%"}
                      showArrows={false}
                      className="hochkantCarousel"
                      renderArrowPrev={(onClickHandler, hasPrev) =>
                        hasPrev && (
                          <i
                            className="fas fa-chevron-circle-left leftArrowCarousel"
                            id="leftArrowC1"
                            onClick={onClickHandler}
                            style={{ ...arrowStyles }}
                          ></i>
                        )
                      }
                      renderArrowNext={(onClickHandler, hasNext) =>
                        hasNext && (
                          <i
                            className="fas fa-chevron-circle-right rightArrowCarousel"
                            id="leftArrowC2"
                            onClick={onClickHandler}
                            style={{ ...arrowStylesNext }}
                          ></i>
                        )
                      }
                    >
                      <div>
                        <img src={hund8} alt="Chihuahua Hündin mit Fellfarbe rot-weiß schaut hinter einer Ecke hervor.

Fotografin: Claudia Nürnberger / Berlin, Brandenburg"/>
                        <p className="legend">Legend 1</p>
                      </div>
                      <div>
                        <img src={hund9} alt="Hunderasse Harzer-Fuchs liegt auf einem umgefallenen Baumstamm und hat seinen Kopf abgelegt.

Fotografin: Claudia Nürnberger / Berlin, Brandenburg"/>
                        <p className="legend">Legend 2</p>
                      </div>
                      <div>
                        <img src={hund10} alt="Schwarz, brauner Dobermann rennt mit fliegenden Ohren auf einem Feld.

Fotografin: Claudia Nürnberger / Berlin, Brandenburg"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hund11} alt="Hunderasse Shiba-Inu sitzt vor dem Wasser und spigelt sich in der Wasseroberfläche.

Fotografin: Claudia Nürnberger / Berlin, Brandenburg" />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hund12} alt="Hunderasse Australian Shepherd liegt in der Natur auf Pflastersteinen. Er trägt ein blaues Halstuch und hat die Fellfarbe red merle.

Fotografin: Claudia Nürnberger / Berlin, Brandenburg"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hund13} alt="" />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hund14} alt="Hunderasse Australian-Shepherd sitzt in der Natur und hält einen Teddybären zwischen seinen Vorderbeinen.


Fotografin: Claudia Nürnberger / Berlin, Brandenburg" />
                        <p className="legend">Legend 3</p>
                      </div>
                    </Carousel>
                  )}
                  {matches.mediumAndOver && (
                    <Carousel
                      infiniteLoop
                      showThumbs={true}
                      dynamicHeight={false}
                      showStatus={false}
                      showIndicators={false}
                      swipeable={true}
                      width={25 + "%"}
                      className="hochkantCarousel"
                      showArrows={false}
                    >
                      <div>
                        <img src={hund8} alt="Chihuahua Hündin mit Fellfarbe rot-weiß schaut hinter einer Ecke hervor.
Fotografin: Claudia Nürnberger / Berlin, Brandenburg"/>
                        <p className="legend">Legend 1</p>
                      </div>
                      <div>
                        <img src={hund9} alt="Hunderasse Harzer-Fuchs liegt auf einem umgefallenen Baumstamm und hat seinen Kopf abgelegt.

Fotografin: Claudia Nürnberger / Berlin, Brandenburg"/>
                        <p className="legend">Legend 2</p>
                      </div>
                      <div>
                        <img src={hund10} alt="Schwarz, brauner Dobermann rennt mit fliegenden Ohren auf einem Feld.

Fotografin: Claudia Nürnberger / Berlin, Brandenburg"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hund11} alt="Hunderasse Shiba-Inu sitzt vor dem Wasser und spigelt sich in der Wasseroberfläche.

Fotografin: Claudia Nürnberger / Berlin, Brandenburg"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hund12} alt="Hunderasse Australian Shepherd liegt in der Natur auf Pflastersteinen. Er trägt ein blaues Halstuch und hat die Fellfarbe red merle.

Fotografin: Claudia Nürnberger / Berlin, Brandenburg"/>
                        <p className="legend">Legend 3</p>
                      </div>

                      <div>
                        <img src={hund14} alt="Hunderasse Australian-Shepherd sitzt in der Natur und hält einen Teddybären zwischen seinen Vorderbeinen.


Fotografin: Claudia Nürnberger / Berlin, Brandenburg"/>
                        <p className="legend">Legend 3</p>
                      </div>
                    </Carousel>
                  )}
                </div>
              )}
            </Media>
          </div>
        </section>

        <section className="wrapper style1 align-center">
          <MyForm />
        </section>
        <footer className="wrapper style1 align-center randDesktop">
          <MyFooter />
        </footer>
      </div>
    </main>
  </>
);
export default hunde;
