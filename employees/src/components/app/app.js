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
                {name: 'Diana L.', salary: 999, increase: false, rise: true, id: 1 },
                {name: 'Viacheslav L.', salary: 1002, increase: true, rise: false,  id: 2 },
                {name: 'Rinat L.', salary: 1003, increase: false , rise: false, id: 3 },
            ],
            term:'',
            filter: 'rise'  
        }
        this.maxId = 4;
    }
    //methods
    deleteItem = (id) => {
        this.setState(({data}) => {
             return {
                data: data.filter(item => item.id !== id)
            }           
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
    // onToggleProp
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }
    // search method
    searchEmp = (items, term) => {
        if (term.length === 0){
            return items;
        } 
        
        return items.filter(item => {
            // делаем поиск, если ничего не найдено и часть строки даже, то возвращаем -1
            return item.name.indexOf(term) > -1
        })
    }
    // Update search
    onUpdateSearch = (term) => {
        this.setState({term});
    }
    // filter method
    filterPost = (items, filter) => {
         switch (filter) {
            case 'rise':
                return items.filter(item => item.rise); // аналог if (item.rise) return
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);    
           default: 
                return items
         }       
    }
        // method действие ingestion of the component 
   onFilterSelect = (filter) => {
        // изменяем состояние и возвращаем объект
        this.setState({filter});
   }


    render() {
    const {data, term, filter} = this.state;    
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;  
    const visibleData = this.filterPost(this.searchEmp(data, term), filter); // двойная фильтарция - по поиску и по фильтру выбранному
        return (
            <div className="app">
                <Appinfo employees ={employees} increased ={increased}/>
                <div className="search-panel"> 
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/> 
                <EmployeesAddForm
                onAdd={this.addItem}/> 
            
            </div>
        );
    }
}
// onDelete={id => console.log(id)}/>  - drill transfer

export default App;