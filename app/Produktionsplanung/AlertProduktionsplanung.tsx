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


  const AlertProduktionsplanung = ({ open, handleClose, component }: AlertComponentsProps) => {

    const getAlertTextHeader = (component: string) => {
        switch (component) {
            case 'Aggregator':
                return 'Aggregator';
            default:
                return '';
        }
    };

    const getAlertTextBody = (component: string) => {
      switch (component) {
        case 'Aggregator':
            return 'Test123';
        default:
            return '';
      }
    };

  
    return (
      <div className="AlertPp" id="idAlertPp">
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
  
  export default AlertProduktionsplanung;