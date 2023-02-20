import {Component} from 'react'

import Appinfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emploees-add-form/emploees-add-form';

import './app.css';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Diana L.', salary: 1001, increase: false, rise: true, id: 1 },
                {name: 'Viacheslav L.', salary: 1002, increase: true, rise: false,  id: 2 },
                {name: 'Rinat L.', salary: 1003, increase: false , rise: false, id: 3 },
            ]   
        }
        this.maxId = 4;
    }
    //methods
    deleteItem = (id) => {
        this.setState(({data}) => {
        // Way 2
             return {
                data: data.filter(item => item.id !== id)
            }           
            // find element by id and next compasion with id from selected delete item
            // соблюдаем принципы иммутабельности
            //Observing the principles of immutability
        // Way 1 Create a new array copy of data
/*          const index = data.findIndex(elem => elem.id === id); 
            const before = data.slice(0, index); // cutting
            const after = data.slice(index +1);
            const newArr = [...before, ...after]; 
            return {
                data: newArr
            }  */

        })
    } 
    // Add user
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
                data: newArr
            }
        });
    }
    // onTogleIncrease
    onToggleIncrease = (id) => {
/*         this.setState (({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const old = data[index];
            const newItem = {...old, increase: !old.increase}; // Написанные свойства, после old будут заменять
            // создаем новое свойство, которое берет значение и заменяет на противоположное 
            const newArr = [... data.slice(0, index), newItem, ...data.slice(index +1) ]; // создание нового масива с кусочков/

            return {
                data: newArr
            }
        })  */
// Method 2
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })           
        }))

    } 
    onToggleRise = (id) => {
        console.log(`Rise this ${id}`);
    } 

    render() {
        return (
            <div className="app">
                <Appinfo/>
                <div className="search-panel"> 
                <SearchPanel/>
                <AppFilter/>
                </div>

                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}/> 
                <EmployeesAddForm
                onAdd={this.addItem}/> 
            
            </div>
        );
    }
}
// onDelete={id => console.log(id)}/>  - drill transfer

export default App;