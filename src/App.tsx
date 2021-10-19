import React from 'react';
import './App.css';
import Contador from './componentes/Contador';

function App() {
  return (
    <div className="App">
      <Contador valorInicial={1233445}></Contador>
      <Contador/>
    </div>
  );
}

export default App;
