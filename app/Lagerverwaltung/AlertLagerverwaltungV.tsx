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


  const AlertLagerverwaltungV = ({ open, handleClose, component }: AlertComponentsProps) => {

    const getAlertTextHeader = (component: string) => {
        switch (component) {
            case 'p2pAnfrageLvV':
                return 'Point-to-Point-Channel';
            case 'CaAnfrageLvV':
                return 'Channel-Adapter'
            default:
                return '';
        }
    };

    const getAlertTextBody = (component: string) => {
      switch (component) {
        case 'p2pAnfrageLvV':
            return 'Test666';
        case 'CaAnfrageLvV':
            return '343434'
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
  
  export default AlertLagerverwaltungV;