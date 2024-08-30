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


  const AlertKpV = ({ open, handleClose, component }: AlertComponentsProps) => {

    const getAlertTextHeader = (component: string) => {
        switch (component) {
            case 'KpVCa1':
                return 'Channel-Adapter';
            case 'KpVP2P1':
                return 'Point-to-Point-Channel'
            default:
                return '';
        }
    };

    const getAlertTextBody = (component: string) => {
      switch (component) {
        case 'KpVCa1':
            return (
              <div>
                <p>Dieser Channel-Adapter wird aktiviert, sobald der Geschäftsprozess "Versandberechnung" gestartet wird. Er sendet als Reaktion eine Anfrage bezüglich der Verfügbarkeit von Mitarbeitern an die Messaging-Komponente weiter. Dies ist notwendig, um sicherzustellen, dass ausreichend Personal zur Verfügung steht, um den Versand der Artikel abzuwickeln.</p>
                <br />
                <p>Im Kontext der Versandberechnung leitet der Channel-Adapter die Anfrage an die Kapazitätsplanung weiter, um die Verfügbarkeit der benötigten Mitarbeiter zu prüfen.</p>
              </div>
            );
        case 'KpVP2P1':
            return (
              <div>
                <p>In der dargestellten Architektur erfolgt die Kommunikation zwischen der Versandberechnung und der Kapazitätsplanung mithilfe eines Point-to-Point-Channels (P2P-Channel) namens "Anfrage_Mitarbeiter". Dieser Channel stellt sicher, dass die von der Versandberechnung gesendeten Nachrichten ausschließlich von der Kapazitätsplanung empfangen werden.</p>
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
  
  export default AlertKpV;