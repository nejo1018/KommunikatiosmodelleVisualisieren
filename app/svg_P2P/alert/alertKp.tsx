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


const AlertKp = ({ open,
  handleClose,
  component,
  isVisibleP2P
}: AlertComponentsProps) => {

  const getAlertTextHeader = (component: string) => {
    switch (component) {
      case 'KpCa1':
        return 'Channel-Adapter';
      case 'KpP2P1':
        return 'Point-to-Point-Channel'
      case 'KpTex':
        return 'Systemkomponente'
      case 'KpCa2':
        if (isVisibleP2P != 8) {
          return 'Channel-Adapter';
        } else {
          return 'Channel-Adapter (nach Hinzufügung der Versandberechnung)';
        }

      case 'KpP2P2':
        if (isVisibleP2P != 8) {
          return 'Point-to-Point-Channel'
        } else {
          return 'Point-to-Point-Channel (nach Hinzufügung der Versandberechnung)';
        }

      default:
        return '';
    }
  };

  const getAlertTextBody = (component: string) => {
    switch (component) {
      case 'KpCa1':
        return (
          <div>
            <p>Dieser Channel-Adapter wird aktiviert, sobald der Geschäftsprozess "Baubarkeitsberechnung" gestartet wird. Er sendet eine Anfrage bezüglich der Verfügbarkeit der benötigten Mitarbeiter an die Messaging-Komponente weiter.</p>
            <br />
            <p>Im Kontext der Baubarkeitsberechnung leitet der Channel-Adapter die Anfrage an die Kapazitätsplanung weiter, um die Verfügbarkeit der benötigten Mitarbeiter zu überprüfen.</p>
          </div>
        );
      case 'KpP2P1':
        return (
          <div>
            <p>In der dargestellten Architektur erfolgt die Kommunikation zwischen der Baubarkeitsberechnung und der Kapazitätsplanung mithilfe eines Point-to-Point-Channels (P2P-Channel) namens "Anfrage_Mitarbeiter". Dieser Channel stellt sicher, dass die von der Baubarkeitsberechnung gesendeten Nachrichten ausschließlich von der Kapazitätsplanung empfangen werden.</p>
            <br />
            <p>Der Point-to-Point-Channel gewährleistet, dass keine Nachrichten verloren gehen, da sie bei Bedarf erneut versendet werden können. Zudem wird durch die exklusive Kommunikation zwischen den definierten Endpunkten unbefugter Zugriff verhindert.</p>
          </div>
        );
      case 'KpTex':
        return (
          <div>
            <p>Die Kapazitätsplanung ist eine Systemkomponente, die Informationen über die Verfügbarkeit von Mitarbeitern enthält. Mit ihrer Hilfe kann abgefragt werden, ob ein bestimmter Mitarbeiter zu einem bestimmten Zeitpunkt im System verfügbar ist. In der dargestellten Architektur erhält die Kapazitätsplanung Anfragen über den Point-to-Point-Channel "Anfrage_Mitarbeiter" und sendet die Antworten über den Channel "Antwort_Mitarbeiter" zurück an den entsprechenden Aggregator.</p>
          </div>
        );
      case 'KpCa2':
        if (isVisibleP2P != 8) {
          return (
            <div>
              <p>Dieser Channel-Adapter wird aktiviert, sobald die Systemkomponente "Kapazitätsplanung" eine Antwort über die Verfügbarkeit der Mitarbeiter senden möchte. Er leitet die Antwort über den Point-to-Point-Channel "Antwort_Mitarbeiter" an die nächste Messaging-Komponente weiter, um sicherzustellen, dass die Antwort zuverlässig und sicher den entsprechenden Aggregator erreicht.</p>
            </div>
          );
        } else {
          return (
            <div>
              <p>Dieser Channel-Adapter wird aktiviert, sobald die Systemkomponente "Kapazitätsplanung" eine Antwort über die Verfügbarkeit der Mitarbeiter senden möchte. Der Adapter leitet diese Antwort über den Point-to-Point-Channel "Antwort_Mitarbeiter" an den entsprechenden Aggregator weiter. Je nach dem, welcher Prozess (Baubarkeitsberechnung oder Versandberechnung) die ursprüngliche Anfrage gestellt hat, stellt der Channel-Adapter sicher, dass die Antwort zuverlässig und sicher den richtigen Aggregator erreicht.</p>
            </div>
          );
        }

      case 'KpP2P2':
        if (isVisibleP2P != 8) {
          return (
            <div>
              <p>In der dargestellten Architektur erfolgt die Kommunikation zwischen der Kapazitätsplanung und dem Aggregator Baubarkeitsberechnung mithilfe eines Point-to-Point-Channels (P2P-Channel) namens "Antwort_Mitarbeiter". Dieser Channel stellt sicher, dass die von der Kapazitätsplanung gesendeten Nachrichten ausschließlich von dem entsprechenden Aggregator empfangen werden.</p>
            </div>
          );
        } else {
          return (
            <div>
              <p>In der dargestellten Architektur erfolgt die Kommunikation zwischen der Kapazitätsplanung und den relevanten Aggregatoren (Baubarkeitsberechnung oder Versandberechnung) mithilfe eines Point-to-Point-Channels (P2P-Channel) namens "Antwort_Mitarbeiter". Dieser Channel stellt sicher, dass die von der Kapazitätsplanung gesendeten Nachrichten ausschließlich von dem entsprechenden Aggregator empfangen werden, abhängig davon, welcher Prozess (Baubarkeitsberechnung oder Versandberechnung) die ursprüngliche Anfrage gestellt hat.</p>
            </div>
          )
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

export default AlertKp;