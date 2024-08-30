import React, { useEffect } from 'react';
import styles from '@/app/ui/home.module.css'


interface DataPackageProps {
    id: string;
}

export default function DataPackage({ id }: DataPackageProps) {

        useEffect(() => {
            const DataPackage = document.getElementById(id);
            if (DataPackage) {
                DataPackage.style.visibility = 'hidden';
            }
        })

    return (
        <div className={styles.shape} id={id} />
    );
}