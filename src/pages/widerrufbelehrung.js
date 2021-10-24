import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import { slide as Menu } from "react-burger-menu";

import "@fontsource/lato/300.css";

import "../../static/assets/css/main.css";
import "../../static/assets/css/noscript.css";
import "../../static/assets/css/fontawesome-all.min.css";

import MyFooter from "../components/footer";

const widerrufbelehrung = () => (
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
      <div className="divided">
        <section className="wrapper style1 content-align-left">
          <div className="inner">
            <h2 className="ueberschriftFAQ">Widerrufsbelehrung</h2>
            <p>
              (1) Widerrufsrecht <br />
              <br />
              a) Ist der Käufer Verbraucher, hat er das Recht, binnen vierzehn
              Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. <br />
              <br />
              b) Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des
              Vertragsschlusses. <br />
              <br />
              c) Um das Widerrufsrecht auszuüben, muss der Verbraucher der
              Fotografin(Claudia Nürnberger, Holländerstraße 40, 13407 Berlin)
              mittels einer eindeutigen Erklärung (z.B. ein mit der Post
              versandter Brief oder E-Mail) über seinen Entschluss, diesen
              Vertrag zu widerrufen, informieren. Er kann dafür das beigefügte
              Muster-Widerrufsformular verwenden, das jedoch nicht
              vorgeschrieben ist. <br />
              <br />
              d) Zur Wahrung der Widerrufsfrist reicht es aus, dass der
              Verbraucher die Mitteilung über die Ausübung des Widerrufsrechts
              vor Ablauf der Widerrufsfrist absendet.
            </p>
            <p>
              (2) Folgen des Widerrufs <br />
              <br />
              a) Wenn der Verbraucher diesen Vertrag widerruft, hat der Fotograf
              dem Käufer alle Zahlungen, die er vom Käufer erhalten hat,
              einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen
              Kosten, die sich daraus ergeben, dass der Käufer eine andere Art
              der Lieferung als die vom Makler angebotene, günstigste
              Standardlieferung gewählt hat), unverzüglich und spätestens binnen
              vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung
              über den Widerruf dieses Vertrags beim Fotografen eingegangen ist.
              Für diese Rückzahlung verwendet der Fotograf dasselbe
              Zahlungsmittel, das der Käufer bei der ursprünglichen Transaktion
              eingesetzt hat, es sei denn, zwischen den Vertragsparteien wurde
              ausdrücklich etwas anderes vereinbart; in keinem Fall werden dem
              Käufer wegen dieser Rückzahlung Entgelte berechnet. <br />
              <br />
              b) Hat der Verbraucher verlangt, dass die Dienstleistungen während
              der Widerrufsfrist beginnen sollen, so hat er dem Fotografen einen
              angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem
              Zeitpunkt, zu dem der Verbraucher den Fotografen von der Ausübung
              des Widerrufsrechts hinsichtlich dieses Vertrags unterrichtet,
              bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang
              der im Vertrag vorgesehenen Dienstleistungen entspricht. Belehrung
              gem. § 356 Abs. 4 BGB Hiermit bestätigt der Verbraucher, davon
              Kenntnis genommen zu haben, dass sein oben genanntes
              Widerrufsrecht für den abgeschlossenen Vertrags erlischt, wenn der
              Fotograf seine Arbeit bereits begonnen hat und der ausgemachte
              Termin stattgefunden hat. Auf § 356 Abs. 4 BGB wurde der
              Verbraucher hingewiesen.
            </p>
          </div>
        </section>

        <section className="wrapper style1 align-center randDesktop">
          <MyFooter />
        </section>
      </div>
    </main>
  </>
);
export default widerrufbelehrung;
