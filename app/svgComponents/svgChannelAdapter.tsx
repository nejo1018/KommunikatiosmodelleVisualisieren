import React, { useEffect } from 'react';

interface SvgChannelAdapterProps {
    fillColor: string;
    strokeColor: string;
    id: string;
}



const SvgChannelAdapter = ({ fillColor, strokeColor, id }: SvgChannelAdapterProps) => {
  return (
    <svg id={id} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="32px" height="72px" viewBox="-0.5 -0.5 32 72">
      <defs/>
      <g>
        <g>
          <path d="M -19 51 L 1 21 L 31 21 L 51 51 Z" fill={fillColor} stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10" transform="rotate(90,16,36)" pointerEvents="all"/>
        </g>
      </g>
    </svg>
  );
};

export default SvgChannelAdapter;