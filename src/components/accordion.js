import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function AccordionComponent() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wo findet unser Shooting statt?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Seit einigen Jahren fotografiere ich fast ausschließlich draußen bei
            natürlichem Licht.
          </p>
          <p>
            Auf Wunsch, und als mögliche Schlechtwettervariante, kann ich auch
            gerne zu Euch nach Hause kommen und Hintergründe sowie
            professionelles Lichtequipment mitbringen.
          </p>
          <p>
            Sehr gerne unterstütze ich Euch bei der Wahl der richtigen Location.
            Ich habe in den letzten Jahren an einigen schönen Orten, besonders
            in Berlin und Brandenburg, fotografiert.
          </p>
          <p>
            Gleichzeitig bin ich auch offen für Eure Vorschläge! Solltet Ihr
            einen Ort haben, der Euch viel bedeutet und mit dem Ihr viel
            verbindet, dann können wir unser Shooting auch dort stattfinden
            lassen.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wie wählen wir unsere Bilder nach dem Fotoshooting aus?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Ihr erhaltet nach unserem gemeinsamen Termin eine passwortgeschützte
            Onlinegalerie, in der Ihr in Ruhe stöbern und die für Euch schönsten
            Aufnahmen aussuchen könnt.
          </p>
          <p>
            Nach Eurer Auswahl mache ich mich an die Arbeit, und gebe Euren
            Bildern noch den letzten Feinschliff. Der Endpreis richtet sich zum
            Schluss nach der Gesamtanzahl der ausgewählten Bilder. Einen
            Überblick über meine Preise erhaltet Ihr in den Preislisten der
            jeweiligen Kategorie.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wie erhalten wir unsere Bilder?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Nach der umfassenden Bildbearbeitung erhaltet Ihr von mir eine
            passwortgeschützte Galerie mit Euren fertigen Bildern. Dort könnt
            Ihr die Fotos entspannt auf dem Computer oder auf Eurem Smartphone
            angucken und herunterladen. Die Galerie bleibt im Schnitt 2 Wochen
            online und kann auch zum Beispiel mit Eurer Familie geteilt werden.
          </p>
          <p>
            Falls Ihr Fotos in Papierform benötigt, gebt mir gerne Bescheid! Ich
            arbeite seit Jahren mit einem Fachlabor in Berlin zusammen und kann
            gerne auch für Euch hochwertige Abzüge bestellen.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Bekommen wir die Rohdaten?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Leider nein, denn ich gebe grundsätzlich keine RAW-Dateien heraus.
            Ebenso ist es nicht möglich, unbearbeitete Fotos günstiger zu
            erhalten.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Kann ich danach überall meine Bilder entwickeln lassen?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Ja, Ihr könnt mit Euren digitalen Dateien theoretisch überall
            nachbestellen. Damit Ihr aber viel Freude an Euren Abzügen habt und
            es nicht zu bösen Überraschungen kommt, empfehle ich, dass Ihr
            eventuelle Nachbestellungen über mich tätigt.
          </p>
          <p>
            Leider gibt es immer noch einige Qualitätsunterschiede bei den
            verschiedenen Anbietern (insbesondere Drogerien haben immer wieder
            Probleme mit Farbabweichungen). Ich arbeite eng mit einem
            professionellen Fotolabor in Berlin zusammen – so erhaltet Ihr
            qualitativ hochwertige Fachabzüge zu einem fairen Preis!
          </p>
          <p>
            Falls Ihr lieber selbst Abzüge bestellen möchtet, kann ich Euch
            gerne Tipps geben, welche Anbieter ich aus langjähriger Erfahrung
            empfehlen würde.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wer hat das Urheberrecht an den Bildern und wie dürfen wir die Fotos
            verwenden?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Das Urheberrecht an den Bildern liegt grundsätzlich beim Fotografen,
            dies ist gesetzlich festgelegt und lässt sich auch nicht abtreten.
          </p>
          <p>
            Ihr erhaltet das private Nutzungsrecht an Euren Fotos und könnt
            diese uneingeschränkt für private Zwecke nutzen (z.B. Fotobücher,
            Leinwände, Abzüge, Postings auf Social-Media-Plattform).
          </p>
          <p>
            Ihr dürft die Fotos lediglich nicht verkaufen, bearbeiten oder die
            Bilder in Zeitschriften oder anderen kommerziellen Medien (auch
            online) veröffentlichen.
          </p>
          <p>
            Gewerbliche Nutzungsrechte können mit mir entsprechend erworben
            werden.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Kann man bei dir auch einen Gutschein kaufen?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>Ja klar, das ist jederzeit möglich!</p>
          <p>
            Ich stelle Euch gerne einen personalisierten Gutschein aus. Hierbei
            könnt Ihr wählen, ob der genaue Wert vermerkt werden soll, oder
            lieber eine Übersicht über die erworbene Leistung.
          </p>
          <p>
            Nach dem Kauf sende ich Euch den Gutschein verpackt und bereit zum
            Verschenken zu. Es fallen für Euch keine Versand- oder
            Verpackungskosten an.
          </p>
          <p>
            Für Last-Minute-Geschenke biete ich auch eine Downloadvariante zum
            selbst ausdrucken an.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Werden meine Fotos im Internet veröffentlicht?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Keine Angst! Ohne offizielles Einverständnis meiner Kunden
            veröffentliche ich grundsätzliche keine Bilder im Internet. Egal ob
            auf der Webseite oder auf Social-Media Kanälen.
          </p>
          <p>
            Ihr könnt selbst bestimmen, ob Ihr mir die Fotos für mein Portfolio
            zur Verfügung stellt. Ich freue mich jedoch immer, wenn ich die
            Aufnahmen für meinen Onlineauftritt nutzen darf. Denn ohne Bilder
            würde meine Website sehr leer sein und auch Ihr hättet keine Fotos,
            um Euch eine Vorstellung von meiner Arbeit zu machen.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Darf ich meine Fotos im Internet veröffentlichen?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Natürlich darfst du deine fertigen Fotos im Internet
            veröffentlichen. Über eine Verlinkung würde ich mich sehr freuen!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
