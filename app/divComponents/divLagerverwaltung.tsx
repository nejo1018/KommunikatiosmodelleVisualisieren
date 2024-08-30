import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface LagerverwaltungProps {
  borderColor: string;
  borderWidth: string;
  borderStyle: string;
}

const LagerverwaltungComponent = ({ borderColor, borderWidth, borderStyle }: LagerverwaltungProps) => {
  const [currentBorderColor, setCurrentBorderColor] = useState('black');
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--border-color', currentBorderColor);
    document.documentElement.style.setProperty('--border-width', borderWidth);
    document.documentElement.style.setProperty('--border-style', borderStyle);
  }, [currentBorderColor, borderWidth, borderStyle]);

  const handleClick = () => {
    if(currentBorderColor === 'red'){
      setCurrentBorderColor('black');
    } else {
      setCurrentBorderColor('red');
    }    
  };

  const handleClickOpen = () => {
    handleClick();
    setOpen(true);
  };

  const handleClose = () => {
    handleClick();
    setOpen(false);
  };

  return (
    <React.Fragment>
    <div className="Lagerverwaltung" onClick={handleClickOpen} style={{ cursor: 'pointer', border: `var(--border-width) var(--border-style) var(--border-color)` }}>
      <p>Lagerverwaltung</p>
    </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Lagerverwaltung"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>Die Lagerverwaltung ist ein zentrales Element im dargestellten System. Sie empfängt Anfragen über den Point-to-Point-Channel, die von der Baubarkeitsberechnung kommen. Diese Anfragen betreffen die Verfügbarkeit der benötigten Teile für die Baubarkeitsberechnung. </p> 
            <br></br>
            <p>Die Lagerverwaltung prüft, ob die angeforderten Teile im Lager vorhanden sind. Je nachdem, ob die Teile vorhanden sind wird eine positive oder negative Rückmeldung über "Antwort_Teile" ebenfalls über einen Point-to-Point Channel an die nachfolgenden Prozesse gesendet. </p>
            <br></br>
            <p>Durch die Nutzung von Channel Adaptern wird die Kommunikation zwischen den verschiedenen Systemkomponenten reibungslos und effizient gestaltet. Die Lagerverwaltung spielt somit eine kritische Rolle in der Sicherstellung der Materialverfügbarkeit und trägt zur Gesamteffizienz des Produktionsprozesses bei. </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>      
    </React.Fragment>    
  );
};

export default LagerverwaltungComponent;