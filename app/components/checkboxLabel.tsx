'use client'

import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Kapazitätsplanung" />
      <FormControlLabel required control={<Checkbox />} label="Versandberechnung" />
    </FormGroup>
  );
}