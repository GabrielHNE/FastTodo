import React from 'react';

import './styles.css';

import plus from '../../assets/plus-solid.png';

export default function AddButton({ onPress }){

    return (
        <button className="button no-selection">
            <img src={plus} alt="Add new to do button" draggable="false" onClick={onPress} />
        </button>
    )

}