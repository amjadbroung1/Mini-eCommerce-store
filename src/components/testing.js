import React from 'react';
import { useState } from 'react';

function TestingComponent() {
  const [initialState, setinitialState] = useState([]);
  const [inputData, setinputdata] = useState([]);

  //   console.log(initialState);
  //   console.log(typeof initialState);

  const storeData = () => {
    setinputdata([...inputData, initialState]);
    // event.preventDefault();
  };
  const clearData = () => {
    setinputdata([]);
  };
  console.log(...inputData, inputData);

  return (
    <>
      <div>
        <h1>Input</h1>
        <input onChange={(e) => setinitialState(e.target.value)} />
        <h1>password</h1>
        <input type='password' />
      </div>
      <br></br>
      <button onClick={storeData}>store data into state</button>
      <button onClick={clearData}> clear data</button>

      <h1>
        {/* {inputData.map((data) => {
          return <h2>{data}</h2>;
        })} */}
        {inputData}
      </h1>
    </>
  );
}
export default TestingComponent;
