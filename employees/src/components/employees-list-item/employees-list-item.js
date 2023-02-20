
import './employees-list-item.css';

const EmployeesListItem = (props) => {

        const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise} = props;

        let className = "list-group-item d-flex justify-content-between";
        let classNameInput = "list-group-item-input";
        if (increase){
            className += ' increase';
            
        }
        if (rise) {
            className += ' like list-group-item-danger';
            classNameInput += ' list-group-item-danger'; 
        }
        //list-group-item.like .fa-star
        return (
            <li className={className}>
                <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
                <input type="text" className={classNameInput} defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleIncrease}>                        
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        ) 
  
}

export default EmployeesListItem;