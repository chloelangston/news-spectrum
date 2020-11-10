import logo from './logo.svg';
import Row from './Row';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Today: The News Spectrum</h1>
        <p>Pew Research Center conducted a study determining the primary political beliefs of viewers of major news outlets. View current headlines as they are seen by viewers along the political spectrum.</p>
      {/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */}
      </header>
      <Row topic="U.S. Election" />
      <Row topic="COVID-19" />
      <Row topic="Black Lives Matter + Police Reform" />
    </div>
  );
}

export default App;
