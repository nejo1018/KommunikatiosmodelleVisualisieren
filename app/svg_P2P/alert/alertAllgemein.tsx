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
  isVisibleP2P: number;
}


const AlertAllgemein = ({ open, handleClose, component, isVisibleP2P }: AlertComponentsProps) => {

  const getAlertTextHeader = (component: string) => {
    switch (component) {
      case 'Baubarkeit':
        return 'Baubarkeitsberechnung';
      case 'Versand':
        return 'Versandberechnung'
      case 'AggBau':
        if (isVisibleP2P < 3) {
          return 'Aggregator Baubarkeitsberechnung'
        } else {
          return 'Aggregator Baubarkeitsberechnung (nach Hinzufügung der Kapazitätsplanung)'
        }
      case 'AggVer':
        return 'Aggregator Versandberechnung'
      case 'ResBau':
        return 'Ergebnis Baubarkeitsberechnung'
      case 'ResVer':
        return 'Ergebnis Versandberechnung'
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
        )
      case 'Versand':
        return (
          <div>
            <p>Die Versandberechnung ist ein Geschäftsprozess, dessen Ergebnis eine Aussage darüber ist, ob ein bestimmter Artikel versandt werden kann oder nicht.</p>
            <br />
            <p>Um diese Aussage treffen zu können, werden Informationen aus verschiedenen Teilsystemen benötigt.</p>
            <br />
            <p>Für den Start des Prozesses sind verschiedene Eingabedaten erforderlich: Zum einen der Artikel, der versandt werden soll, und zum anderen der Zeitpunkt, zu dem der Artikel versandt werden soll.</p>
          </div>
        );
      case 'AggBau':
        if (isVisibleP2P < 3) {
          return (
            <div>
              <p>In der dargestellten Architektur spielt der Aggregator Baubarkeitsberechnung eine zentrale Rolle. Er empfängt Antworten von der Lagerverwaltung und der Produktionsplanung über die Point-to-Point-Channels "Antwort_Teile" und "Antwort_Produktion". Der Aggregator führt diese verschiedenen Antworten zusammen, um eine konsistente und umfassende Antwort zu erstellen.</p>
              <br />
              <p>Der Aggregator verarbeitet die eingehenden Daten nach vordefinierter Anwendungslogik, um sicherzustellen, dass alle relevanten Informationen korrekt zusammengeführt werden. Da die Antworten der Teilsysteme asynchron eintreffen können, ist der Aggregator darauf ausgelegt, diese Asynchronität zu handhaben und die Daten so zu synchronisieren, dass eine einheitliche Antwort generiert wird.</p>
              <br />
              <p>Die konsolidierte Antwort des Aggregators wird schließlich als Ergebnis weitergeleitet, wo sie für weitere Entscheidungen und Prozesse genutzt wird.</p>
            </div>
          );
        } else {
          return (
            <div>
              <p>In der dargestellten Architektur spielt der Aggregator Baubarkeitsberechnung eine zentrale Rolle. Er empfängt Antworten von der Lagerverwaltung, der Produktionsplanung und der Kapazitätsplanung über die Point-to-Point-Channels "Antwort_Teile", "Antwort_Produktion" und "Antwort_Mitarbeiter". Der Aggregator führt diese verschiedenen Antworten zusammen, um eine konsistente und umfassende Antwort zu erstellen.</p>
              <br />
              <p>Der Aggregator verarbeitet die eingehenden Daten nach vordefinierter Anwendungslogik, um sicherzustellen, dass alle relevanten Informationen korrekt zusammengeführt werden. Da die Antworten der Teilsysteme asynchron eintreffen können, ist der Aggregator darauf ausgelegt, diese Asynchronität zu handhaben und die Daten so zu synchronisieren, dass eine einheitliche Antwort generiert wird.</p>
              <br />
              <p>Die konsolidierte Antwort des Aggregators wird schließlich als Ergebnis weitergeleitet, wo sie für weitere Entscheidungen und Prozesse genutzt wird.</p>
            </div>
          )
        }
      case 'AggVer':
        return (
          <div>
            <p>In der dargestellten Architektur spielt der Aggregator Versandberechnung eine zentrale Rolle. Er empfängt Antworten von der Kapazitätsplanung, der Lagerverwaltung und der Transportberechnung über die Point-to-Point-Channels "Antwort_Mitarbeiter", "Antwort_Teile" und "Antwort_Transport". Der Aggregator führt diese verschiedenen Antworten zusammen, um eine konsistente und umfassende Versandberechnung zu erstellen.</p>
            <br />
            <p>Der Aggregator verarbeitet die eingehenden Daten nach einer vordefinierten Anwendungslogik, um sicherzustellen, dass alle relevanten Informationen korrekt zusammengeführt werden. Da die Antworten der Teilsysteme asynchron eintreffen können, ist der Aggregator darauf ausgelegt, diese Asynchronität zu handhaben und die Daten so zu synchronisieren, dass eine einheitliche Versandberechnung generiert wird.</p>
            <br />
            <p>Die konsolidierte Versandberechnung des Aggregators wird schließlich als Ergebnis weitergeleitet, wo sie für weitere Entscheidungen und Prozesse im Kontext des Versands genutzt wird.</p>
          </div>
        );
      case 'ResBau':
        return (
          <div>
            <p>Diese Nachricht stellt das Ergebnis der Baubarkeitsberechnung dar. Hier wird die Ausgabe des Aggregators, die darüber informiert, ob der gewünschte Artikel zu einem bestimmten Zeitpunkt gebaut werden kann oder nicht, zurückgegeben.</p>
          </div>
        );
      case 'ResVer':
        return (
          <div>
            <p>Diese Nachricht stellt das Ergebnis der Versandberechnung dar. Sie enthält die konsolidierte Information des Aggregators darüber, ob der Versand der Artikel basierend auf der Verfügbarkeit von Ressourcen, Lagerbeständen und Transportkapazitäten durchgeführt werden kann oder nicht.</p>
            <br />
            <p>Dieses Ergebnis dient als Entscheidungsgrundlage für das Versandmanagement, um festzulegen, ob der geplante Versand weiterverfolgt werden kann oder ob Anpassungen notwendig sind.</p>
          </div>
        );
      default:
        return 'default case';
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