import React from 'react'
import ContextProvider from './Context/ContextProvider'
import TodoList from './TodoList/TodoList'
import logo from './logo.svg';
import './App.css';
import Notebook from './Notebook/Notebook';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TodoList />
        <Notebook />
      </div>
    </ContextProvider>
  );
}

export default App;
