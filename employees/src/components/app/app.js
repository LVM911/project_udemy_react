import Appinfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emploees-add-form/emploees-add-form';

import './app.css';



function App(){
    const data = [
        {name: 'Diana L.', salary: 1001, increase: false, id: 1 },
        {name: 'Viacheslav L.', salary: 1002, increase: true, id: 2 },
        {name: 'Rinat L.', salary: 1003, increase: false , id: 3 },
    ];

    return (
        <div className="app">
            <Appinfo/>
            <div className="search-panel"> 
            <SearchPanel/>
            <AppFilter/>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
            </div>
        </div>
    );
}


export default App;