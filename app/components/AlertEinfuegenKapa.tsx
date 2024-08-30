import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Kapa from '../Kapa/Kapa';
import CheckIcon from '@mui/icons-material/Check';
import CheckBoxLabel from '../components/checkboxLabel';

interface AlertEinfuegenKapaProps{
    Kapacounter: number;
    setKapacounter: (value: number) => void;
    id: string;
}

export default function AlertDialog({setKapacounter, Kapacounter, id}: AlertEinfuegenKapaProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setKapacounter(Kapacounter + 1);
    setOpen(true);
     

  };

  const handleClose = () => {
     if(Kapacounter < 4){  
        renderKapaComponent();
        handleClickOpen();
     }
    
    if(Kapacounter >= 4){
        setOpen(false);
    } 
    
  };

  const renderKapaComponent = () => {
    return <Kapa isVisible={Kapacounter} />;
  };

  return (
    <React.Fragment>

      {/* <Kapa isVisible={Kapacounter}/> */}
      {renderKapaComponent()}
      <CheckIcon onClick={handleClickOpen} style={{ cursor: 'pointer' }} id={id} />
      {/* <CheckBoxLabel onClick={handleClickOpen} style={{ cursor: 'pointer' }} /> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {(() => {
            switch (Kapacounter) {
              case 1:
                return "Hinzufügen eines neuen Systems";
              case 2:
                return "Kommunikationsstil implementieren.";
              case 3:
                return "Schnittstellen zur Verfügung stellen";
              default:
                return "Routen definieren";
            }
          })()}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
          {(() => {
            switch (Kapacounter) {
              case 1:
                return "Für den neuen Geschäftsprozess wird ein neues System benötigt, das uns Informationen über die Auslastung der Mitarbeiter liefert.";
              case 2:
                return "Es werden wieder neue Point-to-Point-Channel benötigt, um den Datenaustausch zu gewährleisten.";
              case 3:
                return "Um die anderen Systeme anzusprechen wird wieder eine Schnittstelle in Form eines Channel Adapters benötigt, der die Informationen aus dem jeweiligen System in einem lesbaren Datenformat zur Verfügung stellt.";
              default:
                return "Als letztes müssen noch alle Routen definiert werden, damit die Systeme miteinander kommunizieren können.";
            }
          })()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ok</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}