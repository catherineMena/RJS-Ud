import logo from './logo.svg';
import './App.css';
// import EmployeeList from './components/EmployeeList';
import RegularStyleSheet from './components/RegularStyleSheet';
import Inline from './components/inline';
import './appStyles.css';
import moduleStyles from './components/myAppStyle.module.css';
import FormInput from './components/formInput';
import DemoFragment from './components/fragdemo/DemoFragment';
import MyTable from './components/MyTable';

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
{/* 
      <EmployeeList/> */}
{/* <RegularStyleSheet primary={true}/> */}
{/* <Inline/>
<h2 className='error'>Error!!</h2>
<h2 className={moduleStyles.success}>Success</h2>
<h2 className='error'> Error from inline</h2> */}
{/* <FormInput/> */}
{/* <DemoFragment/> */}

<MyTable/>

      </div>

  );
}

export default App;
