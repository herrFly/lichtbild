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

import hochzeit_preisliste from "./../../static/img/HZ/Hochzeit Preisliste_Final.png";

import hz01 from "../../static/img/HZ/hochzeitsfotografin-berlin-brandenburg-bernau-claudia_nuernberger.jpg";
import hz02 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-panketal-claudia_nuernberger.jpg";
import hz03 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-luxemburg-claudia_nuernberger.jpg";
import hz04 from "../../static/img/HZ/hochzeitsfotograf-berlin-brandenburg-standesamt_reinickendorf-claudia_nuernberger.jpg";
import hz05 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-potsdam-claudia_nuernberger-02.jpg";
import hz06 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-hochzeitsvilla_zehlendorf-claudia_nuernberger.jpg";
import hz07 from "../../static/img/HZ/hochzeitsfotograf-berlin-brandenburg-potsdam-claudia_nuernberger.jpg";
import hz08 from "../../static/img/HZ/hochzeitsfotograf-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger.jpg";
import hz09 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-potsdam-claudia_nuernberger.jpg";
import hz10 from "../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger-03.jpg";

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
      <title>Lichtbild-Enthusiastin - Claudia N??rnberger</title>
    </Helmet>
    <Menu>
      <Link to="/" className="menu-item">
        Startseite
      </Link>
      <br />
      <Link to="/ueberMich" className="menu-item">
        ??ber Mich
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
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Brautpaar h??lt sich beim Hochzeitstanz die H??nde. Der Fokus des Bildes liegt auf den H??nden. Die Gesichter des Brautpaares sind nicht zusehen. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-standesamt_reinickendorf-claudia_nuernberger.jpg"
                      alt="Brautpaar steht eng umschlungen in einem Gang voller Fenster. Sie k??ssen sich z??rtlich im Vordergrund liegt der Brautstrau?? auf einem Gel??nder. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotografin-berlin-brandenburg-luxemburg-claudia_nuernberger.jpg"
                      alt="Portrait eines Brautpaares. Beide haben ihre Augen geschlossen und haben ihre K??pfe nah beieinander. Sie l??cheln gl??cklich. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
                      alt="Brautpaar steh vor einem Kornfeld in der Sonne. Sie stehen sich gegen??ber und schauen sich gl??cklich an. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotograf-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Makroaufnahme zweier goldener Eheringe. Sie liegen auf nassem Herbstlaub. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger-02.jpg"
                      alt="Braut steht unter einem geschm??ckten Pavillon in einer aufwendigen Traditionellen Hochzeitstracht aus Usbekistan. Ihr Kopf ist gesenkt und sie h??lt ihren Schleier mit beiden H??nden fest. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotografin-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger.jpg"
                      alt="Brautpaar lacht sich ungezwungen und herzlich an. Er schaut sie verliebt an. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotografin-berlin-brandenburg-standesamt_reinickendorf-claudia_nuernberger.jpg"
                      alt="Schwangere Braut und ihr Mann laufen Hand in Hand auf den Betrachter zu. Beide schauen sich an und l??cheln verliebt. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotografin-berlin-brandenburg-potsdam-claudia_nuernberger.jpg"
                      alt="Brautpaar steht auf einem Balkon. Sie schaut nach unten und h??lt ihren Brautstrau??. Er schaut sie verliebt an und h??lt ihre Hand.  Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger.jpg"
                      alt="Brautpaar steht nah beieinander. Ihre Gesichter ber??hren sich fast. Sie halten ihre H??nde aneinander. Sie tr??gt einen Schleier und ein Diadem. Ihr Blick geht nach unten. Fotografin: Claudia N??rnberger"
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
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Brautpaar h??lt sich beim Hochzeitstanz die H??nde. Der Fokus des Bildes liegt auf den H??nden. Die Gesichter des Brautpaares sind nicht zusehen. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-standesamt_reinickendorf-claudia_nuernberger.jpg"
                      alt="Brautpaar steht eng umschlungen in einem Gang voller Fenster. Sie k??ssen sich z??rtlich im Vordergrund liegt der Brautstrau?? auf einem Gel??nder. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotografin-berlin-brandenburg-luxemburg-claudia_nuernberger.jpg"
                      alt="Portrait eines Brautpaares. Beide haben ihre Augen geschlossen und haben ihre K??pfe nah beieinander. Sie l??cheln gl??cklich. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
                      alt="Brautpaar steh vor einem Kornfeld in der Sonne. Sie stehen sich gegen??ber und schauen sich gl??cklich an. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotograf-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Makroaufnahme zweier goldener Eheringe. Sie liegen auf nassem Herbstlaub. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger-02.jpg"
                      alt="Braut steht unter einem geschm??ckten Pavillon in einer aufwendigen Traditionellen Hochzeitstracht aus Usbekistan. Ihr Kopf ist gesenkt und sie h??lt ihren Schleier mit beiden H??nden fest. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotografin-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger.jpg"
                      alt="Brautpaar lacht sich ungezwungen und herzlich an. Er schaut sie verliebt an. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotografin-berlin-brandenburg-standesamt_reinickendorf-claudia_nuernberger.jpg"
                      alt="Schwangere Braut und ihr Mann laufen Hand in Hand auf den Betrachter zu. Beide schauen sich an und l??cheln verliebt. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotografin-berlin-brandenburg-potsdam-claudia_nuernberger.jpg"
                      alt="Brautpaar steht auf einem Balkon. Sie schaut nach unten und h??lt ihren Brautstrau??. Er schaut sie verliebt an und h??lt ihre Hand.  Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger.jpg"
                      alt="Brautpaar steht nah beieinander. Ihre Gesichter ber??hren sich fast. Sie halten ihre H??nde aneinander. Sie tr??gt einen Schleier und ein Diadem. Ihr Blick geht nach unten. Fotografin: Claudia N??rnberger"
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
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Brautpaar h??lt sich beim Hochzeitstanz die H??nde. Der Fokus des Bildes liegt auf den H??nden. Die Gesichter des Brautpaares sind nicht zusehen. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-standesamt_reinickendorf-claudia_nuernberger.jpg"
                      alt="Brautpaar steht eng umschlungen in einem Gang voller Fenster. Sie k??ssen sich z??rtlich im Vordergrund liegt der Brautstrau?? auf einem Gel??nder. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotografin-berlin-brandenburg-luxemburg-claudia_nuernberger.jpg"
                      alt="Portrait eines Brautpaares. Beide haben ihre Augen geschlossen und haben ihre K??pfe nah beieinander. Sie l??cheln gl??cklich. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
                      alt="Brautpaar steh vor einem Kornfeld in der Sonne. Sie stehen sich gegen??ber und schauen sich gl??cklich an. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotograf-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Makroaufnahme zweier goldener Eheringe. Sie liegen auf nassem Herbstlaub. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger-02.jpg"
                      alt="Braut steht unter einem geschm??ckten Pavillon in einer aufwendigen Traditionellen Hochzeitstracht aus Usbekistan. Ihr Kopf ist gesenkt und sie h??lt ihren Schleier mit beiden H??nden fest. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotografin-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger.jpg"
                      alt="Brautpaar lacht sich ungezwungen und herzlich an. Er schaut sie verliebt an. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotografin-berlin-brandenburg-standesamt_reinickendorf-claudia_nuernberger.jpg"
                      alt="Schwangere Braut und ihr Mann laufen Hand in Hand auf den Betrachter zu. Beide schauen sich an und l??cheln verliebt. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotografin-berlin-brandenburg-potsdam-claudia_nuernberger.jpg"
                      alt="Brautpaar steht auf einem Balkon. Sie schaut nach unten und h??lt ihren Brautstrau??. Er schaut sie verliebt an und h??lt ihre Hand.  Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/HZ/hochzeitsfotos-berlin-brandenburg-usbekistan_taschkent-claudia_nuernberger.jpg"
                      alt="Brautpaar steht nah beieinander. Ihre Gesichter ber??hren sich fast. Sie halten ihre H??nde aneinander. Sie tr??gt einen Schleier und ein Diadem. Ihr Blick geht nach unten. Fotografin: Claudia N??rnberger"
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
            <h2 className="align-center">Hochzeiten</h2>
            <p>
              Mit dem Gesp??r f??r kleine und gro??e Momente und dem Auge f??r
              Details begleite ich Euch gerne an Eurem gro??en Tag!
            </p>
            <p>
              Jede Hochzeit ist individuell, wie die Paare selbst. Ob nun
              traditionell oder unkonventionell, in den letzten Jahren durfte
              ich an die 100 gro??en und kleinen Hochzeiten begleiten und jedes
              Mal geht mir das Herz auf, wenn ich solch wichtige und
              erinnerungstr??chtige Momente f??r die Ewigkeit festhalten darf!
            </p>
            <p>
              An Eurem gro??en Tag bin ich meist stiller, aber auch aufmerksamer
              Begleiter, der Euch trotzdem gerne mit Rat und Tat zur Seite
              steht.
            </p>
            <p>
              Die Jahreszeit oder das Wetter sind f??r mich dank viel Erfahrung
              und professionellem Equipment irrelevant und ich finde, alles hat
              seinen eignen Charme!
            </p>
            <p>
              Nat??rlich lernen wir uns gerne vorher pers??nlich kennen und
              besprechen alle wichtigen Details oder ich beantworte Euch
              m??gliche offene Fragen. Dieses Gespr??ch kann entweder pers??nlich
              (je nach Anfahrtsweg k??nnen dabei extra Kosten entstehen), per
              Telefon oder Videocall stattfinden.
            </p>
            <p>
              Wenn Euch mein Stil als Hochzeitsfotografin gef??llt, dann schreibt
              mir gerne eine Nachricht ??ber mein Kontaktformular und sichert
              Euch Euren Wunschtermin! ??ber ein paar erste Eckdaten (Ort, Datum,
              Anzahl der G??ste etc.) w??re ich sehr dankbar. Ich melde mich dann
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
                        <img src={hz01} alt="Makroaufnahme zweier silberner Eheringe die auf einem kleinen Ast h??ngen. Fotografin: Claudia N??rnberger / Berlin, Brandenburg"/>
                        <p className="legend">Legend 1</p>
                      </div>
                      <div>
                        <img src={hz02} alt="Brautpaar steht H??ndchen haltend in einem Birkenwald. Beide schauen sich verliebt an. Fotografin: Claudia N??rnberger / Berlin, Brandenburg"/>
                        <p className="legend">Legend 2</p>
                      </div>
                      <div>
                        <img src={hz03} alt="Braut richtet die Blume am Reviere des Br??utigams. Er blickt hinaus auf dem Fenster vor den die beiden stehen.Fotografin: Claudia N??rnberger / Berlin"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz04} alt="Brautpaar steht sich gegen??ber und h??lt sich die H??nde. Beide l??cheln und ihr Nasen ber??hren sich z??rtlich. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz05} alt="Brautpaar steht in einem S??ulengang. Beide stehen sich gegen??ber und sind sich sehr nah. Sie hat ihren Arm auf seiner Schulter. Beide gucken nicht zum Betrachter.  Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz06} alt="Braut steht auf l??chelnd auf einer Treppe und ihre kleine Tochter h??lt ihr Kleid. Fotografin: Claudia N??rnberger / Berlin"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz07} alt="Braut steht in ihrem engen Spitzenkleid vor einer wei??en Steinwand. Ihr Blick geht in die Ferne. In ihren H??nden h??lt sie ihren Brautstrau??. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz08} alt="Br??utigam schaut beim Tanzen verliebt seine Frau an. Beide halten sich die H??nde. Fotografin: Claudia N??rnberger "/>
                        <p className="legend">Legend 3</p>
                      </div>
                      {/* <div>
                        <img src={hz} />
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
                        <img src={hz01} alt="Makroaufnahme zweier silberner Eheringe die auf einem kleinen Ast h??ngen. Fotografin: Claudia N??rnberger / Berlin, Brandenburg"/>
                        <p className="legend">Legend 1</p>
                      </div>
                      <div>
                        <img src={hz02} alt="Brautpaar steht H??ndchen haltend in einem Birkenwald. Beide schauen sich verliebt an. Fotografin: Claudia N??rnberger / Berlin, Brandenburg"/>
                        <p className="legend">Legend 2</p>
                      </div>
                      <div>
                        <img src={hz03} alt="Braut richtet die Blume am Reviere des Br??utigams. Er blickt hinaus auf dem Fenster vor den die beiden stehen.Fotografin: Claudia N??rnberger / Berlin"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz04} alt="Brautpaar steht sich gegen??ber und h??lt sich die H??nde. Beide l??cheln und ihr Nasen ber??hren sich z??rtlich. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz05} alt="Brautpaar steht in einem S??ulengang. Beide stehen sich gegen??ber und sind sich sehr nah. Sie hat ihren Arm auf seiner Schulter. Beide gucken nicht zum Betrachter.  Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz06} alt="Braut steht auf l??chelnd auf einer Treppe und ihre kleine Tochter h??lt ihr Kleid. Fotografin: Claudia N??rnberger / Berlin"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz07} alt="Braut steht in ihrem engen Spitzenkleid vor einer wei??en Steinwand. Ihr Blick geht in die Ferne. In ihren H??nden h??lt sie ihren Brautstrau??. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz08} alt="Brautpaar steht eng beieinander. Sie hat ihre Hand auf seinem Reviere. Er seine H??nde an ihrer H??fte er schaut sie verliebt an. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz09} alt="Brautpaar steht strahlend in der Mitte einer Allee. Sie schaut direkt zum Betrachter und l??chelt er hat nur Augen f??r sie. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={hz10} alt="Br??utigam schaut beim Tanzen verliebt seine Frau an. Beide halten sich die H??nde. Fotografin: Claudia N??rnberger " />
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
export default hochzeiten;
