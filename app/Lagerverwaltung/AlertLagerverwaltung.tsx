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


  const AlertLagerverwaltung = ({ open, handleClose, component }: AlertComponentsProps) => {

    const getAlertTextHeader = (component: string) => {
        switch (component) {
            case 'caAnfrage':
                return 'Channel-Adapter';
            case 'caAntwort':
                return 'Channel-Adapter';
            case 'p2pAnfrage':
                return 'Point-to-Point-Channel'; 
            case 'p2pAntwort':
                return 'Point-to-Point-Channel';  
            case 'p2pAnfrageLvV':
              return 'Point-to-Point-Channel';
            default:
                return '';
        }
    };

    const getAlertTextBody = (component: string) => {
      switch (component) {
        case 'caAnfrage':
          return 'Channel Adapter werden benötigt, um eine Schnittstelle zu einem System bereitzustellen. In diesem Fall handelt es sich um die Baubarkeitsberechnung. Der Channel Adapter konvertiert Anfragen der Baubarkeitsberechnung in ein verwendbares Format und leitet sie entsprechend weiter.';
        case 'caAntwort':
          return 'Dieser Channel Adapter empfängt Anfragen aus der Lagerverwaltung und konvertiert sie in ein verwendbares Format für den Point-to-Point-Channel. Der Channel Adapter stellt sicher, dass die Anfragen für Teile korrekt umgewandelt und an den entsprechenden Antwortkanal weitergeleitet werden.';
        case 'p2pAnfrage':
            return 'Der Point-to-Point-Channel "Anfrage_Teile" dient als Kommunikationsweg für spezifische Anfragen zwischen zwei Systemkomponenten: der Baubarkeitsberechnung und der Lagerverwaltung. In diesem Kanal werden Anfragen bezüglich benötigter Teile übermittelt. Der Kanal stellt eine direkte Verbindung zwischen der Baubarkeitsberechnung und der Lagerverwaltung her und ermöglicht die Übertragung von Anfragen für spezifische Teile von der Baubarkeitsberechnung zur Lagerverwaltung. Zudem sorgt der Kanal dafür, dass jede gesendete Anfrage auch sicher ankommt, indem er eine Punkt-zu-Punkt-Kommunikation sicherstellt. Dies bedeutet, dass die Nachricht genau einmal und nur von einem Empfänger verarbeitet wird.';  
        case 'p2pAntwort':
            return 'Der Point-to-Point-Channel "Antwort_Teile" fungiert als Kommunikationsweg für spezifische Antworten zwischen der Lagerverwaltung und der Baubarkeitsberechnung. Über diesen Kanal werden die Antworten bezüglich der angefragten Teile übermittelt. Der Kanal stellt eine direkte Verbindung zwischen der Lagerverwaltung und der Baubarkeitsberechnung her und ermöglicht die Übertragung von Antworten auf Anfragen für spezifische Teile. Der Point-to-Point-Channel sorgt dafür, dass jede gesendete Antwort sicher ankommt, indem er eine Punkt-zu-Punkt-Kommunikation sicherstellt. Dies bedeutet, dass die Nachricht genau einmal und nur von einem Empfänger verarbeitet wird.';  
        case 'p2pAnfrageLvV':
          return 'Hier wird noch ein Text eingefügt';
        default:
      return '';
      }
    };

  
    return (
      <div className="AlertLagerverwaltung" id="idAlertLagerverwaltung">
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
  
  export default AlertLagerverwaltung;