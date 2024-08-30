'use client'

import * as React from 'react';

interface TextRightProps {
    selectedModel: string;
    selectedProcess: string;
    isVisibleP2P: number;
    isVisiblePubSub: number;
    messageAc: boolean;
}

export default function TextRight({
    selectedModel,
    selectedProcess,
    isVisibleP2P,
    isVisiblePubSub,
    messageAc
}: TextRightProps) {

    console.log(selectedProcess);

    if (messageAc === false) {



        if (selectedModel === 'Point-to-Point') {

            switch (isVisibleP2P) {
                case 0:
                    return null;
                case 1:
                    return (
                        <div>
                            <p>Bisher sind wir davon ausgegangen, dass die Baubarkeitsberechnung Informationen aus 2 Teilsystemen benötigt.</p>
                            <br />
                            <p>Um zu zeigen, wie ein bestehender Geschäftsprozess erweitert werden kann, definieren wir nun, dass wir zusätzlich die Information benötigen, ob Mitarbeiter zur Verfügung stehen, die den Geschäftsprozess durchführen können.</p>
                            <br />
                            <p>Aus diesem Grund benötigen wir im ersten Schritt eine neue Systemkomponente, aus der wir Informationen darüber erhalten, ob Mitarbeiter im benötigten Zeitraum zur Verfügung stehen.</p>
                        </div>
                    )
                case 2:
                    return (
                        <div>
                            <p>Zwei neue Point-to-Point-Channels werden als Message Komponenten benötigt.</p>
                            <br />
                            <p>Ebenso werden zwei neue Channel Adapter benötigt.</p>
                        </div>
                    );
                case 3:
                    return (
                        <div>
                            <p>Die Beziehungen zwischen den Messaging-Komponenten müssen hergestellt werden.</p>
                            <br />
                            <p>Aufgrund der Point-to-Point-Channels müssen alle Verbindugen explizit definiert werden.</p>
                            <br />
                            <p>Sobald die Beziehungen zwischen den Messaging-Komponenten hergestellt wurden und die Logik im Aggregator erweitert wurde, ist die Kapazitätsplanung nun fester Bestandteil der Baubarkeitsberechnung.</p>
                        </div>
                    );
                case 4:
                    return (
                        <div>
                            <p>Der neue Geschäftsprozess "Versandberechnung" soll in die bestehende Architektur integriert werden.</p>
                        </div>
                    );
                case 5:
                    return (
                        <div>
                            <p>Für den Geschäftsprozess "Versandberechnung" werden zusätzliche Informationen über den Transport benötigt.</p>
                            <br />
                            <p>Dafür muss eine neue Systemkomponente hinzugefügt werden, die Auskunft darüber geben kann, ob Transportmittel wie ein LKW für einen bestimmten Zeitraum zur Verfügung stehen.</p>
                        </div>
                    )
                case 6:
                    return (
                        <div>
                            <p>Zwei neue Channel-Adapter und Point-to-Point-Channels werden benötigt, um den Informationsaustausch mit der Transportberechnung zu gewährleisten.</p>
                            <br />
                            <p>Ebenso müssen die Beziehungen zwischen den Messaging-Komponenten hergestellt werden, analog zur Vorgehensweise beim Hinzufügen der Kapazitätsplanung.</p>
                            <br />
                            <p>Um die Ergebnisse verarbeiten zu können, wird ein Aggregator benötigt, der die einzelnen Teilinformationen zu einer gebündelten Antwort zusammenführt.</p>
                        </div>
                    )
                case 7:
                    return (
                        <div>
                            <p>Für die Versandberechnung werden ebenfalls Informationen aus der Kapazitätsplanung benötigt.</p>
                            <br />
                            <p>Dafür kann die bestehende Systemkomponente verwendet werden.</p>
                            <br />
                            <p>Für die Anfrage wird ein neuer Channel Adapter und Point-to-Point-Channel benötigt.</p>
                            <br />
                            <p>Die Antwort jedoch kann über die bestehenden Messaging-Komponenten abgewickelt werden, da der Channel-Adapter in der Lage ist, den Zielort der Nachricht zu bestimmen. Da der Channel-Adapter die Information, welche Komponente die Anfrage gesendet hat, besitzt, weiß er, an wen die Antwort gesendet werden muss.</p>
                        </div>
                    )
                case 8:
                    return (
                        <div>
                            <p>Für die Versandberechnung werden ebenfalls Informationen aus der Lagerverwaltung benötigt.</p>
                            <br />
                            <p>Dafür kann die bestehende Systemkomponente verwendet werden.</p>
                            <br />
                            <p>Für die Anfrage wird ein neuer Channel Adapter und Point-to-Point-Channel benötigt.</p>
                            <br />
                            <p>Die Antwort jedoch kann über die bestehenden Messaging-Komponenten abgewickelt werden, da der Channel-Adapter in der Lage ist, den Zielort der Nachricht zu bestimmen. Da der Channel-Adapter die Information, welche Komponente die Anfrage gesendet hat, besitzt, weiß er, an wen die Antwort gesendet werden muss.</p>
                        </div>
                    )

            }

        } else {

            switch (isVisiblePubSub) {
                case 0:
                    return null;
                case 1:
                    return (
                        <div>
                            <p>Kapazitätsplanung musste den Channel Baubarkeitsberechnung abonnieren, um eine Kopie der Nachrichten zu erhalten.</p>
                            <br />
                            <p>Der Aggregator Baubarkeitsberechnung musste den Channel Kapazitätsplanung abonnieren, um eine Kopie der Nachrichten zu erhalten, die bei der Kapazitätsplanung eingehen.</p>
                            <br />
                            <p>Damit wurde die Kapazitätsplanung erfolgreich in den Geschäftsprozess Baubarkeitsberechnung hinzugefügt.</p>
                        </div>
                    );
                case 2:
                    return (
                        <div>
                            <p>Der neue Geschäftsprozess "Versandberechnung" soll in die bestehende Architektur integriert werden.</p>
                        </div>
                    );
                case 3:
                    return (
                        <div>
                            <p>Für den Geschäftsprozess "Versandberechnung" werden zusätzliche Informationen über den Transport benötigt.</p>
                            <br />
                            <p>Dafür muss eine neue Systemkomponente hinzugefügt werden, die Auskunft darüber geben kann, ob Transportmittel wie ein LKW für einen bestimmten Zeitraum zur Verfügung stehen.</p>
                        </div>
                    )
                case 4:
                    return (
                        <div>
                            <p> Um die Ergebnisse des neuen Geschäftsprozesses Versandberechnung verarbeiten zu können, wird ein neuer Aggregator benötigt. Dieser Aggregator hat die Aufgabe, die Antworten der einzelnen Teilsysteme, die an der Versandberechnung beteiligt sind, zu sammeln und zu einem einzigen konsolidierten Ergebnis zusammenzuführen. Dadurch wird sichergestellt, dass alle relevanten Informationen berücksichtigt werden und ein umfassendes Resultat zur Verfügung steht.</p>
                        </div>
                    )
                case 5:
                    return (
                        <div>
                            <p>Transportberechnung muss in den Geschäftsprozess Versandberechnung integriert werden.</p>
                            <br />
                            <p>Aufgrund des Publish/Subsribe-Modells muss Transportberechnung (Subscriber) lediglich die Versandberechnung (Publisher) abonnieren, um eine Kopie aller Nachrichten zu erhalten, die von der Versandberechnung versendet werden.</p>
                            <br />
                            <p>Dadurch ist es mit wenig Aufwand möglich, neue Komponenten in die bestehende Architektur einzufügen.</p>
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
                        </div>
                    )


            }

        }

    } else {

        if (selectedModel === 'Point-to-Point'){


            if (selectedProcess === 'Baubarkeitsberechnung') {


                if (isVisibleP2P > 2) {
                    return (
                        <div>
                            <p>Nach Integration der Kapazitätsplanung in die Baubarkeitsberechnung mittels Point-to-Point-Channels wird diese bei der Ausführung berücksichtigt.</p>
                            <br />
                            <p>Daher werden nach dem Start der Berechnung Anfragen in Form von Paketen an Lagerverwaltung, Produktionsplanung und Kapazitätsplanung gesendet.</p>
                            <br />
                            <p>Über die Point-to-Point-Channel erreichen die Pakete direkt die drei Systemkomponenten, die die Anfragen verarbeiten und ihre Antworten ebenfalls über einen Point-to-Point-Channel an den Aggregator zurücksenden.</p>
                            <br />
                            <p>Die Anwendungslogik des Aggregators wurde angepasst, um auch die Informationen der Kapazitätsplanung zu verarbeiten.</p>
                            <br />
                            <p>Sobald alle Antworten eingegangen sind, fasst der Aggregator die Informationen zu einer gebündelten Antwort zusammen und liefert diese als Ergebnis zurück.</p>
                        </div>
                    )


                } else {
                    return (
                        <div>
                            <p>Nachdem die Baubarkeitsberechnung gestartet wurde, werden die Anfragen in Form von Paketen an die Lagerverwaltung und die Produktionsplanung gesendet.</p>
                            <br />
                            <p>Durch die Point-to-Point-Channels werden die Pakete direkt über den Message Channel an die beiden Systemkomponenten übermittelt.</p>
                            <br />
                            <p>Diese Komponenten verarbeiten die Anfragen und senden ihre Antworten wieder über einen Point-to-Point-Channel direkt an den Aggregator.</p>
                            <br />
                            <p>Der Aggregator sammelt alle Antworten der benötigten Komponenten. Anschließend fasst er die einzelnen Informationen zu einer Nachricht zusammen und gibt diese als Gesamtergebnis zurück.</p>
                        </div>
                    )

                }

                

            } else {

                return (
                    <div>
                        <p>Nach der Integration der Versandberechnung in die bestehende Architektur kann der Prozess ausgeführt werden.</p>
                        <br />
                        <p>Nach dem Start des Prozesses werden Anfragen an die Lagerverwaltung, Kapazitätsplanung und Transportberechnung gesendet, um die benötigten Informationen zu erhalten.</p>
                        <br />
                        <p>Die Lagerverwaltung und Kapazitätsplanung können teilweise auf bestehende Strukturen zugreifen. Ein separater Point-to-Point-Channel ist erforderlich, um die Anfragen an die Systemkomponenten zu leiten. Die Antwort kann jedoch über die bestehenden Kanäle erfolgen, da der Channel Adapter und Point-to-Point-Channel die korrekte Zuordnung zum Aggregator sicherstellen.</p>
                        <br />
                        <p>Sobald alle Informationen beim Aggregator eingegangen sind, wird ein gebündeltes Ergebnis zurückgeliefert.</p>
                    </div>
                )

            }

            

        } else {

            if (selectedProcess === 'Baubarkeitsberechnung') {

                console.log(isVisiblePubSub);

                if (isVisiblePubSub === 0) {

                    return (
                        <div>
                            <p>Nach dem Start der Baubarkeitsberechnung wird eine Anfrage über den Channel Adapter an einen Publish/Subscribe Channel gesendet. Alle abonnierten Komponenten (Subscriber) erhalten eine Kopie dieser Anfrage.</p>
                            <br />
                            <p>Sobald die Anfragen bei den Komponenten eingegangen sind, erzeugen diese eine Antwortnachricht und senden sie über den Channel Adapter an den nächsten Publish/Subscribe Channel.</p>
                            <br />
                            <p>Wenn die Nachrichten diesen Channel erreichen, erhalten erneut alle abonnierten Komponenten eine Kopie. In diesem Szenario ist der Aggregator Baubarkeitsberechnung der einzige Abonnent dieses Channels und sammelt die Informationen, um das Endergebnis der Baubarkeitsberechnung zu erstellen.</p>
                        </div>
                    )

                } else if (isVisiblePubSub < 6) {

                    return (
                        <div>
                            <p>Nach dem Start der Baubarkeitsberechnung wird eine Anfrage über den Channel Adapter an einen Publish/Subscribe Channel gesendet. Alle abonnierten Komponenten (Subscriber) erhalten eine Kopie dieser Anfrage.</p>
                            <br />
                            <p>Sobald die Anfragen bei den Komponenten eingegangen sind, erzeugen diese eine Antwortnachricht und senden sie über den Channel Adapter an den nächsten Publish/Subscribe Channel.</p>
                            <br />
                            <p>Wenn die Nachrichten diesen Channel erreichen, erhalten erneut alle abonnierten Komponenten eine Kopie. In diesem Szenario ist der Aggregator Baubarkeitsberechnung der einzige Abonnent dieses Channels und sammelt die Informationen, um das Endergebnis der Baubarkeitsberechnung zu erstellen.</p>
                        </div>
                    )

                } else {

                    return (
                        <div>
                            <p>In diesem Szenario wurde die Versandberechnung der bestehenden Architektur hinzugefügt. Die Aggregatoren Baubarkeitsberechnung und Versandberechnung haben beispielsweise beide die Lagerverwaltung abonniert.</p>
                            <br />
                            <p>Aus diesem Grund erhalten beide eine Kopie der Nachricht, die von der Lagerverwaltung ausgeht.</p>
                            <br />
                            <p>Bei der Anfrage der Baubarkeitsberechnung kann der Aggregator Versandberechnung die Informationen aus der Lagerverwaltung nicht benötigen, da sie den falschen Geschäftsprozess betreffen.</p>
                            <br />
                            <p>Soabld der Aggregator Versandberechnung in diesem Szenario die Informationen aus der Lagerverwaltung erhält, wartet er auf die anderen Informationen aus den Teilsystemen. Da er diese nicht erhält, werden die Nachrichten nach einer bestimmten Zeit wieder verworfen.</p>
                            <br />
                            <p> Deshalb ist ein Publish/Subscribe Channel genug, um beide Geschäftsprozesse abzudecken.</p>
                        </div>
                    )                    
                }

               

            } else {

                return (
                    <div>
                        <p>In diesem Szenario wurde die Versandberechnung als zusätzlicher Geschäftsprozess in die bestehende Architektur integriert. Die Aggregatoren Versandberechnung und Baubarkeitsberechnung haben beispielsweise beide die Lagerverwaltung abonniert.</p>
                        <br />
                        <p>Aus diesem Grund erhalten beide Aggregatoren eine Kopie der Nachricht, die von der Lagerverwaltung ausgeht.</p>
                        <br />
                        <p>Bei der Anfrage der Versandberechnung kann der Aggregator Baubarkeitsberechnung die Informationen aus der Lagerverwaltung nicht benötigen, da sie den falschen Geschäftsprozess betreffen.</p>
                        <br />
                        <p>Sobald der Aggregator Baubarkeitsberechnung in diesem Szenario die Informationen aus der Lagerverwaltung erhält, wartet er auf die anderen Informationen aus den Teilsystemen. Da er diese nicht erhält, werden die Nachrichten nach einer bestimmten Zeit wieder verworfen.</p>
                        <br />
                        <p>Deshalb ist ein Publish/Subscribe Channel ausreichend, um beide Geschäftsprozesse abzudecken.</p>
                    </div>
                )
            }

        }

    }

} 