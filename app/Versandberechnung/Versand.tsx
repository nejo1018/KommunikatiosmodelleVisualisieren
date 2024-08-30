'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';

import BasicArrowSVG from '../../public/images/BasicArrow.svg';
import BasicArrowShortSVG from '../../public/images/BasicArrow_short.svg';
import ChannelAdapterSVG from '../../public/images/ChannelAdapter.svg';
import ArrowEdge5 from '../../public/images/ArrowEdge5.svg'
import ArrowEdge6 from '../../public/images/ArrowEdge6.svg';

import ArrowEdge7Kp2V from '../../public/images/ArrowEdge7Kp2V.svg'
import ArrowEdge8LV2V from '../../public/images/ArrowEdge8Lv2V.svg'
import ArrowEdge8LV2V2 from '../../public/images/ArrowEdge8Lv2V2.svg'

import ArrowVersandV from '../../public/images/ArrowVersandV.svg';
import ArrowKapaV from '../../public/images/ArrowKapaV.svg';
import ArrowEdge4 from '../../public/images/ArrowEdge4.svg';

import AlertLagerverwaltung from '../Lagerverwaltung/AlertLagerverwaltung';
import AlertLagerverwaltungV from '../Lagerverwaltung/AlertLagerverwaltungV'
import AlertTransportberechnungV from '../Transportberechnung/AlertTransportberechnung';
import AlertKapa from '../Kapa/AlertKapa';

import SvgP2P from '../svgComponents/svgP2P';
import SvgChannelAdapter from '../svgComponents/svgChannelAdapter';
import SvgAggregator from '../svgComponents/svgAggregator';
import Result from '../../public/images/Result.svg';






interface VersandProps {
    isVisibleVersand: number;
  }

  
  
