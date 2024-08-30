'use client'
import React, { useEffect, useRef, useState } from 'react';


import Button from './components/Button';
import DataPackage from './components/DataPackage';
import RadioProzess from './components/RadioProzess';
import RadioModell from './components/RadioModell';
import Slider from './components/DiscreteSlider';
import InfoIcon from './components/InfoAlert';


import CheckboxKapa from './svg_P2P/MaterialUI/checkboxKapa';
import CheckboxVersand from './svg_P2P/MaterialUI/checkboxVersand';
import CheckboxAlertChoice from './svg_P2P/MaterialUI/checkBoxAlertChoice';



import AddKapaInfo from './components/AlertEinfuegenKapa'


import AddKapa from './svg_P2P/MaterialUI/addKapa';
import RemoveKapa from './svg_P2P/MaterialUI/removeKapa';
import AddVersand from './svg_P2P/MaterialUI/addVersand';
import RemoveVersand from './svg_P2P/MaterialUI/removeVersand';

import LegendP2P from './Legend/legend';
import TextRight from './Legend/Textright';
import HelpHeader from './components/header/HelpHeader';

import Kapa from './Kapa/Kapa';

/* import AddVersand from './Versandberechnung/AddVersand'; */
import Versand from './Versandberechnung/Versand';


import Lagerverwaltung from './Lagerverwaltung/Lagerverwaltung';
import Produktionsplanung from './Produktionsplanung/Produktionsplanung';


/* import { ReactComponent as MySvg } from '../app/newSVG'; */

import P2PArch from './svgComponents/P2P_arch';


import P2P from './svg_P2P/P2P_arch';
import PubSub from './svg_PubSub/PubSub_arch';



