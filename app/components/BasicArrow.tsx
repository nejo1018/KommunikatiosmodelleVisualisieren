import React from 'react';
import styles from '@/app/ui/home.module.css'


interface BasicArrowProps {
    id: string; 
  }
  
  export default function BasicArrow({ id }: BasicArrowProps) {
    return (
      <div className="info" id={id}>
        <span className={styles['arrow-right']}></span>
      </div>
    );
  }