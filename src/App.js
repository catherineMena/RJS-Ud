import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';

import HookState from './components/HookState';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      {/* <Counter/> */}
      {/* <Counter2/> */}
      {/* <Counter3/> */}
   
   <HookState/>
   
    </div>
  );
}

export default App;
