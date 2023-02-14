import Appinfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emploees-add-form/emploees-add-form';

import './app.css';



function App(){
    return (
        <div className="app">
            <Appinfo/>
            <div className="search-panel"> 
            <SearchPanel/>
            <AppFilter/>
            <EmployeesList/>
            <EmployeesAddForm/>
            </div>
        </div>
    );
}


export default App;