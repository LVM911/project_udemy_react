import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {Header} from './App';
import {Button} from './App';
import BootstrapTest from './BootstrapTest';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <BootstrapTest/>
  </StrictMode>,
  document.getElementById('root')
);

