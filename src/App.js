import { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';

function App() {
  const [renderPage, setRenderPage]=useState("About")
  function RenderHandler(){
    switch (renderPage) {
      case "About":
        return <About />
        case "Portfolio":
        return <Portfolio />
        case "Contact":
        return <Contact />
    
      default:
        break;
    }
  }
  return (
    <div className="App">
      <header>
          <Nav renderPage={renderPage} setRenderPage={setRenderPage}></Nav>
      </header>
      <RenderHandler />
    </div>
  );
}

export default App;
