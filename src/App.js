import { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';

function App() {
  const [renderPage, setRenderPage]=useState("About")
  return (
    <div className="App">
      <header>
          <Nav></Nav>
      </header>
    </div>
  );
}

export default App;
