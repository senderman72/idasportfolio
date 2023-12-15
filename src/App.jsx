import "./App.css";
import Navbar from "./Navbar/Navbar";
import Maincontent from "./Main/Maincontent";
import Footer from "./Footer/Footer";
import BouncingBox from "./Bouncingbox/Bouncingbox";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Maincontent />
      </main>
      <div className="Bouncing-container">
        <BouncingBox />
        <BouncingBox />
        <BouncingBox />
      </div>
      <div>
        <Skills />
      </div>
      <div className="Bouncing-container">
        <BouncingBox />
        <BouncingBox />
        <BouncingBox />
      </div>
      <div>
        <Contact />
      </div>
      <div className="Bouncing-container">
        <BouncingBox />
        <BouncingBox />
        <BouncingBox />
      </div>
      <Footer />
    </div>
  );
}

export default App;
