import React from 'react';
import Logo from '../../assets/Logo.svg';

import './styles.css';

export default function Header(){
    return(
        <nav className="header">
            <img src={Logo} width={400} alt="logo"/>
        </nav>
    );
}

