import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


interface AlertComponentsProps {
  open: boolean;
  handleClose: () => void;
  component: string;
  isVisiblePubSub: number;
}


const AlertAllgemein = ({ open,
  handleClose,
  component,
  isVisiblePubSub
}: AlertComponentsProps) => {

  const getAlertTextHeader = (component: string) => {
    switch (component) {
      case 'Baubarkeit':
        return 'Baubarkeitsberechnung';
      case 'Ca1Baubar':
        return 'Channel-Adapter';
      case 'P2PBaubar':
        return 'Publish/Subscribe-Channel';
      case 'Lv':
        return 'Systemkomponente';
      case 'Pp':
        return 'Systemkomponente';
      case 'Ca2Lv':
        return 'Channel-Adapter';
      case 'Ca2Pp':
        return 'Channel-Adapter';
      case 'P2P2Baubar':
        return 'Publish/Subscribe-Channel';
      case 'AggBau':
        return 'Aggregator Baubarkeitsberechnung'
      case 'ResBau':
        return 'Ergebnis Baubarkeitsberechnung'
      case 'Kp':
        return 'Systemkomponente'
      case 'Ca2Kp':
        return 'Channel-Adapter'
      default:
        return '';
    }
  };

  const getAlertTextBody = (component: string) => {
    switch (component) {
      case 'Baubarkeit':
        return (
          <div>
            <p> Die Baubarkeitsberechnung ist ein Geschäftsprozess, dessen Ergebnis eine Aussage darüber ist, ob ein bestimmter Artikel gebaut werden kann oder nicht.</p>
            <br />
            <p> Um diese Aussage treffen zu können, werden Informationen aus verschiedenen Teilsystemen benötigt.</p>
            <br />
            <p>Für den Start des Prozesses sind verschiedene Eingabedaten erforderlich: Zum einen der Artikel, der gebaut werden soll, und zum anderen der Zeitpunkt, zu dem der Artikel gebaut werden soll.</p>

          </div>
        );
      case 'Ca1Baubar':
        return (
          <div>
            <p>Dieser Channel-Adapter wird aktiviert, sobald der Geschäftsprozess "Baubarkeitsberechnung" gestartet wird. Anstatt eine spezifische Anfrage direkt an eine einzelne Komponente zu senden, veröffentlicht der Adapter die Nachricht über den gewünschten Artikel und den Zeitpunkt, zu dem dieser verfügbar sein soll, in einem Publish/Subscribe-Channel.</p>
            <br />
            <p>Im Kontext der Baubarkeitsberechnung ermöglicht dieser Adapter, dass mehrere Komponenten wie die Lagerverwaltung und Produktionsplanung gleichzeitig benachrichtigt werden und auf die Nachricht reagieren können, um die Verfügbarkeit der benötigten Teile und Ressourcen zu überprüfen.</p>
          </div>
        );
      case 'P2PBaubar':
        return (
          <div>
            <p>In der dargestellten Architektur fungiert der Publish/Subscribe-Channel als Kommunikationsmittel, über das Nachrichten von einem Sender (Publisher) an eine oder mehrere Empfänger (Subscriber) übermittelt werden. Anders als bei Point-to-Point-Channels, bei denen Nachrichten gezielt an einen einzelnen Empfänger gesendet werden, ermöglicht der Publish/Subscribe-Channel, dass eine Nachricht gleichzeitig an mehrere Abonnenten verteilt wird.</p>
            <br />
            <p>Dieser Channel ist besonders nützlich, wenn mehrere Systemkomponenten gleichzeitig über ein Ereignis informiert werden müssen, wie zum Beispiel eine Baubarkeitsberechnung. Jede abonnierte Komponente, wie die Lagerverwaltung oder die Produktionsplanung, kann auf die veröffentlichte Nachricht reagieren und ihre eigenen Aufgaben entsprechend ausführen.</p>
          </div>
        );
      case 'Lv':
        return (
          <div>
            <p>Die Lagerverwaltung ist eine Systemkomponente, die Informationen über den Bestand von Artikeln enthält. Mit ihrer Hilfe kann abgefragt werden, ob ein bestimmter Artikel zu einem bestimmten Zeitpunkt im System verfügbar ist. In der dargestellten Architektur abonniert die Lagerverwaltung Nachrichten über den Publish/Subscribe-Channel, um auf Anfragen zur Verfügbarkeit von Artikeln zu reagieren.</p>
            <br />
            <p>Wenn eine Anfrage eingeht, verarbeitet die Lagerverwaltung diese und veröffentlicht die entsprechende Antwort über einen weiteren Publish/Subscribe-Channel. Diese Antwort kann dann von anderen Systemkomponenten wie der Baubarkeitsberechnung empfangen und weiterverarbeitet werden.</p>
          </div>
        );
      case 'Pp':
        return (
          <div>
            <p>Die Produktionsplanung ist eine Systemkomponente, die dafür verantwortlich ist, Produktionsabläufe zu koordinieren und sicherzustellen, dass die notwendigen Maschinen und Ressourcen verfügbar sind, um einen bestimmten Artikel zu einem geplanten Zeitpunkt herzustellen. In der dargestellten Architektur abonniert die Produktionsplanung Nachrichten über den Publish/Subscribe-Channel, um auf Anfragen zur Produktionsverfügbarkeit zu reagieren.</p>
            <br />
            <p>Sobald eine Anfrage zur Baubarkeit eines Artikels empfangen wird, überprüft die Produktionsplanung die Verfügbarkeit der benötigten Maschinen und Produktionskapazitäten. Die Ergebnisse dieser Überprüfung werden dann über einen weiteren Publish/Subscribe-Channel veröffentlicht, sodass andere Komponenten, wie der Aggregator Baubarkeitsberechnung, diese Informationen für ihre weiteren Prozesse nutzen können.</p>
          </div>
        );
      case 'Ca2Lv':
        return (
          <div>
            <p>Dieser Channel-Adapter wird aktiviert, sobald die Systemkomponente "Lagerverwaltung" eine Antwort auf eine Anfrage zur Verfügbarkeit von Artikeln bereitstellen möchte. Anstatt die Antwort direkt an eine spezifische Komponente zu senden, veröffentlicht der Adapter die Nachricht über den Publish/Subscribe-Channel.</p>
            <br />
            <p>Durch diesen Mechanismus kann die Nachricht von mehreren abonnierten Komponenten, wie beispielsweise der Baubarkeitsberechnung oder anderen relevanten Systemen, empfangen werden. Dies ermöglicht eine flexible und skalierbare Kommunikation, bei der die Antwort von mehreren Empfängern simultan verarbeitet werden kann.</p>
          </div>
        );
      case 'Ca2Pp':
        return (
          <div>
            <p>Dieser Channel-Adapter wird aktiviert, sobald die Systemkomponente "Produktionsplanung" eine Antwort auf eine Anfrage zur Verfügbarkeit von Produktionskapazitäten bereitstellen möchte. Der Adapter empfängt die entsprechenden Daten und veröffentlicht die Antwort über den zugewiesenen Publish/Subscribe-Channel.</p>
            <br />
            <p>Durch diesen Mechanismus kann die Nachricht von mehreren abonnierten Komponenten, wie beispielsweise der Baubarkeitsberechnung oder anderen relevanten Systemen, empfangen werden. Dies ermöglicht eine flexible und skalierbare Kommunikation, bei der die Antwort von mehreren Empfängern simultan verarbeitet werden kann.</p>
          </div>
        );
      case 'P2P2Baubar':
        return (
          <div>
            <p>In der dargestellten Architektur dient dieser Publish/Subscribe-Channel als Kommunikationsmedium, über das Nachrichten von einer oder mehreren Systemkomponenten veröffentlicht und von allen interessierten Komponenten abonniert werden können. Dieser Channel empfängt Antworten von Systemen wie der Lagerverwaltung und der Produktionsplanung, die über Channel-Adapter an ihn gesendet werden.</p>
            <br />
            <p>Durch die Veröffentlichung der Nachrichten über diesen Channel können mehrere abonnierten Komponenten, wie der Aggregator der Baubarkeitsberechnung, die Nachrichten gleichzeitig empfangen und verarbeiten. Dies ermöglicht eine effiziente und flexible Verteilung der Informationen, wodurch eine skalierbare und reaktionsschnelle Systemarchitektur geschaffen wird.</p>
          </div>
        );
      case 'AggBau':
        return (
          <div>
            <p>In der dargestellten Architektur spielt der Aggregator Baubarkeitsberechnung eine zentrale Rolle bei der Zusammenführung von Informationen aus verschiedenen Quellen. Er empfängt Antworten von der Lagerverwaltung und der Produktionsplanung, die über Publish/Subscribe-Channels an ihn gesendet werden.</p>
            <br />
            <p>Der Aggregator kombiniert diese verschiedenen Datenquellen, um eine umfassende und konsistente Baubarkeitsbewertung zu erstellen. Dabei verarbeitet er die eingehenden Daten nach vordefinierter Logik, um sicherzustellen, dass alle relevanten Informationen korrekt zusammengeführt werden. Da die Antworten der Teilsysteme asynchron eintreffen können, ist der Aggregator darauf ausgelegt, diese Asynchronität zu handhaben und die Daten so zu synchronisieren, dass eine einheitliche Baubarkeitsentscheidung generiert wird.</p>
            <br />
            <p>Das Ergebnis der Aggregation wird schließlich als konsolidierte Antwort weitergeleitet, die als Grundlage für weitere Entscheidungen und Prozesse in der Baubarkeitsberechnung dient.</p>
          </div>
        );
      case 'ResBau':
        return (
          <div>
            <p>Diese Nachricht stellt das Ergebnis der Baubarkeitsberechnung dar. Hier wird die Ausgabe des Aggregators, die darüber informiert, ob der gewünschte Artikel zu einem bestimmten Zeitpunkt gebaut werden kann oder nicht, zurückgegeben.</p>
          </div>
        )
      case 'Kp':
        return (
          <div>
            <p>Die Kapazitätsplanung ist eine Systemkomponente, die dafür verantwortlich ist, die Verfügbarkeit von Arbeitskräften zu koordinieren, um sicherzustellen, dass die notwendige Kapazität vorhanden ist, um Aufträge fristgerecht abzuwickeln. In der dargestellten Architektur abonniert die Kapazitätsplanung Nachrichten über den Publish/Subscribe-Channel, um auf Anfragen zur Verfügbarkeit von Kapazitäten zu reagieren.</p>
            <br />
            <p>Sobald eine Anfrage zur Baubarkeit oder zum Versand eines Artikels empfangen wird, überprüft die Kapazitätsplanung die Verfügbarkeit der erforderlichen Mitarbeiter. Die Ergebnisse dieser Überprüfung werden dann über einen weiteren Publish/Subscribe-Channel veröffentlicht, sodass andere Komponenten, wie der Aggregator Baubarkeitsberechnung oder Versandberechnung, diese Informationen für ihre weiteren Prozesse nutzen können.</p>
          </div>
        );
      case 'Ca2Kp':
        return (
          <div>
            <p>Dieser Channel-Adapter wird aktiviert, sobald die Systemkomponente "Kapazitätsplanung" eine Antwort auf eine Anfrage zur Verfügbarkeit von Arbeitskräften und anderen Ressourcen bereitstellen möchte. Der Adapter empfängt die entsprechenden Daten und veröffentlicht die Antwort über den zugewiesenen Publish/Subscribe-Channel.</p>
            <br />
            <p>Durch diesen Mechanismus kann die Nachricht von mehreren abonnierten Komponenten, wie beispielsweise der Baubarkeitsberechnung oder der Versandberechnung, empfangen werden. Dies ermöglicht eine flexible und skalierbare Kommunikation, bei der die Antwort von mehreren Empfängern simultan verarbeitet werden kann.</p>
          </div>
        );
      default:
        return '';
    }
  };


  return (
    <div className="AlertKapa" id="idAlertKapa">
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {getAlertTextHeader(component)}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {getAlertTextBody(component)}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
};

export default AlertAllgemein;