import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import styles from '@/app/ui/home.module.css'

interface RadioButtonsGroupProps {
  onProcessChange: (process: string) => void;
}

export default function RadioButtonsGroup({ onProcessChange }: RadioButtonsGroupProps) {

  const [selectedValue, setSelectedValue] = React.useState('Baubarkeitsberechnung');

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
    if (onProcessChange) {
      onProcessChange(event.target.value);
    }
  };


  return (
    <FormControl className={styles.radiostyle}>
      <FormLabel id="demo-radio-buttons-group-label"
        sx={{
          color: '#000000',
          fontSize: '1.2rem'/* ,
        fontWeight: 'bold' */
        }}
        className={styles.radioLabel}>Geschäftsprozesse</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Baubarkeitsberechnung"
        name="radio-buttons-group"
        value={selectedValue}
        onChange={handleChange}
      >
        <FormControlLabel
          value="Baubarkeitsberechnung"
          control={<Radio classes={{ root: styles.radioRoot, checked: styles.radioChecked }} />}
          label="Baubarkeitsberechnung"
        />
        <FormControlLabel
          value="Versandberechnung"
          control={<Radio classes={{ root: styles.radioRoot, checked: styles.radioChecked }} />}
          label="Versandberechnung"
        />
      </RadioGroup>
    </FormControl>
  );
}