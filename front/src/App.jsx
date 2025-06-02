import React from 'react';
import Home from './pages/Home';
 import '../src/styles/App.css';
import Header from './pages/Header';

function App() {
    return (
      <div className="App">
        <Header/>
        <Home />
      </div>
    );
  }

export default App;