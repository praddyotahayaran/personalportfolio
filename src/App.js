import './App.css';
import Experience from './Components/Experience/Experience';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/NavBar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
// import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { themeContext } from './Context';
import { useContext } from 'react';
import Skills from './Components/Skills/Skills';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{
      background: darkMode ? 'black' : '',
      color: darkMode ? 'white' : ''
    }}>

      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      {/* <Work /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
