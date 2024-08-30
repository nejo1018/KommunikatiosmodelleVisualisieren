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
}


const AlertPp = ({ open, handleClose, component }: AlertComponentsProps) => {

  const getAlertTextHeader = (component: string) => {
    switch (component) {
      case 'PpCa1':
        return 'Channel-Adapter';
      case 'PpP2P1':
        return 'Point-to-Point-Channel'
      case 'PpTex':
        return 'Systemkomponente'
      case 'PpCa2':
        return 'Channel-Adapter';
      case 'PpP2P2':
        return 'Point-to-Point-Channel'
      default:
        return '';
    }
  };

  const getAlertTextBody = (component: string) => {
    switch (component) {
      case 'PpCa1':
        return (
          <div>
            <p>Dieser Channel-Adapter wird aktiviert, sobald der Geschäftsprozess "Baubarkeitsberechnung" gestartet wird. Er sendet als Reaktion eine Anfrage mit dem Artikel, der gebaut werden soll, sowie einem Zeitpunkt, zu dem der Artikel verfügbar sein soll, an die Messaging-Komponente weiter.</p>
            <br />
            <p>Im Kontext der Baubarkeitsberechnung leitet der Channel-Adapter die Anfrage an die Produktionsplanung weiter, um die Verfügbarkeit der benötigten Maschinen zu überprüfen.</p>
          </div>
        );
      case 'PpP2P1':
        return (
          <div>
            <p>In der dargestellten Architektur erfolgt die Kommunikation zwischen der Baubarkeitsberechnung und der Produktionsplanung mithilfe eines Point-to-Point-Channels (P2P-Channel) namens "Anfrage_Maschinen". Dieser Channel stellt sicher, dass die von der Baubarkeitsberechnung gesendeten Nachrichten ausschließlich von der Produktionsplanung empfangen werden.</p>
            <br />
            <p>Der Point-to-Point-Channel gewährleistet, dass keine Nachrichten verloren gehen, da sie bei Bedarf erneut versendet werden können. Zudem wird durch die exklusive Kommunikation zwischen den definierten Endpunkten unbefugter Zugriff verhindert.</p>
          </div>
        );
      case 'PpTex':
        return (
          <div>
            <p>Die Produktionsplanung ist eine Systemkomponente, die Informationen über die Verfügbarkeit und Planung von Maschinen enthält. Mit ihrer Hilfe kann abgefragt werden, ob eine bestimmte Maschine zu einem bestimmten Zeitpunkt im System verfügbar ist. In der dargestellten Architektur erhält die Produktionsplanung Anfragen über den Point-to-Point-Channel "Anfrage_Maschinen" und sendet die Antworten über den Channel "Antwort_Produktion" zurück an den Aggregator Baubarkeitsberechnung.</p>
          </div>
        );
      case 'PpCa2':
        return (
          <div>
            <p>Dieser Channel-Adapter wird aktiviert, sobald die Systemkomponente "Produktionsplanung" eine Antwort über die Verfügbarkeit der Maschinen senden möchte. Er leitet die Antwort über den Point-to-Point-Channel "Antwort_Produktion" an die nächste Messaging-Komponente weiter, um sicherzustellen, dass die Antwort zuverlässig und sicher den Aggregator Baubarkeitsberechnung erreicht.</p>
          </div>
        );
      case 'PpP2P2':
        return (
          <div>
            <p>In der dargestellten Architektur erfolgt die Kommunikation zwischen der Produktionsplanung und dem Aggregator Baubarkeitsberechnung mithilfe eines Point-to-Point-Channels (P2P-Channel) namens "Antwort_Produktion". Dieser Channel stellt sicher, dass die von der Produktionsplanung gesendeten Nachrichten ausschließlich vom Aggregator Baubarkeitsberechnung empfangen werden.</p>
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

export default AlertPp;