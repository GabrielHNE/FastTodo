import React, { useState }from 'react';

import './styles/global.css';

//components
import Header from './components/Header';
import Todo from './components/Todo';
import AddButton from './components/AddButton';

function App() {

  const [totalTodos, setTotalTodos] = useState(5);

  function createTodos(todos){
    let todoList = [];

    for(let i=0; i < totalTodos; i++){
      todoList.push(<Todo />);
    }

    return todoList.map(Todo => Todo);
  }

  return (
    <div className="App">
      <Header/>

      {createTodos(totalTodos)}
      <AddButton />
    </div>
  );
}

export default App;
