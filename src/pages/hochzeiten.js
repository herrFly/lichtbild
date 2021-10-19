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

import hochzeit_preisliste from "./../../static/img/HZ/Hochzeit Preisliste_Final.jpg";

import hz01 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-bernau-claudia_nuernberger-03.webp";
import hz02 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-panketal-claudia_nuernberger.webp";
import hz03 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-luxemburg-claudia_nuernberger-02.webp";
import hz04 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-standesamt_reinickendorf-claudia_nuernberger-03.webp";
import hz05 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-potsdam-claudia_nuernberger-04.webp";
import hz06 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-hochzeitsvilla_zehlendorf-claudia_nuernberger.webp";
import hz07 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-potsdam-claudia_nuernberger-03.webp";
import hz08 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger-01.webp";
import hz09 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-potsdam-claudia_nuernberger-02.webp";
import hz21 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-claudia_nuernberger10.webp";

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

const hochzeiten = () => (
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
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-bernau-claudia_nuernberger-01.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-standesamt_reinickendorf-claudia_nuernberger-02.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-luxemburg-claudia_nuernberger-01.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-harz-claudia_nuernberger.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-bernau-claudia_nuernberger-02.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger-04.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger-03.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-standesamt_reinickendorf-claudia_nuernberger-01.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-potsdam-claudia_nuernberger-01.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger-02.webp"
                      alt=""
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
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-bernau-claudia_nuernberger-01.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-standesamt_reinickendorf-claudia_nuernberger-02.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-luxemburg-claudia_nuernberger-01.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-harz-claudia_nuernberger.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-bernau-claudia_nuernberger-02.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger-04.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger-03.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-standesamt_reinickendorf-claudia_nuernberger-01.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-potsdam-claudia_nuernberger-01.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger-02.webp"
                      alt=""
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
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-bernau-claudia_nuernberger-01.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-standesamt_reinickendorf-claudia_nuernberger-02.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-luxemburg-claudia_nuernberger-01.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-harz-claudia_nuernberger.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-bernau-claudia_nuernberger-02.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger-04.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger-03.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-standesamt_reinickendorf-claudia_nuernberger-01.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-potsdam-claudia_nuernberger-01.webp"
                      alt=""
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger-02.webp"
                      alt=""
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

      <div id="wrapper" className="divided">
        <section className="wrapper style1 content-align-left">
          <div className="inner">
            <h2 className="align-center">Hochzeiten</h2>
            <p>
              Mit dem Gespür für kleine und große Momente und dem Auge für
              Details begleite ich Euch gerne an Eurem großen Tag!
            </p>
            <p>
              Jede Hochzeit ist individuell, wie die Paare selbst. Ob nun
              traditionell oder unkonventionell, in den letzten Jahren durfte
              ich an die 100 großen und kleinen Hochzeiten begleiten und jedes
              Mal geht mir das Herz auf, wenn ich solch wichtige und
              erinnerungsträchtige Momente für die Ewigkeit festhalten darf!
            </p>
            <p>
              An Eurem großen Tag bin ich meist stiller, aber auch aufmerksamer
              Begleiter, der Euch trotzdem gerne mit Rat und Tat zur Seite
              steht.
            </p>
            <p>
              Die Jahreszeit oder das Wetter sind für mich dank viel Erfahrung
              und professionellem Equipment irrelevant und ich finde, alles hat
              seinen eignen Charme!
            </p>
            <p>
              Natürlich lernen wir uns gerne vorher persönlich kennen und
              besprechen alle wichtigen Details oder ich beantworte Euch
              mögliche offene Fragen. Dieses Gespräch kann entweder persönlich
              (je nach Anfahrtsweg können dabei extra Kosten entstehen), per
              Telefon oder Videocall stattfinden.
            </p>
            <p>
              Wenn Euch mein Stil als Hochzeitsfotografin gefällt, dann schreibt
              mir gerne eine Nachricht über mein Kontaktformular und sichert
              Euch Euren Wunschtermin! Über ein paar erste Eckdaten (Ort, Datum,
              Anzahl der Gäste etc.) wäre ich sehr dankbar. Ich melde mich dann
              gerne innerhalb von 24 Stunden bei Euch.
            </p>
          </div>

          <div className="align-center">
            <img className="preislisten" src={hochzeit_preisliste}></img>

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
                        <img src={hz01} />
                        <p className="legend">Legend 1</p>
                      </div>
                      <div>
                        <img src={hz02} />
                        <p className="legend">Legend 2</p>
                      </div>
                      <div>
                        <img src={hz03} />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz04} />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz05} />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz06} />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz07} />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz08} />
                        <p className="legend">Legend 3</p>
                      </div>
                      {/* <div>
                        <img src={hz21} />
                        <p className="legend">Legend 3</p>
                      </div> */}
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
                        <img src={hz01} />
                        <p className="legend">Legend 1</p>
                      </div>
                      <div>
                        <img src={hz02} />
                        <p className="legend">Legend 2</p>
                      </div>
                      <div>
                        <img src={hz03} />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz04} />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz05} />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz06} />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz07} />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz08} />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz09} />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz21} />
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
        <footer className="wrapper style1 align-center">
          <MyFooter />
        </footer>
      </div>
    </main>
  </>
);
export default hochzeiten;
