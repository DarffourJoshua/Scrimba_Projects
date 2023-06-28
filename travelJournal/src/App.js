import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import data from './components/data';
import Main from './components/Main';

function App() {
  const mainEle = data.map(item => {
    console.log(item);
    return (
      <Main
      key = {item.id}
      item = {item}
      />
    )
  }
    )
  return (
    <div className="App">
      <Navbar />
      {mainEle}
    </div>
  );
}

export default App;
