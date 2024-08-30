'use-client'

import React from 'react';

import Allgemein from './Allgemein';
import TbV from './TbV';
import KpV from './KpV';
import LvV from './LvV';
import Kp from './Kp';
import Pp from './Pp';
import Lv from './Lv';


import AlertAllgemein from './alert/alertAllgemein';
import AlertLv from './alert/alertLv';
import AlertPp from './alert/alertPp';
import AlertKp from './alert/alertKp';
import AlertLvV from './alert/alertLvV';
import AlertKpV from './alert/alertKpV';
import AlertTbV from './alert/alertTbV';

import AlertP2P from './alert/alertP2P';




interface LogoProps {
  id: string;
  isVisibleP2P: number;
  openP2P: boolean;
  handleCloseP2P: () => void;
  checkedAlertChoice: boolean;
  handleBackAlertP2P: () => void;
  handleNextAlertP2P: () => void;
  handleCloseXP2P: () => void;
  KapaAddPres: boolean;
}


export default function P2P({
  id,
  isVisibleP2P,
  openP2P,
  handleCloseP2P,
  checkedAlertChoice,
  handleBackAlertP2P,
  handleNextAlertP2P,
  handleCloseXP2P,
  KapaAddPres
}: LogoProps) {



  const [component, setComponent] = React.useState("caAnfrage");

  /* Allgemein */
  const [openAllgemein, setOpenAllgemein] = React.useState(false);
  const [colorBaubarkeit, setColorBaubarkeit] = React.useState("rgb(0,0,0)");
  const [colorVersand, setColorVersand] = React.useState("rgb(0,0,0)");
  const [colorAggBau, setColorAggBau] = React.useState("rgb(0,0,0)");
  const [colorAggBauWhite, setColorAggBauWhite] = React.useState("rgb(255,255,255)");
  const [colorAggVer, setColorAggVer] = React.useState("rgb(0,0,0)");
  const [colorAggVerWhite, setColorAggVerWhite] = React.useState("rgb(255,255,255)");
  const [colorResBau, setColorResBau] = React.useState("#808080");
  const [colorResBauBlack, setColorResBauBlack] = React.useState("rgb(0,0,0)");
  const [colorResVer, setColorResVer] = React.useState("#808080");
  const [colorResVerBlack, setColorResVerBlack] = React.useState("rgb(0,0,0)");

  const handleClickBaubarkeit = () => {
    setComponent("Baubarkeit");
    setColorBaubarkeit("rgb(255,0,0)");
    setOpenAllgemein(true);
  }

  const handleClickVersand = () => {
    setComponent("Versand");
    setColorVersand("rgb(255,0,0)");
    setOpenAllgemein(true);
  }

  const handleClickAggBau = () => {
    setComponent("AggBau");
    setColorAggBau("rgb(255,0,0)");
    setColorAggBauWhite("rgb(255,0,0)");
    setOpenAllgemein(true);
  }

  const handleClickAggVer = () => {
    setComponent("AggVer");
    setColorAggVer("rgb(255,0,0)");
    setColorAggVerWhite("rgb(255,0,0)");
    setOpenAllgemein(true);
  }

  const handleClickResBau = () => {
    setComponent("ResBau");
    setColorResBau("rgb(255,0,0)");
    setColorResBauBlack("rgb(255,0,0)");
    setOpenAllgemein(true);
  }

  const handleClickResVer = () => {
    setComponent("ResVer");
    setColorResVer("rgb(255,0,0)");
    setColorResVerBlack("rgb(255,0,0)");
    setOpenAllgemein(true);
  }

  const handleCloseAllgemein = () => {
    setColorBaubarkeit("rgb(0,0,0)");
    setColorVersand("rgb(0,0,0)");
    setColorAggBau("rgb(0,0,0)");
    setColorAggBauWhite("rgb(255,255,255)");
    setColorAggVer("rgb(0,0,0)");
    setColorAggVerWhite("rgb(255,255,255)");
    setColorResBau("#808080");
    setColorResBauBlack("rgb(0,0,0)");
    setColorResVer("#808080");
    setColorResVerBlack("rgb(0,0,0)");
    setOpenAllgemein(false);
  };




  /* Lv */

  const [openLv, setOpenLv] = React.useState(false);
  const [colorLvCa1, setColorLvCa1] = React.useState("rgb(0,0,0)");
  const [colorLvP2P1, setColorLvP2P1] = React.useState("rgb(0,0,0)");
  const [colorLvCa2, setColorLvCa2] = React.useState("rgb(0,0,0)");
  const [colorLvTex, setColorLvTex] = React.useState("rgb(0,0,0)");
  const [colorLvP2P2, setColorLvP2P2] = React.useState("rgb(0,0,0)");


  const handleClickLvCa1 = () => {
    setComponent("LvCa1");
    setColorLvCa1("rgb(255,0,0)");
    setOpenLv(true);
  }

  const handleClickLvP2P1 = () => {
    setComponent("LvP2P1");
    setColorLvP2P1("rgb(255,0,0)");
    setOpenLv(true);
  }

  const handleClickLvTex = () => {
    setComponent("LvTex");
    setColorLvTex("rgb(255,0,0)");
    setOpenLv(true);
  }

  const handleClickLvCa2 = () => {
    setComponent("LvCa2");
    setColorLvCa2("rgb(255,0,0)");
    setOpenLv(true);
  }

  const handleClickLvP2P2 = () => {
    setComponent("LvP2P2");
    setColorLvP2P2("rgb(255,0,0)");
    setOpenLv(true);
  }


  const handleCloseLv = () => {
    setColorLvCa1("rgb(0,0,0)");
    setColorLvCa2("rgb(0,0,0)");
    setColorLvP2P1("rgb(0,0,0)");
    setColorLvTex("rgb(0,0,0)");
    setColorLvP2P2("rgb(0,0,0)");
    setOpenLv(false);
  }



  /* Pp */

  const [openPp, setOpenPp] = React.useState(false);
  const [colorPpCa1, setColorPpCa1] = React.useState("rgb(0,0,0)");
  const [colorPpP2P1, setColorPpP2P1] = React.useState("rgb(0,0,0)");
  const [colorPpTex, setColorPpTex] = React.useState("rgb(0,0,0)");
  const [colorPpCa2, setColorPpCa2] = React.useState("rgb(0,0,0)");
  const [colorPpP2P2, setColorPpP2P2] = React.useState("rgb(0,0,0)");

  const handleClickPpCa1 = () => {
    setComponent("PpCa1");
    setColorPpCa1("rgb(255,0,0)");
    setOpenPp(true);
  }

  const handleClickPpP2P1 = () => {
    setComponent("PpP2P1");
    setColorPpP2P1("rgb(255,0,0)");
    setOpenPp(true);
  }

  const handleClickPpTex = () => {
    setComponent("PpTex");
    setColorPpTex("rgb(255,0,0)");
    setOpenPp(true);
  }

  const handleClickPpCa2 = () => {
    setComponent("PpCa2");
    setColorPpCa2("rgb(255,0,0)");
    setOpenPp(true);
  }

  const handleClickPpP2P2 = () => {
    setComponent("PpP2P2");
    setColorPpP2P2("rgb(255,0,0)");
    setOpenPp(true);
  }

  const handleClosePp = () => {
    setColorPpCa1("rgb(0,0,0)");
    setColorPpP2P1("rgb(0,0,0)");
    setColorPpTex("rgb(0,0,0)");
    setColorPpCa2("rgb(0,0,0)");
    setColorPpP2P2("rgb(0,0,0)");
    setOpenPp(false);
  }




  /* Kp */
  const [openKp, setOpenKp] = React.useState(false);
  const [colorKpCa1, setColorKpCa1] = React.useState("rgb(0,0,0)");
  const [colorKpP2P1, setColorKpP2P1] = React.useState("rgb(0,0,0)");
  const [colorKpTex, setColorKpTex] = React.useState("rgb(0,0,0)");
  const [colorKpCa2, setColorKpCa2] = React.useState("rgb(0,0,0)");
  const [colorKpP2P2, setColorKpP2P2] = React.useState("rgb(0,0,0)");
  const [isVisibleKp, setIsVisibleKp] = React.useState<number>(0);

  const handleClickKpCa1 = () => {
    setComponent("KpCa1");
    setColorKpCa1("rgb(255,0,0)");
    setOpenKp(true);
  }

  const handleClickKpP2P1 = () => {
    setComponent("KpP2P1");
    setColorKpP2P1("rgb(255,0,0)");
    setOpenKp(true);
  }

  const handleClickKpTex = () => {
    setComponent("KpTex");
    setColorKpTex("rgb(255,0,0)");
    setOpenKp(true);
  }

  const handleClickKpCa2 = () => {
    setComponent("KpCa2");
    setColorKpCa2("rgb(255,0,0)");
    setOpenKp(true);
  }

  const handleClickKpP2P2 = () => {
    setComponent("KpP2P2");
    setColorKpP2P2("rgb(255,0,0)");
    setOpenKp(true);
  }

  const handleCloseKp = () => {
    setColorKpCa1("rgb(0,0,0)");
    setColorKpP2P1("rgb(0,0,0)");
    setColorKpTex("rgb(0,0,0)");
    setColorKpCa2("rgb(0,0,0)");
    setColorKpP2P2("rgb(0,0,0)");
    setOpenKp(false);
  }





  /* LvV */
  const [openLvV, setOpenLvV] = React.useState(false);
  const [colorLvVCa1, setColorLvVCa1] = React.useState("rgb(0,0,0)");
  const [colorLvVP2P1, setColorLvVP2P1] = React.useState("rgb(0,0,0)");

  const handleClickLvVCa1 = () => {
    setComponent("LvVCa1");
    setColorLvVCa1("rgb(255,0,0)");
    setOpenLvV(true);
  }

  const handleClickLvVP2P1 = () => {
    setComponent("LvVP2P1");
    setColorLvVP2P1("rgb(255,0,0)");
    setOpenLvV(true);
  }


  const handleCloseLvV = () => {
    setColorLvVCa1("rgb(0,0,0)");
    setColorLvVP2P1("rgb(0,0,0)");
    setOpenLvV(false);
  }




  /* KpV */
  const [openKpV, setOpenKpV] = React.useState(false);
  const [colorKpVCa1, setColorKpVCa1] = React.useState("rgb(0,0,0)");
  const [colorKpVP2P1, setColorKpVP2P1] = React.useState("rgb(0,0,0)");

  const handleClickKpVCa1 = () => {
    setComponent("KpVCa1");
    setColorKpVCa1("rgb(255,0,0)");
    setOpenKpV(true);
  }

  const handleClickKpVP2P1 = () => {
    setComponent("KpVP2P1");
    setColorKpVP2P1("rgb(255,0,0)");
    setOpenKpV(true);
  }

  const handleCloseKpV = () => {
    setColorKpVCa1("rgb(0,0,0)");
    setColorKpVP2P1("rgb(0,0,0)");
    setOpenKpV(false);
  }




  /* TbV */
  const [openTbV, setOpenTbV] = React.useState(false);
  const [colorTbVCa1, setColorTbVCa1] = React.useState("rgb(0,0,0)");
  const [colorTbVP2P1, setColorTbVP2P1] = React.useState("rgb(0,0,0)");
  const [colorTbVTex, setColorTbVTex] = React.useState("rgb(0,0,0)");
  const [colorTbVCa2, setColorTbVCa2] = React.useState("rgb(0,0,0)");
  const [colorTbVP2P2, setColorTbVP2P2] = React.useState("rgb(0,0,0)");

  const handleClickTbVCa1 = () => {
    setComponent("TbVCa1");
    setColorTbVCa1("rgb(255,0,0)");
    setOpenTbV(true);
  }

  const handleClickTbVP2P1 = () => {
    setComponent("TbVP2P1");
    setColorTbVP2P1("rgb(255,0,0)");
    setOpenTbV(true);
  }

  const handleClickTbVTex = () => {
    setComponent("TbVTex");
    setColorTbVTex("rgb(255,0,0)");
    setOpenTbV(true);
  }

  const handleClickTbVCa2 = () => {
    setComponent("TbVCa2");
    setColorTbVCa2("rgb(255,0,0)");
    setOpenTbV(true);
  }

  const handleClickTbVP2P2 = () => {
    setComponent("TbVP2P2");
    setColorTbVP2P2("rgb(255,0,0)");
    setOpenTbV(true);
  }

  const handleCloseTbV = () => {
    setColorTbVCa1("rgb(0,0,0)");
    setColorTbVP2P1("rgb(0,0,0)");
    setColorTbVTex("rgb(0,0,0)");
    setColorTbVCa2("rgb(0,0,0)");
    setColorTbVP2P2("rgb(0,0,0)");
    setOpenTbV(false);
  }


  /* Alert */






  /* console.log('Vor switch: ' + isVisibleP2P); */


  return (
    <div className="divP2P">
      <div className="AlertP2P">
        {((checkedAlertChoice === true) && (KapaAddPres === true)) ? (
          <div className="AlertP2P" id="idAlertP2P">
            <AlertP2P
              open={openP2P}
              handleClose={handleCloseP2P}
              isVisibleP2P={isVisibleP2P}
              handleBack={handleBackAlertP2P}
              handleNext={handleNextAlertP2P}
              handleXP2P={handleCloseXP2P}
            />
          </div>
        ) : null
        }
        <div className="AlertAllgemein" id="idAlertAllgemein">
          <AlertAllgemein
            open={openAllgemein}
            handleClose={handleCloseAllgemein}
            component={component}
            isVisibleP2P={isVisibleP2P}
          />
        </div>
        <div className="AlertLv">
          <AlertLv
            open={openLv}
            handleClose={handleCloseLv}
            component={component}
            isVisibleP2P={isVisibleP2P}
          />
        </div>
        <div className="AlertPp">
          <AlertPp
            open={openPp}
            handleClose={handleClosePp}
            component={component}
          />
        </div>
        <div className="AlertKp">
          <AlertKp
            open={openKp}
            handleClose={handleCloseKp}
            component={component}
            isVisibleP2P={isVisibleP2P}
          />
        </div>
        <div className="AlertLvV">
          <AlertLvV
            open={openLvV}
            handleClose={handleCloseLvV}
            component={component}
          />
        </div>
        <div className="AlertKpV">
          <AlertKpV
            open={openKpV}
            handleClose={handleCloseKpV}
            component={component}
          />
        </div>
        <div className="AlertTbV">
          <AlertTbV
            open={openTbV}
            handleClose={handleCloseTbV}
            component={component}
          />
        </div>
      </div>
      <svg id={id} width="1947" height="861" viewBox="0 0 1947 861" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Display">
          <rect width="1947" height="861" fill="white" />

          <Kp
            colorKpCa1={colorKpCa1}
            handleClickKpCa1={handleClickKpCa1}
            colorKpP2P1={colorKpP2P1}
            handleClickKpP2P1={handleClickKpP2P1}
            colorKpTex={colorKpTex}
            handleClickKpTex={handleClickKpTex}
            colorKpCa2={colorKpCa2}
            handleClickKpCa2={handleClickKpCa2}
            colorKpP2P2={colorKpP2P2}
            handleClickKpP2P2={handleClickKpP2P2}
            isVisibleP2P={isVisibleP2P}
          />

          <Pp
            colorPpCa1={colorPpCa1}
            handleClickPpCa1={handleClickPpCa1}
            colorPpP2P1={colorPpP2P1}
            handleClickPpP2P1={handleClickPpP2P1}
            colorPpTex={colorPpTex}
            handleClickPpTex={handleClickPpTex}
            colorPpCa2={colorPpCa2}
            handleClickPpCa2={handleClickPpCa2}
            colorPpP2P2={colorPpP2P2}
            handleClickPpP2P2={handleClickPpP2P2}
          />

          <Lv
            colorLvCa1={colorLvCa1}
            handleClickLvCa1={handleClickLvCa1}
            colorLvP2P1={colorLvP2P1}
            handleClickLvP2P1={handleClickLvP2P1}
            colorLvTex={colorLvTex}
            handleClickLvTex={handleClickLvTex}
            colorLvCa2={colorLvCa2}
            handleClickLvCa2={handleClickLvCa2}
            colorLvP2P2={colorLvP2P2}
            handleClickLvP2P2={handleClickLvP2P2}
          />

          <Allgemein
            colorBaubarkeit={colorBaubarkeit}
            handleClickBaubarkeit={handleClickBaubarkeit}
            colorVersand={colorVersand}
            handleClickVersand={handleClickVersand}
            colorAggBau={colorAggBau}
            handleClickAggBau={handleClickAggBau}
            colorAggBauWhite={colorAggBauWhite}
            colorAggVer={colorAggVer}
            handleClickAggVer={handleClickAggVer}
            colorAggVerWhite={colorAggVerWhite}
            handleClickResBau={handleClickResBau}
            colorResBau={colorResBau}
            colorResBauBlack={colorResBauBlack}
            handleClickResVer={handleClickResVer}
            colorResVer={colorResVer}
            colorResVerBlack={colorResVerBlack}
            isVisibleP2P={isVisibleP2P}
          />

          <TbV
            colorTbVCa1={colorTbVCa1}
            handleClickTbVCa1={handleClickTbVCa1}
            colorTbVP2P1={colorTbVP2P1}
            handleClickTbVP2P1={handleClickTbVP2P1}
            colorTbVTex={colorTbVTex}
            handleClickTbVTex={handleClickTbVTex}
            colorTbVCa2={colorTbVCa2}
            handleClickTbVCa2={handleClickTbVCa2}
            colorTbVP2P2={colorTbVP2P2}
            handleClickTbVP2P2={handleClickTbVP2P2}
            isVisibleP2P={isVisibleP2P}

          />

          <KpV
            colorKpVCa1={colorKpVCa1}
            handleClickKpVCa1={handleClickKpVCa1}
            colorKpVP2P1={colorKpVP2P1}
            handleClickKpVP2P1={handleClickKpVP2P1}
            isVisibleP2P={isVisibleP2P}
          />

          <LvV
            colorLvVCa1={colorLvVCa1}
            handleClickLvVCa1={handleClickLvVCa1}
            colorLvVP2P1={colorLvVP2P1}
            handleClickLvVP2P1={handleClickLvVP2P1}
            isVisibleP2P={isVisibleP2P}
          />
        </g>
      </svg>

    </div>
  );
}



