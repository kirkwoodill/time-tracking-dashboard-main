import logo from './logo.svg'
import './App.scss'
import Dashboard from './components/Dashboard'
let bob = require('../src/data.json');

function App() {
  return (
    console.log(bob[0].title),
    <div className="App">
      
      <Dashboard />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Eit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
