import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';

import styles from '@/app/ui/home.module.css';

interface RadioButtonsGroupProps {
  onModelChange: (model: string) => void;
}

export default function RadioButtonsGroup({ onModelChange }: RadioButtonsGroupProps) {
  const [selectedValue, setSelectedValue] = useState('Point-to-Point');

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
    if (onModelChange) {
      onModelChange(event.target.value);
    }
  };

  return (
    <FormControl className={styles.radiostyle}>
      <FormLabel 
        id="demo-radio-buttons-group-label"
        sx={{
          color: '#000000',
          fontSize: '1.2rem',
        }}
        className={styles.radioLabel} // Klasse anwenden, um Farbe zu erzwingen
      >
        Kommunikationsmodell
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Point-to-Point"
        name="radio-buttons-group"
        value={selectedValue}
        onChange={handleChange}
      >
        <FormControlLabel 
          value="Point-to-Point" 
          control={<Radio classes={{ root: styles.radioRoot, checked: styles.radioChecked }} />} 
          label="Point-to-Point" 
        />
        <FormControlLabel 
          value="Publish/Subscribe" 
          control={<Radio classes={{ root: styles.radioRoot, checked: styles.radioChecked }} />} 
          label="Publish/Subscribe" 
        />
      </RadioGroup>
    </FormControl>
  );
}