function Versand({ isVisibleVersand }: VersandProps) {
  const [openLvV, setOpenLvV] = React.useState(false);
  const [openKpV, setOpenKpV] = React.useState(false);
  const [openTbV, setOpenTbV] = React.useState(false);

  const [component, setComponent] = React.useState("caAnfrage");
  
  const [fillcolor, setFillcolor] = React.useState("rgb(255,255,255)");
  const [fillcolorAggregatorV, setfillcolorAggregatorV] = React.useState("rgb(255,255,255)");
  

  const [colorP2PAnfrageLvV, setcolorP2PAnfrageLvV] = React.useState("rgb(0,0,0)");
  const [colorP2PAnfrageKapaV, setcolorP2PAnfrageKapaV] = React.useState("rgb(0,0,0)");
  const [colorCaAnfrageLvV, setcolorCaAnfrageLvV] = React.useState("rgb(0,0,0)");
  const [colorCaAnfrageKpV, setcolorCaAnfrageKpV] = React.useState("rgb(0,0,0)");
  const [colorCaAnfrageTbV, setcolorCaAnfrageTbV] = React.useState("rgb(0,0,0)");
  const [colorP2PAnfrageTbV, setcolorP2PAnfrageTbV] = React.useState("rgb(0,0,0)");
  const [colorCaAntwortTbV, setcolorCaAntwortTbV] = React.useState("rgb(0,0,0)");
  const [colorP2PAntwortTbV, setcolorP2PAntwortTbV] = React.useState("rgb(0,0,0)");
  const [colorAggregatorV, setcolorAggregatorV] = React.useState("rgb(0,0,0)");
  


/*   Laververwaltung Versand */
  const handleClickOpenP2PAnfrageLvV = () => {
    setComponent("p2pAnfrageLvV");
    setOpenLvV(true);    
    setcolorP2PAnfrageLvV("rgb(255,0,0)")
  };


  const handleClickOpenCaAnfrageLvV = () => {
    setComponent("CaAnfrageLvV");
    setOpenLvV(true);    
    setcolorCaAnfrageLvV("rgb(255,0,0)")
  };





/* Kapa Versand */
  const handleClickOpenP2PAnfrageKapaV = () => {
    setComponent("p2pAnfrageKapaV");
    setOpenKpV(true);    
    setcolorP2PAnfrageKapaV("rgb(255,0,0)")
  };


  const handleClickOpenCaAnfrageKpV = () => {
    setComponent("CaAnfrageKpV");
    setOpenKpV(true);    
    setcolorCaAnfrageKpV("rgb(255,0,0)");
  };




  /*Transportberechnung  Versand */

  const handleClickOpenCaAnfrageTbV = () => {
    setComponent("caAnfrageTbV");
    setOpenTbV(true);    
    setcolorCaAnfrageTbV("rgb(255,0,0)");
  };

  const handleClickOpenP2PAnfrageTbV = () => {
    setComponent("p2pAnfrageTbV");
    setOpenTbV(true);    
    setcolorP2PAnfrageTbV("rgb(255,0,0)");
  };

  const handleClickOpenCaAntwortTbV = () => {
    setComponent("caAntwortTbV");
    setOpenTbV(true);    
    setcolorCaAntwortTbV("rgb(255,0,0)");
  };

  const handleClickOpenP2PAntwortTbV = () => {
    setComponent("P2PAntwortTbV");
    setOpenTbV(true);    
    setcolorP2PAntwortTbV("rgb(255,0,0)");
  };


  /* Versand Allgemein */
  const handleClickOpenAggregatorV = () => {
    setComponent("AggregatorV");
    setOpenTbV(true);    
    setcolorAggregatorV("rgb(255,0,0)");
    setfillcolorAggregatorV("rgb(255,0,0)");
  };




  



  const handleCloseLvV = () => {
    setcolorP2PAnfrageLvV("rgb(0,0,0)");
    setcolorCaAnfrageLvV("rgb(0,0,0)");
    setOpenLvV(false);
  };

  const handleCloseKpV = () => {
    setcolorP2PAnfrageKapaV("rgb(0,0,0)");
    setcolorCaAnfrageKpV("rgb(0,0,0)");
    setOpenKpV(false);
  };


  const handleCloseTbV = () => {
    setcolorCaAnfrageTbV("rgb(0,0,0)");
    setcolorP2PAnfrageTbV("rgb(0,0,0)");
    setcolorCaAntwortTbV("rgb(0,0,0)");
    setcolorP2PAntwortTbV("rgb(0,0,0)");
    setcolorAggregatorV("rgb(0,0,0)");
    setfillcolorAggregatorV("rgb(255,255,255)");
    setOpenTbV(false);
  };





  


    /* switch (isVisibleVersand) {
      case 0:
        return null;
      case 1:
        return (
            <div className="pVersandberechnung">
                <div className="Versanberechnung">
                <p>Versandberechnung</p>
                </div>  
            </div>
        );
      case 2:
        return (
            <div className="pVersandberechnung">
                <div className="Versanberechnung">
                <p>Versandberechnung</p>
                </div>  
            </div>
        );
      case 3:
        return (
        <div className="pVersandberechnung">
            <div className="Versanberechnung">
            <p>Versandberechnung</p>
            </div>  
        </div>
        );
      case 4:
        return (
        <div className="pVersandberechnung">
            <div className="Versanberechnung">
            <p>Versandberechnung</p>
            </div>  
        </div>             
        );
      default:
        return null;
    } */
        return (
            <div className="pVersandberechnung">
                <div className="Versanberechnung">
                <p>Versandberechnung</p>
                </div> 

                <div className="Transportberechnung">
                  <p>Transportberechnung</p>
                </div>


                {/* Lagerverwaltung */}
                <Image src={ArrowEdge5} id="LvVArrowEdge5id" alt="LvVArrowEdge5alt" />
                <Image src={BasicArrowSVG} id="LvVBasicArrow1id" alt="LvVBasicArrow1alt" />
                <Image src={ArrowVersandV} id="LvVArrowVersandV1id" alt="LvVArrowVersandV1id" />
                {/* <Image src={ArrowEdge8LV2V} id="ArrowEdge8Lv2V" alt="ArrowEdge8Lv2V" /> */}
                <Image src={ArrowEdge8LV2V2} id="ArrowEdge8Lv2V2" alt="ArrowEdge8Lv2V2" />
                

                <div className="svgChannelAdapter"  id="caAnfrageLvV"
                    onClick={handleClickOpenCaAnfrageLvV} style={{ cursor: 'pointer' }}> 
                      <SvgChannelAdapter fillColor={fillcolor} strokeColor={colorCaAnfrageLvV} id="svgcaAnfrageLvV"/>
                </div>

                <div className="P2P" id="P2PAnfrageTeileV" 
                  onClick={handleClickOpenP2PAnfrageLvV} style={{ cursor: 'pointer' }}>
                  <SvgP2P fillColor={fillcolor} strokeColor={colorP2PAnfrageLvV} id="P2PLvVAnfrageSVGid"/>
                </div> 

                <div className="AlertLagerverwaltung" id="idAlertLagerverwaltung">
                  <AlertLagerverwaltungV open={openLvV} handleClose={handleCloseLvV} component={component} />  
                </div>

                <div className="Beschriftung" id="LvVCaAnfrage">
                  <p>Channel Adapter</p>
                </div>

                <div className="Beschriftung" id="LvVP2PAnfrage">
                  <p>Point-to-Point-Channel</p>
                </div>

                
                



                {/* Kapa */}
                <Image src={BasicArrowShortSVG} id="KpVBasicArrow3id" alt="KpVBasicArrow3alt" /> 
                <Image src={BasicArrowSVG} id="KpVBasicArrow1id" alt="KpVBasicArrow1alt" />
                <Image src={ArrowKapaV} id="KpVArrowKapaV1id" alt="KpVArrowKapaV1id" />
                <Image src={ArrowEdge7Kp2V} id="KpVArrowEdge7" alt="KpVArrowEdge7" />
                <Image src={BasicArrowSVG} id="KpVBasicArrow6id" alt="KpVBasicArrow6alt" />
                


                <div className="svgChannelAdapter"  id="caAnfrageKpV"
                    onClick={handleClickOpenCaAnfrageKpV} style={{ cursor: 'pointer' }}> 
                      <SvgChannelAdapter fillColor={fillcolor} strokeColor={colorCaAnfrageKpV} id="svgcaAnfrageKpV"/>
                </div>


                <div className="P2P" id="P2PAnfrageTeileKapaV" 
                  onClick={handleClickOpenP2PAnfrageKapaV} style={{ cursor: 'pointer' }}>
                  <SvgP2P fillColor={fillcolor} strokeColor={colorP2PAnfrageKapaV} id="P2PKpVAnfrageSVGid"/>
                </div> 

                <div className="Result" id="ResultV">
                    <Image src={Result} id="ResultVSVGid" alt="ResultVSVGalt" />
                </div>

                <div className="AlertKapa" id="idAlertKapaV">
                  <AlertKapa open={openKpV} handleClose={handleCloseKpV} component={component} />  
                </div>

                <div className="Beschriftung" id="KpVCaAnfrage">
                  <p>Channel Adapter</p>
                </div>

                <div className="Beschriftung" id="KpVP2PAnfrage">
                  <p>Point-to-Point-Channel</p>
                </div>

                <div className="Beschriftung" id="LvVP2PAnfrageBeU">
                  <p>Anfrage_Teile</p>
                </div>

                <div className="Beschriftung" id="KpVP2PAnfrageBeU">
                  <p>Anfrage_Mitarbeiter</p>
                </div>




                


                {/* Transportberechnung */}
                <Image src={ArrowEdge6} id="TbVArrowEdge6id" alt="TbVArrowEdge6alt" />
                <Image src={BasicArrowSVG} id="TbVBasicArrow1id" alt="TbVBasicArrow1alt" />
                <Image src={BasicArrowSVG} id="TbVBasicArrow2id" alt="TbVBasicArrow2alt" />
                <Image src={BasicArrowShortSVG} id="TbVBasicArrowShort3id" alt="TbVBasicArrowShort3alt" /> 
                <Image src={BasicArrowSVG} id="TbVBasicArrow3id" alt="TbVBasicArrow3alt" />
                <Image src={ArrowEdge4} id="TbVArrowEdge4id" alt="TbVArrowEdge4alt" />

               


                <div className="ChannelAdapter" id="caAnfrageTbV">
                    <Image src={ChannelAdapterSVG}id="svgcaAnfrageTbV" alt="svgcaAnfrageTbV" />  
                </div>

                <div className="svgChannelAdapter"  id="caAnfrageTbV"
                    onClick={handleClickOpenCaAnfrageTbV} style={{ cursor: 'pointer' }}> 
                      <SvgChannelAdapter fillColor={fillcolor} strokeColor={colorCaAnfrageTbV} id="svgcaAnfrageTbV"/>
                </div>
       

                <div className="P2P" id="P2PAnfrageTbV" 
                  onClick={handleClickOpenP2PAnfrageTbV} style={{ cursor: 'pointer' }}>
                  <SvgP2P fillColor={fillcolor} strokeColor={colorP2PAnfrageTbV} id="P2PTbVAnfrageSVGid"/>
                </div> 

                <div className="svgChannelAdapter"  id="caAntwortTbV"
                    onClick={handleClickOpenCaAntwortTbV} style={{ cursor: 'pointer' }}> 
                      <SvgChannelAdapter fillColor={fillcolor} strokeColor={colorCaAntwortTbV} id="svgcaAnfrageTbV"/>
                </div>

                <div className="P2P" id="P2PAntwortTbV" 
                  onClick={handleClickOpenP2PAntwortTbV} style={{ cursor: 'pointer' }}>
                  <SvgP2P fillColor={fillcolor} strokeColor={colorP2PAntwortTbV} id="P2PTbVAntwortSVGid"/>
                </div> 

                <div className="Beschriftung" id="TbVCaAnfrage">
                  <p>Channel Adapter</p>
                </div>

                <div className="Beschriftung" id="TbVP2PAnfrage">
                  <p>Point-to-Point-Channel</p>
                </div>

                <div className="Beschriftung" id="TbVP2PAnfrageBeU">
                  <p>Anfrage_Transport</p>
                </div>



                <div className="Aggregator" id="AggregatorV" 
                  onClick={handleClickOpenAggregatorV} style={{ cursor: 'pointer' }}>
                  <SvgAggregator fillColor={fillcolorAggregatorV} strokeColor={colorAggregatorV} id="AggregatorVSVGid"/>
                </div> 



                <div className="AlertTransportberechnungV" id="idAlertTransportberechnungV">
                  <AlertTransportberechnungV open={openTbV} handleClose={handleCloseTbV} component={component} />  
                </div>







            </div>
        );
  }
  
  export default Versand;