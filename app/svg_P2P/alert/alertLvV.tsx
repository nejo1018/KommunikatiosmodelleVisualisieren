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


const AlertLvV = ({ open, handleClose, component }: AlertComponentsProps) => {

  const getAlertTextHeader = (component: string) => {
    switch (component) {
      case 'LvVCa1':
        return 'Channel-Adapter'
      case 'LvVP2P1':
        return 'Point-to-Point-Channel'
      default:
        return '';
    }
  };

  const getAlertTextBody = (component: string) => {
    switch (component) {
      case 'LvVCa1':
        return (
          <div>
            <p>Dieser Channel-Adapter wird aktiviert, sobald der Geschäftsprozess "Versandberechnung" gestartet wird. Er sendet als Reaktion eine Anfrage mit dem Artikel, der versendet werden soll, sowie einem Zeitpunkt, zu dem der Artikel verfügbar sein soll, an die Messaging-Komponente weiter.</p>
            <br />
            <p>Im Kontext der Baubarkeitsberechnung leitet der Channel-Adapter die Anfrage an die Lagerverwaltung weiter, um die Verfügbarkeit der benötigten Teile zu prüfen.</p>
          </div>
        );
      case 'LvVP2P1':
        return (
          <div>
            <p>In der dargestellten Architektur erfolgt die Kommunikation zwischen der Versandberechnung und der Lagerverwaltung mithilfe eines Point-to-Point-Channels (P2P-Channel) namens "Anfrage_Teile". Dieser Channel stellt sicher, dass die von der Versandberechnung gesendeteten Nachrichten ausschließlich von der Lagerverwaltung empfangen werden.</p>
            <br />
            <p>Der Point-to-Point-Channel gewährleistet, dass keine Nachrichten verloren gehen, da sie bei Bedarf erneut versendet werden können. Zudem wird durch die exklusive Kommunikation zwischen den definierten Endpunkten unbefugter Zugriff verhindert.</p>
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

export default AlertLvV;