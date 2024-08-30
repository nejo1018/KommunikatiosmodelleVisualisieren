import React from 'react';

interface SvgAggregatorProps {
  fillColor: string;
  strokeColor: string;
  id: string;
}


const SimpleSvgComponent = ({ fillColor, strokeColor, id }:SvgAggregatorProps) => {
  return (
    <svg id={id} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="90px" height="81px" viewBox="-0.5 -0.5 90 81">
      <defs/>
      <g>
        <g>
          <rect x="0" y="0" width="88.5" height="80" fill="#9e9e9e" stroke={strokeColor}  pointer-events="all"/>
        </g>
        <g>
          <rect x="8.5" y="5" width="15" height="15" fill={fillColor} stroke="rgb(0, 0, 0)" pointer-events="all"/>
        </g>
        <g>
          <rect x="8.5" y="32.5" width="15" height="15" fill={fillColor} stroke="rgb(0, 0, 0)" pointer-events="all"/>
        </g>
        <g>
          <rect x="8.5" y="60" width="15" height="15" fill={fillColor} stroke="rgb(0, 0, 0)"  pointer-events="all"/>
        </g>
        <g>
          <path d="M 30 40 L 51.15 40" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke"/>
          <path d="M 56.4 40 L 49.4 43.5 L 51.15 40 L 49.4 36.5 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/>
        </g>
        <g>
          <rect x="60.5" y="32.5" width="15" height="15" fill={fillColor} stroke="rgb(0, 0, 0)" pointer-events="all"/>
        </g>
      </g>
    </svg>
  );
};

export default SimpleSvgComponent;

