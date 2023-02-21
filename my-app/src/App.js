import {Component} from 'react';
import styled from 'styled-components'
import './App.css';

// Styled element
const EmpItem = styled.div`
      padding: 20px;
      margin-bottom: 15px;
      border-radius: 5px;
      box-shadow: 5px 5px 10px rda(0,0,0, .2);
      a{
        display: block;
        margin: 10px 0 10px 0;
        color: ${props => props.active ? 'orange' : 'black'};
      }
      input {
        display: block;
        margin-top: 10px;
      }
`;
const Header = styled.h2`
      font-size: 25px;
`;
export const Button = styled.button`
      display: block;
      padding: 5px 15px;
      background-color: gold;
      border: 1px solid rgba(0, 0, 0, .2);
      box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`;


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
    // Fragment
    // in you want to singht key
    //  React.Fragment key="233"
    render() {
      //destructurisation
      const {name, surname, link} = this.props;
      const {position, years} = this.state;
      return (
        <EmpItem active>
          <Button onClick={this.nextYear}>{this.state.text}</Button>
           <Header> {name.firstName} {surname}, 
           age  = {years}, 
           position = {position}</Header>
           <a href={link()}>My profile</a>
           <span>Enter a position</span>
           <input type="text" onChange={this.commitInputChanges}/>
        </EmpItem>
      )
    }
}
const Warapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`;


function App() {
  return (

     <Warapper>
        <WhoAmI name={{firstName: 'Diana'}} surname="Lytvyniuk" link={() => {return 'Diana.vn.ua'}}/>
        <WhoAmI name={{firstName: 'Viacheslav'}} surname="Lytvyniuk" link={() => {return 'Viacheslav.vn.ua'}}/>
        <WhoAmI name={{firstName: 'Rinat'}} surname="Lytvyniuk" link={() => {return 'Rinat.vn.ua'}}/>
      </Warapper> 

  );
}


export default App;
