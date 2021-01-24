import React from 'react';
import Logo from '../../assets/Logo.svg';

import './styles.css';

export default function Header(){
    return(
        <nav className="header">
            <img src={Logo} style={{width: 200}} alt="logo"/>
        </nav>
    );
}

