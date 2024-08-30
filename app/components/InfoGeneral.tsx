import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';
import Alert from './InfoAlert';

const InfoButton = () => {
  const handleClick = () => {
   <Alert />
  };

  return (
    <div className="InfoIcon" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <Tooltip title="Click for more information">
        <InfoIcon />
      </Tooltip>
    </div>
  );
};

export default InfoButton;
