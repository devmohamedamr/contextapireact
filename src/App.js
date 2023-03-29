import logo from './logo.svg';
import './App.css';
import Parent from './component/Parent';
import Child from './component/Child';
import CounterContextProvider from './Context/CounterContextProvider';

function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <Parent />
        <Child />
      </CounterContextProvider>
    </div>
  );
}

export default App;
