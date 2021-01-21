import React from 'react';

import './styles.css';


export default function Todo( {status, text, image} ){
    return(
        <article className='todo-field'>
            <div>{status}</div>
            <div>{text}</div>
            <div>{image}</div>
        </article>
    );
}