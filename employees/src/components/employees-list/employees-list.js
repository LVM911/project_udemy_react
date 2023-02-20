import EmployeesListItem from "../employees-list-item/employees-list-item";

import './emploees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
/*  metod map, array overkil */
     const elements = data.map(item => {
        //Partial destructuring
        const {id, ...itemProps} = item;  

        return (
            //<EmployeesListItem name = {item.name} salary ={item.salary}/>
            // or short variant
            <EmployeesListItem 
            key ={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease ={() => onToggleIncrease(id)}
            onToggleRise={()=> onToggleRise(id)}/>



        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;