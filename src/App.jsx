import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PilotProfile from './components/PilotProfile';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <PilotProfile />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
