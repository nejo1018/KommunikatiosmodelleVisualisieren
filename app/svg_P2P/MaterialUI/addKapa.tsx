'use client'

import React, { useState } from 'react';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Tooltip from '@mui/material/Tooltip';

interface AddKapaProps {
  isVisibleP2P: number;
  setVisibleValueP2P: (value: number) => void;
  id: string;
  isChecked: boolean;
  openP2P: boolean;
  handleOpen: () => void;
  updateOpenP2P: (value: boolean) => void;
  KapaAddPres: boolean;
  handleKapaAddPres: (value: boolean) => void;
  selectedModel: string;
  isVisiblePubSub: number;
  setVisibleValuePubSub: (value: number) => void;
  updateOpenPubSub: (value: boolean) => void;
  handleMessageAc: (value: boolean) => void;
}


export default function AddKapa({
  id,
  isVisibleP2P,
  setVisibleValueP2P,
  isChecked,
  openP2P,
  handleOpen,
  updateOpenP2P,
  KapaAddPres,
  handleKapaAddPres,
  selectedModel,
  isVisiblePubSub,
  setVisibleValuePubSub,
  updateOpenPubSub,
  handleMessageAc
}: AddKapaProps) {

  const handleClick = () => {
    handleMessageAc(false);
    if (selectedModel === 'Point-to-Point') {
      if (isVisibleP2P < 8) {
        setVisibleValueP2P(isVisibleP2P + 1);
      }
      handleKapaAddPres(true);
      updateOpenP2P(true);
    } else {
      if (isVisiblePubSub < 6) {
        setVisibleValuePubSub(isVisiblePubSub + 1);
      }
      handleKapaAddPres(true);
      updateOpenPubSub(true);
    }

  };

  if (selectedModel === 'Point-to-Point') {
    switch (isChecked) {

      case true:
        return (

          <Tooltip
            title={isChecked ? "Es sind bereits alle Komponenten der Kapazitätsplanung hinzugefügt worden!" : ""}
            sx={{ '& .MuiTooltip-tooltip': { fontSize: '1.2rem' } }}
          >
            <span>
              <AddOutlinedIcon
                onClick={isChecked ? undefined : handleClick}
                style={{ cursor: isChecked ? 'not-allowed' : 'pointer' }}
                id={id}
              />
            </span>
          </Tooltip>
        );
      case false:
        return (
          <AddOutlinedIcon onClick={handleClick} style={{ cursor: 'pointer' }} id={id} />
        );
    }


  } else {

    switch (isChecked) {

      case true:
        return (

          <Tooltip
            title={isChecked ? "Es sind bereits alle Komponenten der Kapazitätsplanung hinzugefügt worden!" : ""}
            sx={{ '& .MuiTooltip-tooltip': { fontSize: '1.2rem' } }}
          >
            <span>
              <AddOutlinedIcon
                onClick={isChecked ? undefined : handleClick}
                style={{ cursor: isChecked ? 'not-allowed' : 'pointer' }}
                id={id}
              />
            </span>
          </Tooltip>
        );
      case false:
        return (
          <AddOutlinedIcon onClick={handleClick} style={{ cursor: 'pointer' }} id={id} />
        );
    }



  }
}