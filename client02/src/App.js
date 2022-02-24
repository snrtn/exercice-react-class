import logo from "./logo.svg";
import "./App.css";
import Maman from "./components/Maman";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <Maman />

        <br />
      </header>
    </div>
  );
}

export default App;
