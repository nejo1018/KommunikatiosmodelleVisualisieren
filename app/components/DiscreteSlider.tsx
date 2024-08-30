import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value: number) {
  return `${value}°C`;
}

interface DiscreteSliderProps {
  id: string;
  sliderValue: number;
  setSliderValue: (value: number) => void;
}

function DiscreteSlider({ id, sliderValue, setSliderValue }: DiscreteSliderProps) {
  return (
      <Box sx={{ width: 200 }} id={id}>
          <Slider
              aria-label="Temperature"
              value={sliderValue}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={40}
              onChange={(event, newValue) => {
                if (typeof newValue === 'number') {
                  setSliderValue(newValue);
                }
              }}
               /* sx={{
                '& .MuiSlider-track': {
                  backgroundColor: '#000000', 
                },
                '& .MuiSlider-thumb': {
                  backgroundColor: '#e99f4c', 
                },
                '& .MuiSlider-rail': {
                  backgroundColor: '#e99f4c',  
                }
              }} */
          />
      </Box>
  );
}

export default DiscreteSlider;