import React from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Controller} from './components/Controller/Controller';

function App() {
  return (
    <div className="App">
      <h1 className="title">custom counter</h1>
      <div className="content">
        <Controller/>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
