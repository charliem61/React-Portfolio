import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navigation from "./Components/Nav";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import background from "./assets/backGround.jpg";
import { Container } from "reactstrap";


function App() {
  const [renderPage, setRenderPage] = useState("About");
  function RenderHandler() {
    switch (renderPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;

      default:
        break;
    }
  }
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
    <header>
      <Navigation renderPage={renderPage} setRenderPage={setRenderPage} />
    </header>
    <Container className="mx-auto">
      <RenderHandler />
    </Container>
    <Footer />
  </div>
  )
}

export default App;
