import {Component, StrictMode} from 'react';
import './App.css';

//function WhoAmI (props) { - only reading status
// we can transfer function, objects, data 
function WhoAmI ({name, surname, link}) { 
  return(
    <div>
        <h1> {name.firstName} {surname}</h1>
        <a href={link()}>My profile</a>
    </div>
  )
}
function App() {
  return (
    <div className="App">
     <StrictMode>
        <WhoAmI name={{firstName: 'Diana'}} surname="Lytvyniuk" link={() => {return 'Diana.vn.ua'}}/>
        <WhoAmI name={{firstName: 'Viacheslav'}} surname="Lytvyniuk" link={() => {return 'Viacheslav.vn.ua'}}/>
        <WhoAmI name={{firstName: 'Rinat'}} surname="Lytvyniuk" link={() => {return 'Rinat.vn.ua'}}/>
      </StrictMode> 
    </div>
  );
}


export default App;
