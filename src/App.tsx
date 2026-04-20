import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Objective from './components/Objective';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PersonalDetails from './components/PersonalDetails';
import Declaration from './components/Declaration';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-['Source_Serif_4']">
      <Navigation />
      <Hero />
      <Objective />
      <Education />
      <Skills />
      <Projects />
      <PersonalDetails />
      <Declaration />
      <Footer />
    </div>
  );
}
