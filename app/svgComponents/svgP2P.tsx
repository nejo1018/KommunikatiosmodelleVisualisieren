import React from 'react';

interface SvgChannelAdapterProps {
    fillColor: string;
    strokeColor: string;
    id: string;
}

const SvgChannelAdapter = ({ fillColor, strokeColor, id }: SvgChannelAdapterProps) => {
  return (
    <svg 
      id={id} 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1" 
      width="74px" 
      height="32px" 
      viewBox="-0.5 -0.5 74 32"
    >
      <defs />
      <g>
        <g>
          <path 
            d="M 7.59 1 L 66.22 1 C 69.86 1 72.81 7.72 72.81 16 C 72.81 24.28 69.86 31 66.22 31 L 7.59 31 C 3.95 31 1 24.28 1 16 C 1 7.72 3.95 1 7.59 1 Z" 
            fill={fillColor} 
            stroke={strokeColor} 
            strokeWidth="2" 
            strokeMiterlimit="10" 
            pointerEvents="all"
          />
          <path 
            d="M 66.22 1 C 62.57 1 59.62 7.72 59.62 16 C 59.62 24.28 62.57 31 66.22 31" 
            fill={fillColor} 
            stroke={strokeColor} 
            strokeWidth="2" 
            strokeMiterlimit="10" 
            pointerEvents="all"
          />
        </g>
      </g>
    </svg>
  );
};

export default SvgChannelAdapter;
