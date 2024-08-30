'use client'
import React, { useEffect, useRef, useState } from 'react';

import Ca from './svgLegend/Ca';
import P2P from './svgLegend/P2P';
import Agg from './svgLegend/Agg';
import PubSub from './svgLegend/PubSub'
import Alert from './legendAlert'

interface legendProps {
    selectedModal: string;
}



export default function legend({ selectedModal }: legendProps) {

    const [component, setComponent] = React.useState("Ca");
    const [openLegend, setOpenLegend] = React.useState(false);
    const [colorCa, setColorCa] = React.useState("rgb(0,0,0)");
    const [colorP2P, setColorP2P] = React.useState("rgb(0,0,0)");
    const [colorPubSub, setColorPubSub] = React.useState("rgb(0,0,0)");
    const [colorAgg, setColorAgg] = React.useState("rgb(0,0,0)");
    const [colorAggWhite, setColorAggWhite] = React.useState("rgb(255,255,255)");



    const handleClickCa = () => {
        setComponent("Ca");
        setColorCa("rgb(255,0,0)");
        setOpenLegend(true);
    }

    const handleClickP2P = () => {
        setComponent("P2P");
        setColorP2P("rgb(255,0,0)");
        setOpenLegend(true);
    }

    const handleClickPubSub = () => {
        setComponent("PubSub");
        setColorPubSub("rgb(255,0,0)");
        setOpenLegend(true);
    }

    const handleClickAgg = () => {
        setComponent("Agg");
        setColorAgg("rgb(255,0,0)");
        setColorAggWhite("rgb(255,0,0)");
        setOpenLegend(true);
    }


    const handleCloseLegend = () => {
        setColorCa("rgb(0,0,0)");
        setColorP2P("rgb(0,0,0)");
        setColorPubSub("rgb(0,0,0)");
        setColorAgg("rgb(0,0,0)");
        setColorAggWhite("rgb(255,255,255)");
        setOpenLegend(false);
    }

    return (
        <div className="legendDiv">
            <div className="LegendAlert">
                <Alert open={openLegend} handleClose={handleCloseLegend} component={component} />
            </div>
            <div className="LegendItemd">
                <Ca handleClickCa={handleClickCa} colorCa={colorCa} />
            </div>
            {(selectedModal === 'Point-to-Point') ? (
                <div className="LegendItemd" id="legendP2P">
                    <P2P handleClickP2P={handleClickP2P} colorP2P={colorP2P} />
                </div>
            ) :
                (<div className="LegendItemd" id="legendPubSub">
                    <PubSub handleClickPubSub={handleClickPubSub} colorPubSub={colorPubSub} />
                </div>)}
            <div className="LegendItemd" id="AggSvg">
                <Agg handleClickAgg={handleClickAgg} colorAgg={colorAgg} colorAggWhite={colorAggWhite}/>
            </div>
        </div>


    )
}