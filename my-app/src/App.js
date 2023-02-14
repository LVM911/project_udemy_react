import {Component} from 'react';
import './App.css';

// base rules creating components

const Header = () => {
  return <h2> Hello world!</h2>
}
/* const Feild = () => {
  const holder = 'Enter here';
  const styleField = {
    width: '300px' 
  };
  return <input 
          placeholder={holder} 
          type="text"
          style={styleField}/>
} */
// class-based approach inheritance (наследование) extends
class Feild extends Component {
  render() {
      const holder = 'Enter here';
      const styleField = {
        width: '400px' 
      };
      return <input 
      placeholder={holder} 
      type="text"
      style={styleField}/>
  }

}


function Btn() {
  const text = 'Log in';
  const logged = false;
  // function transfer
/*   const res = () => {
    return 'Log in here';
  } */
  // or another elements
  /* const p = <p> Log in</p>; */
  // or logical
  return <button>{logged ? 'Enter': text}</button>  //ternar operator  - logged ? 'Enter': text
 
}


function App() {
  return (
    <div className="App">
      <Header/>
      <Feild/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
