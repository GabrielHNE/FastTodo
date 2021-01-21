import React, { useState, useEffect }from 'react';

import './styles/global.css';

//components
import Header from './components/Header';
import Todo from './components/Todo';
import AddButton from './components/AddButton';

function App() {

  const [todos, setTodos] = useState([
    {status: 0, text: "Doing something nowww...", image: ''},
    {status: 1, text: "Doing something nowww...", image: ''},
    {status: 2, text: "Doing something nowww...", image: ''},
    {status: 0, text: "Doing something nowww...", image: ''},
  ]);

  function addTodos(){
    setTodos([...todos, {status: 0, text: "Doing something nowww...", image: ''}]);
  }

  function deleteTodo(){

  }

  return (
    <div className="App">
      <Header/>

      <Todo status={0} text={"hiiiiiii"} image={""}/>

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
