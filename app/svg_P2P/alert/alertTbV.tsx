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


  const AlertTbV = ({ open, handleClose, component }: AlertComponentsProps) => {

    const getAlertTextHeader = (component: string) => {
        switch (component) {
            case 'TbVCa1':
                return 'Channel-Adapter';
            case 'TbVP2P1':
                return 'Point-to-Point-Channel'
            case 'TbVCa2':
                return 'Channel-Adapter';
            case 'TbVTex':
                return 'Systemkomponente';
            case 'TbVP2P2':
                return 'Point-to-Point-Channel'
            default:
                return '';
        }
    };

    const getAlertTextBody = (component: string) => {
      switch (component) {
        case 'TbVCa1':
            return (
              <div>
                <p>Dieser Channel-Adapter wird aktiviert, sobald der Geschäftsprozess "Versandberechnung" gestartet wird. Er sendet eine Anfrage bezüglich der Verfügbarkeit der benötigten Transportmittel an die Messaging-Komponente weiter.</p>
                <br />
                <p>Im Kontext der Versandberechnung leitet der Channel-Adapter die Anfrage an die Transportberechnung weiter, um die Verfügbarkeit der benötigten Transportmittel zu überprüfen.</p>
              </div>
            );
        case 'TbVP2P1':
            return (
              <div>
                <p>In der dargestellten Architektur erfolgt die Kommunikation zwischen der Versandberechnung und der Transportberechnung mithilfe eines Point-to-Point-Channels (P2P-Channel) namens "Anfrage_Transport". Dieser Channel stellt sicher, dass die von der Versandberechnung gesendeten Nachrichten ausschließlich von der Transportberechnung empfangen werden.</p>
                <br />
                <p>Der Point-to-Point-Channel gewährleistet, dass keine Nachrichten verloren gehen, da sie bei Bedarf erneut versendet werden können. Zudem wird durch die exklusive Kommunikation zwischen den definierten Endpunkten unbefugter Zugriff verhindert.</p>
              </div>
            );
        case 'TbVCa2':
            return (
              <div>
                <p>Dieser Channel-Adapter wird aktiviert, sobald die Systemkomponente "Transportberechnung" eine Antwort über die Verfügbarkeit der Transportmittel senden möchte. Er leitet die Antwort über den Point-to-Point-Channel "Antwort_Transport" an die nächste Messaging-Komponente weiter, um sicherzustellen, dass die Antwort zuverlässig und sicher den Aggregator Versandberechnung erreicht.</p>
              </div>
            );
        case 'TbVTex':
            return (
              <div> 
                <p>Die Transportberechnung ist eine Systemkomponente, die Informationen über die Verfügbarkeit von Transportmöglichkeiten enthält. Mit ihrer Hilfe kann abgefragt werden, ob ein bestimmtes Transportmittel zu einem bestimmten Zeitpunkt im System verfügbar ist. In der dargestellten Architektur erhält die Transportberechnung Anfragen über den Point-to-Point-Channel "Anfrage_Transport" und sendet die Antworten über den Channel "Antwort_Transport" zurück an den entsprechenden Aggregator.</p>
              </div>
            );
        case 'TbVP2P2':
            return (
              <div>
                <p>In der dargestellten Architektur erfolgt die Kommunikation zwischen der Transportberechnung und dem Aggregator Versandberechnung mithilfe eines Point-to-Point-Channels (P2P-Channel) namens "Antwort_Transport". Dieser Channel stellt sicher, dass die von der Transportberechnung gesendeten Nachrichten ausschließlich vom Aggregator Versandberechnung empfangen werden.</p>
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
  
  export default AlertTbV;