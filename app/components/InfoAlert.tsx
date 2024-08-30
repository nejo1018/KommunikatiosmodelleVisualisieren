'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import InfoIcon from '@mui/icons-material/InfoOutlined';

interface InfoProps {
  selectedModel: string;
  isVisibleP2P: number;
  isVisiblePubSub: number;
}

export default function AlertDialog({ selectedModel, isVisibleP2P, isVisiblePubSub }: InfoProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getAlertTextBody = (selectedModel: string, isVisibleP2P: number, isVisiblePubSub: number) => {
    if (selectedModel === 'Point-to-Point') {
      switch (isVisibleP2P) {
        case 0:
          return (
            <div>
              <p>In der dargestellten Architektur wird gezeigt, was passiert, sobald ein Geschäftsprozess startet, der verschiedene Informationen benötigt, um eine Antwort geben zu können.</p>
              <br />
              <p>Aktuell gibt es in der Architektur den Geschäftsprozess "Baubarkeitsberechnung", der Informationen aus den Teilsystemen "Lagerverwaltung" und "Produktionsplanung" benötigt, um zu bestimmen, ob ein Artikel zu einem bestimmten Zeitpunkt gebaut werden kann.</p>
            </div>
          )
        case 1:
          return 'Point-to-Point-Architektur';
        case 2:
          return 'Point-to-Point-Architektur';
        case 3:
          return 'Point-to-Point-Architektur';
        case 4:
          return 'Point-to-Point-Architektur';
        default:
          return '';
      }
    } else {
      switch (isVisiblePubSub) {
        case 0:
          return 'Publish/Subscribe-Architektur';
        case 1:
          return 'Publish/Subscribe-Architektur';
        case 2:
          return 'Publish/Subscribe-Architektur';
        case 3:
          return 'Publish/Subscribe-Architektur';
        case 4:
          return 'Publish/Subscribe-Architektur';
        default:
          return '';
      }
    }

  };



  return (
    <React.Fragment>
      <InfoIcon onClick={handleClickOpen} style={{ cursor: 'pointer' }} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p>Beschreibung der Architektur</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {getAlertTextBody(selectedModel, isVisibleP2P, isVisiblePubSub)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}