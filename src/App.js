import React, { useState }from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import './styles/global.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


//components
import Header from './components/Header';
import Todo from './components/Todo';
import AddButton from './components/AddButton';

function App() {

  const [todos, setTodos] = React.useState([
    {status: 0, text: "Doing something nowww...", image: ''},
    {status: 1, text: "Doing something nowww...", image: ''},
    {status: 2, text: "Doing something nowww...", image: ''},
    {status: 0, text: "Doing something nowww...", image: ''},
  ]);

  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );


  function addTodos(){
    setTodos([...todos, {status: 0, text: "Doing something nowww...", image: ''}]);
  }

  function deleteTodo(){

  }

  return (
    <div className="App">
      <Header/>


      {
        todos.map((todo, i) =>{
          return <Todo key={i} status={todo.status} text={todo.text} image={todo.image}/>
        })
      }

      <AddButton onPress={addTodos} />
      
    </div>
  );
}

export default App;
