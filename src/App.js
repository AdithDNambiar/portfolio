import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import WhyMe from "./components/WhyMe";

function App() {
  return (
    <div className="app">
      <div className="bg-glow"></div>
      <div className="cursor-glow"></div>

      <Navbar />

      <Hero />

      <Services />

      <Projects />

      <WhyMe />

      <TechStack />

      <Contact />
    </div>
  );
}

export default App;