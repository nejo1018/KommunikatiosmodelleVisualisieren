'use client'

import React from 'react';
import Image from "next/image";


import BasicArrowSVG from '../../public/images/BasicArrow.svg'
import P2PSVG from '../../public/images/P2P.svg'
import ChannelAdapterSVG from '../../public/images/ChannelAdapter.svg'
import BasicArrowShortSVG from '../../public/images/BasicArrow_short.svg'
import BasicArrowLongSVG from '../../public/images/BasicArrow_long.svg'
import AggregatorSVG from '../../public/images/Aggregator.svg'
import Result from '../../public/images/Result.svg'

import SvgAggregator from '../svgComponents/svgAggregator';

import AlertProduktionsplanung from './AlertProduktionsplanung';


function Produktionsplanung() {
  const [openPp, setOpenPp] = React.useState(false);

  const [component, setComponent] = React.useState("caAnfrage");

  const [fillcolorAggregator, setfillcolorAggregator] = React.useState("rgb(255,255,255)");

  const [colorAggregator, setcolorAggregator] = React.useState("rgb(0,0,0)");

  const handleClickOpenAggregator = () => {
    setComponent("Aggregator");
    setOpenPp(true);    
    setcolorAggregator("rgb(255,0,0)");
    setfillcolorAggregator("rgb(255,0,0)");
  };


  const handleClosePp = () => {
    setfillcolorAggregator("rgb(255,255,255)");
    setcolorAggregator("rgb(0,0,0)");
    setOpenPp(false);
  };


    return(
        <div className="pProduktionsplanung">
            <div className="Produktionsplanung">
                <p>Produktionsplanung</p>
            </div>

            <Image src={BasicArrowShortSVG} id="PpBasicArrow0id" alt="PpBasicArrow0alt" />
            <Image src={BasicArrowSVG} id="PpBasicArrow1id" alt="PpBasicArrow1alt" />
            <Image src={BasicArrowSVG} id="PpBasicArrow2id" alt="PpBasicArrow2alt" />
            <Image src={BasicArrowShortSVG} id="PpBasicArrow3id" alt="PpBasicArrow3alt" />
            <Image src={BasicArrowSVG} id="PpBasicArrow4id" alt="PpBasicArrow4alt" />
            <Image src={BasicArrowLongSVG} id="PpBasicArrow5id" alt="PpBasicArrow5alt" />
            <Image src={BasicArrowSVG} id="PpBasicArrow6id" alt="PpBasicArrow6alt" />

            <div className="ChannelAdapter" id="caAnfragePp">
                <Image src={ChannelAdapterSVG}id="svgcaAnfragePp" alt="svgcaAnfragePp" />                   
            </div>

            <div className="P2P" id="P2PAnfragePp">
                <Image src={P2PSVG} id="P2PAnfragePpSVGid" alt="P2PAnfragePpSVGalt" />
            </div>

            <div className="ChannelAdapter" id="caAntwortPp">
                <Image src={ChannelAdapterSVG}id="svgcaAntwortPp" alt="svgcaAntwortPp" />  
            </div>

            <div className="P2P" id="P2PAntwortPp">
                <Image src={P2PSVG} id="P2PAntwortPpSVGid" alt="P2PSVGAntwortPpalt" />
            </div>

            {/* <div className="Aggregator" id="AggregatorB">
                <Image src={AggregatorSVG} id="AggregatorBSVGid" alt="AggregatorBSVGalt" />
            </div> */}

            <div className="Aggregator" id="AggregatorB" 
                onClick={handleClickOpenAggregator} style={{ cursor: 'pointer' }}>
                  <SvgAggregator fillColor={fillcolorAggregator} strokeColor={colorAggregator} id="AggregatorVSVGid"/>
            </div> 

            <div className="Result" id="ResultB">
                <Image src={Result} id="ResultBSVGid" alt="ResultBSVGalt" />
            </div>

            <div className="AlertTransportberechnungV" id="idAlertTransportberechnungV">
              <AlertProduktionsplanung open={openPp} handleClose={handleClosePp} component={component} />  
            </div>


          <div className="Beschriftung" id="PpCaAnfrageBe">
            <p>Channel Adapter</p>
          </div>

          <div className="Beschriftung" id="PpCaAntwortBe">
            <p>Channel Adapter</p>
          </div>

          <div className="Beschriftung" id="PpP2PAnfrageBeO">
            <p>Point-to-Point-Channel</p>
          </div>

          <div className="Beschriftung" id="PpP2PAnfrageBeU">
            <p>Anfrage_Maschinen</p>
          </div>

          <div className="Beschriftung" id="PpP2PAntwortBeO">
            <p>Point-to-Point-Channel</p>
          </div>

          <div className="Beschriftung" id="PpP2PAntwortBeU">
            <p>Antwort_Maschinen</p>
          </div>


      </div>
    )
}

export default Produktionsplanung;