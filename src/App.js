import { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [counter, setCounter] = useState(0);
  // To reset the counter back to 0.
  const resetCounter = () => {
    setCounter(0);
  }

  useEffect(() => {
    setCounter(0);
  }, []);
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}> Increment </button>
      <h1> {counter} </h1>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}> Decrement </button>
      <br />
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default App;
