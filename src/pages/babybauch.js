import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Media from "react-media";

import "@fontsource/lato/300.css";

import "../../static/assets/css/main.css";
import "../../static/assets/css/noscript.css";
import "../../static/assets/css/fontawesome-all.min.css";

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

import babybauchPreisliste from "./../../static/img/BABYBAUCH/Baybauch Preisliste_Final.png";

import bb08 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-panketal-portraitfoto-claudia_nuernberger.jpg";
import bb09 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-barnim-portraitfoto-claudia_nuernberger.jpg";
import bb10 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-harz-paarfotos-claudia_nuernberger.jpg";
import bb11 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-reinickendorf-paarfotos-claudia_nuernberger.jpg";
import bb12 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-reinickendorf-portraitfoto-claudia_nuernberger.jpg";
import bb13 from "./../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-homeshooting-portraitfoto-claudia_nuernberger.jpg";

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

const babybauch = () => (
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
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-schoenower_heide-portraitfoto-claudia_nuernberger.jpg"
                      alt="Schwangere Frau, steht in der Natur und schaut gl??cklich auf ihren Babybauch. Ihr ausladendes mit R??schen bedecktes Kleid umschlie??t ihre Schultern und wallt ??ber ihre Seiten bis zum kn??chelhohen Gras.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-bernau-paarfotos-claudia_nuernberger.jpg"
                      alt="Mann steht hinter seiner schwangeren Frau. Ihre H??nde liegen aufeinander auf ihrem Babybauch w??hrend sie ihm verliebt ihr Gesicht zuwendet. Beide halten die Augen geschlossen in diesem z??rtlichen Moment.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-bernau-portraitfoto-claudia_nuernberger.jpg"
                      alt="Schwangere Frau steht vor einem Hintergrund aus Birken in der Natur und schaut liebevoll auf ihren Babybauch
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-panketal-paarfotos-claudia_nuernberger.jpg"
                      alt="Mann steht mit seiner schwangeren Frau, deren Haar von einem Blumenkranz gekr??nt werden, im Arm vor einem lichten W??ldchen. Beide haben eine Hand auf ihrem Bauch liegen sie blicken sich an und l??cheln verliebt.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-schoenower_heide-paarfotos-claudia_nuernberger.jpg"
                      alt="Mann steht hinter seiner schwangeren Frau auf einem Feldweg. Ihre H??nde liegen aufeinander auf ihrem Babybauch w??hrend beide gl??cklich dem Betrachter zugewendet l??cheln.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-homeshooting-paarfotos-claudia_nuernberger.jpg"
                      alt="Ein schwangeres P??rchen steht vor einem Fenster im Profil und hat die Gesichter einander zugewandt. Sie umarmen sich z??rtlich und ihre B??uche ber??hrt sich, w??hrend sie sich anl??cheln.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-hennigsdorf-portraitfoto-claudia_nuernberger.jpg"
                      alt="Eine schwangere Frau steht im Kinderzimmer vor Tiertapete. Im Hintergrund erkennt man das Kinderbett. Sie h??lt ein mit Stoff ummanteltes Drahtherz vor ihrem Bauch. Ihr seitliches Profil wird von einem seidenen Morgenmantel umweht, welcher offen ist und ihren kugelrunden Babybauch zeigt.
                      Fotografin: Claudia N??rnberger"
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
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-schoenower_heide-portraitfoto-claudia_nuernberger.jpg"
                      alt="Schwangere Frau, steht in der Natur und schaut gl??cklich auf ihren Babybauch. Ihr ausladendes mit R??schen bedecktes Kleid umschlie??t ihre Schultern und wallt ??ber ihre Seiten bis zum kn??chelhohen Gras.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-bernau-paarfotos-claudia_nuernberger.jpg"
                      alt="Mann steht hinter seiner schwangeren Frau. Ihre H??nde liegen aufeinander auf ihrem Babybauch w??hrend sie ihm verliebt ihr Gesicht zuwendet. Beide halten die Augen geschlossen in diesem z??rtlichen Moment.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-bernau-portraitfoto-claudia_nuernberger.jpg"
                      alt="Schwangere Frau steht vor einem Hintergrund aus Birken in der Natur und schaut liebevoll auf ihren Babybauch
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-panketal-paarfotos-claudia_nuernberger.jpg"
                      alt="Mann steht mit seiner schwangeren Frau, deren Haar von einem Blumenkranz gekr??nt werden, im Arm vor einem lichten W??ldchen. Beide haben eine Hand auf ihrem Bauch liegen sie blicken sich an und l??cheln verliebt.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-schoenower_heide-paarfotos-claudia_nuernberger.jpg"
                      alt="Mann steht hinter seiner schwangeren Frau auf einem Feldweg. Ihre H??nde liegen aufeinander auf ihrem Babybauch w??hrend beide gl??cklich dem Betrachter zugewendet l??cheln.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-homeshooting-paarfotos-claudia_nuernberger.jpg"
                      alt="Ein schwangeres P??rchen steht vor einem Fenster im Profil und hat die Gesichter einander zugewandt. Sie umarmen sich z??rtlich und ihre B??uche ber??hrt sich, w??hrend sie sich anl??cheln.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-hennigsdorf-portraitfoto-claudia_nuernberger.jpg"
                      alt="Eine schwangere Frau steht im Kinderzimmer vor Tiertapete. Im Hintergrund erkennt man das Kinderbett. Sie h??lt ein mit Stoff ummanteltes Drahtherz vor ihrem Bauch. Ihr seitliches Profil wird von einem seidenen Morgenmantel umweht, welcher offen ist und ihren kugelrunden Babybauch zeigt.
                      Fotografin: Claudia N??rnberger"
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
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-schoenower_heide-portraitfoto-claudia_nuernberger.jpg"
                      alt="Schwangere Frau, steht in der Natur und schaut gl??cklich auf ihren Babybauch. Ihr ausladendes mit R??schen bedecktes Kleid umschlie??t ihre Schultern und wallt ??ber ihre Seiten bis zum kn??chelhohen Gras.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-bernau-paarfotos-claudia_nuernberger.jpg"
                      alt="Mann steht hinter seiner schwangeren Frau. Ihre H??nde liegen aufeinander auf ihrem Babybauch w??hrend sie ihm verliebt ihr Gesicht zuwendet. Beide halten die Augen geschlossen in diesem z??rtlichen Moment.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-bernau-portraitfoto-claudia_nuernberger.jpg"
                      alt="Schwangere Frau steht vor einem Hintergrund aus Birken in der Natur und schaut liebevoll auf ihren Babybauch
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-panketal-paarfotos-claudia_nuernberger.jpg"
                      alt="Mann steht mit seiner schwangeren Frau, deren Haar von einem Blumenkranz gekr??nt werden, im Arm vor einem lichten W??ldchen. Beide haben eine Hand auf ihrem Bauch liegen sie blicken sich an und l??cheln verliebt.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-schoenower_heide-paarfotos-claudia_nuernberger.jpg"
                      alt="Mann steht hinter seiner schwangeren Frau auf einem Feldweg. Ihre H??nde liegen aufeinander auf ihrem Babybauch w??hrend beide gl??cklich dem Betrachter zugewendet l??cheln.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-homeshooting-paarfotos-claudia_nuernberger.jpg"
                      alt="Ein schwangeres P??rchen steht vor einem Fenster im Profil und hat die Gesichter einander zugewandt. Sie umarmen sich z??rtlich und ihre B??uche ber??hrt sich, w??hrend sie sich anl??cheln.
                      Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/BABYBAUCH/babybauch-berlin-brandenburg-hennigsdorf-portraitfoto-claudia_nuernberger.jpg"
                      alt="Eine schwangere Frau steht im Kinderzimmer vor Tiertapete. Im Hintergrund erkennt man das Kinderbett. Sie h??lt ein mit Stoff ummanteltes Drahtherz vor ihrem Bauch. Ihr seitliches Profil wird von einem seidenen Morgenmantel umweht, welcher offen ist und ihren kugelrunden Babybauch zeigt.
                      Fotografin: Claudia N??rnberger"
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
            <h2 className="align-center">Babybauch</h2>
            <p>
              Es ist eine Zeit der Vorfreude, der Ver??nderung, und manchmal kann
              es auch ganz sch??n turbulent zugehen in der Schwangerschaft!
            </p>
            <p>
              Schnell vergisst man, wie gro?? der Bauch doch eigentlich mal war.
            </p>
            <p>
              Lasst uns zusammen diese besondere Zeit festhalten. Ob nun allein,
              mit Eurem Partner oder auch mit Euren Kindern.
            </p>
            <p>
              Der beste Zeitpunkt f??r ein Babybauchshooting ist im achten Monat
              oder zu Beginn des neunten, denn dann ist der Bauch sch??n rund und
              die meisten Frauen f??hlen sich in Ihrer Haut noch sehr wohl.
            </p>
            <p>
              F??r unseren Termin komme ich gerne zu Euch nach Hause oder wir
              suchen uns zusammen eine sch??ne Location im Gr??nen. Da ich ein
              mobiles kleines Studio besitze, ist es auch m??glich unter
              Studio-Bedingungen bei Euch zu Hause die Fotos zu realisieren.
              Jede werdende Mutter hat andere Vorstellungen, wie ihr Babybauch
              am besten in Szene gesetzt werden soll. Bringt gerne Eure Ideen
              ein, falls Ihr etwas Bestimmtes umsetzen m??chtet! Gerne berate ich
              Euch bei m??glichen Fragen und W??nschen.
            </p>
            <p>
              ??ber die Zeit habe ich einige Kleider f??r Babybauchfotos in meinen
              Fundus aufgenommen, diese verleihe ich gerne an Euch. Fast alle
              Outfits aus dieser Galerie geh??ren zu meinem Fundus, auf Wunsch
              schicke ich Euch auch gerne Bilder der einzelnen Kleider vorab.
            </p>
            <p>
              Vor Eurem Termin bekommt Ihr von mir dar??ber hinaus einen kleinen
              digitalen Leitfaden mit Tipps zugesendet. Ich stehe Euch aber
              nat??rlich auch f??r weitere Fragen oder bei der Wahl der richtigen
              Location beratend zur Seite!
            </p>
          </div>

          <div className="align-center">
            <img className="preislisten" src={babybauchPreisliste}></img>

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
                      showArrows={false}
                      className="hochkantCarousel"
                    >
                      <div>
                        <img
                          src={bb08}
                          alt="Schwangere Frau steht in Unterw??sche in ihrem Wohnzimmer, ihr langes Haar wellt sich ??ber die rechte Schulter w??hrend sie ihren Babybauch mit den H??nden umschlie??t.
                          Fotografin: Claudia N??rnberger"
                        />
                        <p className="legend">Legend 1</p>
                      </div>
                      <div>
                        <img
                          src={bb09}
                          alt="Schwangere Frau mit Blumenkranz, steht in der Natur und h??lt sich den runden Babybauch, w??hrend ihr luftiges Kleid mit Schleppe von einem Windsto?? seitlich hochgewirbelt wird.
                          Fotografin: Claudia N??rnberger"
                        />
                        <p className="legend">Legend 2</p>
                      </div>
                      <div>
                        <img
                          src={bb10}
                          alt="Mann steht mit seiner schwangeren Frau im Arm vor dem Hamburger Wappen, im Harz. Beide haben eine Hand auf ihrem Bauch liegen. Sie l??cheln sich verliebt an.
                          Fotografin: Claudia N??rnberger
                        "
                        />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img
                          src={bb11}
                          alt="Schwangeres P??rchen lustwandelt durch einen Wald. Sie halten einander an der Hand w??hrend sie sich anschauen. Mit ihrer anderen Hand umfasst die Schwangere ihren runden Babybauch.
                          Fotografin: Claudia N??rnberger"
                        />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img
                          src={bb12}
                          alt="Schwangere Frau, steht in der Natur und schaut ??ber ihre Schulter, weg vom Betrachter. Sie umschlie??t mit den H??nden sanft ihren Bauch. Ihr seidenes Kleid f??llt in leichten Wellen gen Boden.
                          Fotografin: Claudia N??rnberger"
                        />
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img
                          src={bb13}
                          alt="Schwangere Frau sitzt mit einem gl??cklichen L??cheln im Schneidersitz auf dem Boden. Die rechte Hand liegt auf ihrem Babybauch und in der linken Hand h??lt einen Stoffhasen, der auf ihrem Oberschenkel sitzt.
                          Fotografin: Claudia N??rnberger"
                        />
                        <p className="legend">Legend 3</p>
                      </div>
                    </Carousel>
                  )}
                </div>
              )}
            </Media>

            {/* <Carousel
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
          </Carousel> */}
          </div>
        </section>

        <MyForm />

        <footer className="wrapper style1 align-center randDesktop">
          <MyFooter />
        </footer>
      </div>
    </main>
  </>
);
export default babybauch;
