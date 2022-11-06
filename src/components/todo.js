import React from 'react';
import { useState } from 'react';
import './todo.css';

function Todo() {
  const [state, setState] = useState([]);
  const [listState, setListState] = useState([]);

  function addItems() {
    setListState([...listState, state]);
  }
  console.log([listState], [state], 'stateeeeeeeee');

  const clearData = () => {
    setListState([]);
  };
  const deleteSingleItems = (index) => {
    console.log(index, '*************');
    const newlist = listState.filter((elem, ind) => {
      return ind !== index;
    });

    setListState(newlist);
  };
  console.log(listState);
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>todo list</h1>
        <div className='custom-search'>
          <input
            type='text'
            className='custom-search-input'
            placeholder='Enter your email'
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <button
            className='custom-search-botton'
            type='submit'
            onClick={addItems}
          >
            Add Items
          </button>
        </div>
        <div>
          <ol>
            {listState.map((data, index) => {
              return (
                <>
                  <li key={index} id={index}>
                    {data}
                    <button
                      style={{ marginLeft: '32px' }}
                      onClick={() => {
                        deleteSingleItems(index);
                      }}
                    >
                      del
                    </button>
                  </li>
                </>
              );
            })}
          </ol>
        </div>
        <button onClick={clearData}>clear</button>
      </div>
    </>
  );
}
export default Todo;
