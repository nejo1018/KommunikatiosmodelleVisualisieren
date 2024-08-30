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
      case 'Versand':
        return 'Versandberechnung'
      case 'Ca1Ver':
        return 'Channel-Adapter';
      case 'Tb':
        return 'Systemkomponente';
      case 'Ca2Tb':
        return 'Channel-Adapter';
      case 'AggVer':
        return 'Aggregator Versand';
      case 'ResVer':
        return 'Ergebnis Versandberechnung';
      default:
        return '';
    }
  };

  const getAlertTextBody = (component: string) => {
    switch (component) {
      case 'Versand':
        return (
          <div>
            <p>Die Versandberechnung ist ein Geschäftsprozess, dessen Ergebnis eine Aussage darüber ist, ob ein bestimmter Artikel versandt werden kann oder nicht.</p>
            <br />
            <p>Um diese Aussage treffen zu können, werden Informationen aus verschiedenen Teilsystemen benötigt.</p>
            <br />
            <p>Für den Start des Prozesses sind verschiedene Eingabedaten erforderlich: Zum einen der Artikel, der versandt werden soll, und zum anderen der Zeitpunkt, zu dem der Artikel versandt werden soll.</p>
          </div>
        );;
      case 'Ca1Ver':
        return (
          <div>
            <p>Dieser Channel-Adapter wird aktiviert, sobald der Geschäftsprozess "Versandberechnung" gestartet wird. Anstatt eine spezifische Anfrage direkt an eine einzelne Komponente zu senden, veröffentlicht der Adapter die Nachricht über den geplanten Versand eines Artikels und den Zeitpunkt, zu dem dieser Versand erfolgen soll, in einem Publish/Subscribe-Channel.</p>
            <br />
            <p>Im Kontext der Versandberechnung ermöglicht dieser Adapter, dass mehrere Komponenten wie die Lagerverwaltung, die Transportplanung und andere relevante Systeme gleichzeitig benachrichtigt werden und auf die Nachricht reagieren können, um die Verfügbarkeit der benötigten Ressourcen und Kapazitäten zu überprüfen.</p>
          </div>
        );
      case 'Tb':
        return (
          <div>
            <p>Die Transportberechnung ist eine Systemkomponente, die Informationen über die Verfügbarkeit von Transportmöglichkeiten enthält. Mit ihrer Hilfe kann überprüft werden, ob ein bestimmtes Transportmittel zu einem bestimmten Zeitpunkt im System verfügbar ist. In der dargestellten Architektur empfängt die Transportberechnung Anfragen über einen Publish/Subscribe-Channel.</p>
            <br />
            <p>Sobald die Transportberechnung eine Anfrage erhält, verarbeitet sie diese und veröffentlicht die Antwort über einen anderen Publish/Subscribe-Channel. Diese Antwort kann von mehreren abonnierten Systemkomponenten empfangen werden, wie zum Beispiel dem Aggregator der Versandberechnung. Dadurch wird sichergestellt, dass alle relevanten Komponenten über die Verfügbarkeit von Transportmitteln informiert sind und entsprechende Entscheidungen treffen können.</p>
          </div>
        );
      case 'Ca2Tb':
        return (
          <div>
            <p>Dieser Channel-Adapter wird aktiviert, sobald die Systemkomponente "Transportberechnung" eine Antwort auf eine Anfrage zur Verfügbarkeit von Transportmöglichkeiten bereitstellen möchte. Der Adapter empfängt die entsprechenden Daten und veröffentlicht die Antwort über den zugewiesenen Publish/Subscribe-Channel.</p>
            <br />
            <p>Durch diesen Mechanismus kann die Nachricht von mehreren abonnierten Komponenten, wie beispielsweise der Versandberechnung oder anderen relevanten Systemen, empfangen werden. Dies ermöglicht eine flexible und skalierbare Kommunikation, bei der die Antwort von mehreren Empfängern simultan verarbeitet werden kann.</p>
          </div>
        );
      case 'AggVer':
        return (
          <div>
            <p>In der dargestellten Architektur übernimmt der Aggregator Versandberechnung eine zentrale Rolle bei der Zusammenführung von Informationen aus verschiedenen Systemkomponenten. Er empfängt Antworten von der Transportberechnung und anderen relevanten Quellen, die über Publish/Subscribe-Channels an ihn gesendet werden.</p>
            <br />
            <p>Der Aggregator kombiniert diese eingehenden Datenquellen, um eine umfassende Bewertung der Versandmöglichkeiten zu erstellen. Dabei verarbeitet er die Daten nach einer vordefinierten Logik, um sicherzustellen, dass alle notwendigen Informationen korrekt zusammengeführt werden. Der Aggregator ist so ausgelegt, dass er die Asynchronität der eintreffenden Antworten handhaben kann, sodass eine konsistente Versandentscheidung getroffen wird.</p>
            <br />
            <p>Das Ergebnis der Aggregation wird schließlich als konsolidierte Antwort weitergeleitet, die bestimmt, ob der Versand eines Artikels zu einem bestimmten Zeitpunkt möglich ist oder nicht. Diese konsolidierte Information dient als Grundlage für weitere Entscheidungen und Prozesse in der Versandabwicklung.</p>
          </div>
        );
      case 'ResVer':
        return (
          <div>
            <p>Diese Nachricht stellt das Ergebnis der Versandberechnung dar. Hier wird die Ausgabe des Aggregators, die darüber informiert, ob der gewünschte Artikel zu einem bestimmten Zeitpunkt gebaut werden kann oder nicht, zurückgegeben.</p>
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