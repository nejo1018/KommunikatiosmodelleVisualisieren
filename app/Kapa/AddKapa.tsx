'use client'

import React, {useState} from 'react';
import CheckIcon from '@mui/icons-material/Check';

interface AddKapaProps {
    isVisibleKapa: number;
    setVisibleValueKapa: (value: number) => void;
    id: string;
  }
  
  export default function AddKapa({id, isVisibleKapa, setVisibleValueKapa }: AddKapaProps) {
    const handleClick = () => {
      if (isVisibleKapa < 4) {
        setVisibleValueKapa(isVisibleKapa + 1);
      }

    };
  
    return (
      <CheckIcon onClick={handleClick} style={{ cursor: 'pointer' }} id={id} />
    );
  }