import EmployeesListItem from "../employees-list-item/employees-list-item";

import './emploees-list.css';

const EmployeesList = ({data}) => {
/*  metod map, array overkil */
     const elements = data.map(item => {
        return (
            //<EmployeesListItem name = {item.name} salary ={item.salary}/>
            // or short variant
            <EmployeesListItem {...item}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;