'use client'

import React, { useState } from 'react';

import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

interface RemoveKapaProps {
  isVisibleP2P: number;
  setVisibleValueP2P: (value: number) => void;
  id: string;
  selectedModel: string;
  isVisiblePubSub: number;
  setVisibleValuePubSub: (value: number) => void;
  handleMessageAc: (value: boolean) => void;
}


export default function AddKapa({
  id,
  isVisibleP2P,
  setVisibleValueP2P,
  selectedModel,
  isVisiblePubSub,
  setVisibleValuePubSub,
  handleMessageAc
}: RemoveKapaProps) {

  const handleClick = () => {
    handleMessageAc(false);
    if (selectedModel === 'Point-to-Point') {
      if ((isVisibleP2P <= 9) && (isVisibleP2P > 0)) {
        setVisibleValueP2P(isVisibleP2P - 1);
      }
    } else {
      if ((isVisiblePubSub <= 7) && (isVisiblePubSub > 0)) {
        setVisibleValuePubSub(isVisiblePubSub - 1);
      }
    }

  };

  return (
    <RemoveOutlinedIcon onClick={handleClick} style={{ cursor: 'pointer' }} id={id} />
  );
}