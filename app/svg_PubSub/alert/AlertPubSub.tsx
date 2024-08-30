'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Draggable from 'react-draggable';
import Paper from '@mui/material/Paper';

interface AlertComponentsProps {
    open: boolean;
    handleClose: () => void;
    isVisiblePubSub: number;
    handleBackPubSub: () => void;
    handleNextPubSub: () => void;
    handleXPubSub: () => void;
}

const PaperComponent = (props: any) => {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
};

const AlertP2P = ({
    open,
    handleClose,
    isVisiblePubSub,
    handleBackPubSub,
    handleNextPubSub,
    handleXPubSub,
}: AlertComponentsProps) => {

    const getAlertTextHeader = (component: number) => {
        switch (isVisiblePubSub) {
            case 1:
                return 'Kapazitätsplanung hinzufügen';
            case 2:
                return 'Versandberechnung hinzufügen';
            case 3:
                return 'Transportberechnung hinzufügen';
            case 4:
                return 'Aggregator einfügen';
            case 5:
                return 'Integration der Transportberechnung in den Geschäftsprozess';
            case 6:
                return 'Systemkomponente hinzufügen';
            case 7:
                return 'Systemkomponente hinzufügen';
            case 8:
                return 'Systemkomponente hinzufügen';
            default:
                return '';
        }
    };

    const getAlertTextBody = (component: number) => {
        switch (isVisiblePubSub) {
            case 1:
                return (
                    <div>
                        <p>Wie bei dem Point-to-Point-Kommunikationsmodell soll gezeigt werden, wie der bestehende Geschäftsprozess der Baubarkeitsberechnung erweitert werden kann.</p>
                        <br />
                        <p>Hierfür definieren wir, dass zusätzliche Informationen aus der Kapazitätsplanung benötigt werden, um eine fundierte Aussage über die Baubarkeitsberechnung treffen zu können.</p>
                        <br />
                        <p>Zunächst wird die Systemkomponente Kapazitätsplanung hinzugefügt, die Informationen darüber bereitstellt, ob Mitarbeiter verfügbar sind oder nicht. Die Kapazitätsplanung abonniert im Publish/Subscribe-Modell die Baubarkeitsberechnung, wodurch sie nun eine Kopie aller Nachrichten erhält, die von der Baubarkeitsberechnung ausgehen.</p>
                        <br />
                        <p>Ebenso muss der Aggregator die Kapazitätsplanung abonnieren, um eine Kopie aller Nachrichten zu erhalten, die von der Kapazitätsplanung gesendet werden. Hierfür muss die Anwendungslogik im Aggregator angepasst werden, damit dieser die Ergebnisse der Kapazitätsplanung berücksichtigt.</p>
                        <br />
                        <p>Sobald diese Schritte abgeschlossen sind, ist die Kapazitätsplanung nun fester Bestandteil der Baubarkeitsberechnung.</p>
                        <br />
                        <p>Im nächsten Schritt wird die bestehende Architektur um die Versandberechnung erweitert. Man könnte dieses Fenster nun schließen um sich die aktuelle Architektur genauer anzusehen. Ansonsten kann auch sofort mit der Versandberechnung weitergemacht werden, indem man auf "weiter" klickt.</p>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <p>Um zu zeigen, wie ein neuer Geschäftsprozess hinzugefügt werden kann, der teilweise die selben Systemkomponenten benötigt, definieren wir einen neuen Geschäftsprozess "Versandberechnung".</p>
                        <br />
                        <p>Dieser Geschäftsprozess soll ein Ergebnis liefern, ob ein bestimmter Artikel versandbereit ist. Hierfür werden unter anderem wieder Informationen aus der Lagerverwaltung benötigt, die bereits bei der Baubarkeitsberechnung verwendet wurden.</p>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <p>Für den Geschäftsprozess "Versandberechnung" werden zusätzliche Informationen über den Transport benötigt.</p>
                        <br />
                        <p>Dafür muss eine neue Systemkomponente hinzugefügt werden, die Auskunft darüber geben kann, ob Transportmittel wie ein LKW für einen bestimmten Zeitraum zur Verfügung stehen.</p>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <p>Um die Ergebnisse des neuen Geschäftsprozesses Versandberechnung verarbeiten zu können, wird ein neuer Aggregator benötigt. Dieser Aggregator hat die Aufgabe, die Antworten der einzelnen Teilsysteme, die an der Versandberechnung beteiligt sind, zu sammeln und zu einem einzigen konsolidierten Ergebnis zusammenzuführen. Dadurch wird sichergestellt, dass alle relevanten Informationen berücksichtigt werden und ein umfassendes Resultat zur Verfügung steht.</p>
                    </div>
                );
            case 5:
                return (
                    <div>
                        <p>Um die neue Systemkomponente Transportberechnung mithilfe des Publish/Subscribe-Modells in den Geschäftsprozess zu integrieren, muss die Transportberechnung (Subscriber) die Versandberechnung (Publisher) abonnieren.</p>
                        <br />
                        <p>Dadurch erhält die Transportberechnung eine Kopie aller Nachrichten, die von der Versandberechnung gesendet werden.</p>
                        <br />
                        <p>Durch das Publish/Subscribe-Modell ist es nicht erforderlich, eine explizite Verbindung wie im Point-to-Point-Modell einzurichten. Die beiden Komponenten Versandberechnung und Transportberechnung müssen sich nicht einmal kennen, was eine lose Kopplung zwischen diesen Komponenten ermöglicht.</p>
                        <br />
                        <p>Dadurch ist es mit wenig Aufwand möglich, neue Komponenten in die bestehende Architektur zu integrieren.</p>
                    </div>
                )
            case 6:
                return (
                    <div>
                        <p>Um die Integration des neuen Geschäftsprozesses in die bestehende Architektur abzuschließen, muss der Aggregator der Versandberechnung die Ergebnisse der Transportberechnung erhalten.</p>
                        <br />
                        <p>Dafür muss der Aggregator der Versandberechnung (Subscriber) die Transportberechnung (Publisher) abonnieren, um eine Kopie aller Nachrichten zu bekommen, die von der Transportberechnung versendet werden.</p>
                        <br />
                        <p>Die Transportberechnung benötigt einen eigenen Channel-Adapter, der auf interne Ereignisse reagieren kann, um eine Antwort zu versenden, sobald die Anfrage verarbeitet wurde.</p>
                        <br />
                        <p>Nun ist die Integration der Versandberechnung in die bestehende Architektur mithilfe des Publish/Subscribe-Modells abgeschlossen.</p>
                        <br />
                        <p>Die Versandberechnung wurde nun vollständig hinzugefügt. Dieses Fenster kann nun geschlossen werden, indem man auf das "x" oben rechts drückt.</p>
                    </div>
                );
            case 7:
                return '7';
            case 8:
                return '8';
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
                    fullWidth
                    maxWidth="sm"
                    PaperComponent={PaperComponent}
                    PaperProps={{ style: { position: 'absolute', top: '200px' } }}
                >
                    <AppBar position="static" sx={{ backgroundColor: '#e99f4c' }} id="draggable-dialog-title">
                        <Toolbar>
                            <Typography variant="h6" style={{ flex: 1 }}>
                                {getAlertTextHeader(isVisiblePubSub)}
                            </Typography>
                            <IconButton edge="end" color="inherit" onClick={handleXPubSub} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {getAlertTextBody(isVisiblePubSub)}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleBackPubSub} sx={{ color: '#e99f4c' }}>
                            Zurück
                        </Button>
                        <Button onClick={handleNextPubSub} sx={{ color: '#e99f4c' }} autoFocus>
                            Weiter
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </div>
    );
};

export default AlertP2P;



