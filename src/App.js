import React from 'react';
import './App.css';
import NavigationBar from "./components/navigationBar";
import Counters from "./components/counters";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main className="container">
        <Counters/>
      </main>
    </div>
  );
}

export default App;
