'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


export default function HelpHeader() {

    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <React.Fragment>
            <HelpOutlineIcon onClick={handleClickOpen} style={{ cursor: 'pointer' }} />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <p>Vorgehensweise bei der Nutzung der Anwendung</p>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div>
                            <p>(Dieses Fenster kann jederzeit über das "?" oben rechts geöffnet werden)</p>
                            <br />
                            <p><strong>Szenario Überblick:</strong></p>
                            <p>Zu Beginn solltest du dir einen Überblick über das aktuelle Szenario verschaffen. Dieses Szenario ist mit dem Point-to-Point-Kommunikationsmodell umgesetzt. Du kannst das Kommunikationsmodell von Point-to-Point auf Publish/Subscribe über die Schaltfläche oben links ändern. Dies soll aber erst später gemacht werden.</p>
                            <br />
                            <p><strong>Erkunden des Point-to-Point-Modells:</strong></p>
                            <p>Zuerst empfiehlt es sich, das Szenario im Point-to-Point-Modell zu erkunden und die einzelnen Komponenten näher kennenzulernen. Klicke dafür einfach auf die Symbole, um Informationen über die Komponenten anzeigen zu lassen. Beginne am besten bei den Symbolen in der <strong>Legende</strong>, um dir einen allgemeinen Überblick über die Komponenten zu verschaffen.</p>
                            <br />
                            <p><strong>Spezifische Informationen zu Komponenten:</strong></p>
                            <p>Nachdem du einen ersten Überblick hast, kannst du dir spezifische Informationen zu den einzelnen Komponenten ansehen, um das abgebildete Szenario besser zu verstehen.</p>
                            <br />
                            <p><strong>Szenario erweitern:</strong></p>
                            <p>Um das Szenario zu erweitern, klicke auf das "+"-Symbol am linken Rand. Zuerst kannst du die Kapazitätsplanung hinzufügen, gefolgt von der Versandberechnung.</p>
                            <br />
                            <p><strong>Datenfluss visualisieren:</strong></p>
                            <p>Nachdem alles hinzugefügt wurde, kannst du den Datenfluss der Geschäftsprozesse visualisieren, indem du auf "Nachricht versenden" klickst. So werden die Datenpakete des ausgewählten Geschäftsprozesses angezeigt.</p>
                            <br />
                            <p><strong>Wechsel zum Publish/Subscribe-Modell:</strong></p>
                            <p>Wenn du den gesamten Prozess erkundet hast, kannst du das Kommunikationsmodell auf Publish/Subscribe umstellen und den Ablauf erneut durchgehen, um die Unterschiede zu verstehen.</p>
                            <br />
                            <p><strong>Verständnis der Unterschiede:</strong></p>
                            <p>Am Ende solltest du in der Lage sein, die Unterschiede zwischen den beiden Kommunikationsmodellen zu erkennen und ihre Auswirkungen auf die Erweiterbarkeit besser zu verstehen.</p>
                            <br />
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>




    );

}
