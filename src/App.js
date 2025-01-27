import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Samples from "./Pages/Samples/Samples";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
      <Home/>
      </section>
      <section id="about">
      <About/>
      </section>
      <section id="sample">
      <Samples/>
      </section>
      <section id="services">
      <Services/>
      </section>
      <section id="contact">
      <Contact/>
      </section>
    </div>
  );
}

export default App;
