'use client'

//import React from 'react';
//import * as React from 'react';
import React, { useEffect } from 'react';
import Image from "next/image";


import ArrowEdge5 from '../../public/images/ArrowEdge5.svg'
import BasicArrowSVG from '../../public/images/BasicArrow.svg'
import ArrowEdge3 from '../../public/images/ArrowEdge3.svg'
import P2PSVG from '../../public/images/P2P.svg'
import ChannelAdapterSVG from '../../public/images/ChannelAdapter.svg'

import DivLagerverwaltung from '../divComponents/divLagerverwaltung';

import SvgChannelAdapter from '../svgComponents/svgChannelAdapter';
import SvgP2P from '../svgComponents/svgP2P';

import AlertLagerverwaltung from './AlertLagerverwaltung';


function Lagerverwaltung() {

  const [open, setOpen] = React.useState(false);
  const [colorCaAnfragen, setColorCaAnfragen] = React.useState("rgb(0,0,0)")
  const [colorCaAntwort, setColorCaAntwort] = React.useState("rgb(0,0,0)")
  const [colorP2PAnfrage, setcolorP2PAnfrage] = React.useState("rgb(0,0,0)")
  const [colorP2PAntwort, setcolorP2PAntwort] = React.useState("rgb(0,0,0)")
  const [fillcolor, setFillcolor] = React.useState("rgb(255,255,255)")
  const [component, setComponent] = React.useState("caAnfrage");
  const [divLvColor, setDivLvColor] = React.useState("black");



  const handleClickOpenCaAnfrage = () => {
    setComponent("caAnfrage");
    setOpen(true);    
    setColorCaAnfragen("rgb(255,0,0)")
  };

  const handleClickOpenCaAntwort = () => {
    setComponent("caAntwort");
    setOpen(true);    
    setColorCaAntwort("rgb(255,0,0)");
  };


  const handleClickOpenP2PAnfrage = () => {
    setComponent("p2pAnfrage");
    setOpen(true);    
    setcolorP2PAnfrage("rgb(255,0,0)")
  };


  const handleClickOpenP2PAntwort = () => {
    setComponent("p2pAntwort");
    setOpen(true);    
    setcolorP2PAntwort("rgb(255,0,0)")
  };






  const handleClose = () => {
    setColorCaAnfragen("rgb(0,0,0)");
    setColorCaAntwort("rgb(0,0,0)");
    setcolorP2PAnfrage("rgb(0,0,0)");
    setcolorP2PAntwort("rgb(0,0,0)");
    setOpen(false);
  };


    return(
    <div className="pLagerverwaltung">

       {/*  <div className="Lagerverwaltung">
            <p>Lagerverwaltung</p>
        </div> */}

        <DivLagerverwaltung borderColor={divLvColor} borderWidth="3px" borderStyle="solid" />

        <Image src={ArrowEdge5} id="LvArrowEdge5id" alt="LvArrowEdge5alt" />
        <Image src={BasicArrowSVG} id="LvBasicArrow1id" alt="LvBasicArrow1alt" />
        <Image src={BasicArrowSVG} id="LvBasicArrow2id" alt="LvBasicArrow2alt" />
        <Image src={BasicArrowSVG} id="LvBasicArrow3id" alt="LvBasicArrow3alt" />
        <Image src={BasicArrowSVG} id="LvBasicArrow4id" alt="LvBasicArrow4alt" />
        <Image src={ArrowEdge3} id="LvArrowEdge3id" alt="LvArrowEdge3alt" />


        <div className="svgChannelAdapter"  id="caAnfrageTeile"
             onClick={handleClickOpenCaAnfrage} style={{ cursor: 'pointer' }}> 
              <SvgChannelAdapter fillColor={fillcolor} strokeColor={colorCaAnfragen} id="svgcaAnfrageTeile"/>
        </div>


          {/* <div className="ChannelAdapter" id="caAnfrageTeile"> */}
          <div className="AlertLagerverwaltung" id="idAlertLagerverwaltung">
          <AlertLagerverwaltung open={open} handleClose={handleClose} component={component} />  
          </div>


 
          <div className="P2P" id="P2PAnfrageTeile" 
               onClick={handleClickOpenP2PAnfrage} style={{ cursor: 'pointer' }}>
            <SvgP2P fillColor={fillcolor} strokeColor={colorP2PAnfrage} id="P2PAnfrageSVGid"/>
          </div> 


          <div className="svgChannelAdapter"  id="caAntwortTeile"
             onClick={handleClickOpenCaAntwort} style={{ cursor: 'pointer' }}> 
              <SvgChannelAdapter fillColor={fillcolor} strokeColor={colorCaAntwort} id="svgcaAntwortTeile"/>
          </div>


          <div className="P2P" id="P2PAntwortTeile"
               onClick={handleClickOpenP2PAntwort} style={{ cursor: 'pointer' }}>
            <SvgP2P fillColor={fillcolor} strokeColor={colorP2PAntwort} id="P2PAntwortSVGid"/>
          </div>



          <div className="Beschriftung" id="LvCaAnfrageBe">
            <p>Channel Adapter</p>
          </div>

          <div className="Beschriftung" id="LvCaAntwortBe">
            <p>Channel Adapter</p>
          </div>

          <div className="Beschriftung" id="LvP2PAnfrageBeO">
            <p>Point-to-Point-Channel</p>
          </div>

          <div className="Beschriftung" id="LvP2PAnfrageBeU">
            <p>Anfrage_Teile</p>
          </div>

          <div className="Beschriftung" id="LvP2PAntwortBeO">
            <p>Point-to-Point-Channel</p>
          </div>

          <div className="Beschriftung" id="LvP2PAntwortBeU">
            <p>Antwort_Teile</p>
          </div>





    </div>
    )
}

export default Lagerverwaltung;