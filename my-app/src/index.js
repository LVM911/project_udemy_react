import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {Header} from './App';
import {Button} from './App';
import styled from 'styled-components';
// new and add another style
const BigButton = styled(Button)`
    margin: 0 auto;
    width: 245px;
    text-align: center;
`;


ReactDOM.render(
  <StrictMode>
    <App/>
    <BigButton as="a"> new button</BigButton>
  </StrictMode>,
  document.getElementById('root')
);

