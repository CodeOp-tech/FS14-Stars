import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";





import Navbar from './components/Navbar';
import Routes from './components/Routes';


function App() {
    return (
        <div className="App">
      <h1>Teach Me</h1>

      <Navbar />
      <Routes />
      
    </div>
    )
}


export default App;








