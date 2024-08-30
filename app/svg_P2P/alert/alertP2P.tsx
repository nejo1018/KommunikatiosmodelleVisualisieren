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
import Backdrop from '@mui/material/Backdrop';
import Paper from '@mui/material/Paper';

interface AlertComponentsProps {
    open: boolean;
    handleClose: () => void;
    isVisibleP2P: number;
    handleBack: () => void;
    handleNext: () => void;
    handleXP2P: () => void;
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
    isVisibleP2P,
    handleBack,
    handleNext,
    handleXP2P,
}: AlertComponentsProps) => {

    const getAlertTextHeader = (component: number) => {
        switch (component) {
            case 1:
                return 'Systemkomponente hinzufügen';
            case 2:
                return 'Channel-Adaper & Point-to-Point-Channel';
            case 3:
                return 'Beziehungen herstellen';
            case 4:
                return 'neuen Prozess einfügen';
            case 5:
                return 'Systemkomponente hinzufügen';
            case 6:
                return 'Channel-Adapter, P2P-Channels & Aggregator';
            case 7:
                return 'Kapazitätsplanung hinzufügen';
            case 8:
                return 'Lagerverwaltung hinzufügen';
            default:
                return '';
        }
    };

    const getAlertTextBody = (component: number) => {
        switch (component) {
            case 1:
                return (
                    <div>
                        <p>Bisher sind wir davon ausgegangen, dass die Baubarkeitsberechnung Informationen aus 2 Teilsystemen benötigt.</p>
                        <br />
                        <p>Um zu zeigen, wie ein bestehender Geschäftsprozess erweitert werden kann, definieren wir nun, dass wir zusätzlich die Information benötigen, ob Mitarbeiter zur Verfügung stehen, die den Geschäftsprozess durchführen können.</p>
                        <br />
                        <p>Aus diesem Grund benötigen wir im ersten Schritt eine neue Systemkomponente, aus der wir Informationen darüber erhalten, ob Mitarbeiter im benötigten Zeitraum zur Verfügung stehen.</p>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <p>Um die Kommunikation zwischen den einzelnen Komponenten zu ermöglichen werden neue Message-Komponenten benötigt.</p>
                        <br />
                        <p>Da die Architektur auf dem Kommunikationsmodell Point-to-Point basiert, sind zwei neue Point-to-Point Channels erforderlich.</p>
                        <br />
                        <p>Ebenso werden Channel-Adapter benötigt, um auf die internen Ereignisse in den Komponenten zu reagieren und als Reaktion darauf die Nachrichten zu versenden.</p>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <p>Um die neuen Messaging-Komponenten in die Architektur zu integrieren, müssen die entsprechenden Verbindungen eingerichtet werden.</p>
                        <br />
                        <p>Da die Architektur auf Point-to-Point-Channels basiert, muss die Kommunikation zwischen den Start- und Zielkomponenten explizit definiert werden. Dies stellt sicher, dass Nachrichten zuverlässig und zielgerichtet übertragen werden, wodurch die Integrität und Sicherheit der Datenkommunikation gewährleistet ist.</p>
                        <br />
                        <p>Sobald die Beziehungen zwischen den Messaging-Komponenten hergestellt wurden und die Logik im Aggregator erweitert wurde, ist die Kapazitätsplanung nun fester Bestandteil der Baubarkeitsberechnung.</p>
                        <br />
                        <p>Im nächsten Schritt wird die bestehende Architektur um die Versandberechnung erweitert. Man könnte dieses Fenster nun schließen um sich die aktuelle Architektur genauer anzusehen. Ansonsten kann auch sofort mit der Versandberechnung weitergemacht werden, indem man auf "weiter" klickt.</p>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <p>Um zu zeigen, wie ein neuer Geschäftsprozess hinzugefügt werden kann, der teilweise die selben Systemkomponenten benötigt, definieren wir einen neuen Geschäftsprozess "Versandberechnung".</p>
                        <br />
                        <p>Dieser Geschäftsprozess soll ein Ergebnis liefern, ob ein bestimmter Artikel versandbereit ist. Hierfür werden unter anderem wieder Informationen aus der Lagerverwaltung benötigt, die bereits bei der Baubarkeitsberechnung verwendet wurden.</p>
                    </div>
                );
            case 5:
                return (
                    <div>
                        <p>Für den Geschäftsprozess "Versandberechnung" werden zusätzliche Informationen über den Transport benötigt.</p>
                        <br />
                        <p>Dafür muss eine neue Systemkomponente hinzugefügt werden, die Auskunft darüber geben kann, ob Transportmittel wie ein LKW für einen bestimmten Zeitraum zur Verfügung stehen.</p>
                    </div>
                );
            case 6:
                return (
                    <div>
                        <p>Ähnlich wie bei der Kapazitätsplanung müssen neue Messaging-Komponenten hinzugefügt werden.</p>
                        <br />
                        <p>Ebenso müssen die Beziehungen zwischen den Messaging-Komponenten hergestellt werden, um den Informationsfluss sicherzustellen. Dabei müssen die selben Aspekte beachtet werden, die bereits beim Hinzufügen der Kapazitätsplanung beachtet werden mussten.</p>
                        <br />
                        <p>Da es sich bei der Versandberechnung um einen neuen Geschäftsprozess handelt, wird ebenfalls ein neuer zusätzlicher Aggregator benötigt, der die Ergebnisse der einzelnen Teilsysteme zusammenführen soll.</p>
                    </div>
                );
            case 7:
                return (
                    <div>
                        <p>Die Versandberechnung benötigt ebenfalls Informationen aus der Kapazitätsplanung, um zu wissen, ob Mitarbeiter verfügbar sind, die den Versand durchführen können.</p>
                        <br />
                        <p>Hierfür kann dieselbe Systemkomponente verwendet werden, die bereits bei der Baubarkeitsberechnung genutzt wurde.</p>
                        <br />
                        <p>Für die Anfrage wird ein zusätzlicher Channel-Adapter sowie ein Point-to-Point-Channel benötigt. Die Antwort jedoch kann über die bestehenden Messaging-Komponenten abgewickelt werden, da der Channel-Adapter in der Lage ist, den Zielort der Nachricht zu bestimmen. Da der Channel-Adapter die Information, welche Komponente die Anfrage gesendet hat, besitzt, weiß er, an wen die Antwort gesendet werden muss.</p>
                    </div>
                );
            case 8:
                return (
                    <div>
                        <p>Die Versandberechnung benötigt ebenfalls Informationen aus der Lagerverwaltung, um zu wissen, ob die benötigten Artikel im Lager vorhanden sind.</p>
                        <br />
                        <p>Hierfür kann dieselbe Systemkomponente verwendet werden, die bereits bei der Baubarkeitsberechnung genutzt wurde.</p>
                        <br />
                        <p>Für die Anfrage wird ein zusätzlicher Channel-Adapter sowie ein Point-to-Point-Channel benötigt. Die Antwort jedoch kann über die bestehenden Messaging-Komponenten abgewickelt werden, da der Channel-Adapter in der Lage ist, den Zielort der Nachricht zu bestimmen. Da der Channel-Adapter die Information, welche Komponente die Anfrage gesendet hat, besitzt, weiß er, an wen die Antwort gesendet werden muss.</p>
                        <br />
                        <p>Die Versandberechnung wurde nun vollständig hinzugefügt. Dieses Fenster kann nun geschlossen werden, indem man auf das "x" oben rechts drückt.</p>
                    </div>
                );
            default:
                return '';
        }
    };

    return (
        <div className="AlertKapa" id="idAlertKapa">
            <React.Fragment>
                <Backdrop open={open} style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed' }} />
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth
                    maxWidth="sm"
                    PaperComponent={PaperComponent}
                    PaperProps={{ style: { position: 'absolute', top: '200px' } }}
                    BackdropProps={{ style: { backgroundColor: 'transparent' } }}
                >
                    <AppBar position="static" sx={{ backgroundColor: '#e99f4c' }} id="draggable-dialog-title">
                        <Toolbar>
                            <Typography variant="h6" style={{ flex: 1 }}>
                                {getAlertTextHeader(isVisibleP2P)}
                            </Typography>
                            <IconButton edge="end" color="inherit" onClick={handleXP2P} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {getAlertTextBody(isVisibleP2P)}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleBack} sx={{ color: '#e99f4c' }}>
                            Zurück
                        </Button>
                        <Button onClick={handleNext} sx={{ color: '#e99f4c' }} autoFocus>
                            Weiter
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </div>
    );
};

export default AlertP2P;
