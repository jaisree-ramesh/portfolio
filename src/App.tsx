import Navbar from "./components/navbar";
import Info from "./components/info";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";
import "./App.css";

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
