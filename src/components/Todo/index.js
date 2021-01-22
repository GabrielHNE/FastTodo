import React from 'react';

import './styles.css';


export default function Todo( {status, text, image} ){
    return(
        <article className='todo-field'>
            <div className='check-box'>
                {status}
            </div>

            <div className='input-box'>{text}</div>

        </article>
    );
}