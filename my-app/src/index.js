import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const text = "Hello world";
// all thinks without objects

const elem = (
  <div>
    <h2 className='Text'   >Text: {text} = {2*9}  </h2>
    <input type="text" />
    <label htmlFor=''> Label</label>
    <button tabIndex={0} > ckick </button>
  </div>
);

ReactDOM.render(
  elem,
  document.getElementById('root')
);

