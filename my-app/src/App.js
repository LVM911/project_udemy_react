import {Component, StrictMode} from 'react';
import './App.css';

//function WhoAmI (props) { - only reading status
// we can transfer function, objects, data 
class WhoAmI extends Component {
  // use props in clasess
    constructor(props) {
        super(props);
        this.state = {
          years: 12,
          position: '',
          text: '++++'
        }
        this.nextYear = this.nextYear.bind(this); // привязываем к класу
    }
    // new method for change years - important use only arrow function
    nextYear = () => {
    // cange condition - setState command
    // when state  (condition) depends  on the prevision
      this.setState(state => ({ // this is callback finction that returns our new state object 
          years: state.years +1
      }))
    }
    // for enter a position
    commitInputChanges = (e) =>{
      this.setState({
        position: e.target.value
      })
      console.log(e.target.value);
    }
     
    render() {
      //destructurisation
      const {name, surname, link} = this.props;
      const {position, years} = this.state;
      return (
        <div>
          <button onClick={this.nextYear}>{this.state.text}</button>
           <h1> {name.firstName} {surname}, 
           age  = {years}, 
           position = {position}</h1>
           <a href={link()}>My profile</a>
           <span>Enter a position</span>
           <input type="text" onChange={this.commitInputChanges}/>
        </div>
      )
    }
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
