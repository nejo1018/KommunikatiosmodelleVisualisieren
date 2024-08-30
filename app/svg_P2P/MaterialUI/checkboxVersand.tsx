import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

interface ColorCheckboxesProps {
  checked: boolean;
  onCheckboxChange: (isChecked: boolean) => void;
}

export default function ColorCheckboxes({ checked, onCheckboxChange }: ColorCheckboxesProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        label="Alles hinzugefügt?"
        control={<Checkbox checked={checked} onChange={handleChange}
          sx={{
            color: '#e99f4c',
            '&.Mui-checked': {
              color: '#e99f4c',
            },
          }} />}
        labelPlacement="start"
      />
    </FormGroup>
  );
}