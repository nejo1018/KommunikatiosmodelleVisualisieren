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


  const AlertTransportberechnungV = ({ open, handleClose, component }: AlertComponentsProps) => {

    const getAlertTextHeader = (component: string) => {
        switch (component) {
            case 'caAnfrageTbV':
                return 'Channel-Adapter';
            case 'p2pAnfrageTbV':
                return 'Point-to-Point-Channel'
            case 'caAntwortTbV':
              return 'Channel-Adapter';
            case 'P2PAntwortTbV':
              return 'Point-to-Point-Channel'
            case 'AggregatorV':
              return 'Aggregator'
            default:
                return '';
        }
    };

    const getAlertTextBody = (component: string) => {
      switch (component) {
        case 'caAnfrageTbV':
            return '1';
        case 'p2pAnfrageTbV':
            return '2';
        case 'caAntwortTbV':
          return '3';
        case 'P2PAntwortTbV':
            return '4'
          case 'AggregatorV':
              return '5'
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
  
  export default AlertTransportberechnungV;