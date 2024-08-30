'use client'

import React, { useState } from 'react';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Tooltip from '@mui/material/Tooltip';

interface AddVersandProps {
    isVisibleP2P: number;
    setVisibleValueP2P: (value: number) => void;
    id: string;
    isCheckedVersand: boolean;
    handleKapaAddPres: (value: boolean) => void;
    updateOpenP2P: (value: boolean) => void;
    selectedModel: string;
    isVisiblePubSub: number;
    setVisibleValuePubSub: (value: number) => void;
    updateOpenPubSub: (value: boolean) => void;
    handleMessageAc: (value: boolean) => void;
}


export default function AddKapa({
    id,
    isVisibleP2P,
    setVisibleValueP2P,
    isCheckedVersand,
    handleKapaAddPres,
    updateOpenP2P,
    selectedModel,
    isVisiblePubSub,
    setVisibleValuePubSub,
    updateOpenPubSub,
    handleMessageAc
}: AddVersandProps) {

    const handleClick = () => {
        handleMessageAc(false);
        if (selectedModel === 'Point-to-Point') {
            if (isVisibleP2P < 8) {
                setVisibleValueP2P(isVisibleP2P + 1);
            }
            handleKapaAddPres(true);
            updateOpenP2P(true);
        } else {
            if (isVisiblePubSub < 6) {
                setVisibleValuePubSub(isVisiblePubSub + 1);
            }
            handleKapaAddPres(true);
            updateOpenPubSub(true);
        };
    }



    if (selectedModel === 'Point-to-Point') {
        switch (isVisibleP2P) {

            case 0:
            case 1:
            case 2:
                return (
                    <Tooltip title={"Es müssen zunächst alle Komponenten der Kapazitätsverwaltung hinzugefügt werden!"}>
                        <span>
                            <AddOutlinedIcon
                                onClick={undefined}
                                style={{ cursor: 'not-allowed' }}
                                id={id}
                            />
                        </span>
                    </Tooltip>
                );
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                return (
                    <AddOutlinedIcon
                        onClick={handleClick}
                        style={{ cursor: 'pointer' }}
                        id={id}
                    />
                )
            case 8:
                return (
                    <Tooltip title={"Es sind bereits alle Komponenten der Versandberechnung hinzugefügt worden!"}>
                        <span>
                            <AddOutlinedIcon
                                onClick={undefined}
                                style={{ cursor: 'not-allowed' }}
                                id={id}
                            />
                        </span>
                    </Tooltip>
                );
        }

    } else {

        switch (isVisiblePubSub) {

            case 0:
                return (
                    <Tooltip title={"Es müssen zunächst alle Komponenten der Kapazitätsverwaltung hinzugefügt werden!"}>
                        <span>
                            <AddOutlinedIcon
                                onClick={undefined}
                                style={{ cursor: 'not-allowed' }}
                                id={id}
                            />
                        </span>
                    </Tooltip>
                );
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:

                return (
                    <AddOutlinedIcon
                        onClick={handleClick}
                        style={{ cursor: 'pointer' }}
                        id={id}
                    />
                )
            case 6:
            case 7:
            case 8:
                return (
                    <Tooltip title={"Es sind bereits alle Komponenten der Versandberechnung hinzugefügt worden!"}>
                        <span>
                            <AddOutlinedIcon
                                onClick={undefined}
                                style={{ cursor: 'not-allowed' }}
                                id={id}
                            />
                        </span>
                    </Tooltip>
                );
        }
    }
}