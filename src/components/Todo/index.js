import React from 'react';
import { EditorState } from 'draft-js';
import {
    Editor} from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './styles.css';

import Check from '../../assets/status/check-solid.svg';
import Clock from '../../assets/status/clock-regular.svg';
import Times from '../../assets/status/times-solid.svg';


const STATES = [
    '',
    Clock,
    Check,
    Times
]

const toolbarConfig = {
    options: ['inline','emoji', 'image'],
    inline: { options:['bold','italic', 'underline', 'strikethrough'], inDropdown: false },
}

export default function Todo( {status, text, image} ){
    
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );

    const [click, setClick] = React.useState(status);

    return(
        <article className='todo-field'>
            <div className='check-box noselect' onClick={()=>{
                setClick((click + 1)%4);
                console.log(click);
            }}>
                { click !== 0 ?
                    <img src={STATES[click]} width="24px" alt="state" draggable="false" />
                    :
                    <></>    
                }
            </div>

            {/* <div className='input-box'> */}
                <Editor
                    toolbarOnFocus
                    defaultEditorState={editorState}
                    onEditorStateChange={setEditorState}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class-absolute"
                    placeholder="Start a new ToDo..."
                    toolbar={toolbarConfig}
                />
            {/* </div> */}

        </article>
    );
}