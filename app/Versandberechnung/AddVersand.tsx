'use client'

import React, {useState} from 'react';
import CheckIcon from '@mui/icons-material/Check';


interface AddVersandProps {
    isVisibleVersand: number;
    setVisibleValueVersand: (value: number) => void;
    id: string;  
  }
  

  export default function AddVersand({id, isVisibleVersand, setVisibleValueVersand }: AddVersandProps) {
    const handleClick = () => {
      if (isVisibleVersand < 4) {
        setVisibleValueVersand(isVisibleVersand + 1);
      }
     /* if(isVisibleVersand === 1){
      setVisibleValueVersand(0); 
     } else {
      setVisibleValueVersand(1);
     } */
    };
  
    return (           
          <CheckIcon onClick={handleClick} style={{ cursor: 'pointer' }} id={id} />      
      )
  }
  