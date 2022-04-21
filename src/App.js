import './App.css';
import Navbar from './Navbar.js'
import Info from './Info.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
