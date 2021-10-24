import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import "@fontsource/lato/300.css";

import "../../static/assets/css/main.css";
import "../../static/assets/css/noscript.css";
import "../../static/assets/css/fontawesome-all.min.css";

import { slide as Menu } from "react-burger-menu";

import MyFooter from "./../components/footer";

const agb = () => (
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
            <h2 className="ueberschriftFAQ">Allgemeine Geschäftsbedingungen</h2>
            <p>
              1. Geltung <br />
              <br />
              (1) Die nachfolgenden allgemeinen Liefer- und Geschäftsbedingungen
              (im folgenden AGB genannt) gelten für alle vom Fotografen
              durchgeführten Aufträge, Angebote, Lieferungen und Leistungen.
              <br />
              <br />
              (2) Sie gelten als vereinbart mit Entgegennahme der Lieferung oder
              Leistung bzw. des Angebots des Fotografen durch den Kunden,
              spätestens jedoch mit der Annahme des Bildmaterials zur
              Veröffentlichung. <br />
              <br />
              (3) Wenn der Kunde den AGB widersprechen will, ist dieses
              schriftlich binnen drei Werktagen zu erklären. Abweichenden
              Geschäftsbedingungen des Kunden wird hiermit widersprochen.
              Abweichende Geschäftsbedingungen des Kunden erlangen keine
              Gültigkeit, es sei denn, dass der Fotograf diese schriftlich
              anerkennt.
            </p>
            <p>
              2. Auftragsproduktionen <br />
              <br />
              (1) Soweit der Fotograf Kostenvoranschläge erstellt, sind diese
              unverbindlich. Treten während der Produktion Kostenerhöhungen ein,
              sind diese erst dann vom Fotografen anzuzeigen, wenn erkennbar
              wird, dass hierdurch eine Überschreitung der ursprünglich
              veranschlagten Gesamtkosten um mehr als 15 % zu erwarten ist. Wird
              die vorgesehene Produktionszeit aus Gründen überschritten, die der
              Fotograf nicht zu vertreten hat, so ist eine zusätzliche Vergütung
              auf der Grundlage des vereinbarten Zeithonorars bzw. in Form einer
              angemessenen Erhöhung des Pauschalhonorars zu leisten. <br />
              <br />
              (2) Für die Herstellung der Fotografien wird ein Honorar als
              Stundensatz, Tagessatz oder vereinbarte Pauschale vereinbart;
              Nebenkosten (Reisekosten, Modellhonorare, Spesen, Requisiten,
              Labor- und Materialkosten, Studiomieten etc.) sind vom Kunden zu
              tragen.
              <br /> <br />
              (3) Der Fotograf kann die Aufträge, Angebote, Lieferungen und
              Leistungen selbst oder durch Dritte durchführen lassen.
              <br /> <br />
              (4) Vorbehaltlich einer anderweitigen Regelung werden die
              Aufnahmen, die dem Kunden nach Abschluss der Produktion zur
              Abnahme vorgelegt werden, durch den Fotografen ausgewählt. <br />
              (5) Sind dem Fotografen innerhalb von zwei Wochen nach Ablieferung
              der Aufnahmen keine schriftlichen Mängelrügen zugegangen, gelten
              die Aufnahmen als vertragsgemäß und mängelfrei abgenommen.
            </p>
            <p>
              3. Überlassenes Bildmaterial (analog und digital) <br />
              <br />
              (1) Die AGB gelten für jegliches dem Kunden überlassenes
              Bildmaterial, gleich in welcher Schaffensstufe oder in welcher
              technischen Form sie vorliegen. Sie gelten insbesondere auch für
              elektronisches oder digital übermitteltes Bildmaterial. <br />
              <br />
              (2) Der Kunde erkennt an, dass es sich bei dem vom Fotografen
              gelieferten Bildmaterial um urheberrechtlich geschützte
              Lichtbildwerke i.S.v. § 2 Abs.1 Ziff.5 Urheberrechtsgesetz
              handelt. <br />
              <br />
              <br />
              (3) Reklamationen, die den Inhalt der gelieferten Sendung oder
              Inhalt, Qualität oder Zustand des Bildmaterials betreffen, sind
              innerhalb von zwei Wochen nach Empfang mitzuteilen. Anderenfalls
              gilt das Bildmaterial als ordnungsgemäß, vertragsgemäß und wie
              verzeichnet zugegangen.
            </p>
            <p>
              4.Nutzungsrechte <br />
              <br />
              (1) Der Fotograf überträgt jeweils ein einfaches Nutzungsrecht an
              den Fotografien auf den Kunden. Dieses beinhaltet ausschließlich
              die private, nicht kommerzielle Nutzung. Die Vervielfältigung und
              Weitergabe an Dritte für private Zwecke ist erlaubt. <br />
              <br />
              (2) Eine kommerzielle/gewerbliche Nutzung der Fotografien im
              Nachhinein – gleich welcher Form vorliegend – durch den Kunden
              selbst oder durch Dritte kann nur mit vorhergehender schriftlicher
              Zustimmung des Fotografens erfolgen. Dies gilt auch für
              Fotografien, welche durch den Auftraggeber oder durch Dritte
              digital oder anderweitig verändert bzw. verfremdet wurden.
              <br /> <br />
              (3) Die Nutzungsrechte an den Fotografien gehen erst nach
              vollständiger Bezahlung des vereinbarten Honorars auf den Kunden
              über. <br />
              <br />
              (4) Bei der Verwertung der Fotografien ist die Namensnennung bei
              jeder Veröffentlichung entweder direkt unter dem Bild oder im
              Impressum anzugeben, sofern nichts anderes vereinbart wurde.
              <br />
              <br />
              <br />
              (5) Der Kunde erhält ausschließlich bearbeitetes hochauflösendes
              Bildmaterial im Format JPEG. Die Rohdaten (RAW) verbleiben beim
              Fotografen.
              <br /> <br />
              (6) Die Aufbewahrung der digitalen Bilddaten ist nicht Teil des
              Auftrags. Die Aufbewahrung erfolgt demnach ohne Gewähr. <br />
              <br />
              (7) Veränderungen des Bildmaterials durch Foto-Composing, Montage
              oder durch elektronische Hilfsmittel (z.B. Farbfilter) ist
              untersagt.
              <br />
              <br />
              (8) An den erstellten Kostenvoranschlägen, Zeichnungen, Grafiken,
              Plänen und anderen Unterlagen behält sich der Fotograf sämtliche
              Nutzungs- und Verbreitungsrechte vor. Sie dürfen Dritten nicht
              zugänglich gemacht werden. Bei Nichterteilung des Auftrags sind
              diese unverzüglich zu löschen. <br />
              (9) Individuelle Abweichungen der Nutzungsrechte müssen
              schriftlich vereinbart werden.
            </p>
            <p>
              5. Haftung
              <br />
              <br />
              (1) Für Schäden, gleich welcher Art, anlässlich der
              Vertragserfüllung haftet der Fotograf für sich und seine
              Erfüllungsgehilfen nur bei Vorsatz oder grober Fahrlässigkeit.{" "}
              <br />
              <br />
              (2) Für Schäden oder Verlust der Fotografien haftet der Fotograf
              nur bei Vorsatz oder grober Fahrlässigkeit. <br />
              <br />
              (3) Für Schäden, Mängel oder Verlust durch Subunternehmer oder
              Lieferanten, welche Ihre Leistungen auf eigene Rechnung erstellen,
              ist eine Haftung des Fotografen ausgeschlossen. <br />
              <br />
              (4) Liefertermine für Fotos sind nur dann verbindlich, wenn sie
              ausdrücklich von dem Fotografen bestätigt worden sind. Der
              Fotograf haftet für Fristüberschreitung nur bei Vorsatz oder
              grober Fahrlässigkeit. <br />
              <br />
              (5) Die Organisation und Vergabe von Buchungen, als auch die
              Ausführung erfolgt mit größter Sorgfalt. Sollte jedoch auf Grund
              von Umständen, die der Fotograf nicht zu vertreten hat (z.B.
              plötzliche Krankheit, Verkehrsunfall, Umwelteinflüssen,
              Verkehrsstörungen etc.) kein Fotograf zu dem vereinbarten
              Fototermin erscheinen bzw. zu spät eintreffen, kann keine Haftung
              für jegliche daraus resultierenden Schäden oder Folgen übernommen
              werden. Natürlich wird sich Fotograf in diesem Falle dringend um
              einen Ersatzfotografen bemühen.
            </p>
            <p>
              6. Datenschutz <br />
              <br />
              (1) Der Kunde erklärt sich einverstanden, dass seine zum
              Geschäftsverkehr erforderlichen, personenbezogenen Daten
              gespeichert werden. Der Fotograf verpflichtet sich, alle ihm im
              Rahmen des Auftrages bekannt gewordenen Informationen vertraulich
              zu behandeln. Daten werden nicht an Dritte weitergegeben, es sei
              denn, dies ist zur Durchführung des Auftrages erforderlich. Nähere
              Informationen können den Datenschutzhinweisen des Fotografen
              entnommen werden.
            </p>
            <p>
              7. Allgemeines <br />
              <br />
              (1) Nebenabreden zum Vertrag oder zu diesen AGB bedürfen zu ihrer
              Wirksamkeit der Schriftform. <br />
              <br />
              (2) Die etwaige Nichtigkeit bzw. Unwirksamkeit einer oder mehrerer
              Bestimmungen dieser AGB berührt nicht die Wirksamkeit der übrigen
              Bestimmungen. Die Parteien verpflichten sich, die ungültige
              Bestimmung durch eine sinnentsprechende wirksame Bestimmung zu
              ersetzen, die der angestrebten Regelung wirtschaftlich und
              juristisch am nächsten kommt.
            </p>
          </div>
        </section>

        <footer className="wrapper style1 align-center randDesktop">
          <MyFooter />
        </footer>
      </div>
    </main>
  </>
);
export default agb;
