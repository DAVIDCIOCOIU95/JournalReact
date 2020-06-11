import React from 'react';
import HomePage from "./components/HomePage";
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
  <NavBar></NavBar>
      <header className="App-header">
        <HomePage/>
      </header>
    </div>
  );
}

export default App;
