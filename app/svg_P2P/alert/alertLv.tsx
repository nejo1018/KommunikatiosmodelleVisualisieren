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


const AlertLv = ({
  open,
  handleClose,
  component,
  isVisibleP2P
}: AlertComponentsProps) => {

  const getAlertTextHeader = (component: string) => {
    switch (component) {
      case 'LvCa1':
        return 'Channel-Adapter';
      case 'LvP2P1':
        return 'Point-to-Point-Channel'
      case 'LvCa2':
        if (isVisibleP2P != 8) {
          return 'Channel-Adapter';
        } else {
          return 'Channel-Adapter (nach Hinzufügung der Versandberechnung)';
        }
      case 'LvTex':
        return 'Systemkomponente';
      case 'LvP2P2':
        if (isVisibleP2P != 8) {
          return 'Point-to-Point-Channel'
        } else {
          return 'Point-to-Point-Channel (nach Hinzufügung der Versandberechnung)'
        }

      default:
        return '';
    }
  };

  const getAlertTextBody = (component: string) => {
    switch (component) {
      case 'LvCa1':
        return (
          <div>
            <p>Dieser Channel-Adapter wird aktiviert, sobald der Geschäftsprozess "Baubarkeitsberechnung" gestartet wird. Er sendet als Reaktion eine Anfrage mit dem Artikel, der gebaut werden soll, sowie einem Zeitpunkt, zu dem der Artikel verfügbar sein soll, an die Messaging-Komponente weiter.</p>
            <br />
            <p>Im Kontext der Baubarkeitsberechnung leitet der Channel-Adapter die Anfrage an die Lagerverwaltung weiter, um die Verfügbarkeit der benötigten Teile zu überprüfen.</p>
          </div>
        );
      case 'LvP2P1':
        return (
          <div>
            <p>In der dargestellten Architektur erfolgt die Kommunikation zwischen der Baubarkeitsberechnung und der Lagerverwaltung mithilfe eines Point-to-Point-Channels (P2P-Channel) namens "Anfrage_Teile". Dieser Channel stellt sicher, dass die von der Baubarkeitsberechnung gesendeten Nachrichten ausschließlich von der Lagerverwaltung empfangen werden.</p>
            <br />
            <p>Der Point-to-Point-Channel gewährleistet, dass keine Nachrichten verloren gehen, da sie bei Bedarf erneut versendet werden können. Zudem wird durch die exklusive Kommunikation zwischen den definierten Endpunkten unbefugter Zugriff verhindert.</p>
          </div>
        );
      case 'LvCa2':
        if (isVisibleP2P != 8) {
          return (
            <div>
              <p>Dieser Channel-Adapter wird aktiviert, sobald die Systemkomponente "Lagerverwaltung" eine Antwort über den Bestand senden möchte. Er leitet die Antwort über den Point-to-Point-Channel "Antwort_Teile" an die nächste Messaging-Komponente weiter, um sicherzustellen, dass die Antwort zuverlässig und sicher den entsprechenden Aggregator erreicht.</p>
            </div>
          );
        } else {
          return (
            <div>
              <p>Dieser Channel-Adapter wird aktiviert, sobald die Systemkomponente "Lagerverwaltung" eine Antwort über den Bestand senden möchte. Der Adapter leitet diese Antwort über den Point-to-Point-Channel "Antwort_Teile" an den entsprechenden Aggregator weiter. Nach der Hinzufügung der Versandberechnung stellt der Channel-Adapter sicher, dass die Antwort entweder an den Aggregator der Baubarkeitsberechnung oder der Versandberechnung gesendet wird, je nachdem, welcher Prozess die Anfrage initiiert hat. Dies gewährleistet, dass die Informationen zuverlässig und zielgerichtet an die jeweils relevante Systemkomponente weitergeleitet werden.</p>
            </div>
          );
        }

      case 'LvTex':
        return (
          <div>
            <p>Die Lagerverwaltung ist eine Systemkomponente, die Informationen über den Bestand von Artikeln enthält. Mit ihrer Hilfe kann abgefragt werden, ob ein bestimmter Artikel zu einem bestimmten Zeitpunkt im System verfügbar ist. In der dargestellten Architektur erhält die Lagerverwaltung Anfragen über den Point-to-Point-Channel "Anfrage_Teile" und sendet die Antworten über den Channel "Antwort_Teile" zurück an den Aggregator Baubarkeitsberechnung.</p>
          </div>
        );
      case 'LvP2P2':
        if (isVisibleP2P != 8) {
          return (
            <div>
              <p>In der dargestellten Architektur erfolgt die Kommunikation zwischen der Lagerverwaltung und dem Aggregator Baubarkeitsberechnung mithilfe eines Point-to-Point-Channels (P2P-Channel) namens "Antwort_Teile". Dieser Channel stellt sicher, dass die von der Lagerverwaltung gesendeten Nachrichten ausschließlich von dem entsprechenden Aggregator empfangen werden.</p>
            </div>
          );

        } else {
          return (
            <div>
              <p>In der dargestellten Architektur erfolgt die Kommunikation zwischen der Lagerverwaltung und den relevanten Aggregatoren (Baubarkeitsberechnung oder Versandberechnung) mithilfe eines Point-to-Point-Channels (P2P-Channel) namens "Antwort_Teile". Dieser Channel stellt sicher, dass die von der Lagerverwaltung gesendeten Nachrichten ausschließlich von dem entsprechenden Aggregator empfangen werden, abhängig davon, welcher Prozess (Baubarkeitsberechnung oder Versandberechnung) die ursprüngliche Anfrage gestellt hat.</p>
            </div>
          );


        }

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

export default AlertLv;