export default function Home() {
  const [selectedModel, setSelectedModel] = useState<string>('Point-to-Point');
  const [selectedProcess, setSelectedProcess] = useState<string>('Baubarkeitsberechnung');
  const [sliderValue, setSliderValue] = useState(30);
  const [checkedKapa, setCheckedKapa] = React.useState(false);
  const [checkedVersand, setCheckedVersand] = React.useState(false);
  const [checkedAlertChoice, setCheckedAlertChoice] = React.useState(true);

  const [messageAc, setMessageAc] = React.useState(false);

  const [isVisibleP2P, setIsVisibleP2P] = useState<number>(0);
  const [isVisiblePubSub, setIsVisiblePubSub] = useState<number>(0);

  const [openP2P, setOpenP2P] = React.useState<boolean>(false);
  const [openPubSub, setOpenPubSub] = React.useState<boolean>(false);

  
  const handleMessageAc = (value: boolean) => {
    setMessageAc(value);
  } 

  /* Kapa */
  const [KapaAddPres, setKapaAddPres] = React.useState(false);
  const [KapaAddPresPuBSub, setKapaAddPresPubSub] = React.useState(false);

  const handleKapaAddPres = (value: boolean) => {
    if (checkedAlertChoice === true) {
      setKapaAddPres(value);
    }
  };

  const handleKapaAddPresPubSub = (value: boolean) => {
    if (checkedAlertChoice === true) {
      setKapaAddPres(value);
    }
  };



  const handleModelChange = (model: string) => {
    setIsVisibleP2P(0);
    setIsVisiblePubSub(0);
    checkCheckboxes(0);
    setSelectedModel(model);
  };

  const handleProcessChange = (process: string) => {
    setSelectedProcess(process);
  };

  const handleCheckboxChoiceChange = (isChecked: boolean) => {
    setCheckedAlertChoice(isChecked);
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    if (selectedModel === 'Point-to-Point') {
      setCheckedKapa(isChecked);
      if (isChecked === true) {
        setIsVisibleP2P(3);
      } else {
        setIsVisibleP2P(0);
        setCheckedVersand(false);
      }
    } else {
      setCheckedKapa(isChecked);
      if (isChecked === true) {
        setIsVisiblePubSub(1);
      } else {
        setIsVisiblePubSub(0);
        setCheckedVersand(false);
      }


    }

  };

  const handleCheckboxChangeVersand = (isChecked: boolean) => {
    if (selectedModel === 'Point-to-Point') {
      setCheckedVersand(isChecked);
      if (isChecked === true) {
        setIsVisibleP2P(8);
        setCheckedKapa(true);
      } else {
        setIsVisibleP2P(3);
      }
    } else {
      setCheckedVersand(isChecked);
      if (isChecked === true) {
        setIsVisiblePubSub(6);
        setCheckedKapa(true);
      } else {
        setIsVisiblePubSub(1);
      }
    }

  };




  const handleSetVisibleP2P = (value: number) => {
    setIsVisibleP2P(value);
    if (value >= 3) {
      setCheckedKapa(true);
    } else {
      setCheckedKapa(false);
    }

    if (value === 8) {
      setCheckedVersand(true);
    } else {
      setCheckedVersand(false);
    }

  };


  const handleSetVisiblePubSub = (value: number) => {
    if ((value >= 0) && (value < 7)) {
      setIsVisiblePubSub(value);
      if (value >= 1) {
        setCheckedKapa(true);
      } else {
        setCheckedKapa(false)
      }

      if (value === 6) {
        setCheckedVersand(true);
      } else {
        setCheckedVersand(false);
      }
    }
  }



  const checkCheckboxes = (value: number) => {
    if (selectedModel == 'Point-to-Point') {
      if (value >= 3) {
        setCheckedKapa(true);
      } else {
        setCheckedKapa(false);
      }

      if (value >= 8) {
        setCheckedVersand(true);
      } else {
        setCheckedVersand(false);
      }

    } else {
      if (value >= 1) {
        setCheckedKapa(true);
      } else {
        setCheckedKapa(false)
      }

      if (value >= 6) {
        setCheckedVersand(true);
      } else {
        setCheckedVersand(false);
      }
    }
  }




  const handleXP2P = () => {
    setOpenP2P(false);
    handleKapaAddPres(false);
  }

  const handleXPubSub = () => {
    setOpenPubSub(false);
    handleKapaAddPresPubSub(false);
  }

  const handleCloseP2P = () => {
    if (isVisibleP2P < 8) {
      setIsVisibleP2P(isVisibleP2P + 1);
    }

    if (isVisibleP2P == 8) {
      setOpenP2P(false);
    }

    checkCheckboxes(isVisibleP2P);
  }

  const handleClosePubSub = () => {
    if (isVisiblePubSub < 6) {
      setIsVisiblePubSub(isVisiblePubSub + 1);
    }

    if (isVisiblePubSub === 7) {
      setOpenPubSub(false);
    }

    checkCheckboxes(isVisiblePubSub);
  }

  const handleUpdateOpenP2P = (value: boolean) => {
    setOpenP2P(value);
  };

  const handleUpdateOpenPubSub = (value: boolean) => {
    setOpenPubSub(value);
  };

  const handleBackAlertP2P = () => {
    setIsVisibleP2P((prevStep) => Math.max(prevStep - 1, 1));
    checkCheckboxes(isVisibleP2P - 1);
  };

  const handleNextAlertP2P = () => {
    setIsVisibleP2P((prevStep) => Math.min(prevStep + 1, 8));
    checkCheckboxes(isVisibleP2P + 1);
  };

  const handleBackAlertPubSub = () => {
    setIsVisiblePubSub((prevStep) => Math.max(prevStep - 1, 1));
    checkCheckboxes(isVisiblePubSub - 1);
  };

  const handleNextAlertPubSub = () => {
    setIsVisiblePubSub((prevStep) => Math.min(prevStep + 1, 6));
    checkCheckboxes(isVisiblePubSub + 1);
    //?? +1
  };


  return (
    <div className="master">

      <div className="header">
        <div className="leftContainer">
          <div className="ChoiceAlertdiv">
            <CheckboxAlertChoice checked={checkedAlertChoice} onCheckboxChange={handleCheckboxChoiceChange} />
          </div>
        </div>
        <div className="centerContainer">
          <div className="headerText">
            <p>Visualisierung von Kommunikationsmodellen</p>
          </div>
        </div>
        <div className="rightContainer">
          <HelpHeader />
        </div>
      </div>
      <div className="content">
        <div className="barLeft">
          <div className="divRadioModell">
            <RadioModell onModelChange={handleModelChange} />
          </div>
          <div className="divRadioProzess">
            <RadioProzess onProcessChange={handleProcessChange} />
          </div>
          <div className="slider1div">
            <p id="sliderPaketep"> Geschwindigkeit Pakete </p>
            <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} id="slider1" />
          </div>
          <div className="divButtonPakete">
            <Button
              sliderValue={sliderValue}
              selectedModal={selectedModel}
              isVisiblePubSub={isVisiblePubSub}
              isVisisbleP2P={isVisibleP2P}
              selectedProcess={selectedProcess}
              messageAc={messageAc}
              handleMessageAc={(value) => handleMessageAc(value)}              
            />
          </div>

          <div className="barLeftExten">
            <p id="AddKomp">Architektur erweitern </p>

            <div className="addKapa">
              <p id="addKapaTex">Kapazitätsplanung:</p>

              <div className="addKapaIcondiv">
                <p>Hinzufügen</p>
                <AddKapa
                  isVisibleP2P={isVisibleP2P}
                  setVisibleValueP2P={(value) => handleSetVisibleP2P(value)}
                  id="addKapaIcon"
                  isChecked={checkedKapa}
                  openP2P={openP2P}
                  handleOpen={handleCloseP2P}
                  updateOpenP2P={handleUpdateOpenP2P}
                  KapaAddPres={KapaAddPres}
                  handleKapaAddPres={handleKapaAddPres}
                  selectedModel={selectedModel}
                  isVisiblePubSub={isVisiblePubSub}
                  setVisibleValuePubSub={(value) => handleSetVisiblePubSub(value)}
                  updateOpenPubSub={handleUpdateOpenPubSub}
                  handleMessageAc={(value) => handleMessageAc(value)} 

                />
              </div>

              <div className="removeKapaIcondiv">
                <p>Entfernen</p>
                <RemoveKapa
                  isVisibleP2P={isVisibleP2P}
                  setVisibleValueP2P={(value) => handleSetVisibleP2P(value)} id="removeKapaIcon"
                  selectedModel={selectedModel}
                  isVisiblePubSub={isVisiblePubSub}
                  setVisibleValuePubSub={(value) => handleSetVisiblePubSub(value)}
                  handleMessageAc={(value) => handleMessageAc(value)} 

                />
              </div>
              <div className="checkKapaIcondiv">
                <CheckboxKapa
                  checked={checkedKapa}
                  onCheckboxChange={handleCheckboxChange}
                  selectedModel={selectedModel}
                />
              </div>
            </div>


            <div className="addVersand">
              <p>Versandberechnung:</p>
              <div className="addVersandIcondiv">
                <p> Hinzufügen </p>
                <AddVersand
                  isVisibleP2P={isVisibleP2P}
                  setVisibleValueP2P={(value) => handleSetVisibleP2P(value)}
                  id="addVersandIcon"
                  isCheckedVersand={checkedVersand}
                  updateOpenP2P={handleUpdateOpenP2P}
                  handleKapaAddPres={handleKapaAddPres}
                  selectedModel={selectedModel}
                  isVisiblePubSub={isVisiblePubSub}
                  setVisibleValuePubSub={(value) => handleSetVisiblePubSub(value)}
                  updateOpenPubSub={handleUpdateOpenPubSub}
                  handleMessageAc={(value) => handleMessageAc(value)} 
                />
              </div>

              <div className="removeVersandIcondiv">
                <p> Entfernen </p>
                <RemoveVersand
                  isVisibleP2P={isVisibleP2P}
                  setVisibleValueP2P={(value) => handleSetVisibleP2P(value)}
                  id="removeVersandIcon"
                  selectedModel={selectedModel}
                  isVisiblePubSub={isVisiblePubSub}
                  setVisibleValuePubSub={(value) => handleSetVisiblePubSub(value)}
                  handleMessageAc={(value) => handleMessageAc(value)} 
                />
              </div>

              <div className="checkVersandIcondiv">
                <CheckboxVersand
                  checked={checkedVersand}
                  onCheckboxChange={handleCheckboxChangeVersand}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          {/* <div className="mainLegend">
            <div className="LegendeHeader">
              <p>Legende</p>
            </div>


            <LegendP2P selectedModal={selectedModel} />
          </div> */}
          <div className="mainContent">
            <div className="InfoIcon">
              {/* <InfoIcon
                selectedModel={selectedModel}
                isVisibleP2P={isVisibleP2P}
                isVisiblePubSub={isVisiblePubSub}
              /> */}
            </div>

            <div className="display">
              <div className="displayArch">
                {selectedModel === 'Point-to-Point' ? (
                  <P2P
                    id="P2P_Arch"
                    isVisibleP2P={isVisibleP2P}
                    openP2P={openP2P}
                    handleCloseP2P={handleCloseP2P}
                    checkedAlertChoice={checkedAlertChoice}
                    handleBackAlertP2P={handleBackAlertP2P}
                    handleNextAlertP2P={handleNextAlertP2P}
                    handleCloseXP2P={handleXP2P}
                    KapaAddPres={KapaAddPres}
                  />
                ) : (
                  <PubSub
                    id="PubSub_Arch"
                    isVisiblePubSub={isVisiblePubSub}
                    openPubSub={openPubSub}
                    handleClosePubSub={handleClosePubSub}
                    checkedAlertChoice={checkedAlertChoice}
                    handleBackAlertPubSub={handleBackAlertPubSub}
                    handleNextAlertPubSub={handleNextAlertPubSub}
                    handleCloseXPubSub={handleXPubSub}
                    KapaAddPres={KapaAddPres}
                  />
                )}
              </div>
              <div className="displayText">
                <TextRight
                  selectedModel={selectedModel}
                  selectedProcess={selectedProcess}
                  isVisibleP2P={isVisibleP2P}
                  isVisiblePubSub={isVisiblePubSub}
                  messageAc={messageAc}
                />
              </div>

            </div>

            <DataPackage id="DataPackageID1" />
            <DataPackage id="DataPackageID2" />
            <DataPackage id="DataPackageID3" />
            <DataPackage id="DataPackageID4" />
            <DataPackage id="DataPackageID5" />
          </div>

          <div className="mainLegend">
            <div className="LegendeHeader">
              <p>Legende</p>
            </div>
            <LegendP2P selectedModal={selectedModel} />
          </div>

        </div>
      </div>
      <div className="footer">
       {/*  <p>footer</p> */}
      </div>
    </div>
  );
}
