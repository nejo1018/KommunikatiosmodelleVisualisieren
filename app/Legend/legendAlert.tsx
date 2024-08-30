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


const AlertLegend = ({ open, handleClose, component }: AlertComponentsProps) => {

  const getAlertTextHeader = (component: string) => {
    switch (component) {
      case 'Ca':
        return 'Channel-Adapter';
      case 'Agg':
        return 'Aggregator'
      case 'P2P':
        return 'Point-to-Point-Channel'
      case 'PubSub':
        return 'Publish/Subscribe-Channel'
      default:
        return '';
    }
  };

  const getAlertTextBody = (component: string) => {
    switch (component) {
      case 'Ca':
        return (
          <div>
            <p>Viele Systeme sind unterschiedlich, weshalb es nicht möglich ist, Daten ohne weitere Überlegungen zwischen ihnen auszutauschen.</p>
            <br />
            <p>Eine Möglichkeit wäre, für jeden Anwendungsfall eine spezifische Schnittstelle zu programmieren, was jedoch viele Nachteile mit sich bringt. Einerseits müsste bei jeder Veränderung im System der spezifische Teil der Schnittstelle ebenfalls angepasst werden. Dies erschwert die Wartung und erhöht die Komplexität des Systems.</p>
            <br />
            <p>In solchen Fällen ist es sinnvoll, einen Channel-Adapter zu verwenden. Ein Channel-Adapter kann auf anwendungsinterne Ereignisse lauschen und als Reaktion auf diese Ereignisse das Messaging-System aufrufen. </p>
            <br />
            <p>Die Informationen kann der Channel-Adapter mithilfe einer API abfragen, die vom System zur Verfügung gestellt werden muss. Dies erleichtert auch die Wartung, da bei Änderungen nur der Channel-Adapter oder die API angepasst werden müssen.</p>
          </div>
        )
      case 'Agg':
        return (
          <div>
            <p>In vielen Anfragen werden Informationen aus verschiedenen Teilsystemen benötigt. Um diese verschiedenen Informationen zu einer einzigen Antwort zusammenzufassen, wird ein Mechanismus benötigt, der diese Antworten synchronisieren kann.</p>
            <br />
            <p>Für diesen Anwendungsfall gibt es den Aggregator, der verschiedene Antworten zu einer einzigen zusammenführt. Der Aggregator muss in der Lage sein, Anwendungslogik zu verarbeiten, da er die verschiedenen Informationen zu einer konsistenten Antwort zusammenführen muss.</p>
            <br />
            <p>Da die Antworten der Teilsysteme zu verschiedenen Zeitpunkten eintreffen können, muss der Aggregator in der Lage sein, mit dieser Asynchronität umzugehen.</p>
          </div>
        )
      case 'P2P':
        return (
          <div>
            <p>Damit Informationen zwischen den einzelnen Systemen versendet werden können, muss es einen strukturierten Weg geben, diese Informationen auszutauschen.</p>
            <br />
            <p>In der dargestellten Architektur erfolgt diese Kommunikation mithilfe eines Point-to-Point-Channels (P2P-Channel), bei dem der Sender und der Empfänger direkt miteinander verbunden sind.</p>
            <br />
            <p>Ein Point-to-Point-Channel stellt sicher, dass genau ein Empfänger die Nachricht erhält. Dies macht das System jedoch auch sehr starr, da es nicht ohne Weiteres möglich ist, neue Komponenten hinzuzufügen. Jede neue Komponente erfordert die Einrichtung direkter Verbindungen, was den Aufwand für die Erweiterung der Architektur erheblich erhöht.</p>
            <br />
          </div>
        )
      case 'PubSub':
        return (
          <div>
            <p>Um Informationen zwischen den einzelnen Systemen zu versenden, ist ein strukturierter Weg zum Austausch dieser Informationen erforderlich.</p>
            <br />
            <p>In der dargestellten Architektur wird diese Kommunikation durch einen Publish/Subscribe-Channel (Pub/Sub) realisiert. Dabei kann eine Komponente (Abonnent) eine andere Komponente (Publisher) abonnieren.</p>
            <br />
            <p>Sobald die abonnierende Komponente den Publisher abonniert hat, erhält sie eine Kopie aller Nachrichten, die vom Publisher gesendet werden. Dadurch können Komponenten ohne großen Aufwand zu einer Architektur hinzugefügt werden, da sich der Abonnent lediglich bei dem Publisher registrieren muss.</p>
            <br />
            <p>Ein Nachteil von Publish-Subscribe-Channels besteht darin, dass unberechtigte Dritte leicht Nachrichtenverkehr mithören können, was insbesondere bei sensiblen Daten problematisch ist. Sicherheitsrichtlinien sollten daher den Zugriff auf solche Channels beschränken, um die Integrität und Vertraulichkeit der übertragenen Informationen zu gewährleisten.</p>
          </div>
        )
      default:
        return 'default case';
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

export default AlertLegend;