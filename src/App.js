import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Samples from "./Pages/Samples/Samples";

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <About/>
      <Samples/>
    </div>
  );
}

export default App;
