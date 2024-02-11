import logo from './logo.svg';
import './App.css';

import Counter from './components/useStatePractice/Counter';
import Counter2 from './components/useStatePractice/Counter2';
import Counter3 from './components/useStatePractice/Counter3';
import HookState from './components/useStatePractice/HookState';

//import EffectEx1 from './components/useEffectPractice/effectEx1';
import EffectEx3 from './components/useEffectPractice/effectEx3';
import MouseContainer from './components/useEffectPractice/MouseContainer';
import FetchingMustiplePost from './components/dataFetching/FetchingMustiplePost';
import MyMemoCounter from './components/useMemoPractice/MyMemoCounter';
import useRefPractice from './components/useRefPractice/useRefPractice';
import FocusInput from './components/useRefPractice/useRefPractice';
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
   
   {/* <HookState/> */}
   {/* <EffectEx1/> */}
{/* <EffectEx3/>    */}

{/* <MouseContainer/> */}
{/* <FetchingMustiplePost/> */}
{/* <MyMemoCounter/> */}
<FocusInput/>



  </div>
  );
}

export default App;
