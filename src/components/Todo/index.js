import React from 'react';
import { EditorState } from 'draft-js';
import {
    Editor} from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './styles.css';

const STATES = [
    '',
    'check.png',
    'doing.png',
    'times.png'
]

const toolbarConfig = {
    options: ['inline','emoji', 'image'],
    inline: { options:['bold','italic', 'underline', 'strikethrough'], inDropdown: false },
}

export default function Todo( {status, text, image} ){
    
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
      );
    

    return(
        <article className='todo-field'>
            <div className='check-box' onClick={()=>console.log("click")}>
                {status}
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