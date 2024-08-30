'use client'

import React from 'react';

import AlertBaubar from './alert/alertBaubar';
import AlertVersand from './alert/alertVersand';

import AlertPubSub from './alert/AlertPubSub';

import Versand from './Versand';
import Baubar from './Baubar';
import Kp from './Kp';




interface PubSubProps {
    id: string;
    isVisiblePubSub: number;
    openPubSub: boolean;
    handleClosePubSub: () => void;
    checkedAlertChoice: boolean;
    handleBackAlertPubSub: () => void;
    handleNextAlertPubSub: () => void;
    handleCloseXPubSub: () => void;
    KapaAddPres: boolean;
}

export default function PubSub({
    id,
    isVisiblePubSub,
    openPubSub,
    handleClosePubSub,
    checkedAlertChoice,
    handleBackAlertPubSub,
    handleNextAlertPubSub,
    handleCloseXPubSub,
    KapaAddPres
}: PubSubProps) {

    const [component, setComponent] = React.useState("caAnfrage");


    /* Baubar */
    const [openBaubar, setOpenBaubar] = React.useState(false);
    const [colorBaubar, setColorBaubar] = React.useState("rgb(0,0,0)");
    const [colorCa1Baubar, setColorCa1Baubar] = React.useState("rgb(0,0,0)");
    const [colorP2PBaubar, setColorP2PBaubar] = React.useState("rgb(0,0,0)");
    const [colorLv, setColorLv] = React.useState("rgb(0,0,0)");
    const [colorPp, setColorPp] = React.useState("rgb(0,0,0)");
    const [colorCa2Lv, setColorCa2Lv] = React.useState("rgb(0,0,0)");
    const [colorCa2Pp, setColorCa2Pp] = React.useState("rgb(0,0,0)");
    const [colorP2P2Baubar, setColorP2P2Baubar] = React.useState("rgb(0,0,0)");
    const [colorAggBau, setColorAggBau] = React.useState("rgb(0,0,0)");
    const [colorAggBauWhite, setColorAggBauWhite] = React.useState("rgb(255,255,255)");
    const [colorResBau, setColorResBau] = React.useState("#808080");
    const [colorResBauBlack, setColorResBauBlack] = React.useState("rgb(0,0,0)");


    const handleClickBaubar = () => {
        setComponent("Baubarkeit");
        setColorBaubar("rgb(255,0,0)");
        setOpenBaubar(true);
    }

    const handleClickCa1Baubar = () => {
        setComponent("Ca1Baubar");
        setColorCa1Baubar("rgb(255,0,0)");
        setOpenBaubar(true);
    }

    const handleClickP2PBaubar = () => {
        setComponent("P2PBaubar");
        setColorP2PBaubar("rgb(255,0,0)");
        setOpenBaubar(true);
    }

    const handleClickLv = () => {
        setComponent("Lv");
        setColorLv("rgb(255,0,0)");
        setOpenBaubar(true);
    }

    const handleClickPp = () => {
        setComponent("Pp");
        setColorPp("rgb(255,0,0)");
        setOpenBaubar(true);
    }

    const handleClickCa2Lv = () => {
        setComponent("Ca2Lv");
        setColorCa2Lv("rgb(255,0,0)");
        setOpenBaubar(true);
    }

    const handleClickCa2Pp = () => {
        setComponent("Ca2Pp");
        setColorCa2Pp("rgb(255,0,0)");
        setOpenBaubar(true);
    }

    const handleClickP2P2Baubar = () => {
        setComponent("P2P2Baubar");
        setColorP2P2Baubar("rgb(255,0,0)");
        setOpenBaubar(true);
    }

    const handleClickAggBau = () => {
        setComponent("AggBau");
        setColorAggBau("rgb(255,0,0)");
        setColorAggBauWhite("rgb(255,0,0)");
        setOpenBaubar(true);
    }

    const handleClickResBau = () => {
        setComponent("ResBau");
        setColorResBau("rgb(255,0,0)");
        setColorResBauBlack("rgb(255,0,0)");
        setOpenBaubar(true);
    }


    const handleCloseBaubar = () => {
        setColorBaubar("rgb(0,0,0)");
        setColorCa1Baubar("rgb(0,0,0)");
        setColorP2PBaubar("rgb(0,0,0)");
        setColorLv("rgb(0,0,0)");
        setColorPp("rgb(0,0,0)");
        setColorCa2Lv("rgb(0,0,0)");
        setColorCa2Pp("rgb(0,0,0)");
        setColorP2P2Baubar("rgb(0,0,0)");
        setColorAggBau("rgb(0,0,0)");
        setColorAggBauWhite("rgb(255,255,255)");
        setColorResBau("#808080");
        setColorResBauBlack("rgb(0,0,0)");
        setColorKp("rgb(0,0,0)");
        setColorCa2Kp("rgb(0,0,0)");
        setOpenBaubar(false);
    }


    /* Kp */

    const [colorKp, setColorKp] = React.useState("rgb(0,0,0)");
    const [colorCa2Kp, setColorCa2Kp] = React.useState("rgb(0,0,0)");

    const handleClickKp = () => {
        setComponent("Kp");
        setColorKp("rgb(255,0,0)");
        setOpenBaubar(true);
    }

    const handleClickCa2Kp = () => {
        setComponent("Ca2Kp");
        setColorCa2Kp("rgb(255,0,0)");
        setOpenBaubar(true);
    }




    /* Versand */

    const [openVersand, setOpenVersand] = React.useState(false);
    const [colorVersand, setColorVersand] = React.useState("rgb(0,0,0)");
    const [colorCa1Ver, setColorCa1Ver] = React.useState("rgb(0,0,0)");
    const [colorTb, setColorTb] = React.useState("rgb(0,0,0)");
    const [colorCa2Tb, setColorCa2Tb] = React.useState("rgb(0,0,0)");
    const [colorAggVer, setColorAggVer] = React.useState("rgb(0,0,0)");
    const [colorAggVerWhite, setColorAggVerWhite] = React.useState("rgb(255,255,255)");
    const [colorResVer, setColorResVer] = React.useState("#808080");
    const [colorResVerBlack, setColorResVerBlack] = React.useState("rgb(0,0,0)");


    const handleClickVersand = () => {
        setComponent("Versand");
        setColorVersand("rgb(255,0,0)");
        setOpenVersand(true);
    }

    const handleClickCa1Ver = () => {
        setComponent("Ca1Ver");
        setColorCa1Ver("rgb(255,0,0)");
        setOpenVersand(true);
    }

    const handleClickTb = () => {
        setComponent("Tb");
        setColorTb("rgb(255,0,0)");
        setOpenVersand(true);
    }

    const handleClickCa2Tb = () => {
        setComponent("Ca2Tb");
        setColorCa2Tb("rgb(255,0,0)");
        setOpenVersand(true);
    }

    const handleClickAggVer = () => {
        setComponent("AggVer");
        setColorAggVer("rgb(255,0,0)");
        setColorAggVerWhite("rgb(255,0,0)");
        setOpenVersand(true);
    }


    const handleClickResVer = () => {
        setComponent("ResVer");
        setColorResVer("rgb(255,0,0)");
        setColorResVerBlack("rgb(255,0,0)");
        setOpenVersand(true);
    }




    const handleCloseVersand = () => {
        setColorVersand("rgb(0,0,0)");
        setColorCa1Ver("rgb(0,0,0)");
        setColorTb("rgb(0,0,0)");
        setColorTb("rgb(0,0,0)");
        setColorCa2Tb("rgb(0,0,0)");
        setColorAggVer("rgb(0,0,0)");
        setColorAggVerWhite("rgb(255,255,255)");
        setColorResVer("#808080");
        setColorResVerBlack("rgb(0,0,0)");
        setOpenVersand(false);
    }


    /* console.log('PubSub: ' + isVisiblePubSub); */

    return (
        <div className="divPubSub">
            <div className="AlertPubSub">
                {((checkedAlertChoice === true) && (KapaAddPres === true)) ? (
                    <AlertPubSub
                        open={openPubSub}
                        handleClose={handleClosePubSub}
                        isVisiblePubSub={isVisiblePubSub}
                        handleBackPubSub={handleBackAlertPubSub}
                        handleNextPubSub={handleNextAlertPubSub}
                        handleXPubSub={handleCloseXPubSub}
                    />
                ) : null
                }
            </div>
            <div className="AlertPubSub">
                <div className="AlertAllgemein" id="idAlertAllgemein">
                    <AlertBaubar
                        open={openBaubar}
                        handleClose={handleCloseBaubar}
                        component={component}
                        isVisiblePubSub={isVisiblePubSub}
                    />
                </div>
                <div className="AlertVersand" id="idAlertVersand">
                    <AlertVersand
                        open={openVersand}
                        handleClose={handleCloseVersand}
                        component={component}
                        isVisiblePubSub={isVisiblePubSub}
                    />
                </div>

            </div>
            {/*  <svg width="1947" height="531" viewBox="0 0 1947 531" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Display" clipPath="url(#clip0_55_6)">
                    <rect width="1947" height="531" fill="white" /> */}
            <svg width="1947" height="861" viewBox="0 0 1947 531" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Display" clipPath="url(#clip0_55_6)">
                    <rect width="1947" height="861" fill="white" />

                    <Baubar
                        colorBaubar={colorBaubar}
                        handleClickBaubar={handleClickBaubar}
                        colorCa1Baubar={colorCa1Baubar}
                        handleClickCa1Baubar={handleClickCa1Baubar}
                        colorP2PBaubar={colorP2PBaubar}
                        handleClickP2PBaubar={handleClickP2PBaubar}
                        colorLv={colorLv}
                        handleClickLv={handleClickLv}
                        colorPp={colorPp}
                        handleClickPp={handleClickPp}
                        colorCa2Lv={colorCa2Lv}
                        handleClickCa2Lv={handleClickCa2Lv}
                        colorCa2Pp={colorCa2Pp}
                        handleClickCa2Pp={handleClickCa2Pp}
                        colorP2P2Baubar={colorP2P2Baubar}
                        handleClickP2P2Baubar={handleClickP2P2Baubar}
                        colorAggBau={colorAggBau}
                        handleClickAggBau={handleClickAggBau}
                        colorAggBauWhite={colorAggBauWhite}
                        colorResBau={colorResBau}
                        handleClickResBau={handleClickResBau}
                        colorResBauBlack={colorResBauBlack}
                        isVisiblePubSub={isVisiblePubSub}
                    />

                    <Kp
                        colorKp={colorKp}
                        handleClickKp={handleClickKp}
                        colorCa2Kp={colorCa2Kp}
                        handleClickCa2Kp={handleClickCa2Kp}
                        isVisiblePubSub={isVisiblePubSub}
                    />

                    <Versand
                        colorVersand={colorVersand}
                        handleClickVersand={handleClickVersand}
                        colorCa1Ver={colorCa1Ver}
                        handleClickCa1Ver={handleClickCa1Ver}
                        colorTb={colorTb}
                        handleClickTb={handleClickTb}
                        colorCa2Tb={colorCa2Tb}
                        handleClickCa2Tb={handleClickCa2Tb}
                        colorAggVer={colorAggVer}
                        handleClickAggVer={handleClickAggVer}
                        colorAggVerWhite={colorAggVerWhite}
                        colorResVer={colorResVer}
                        handleClickResVer={handleClickResVer}
                        colorResVerBlack={colorResVerBlack}
                        isVisiblePubSub={isVisiblePubSub}
                    />
                </g>
            </svg>
        </div>
    )
}