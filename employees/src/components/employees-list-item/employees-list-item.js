import {Component} from 'react'
import './employees-list-item.css';

class EmployeesListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            increase: false
        }
    }
   // method for cookie
    onIncrease = () => {
   // синтаксис деструктуризиции
    this.setState(({increase}) =>({
        increase:!increase
        }))
    }
   // method add Star
   onStar = () => {
    // синтаксис деструктуризиции
     this.setState(({instar}) =>({
         instar:!instar
         }))
     }    

    render() {
        const {name, salary, onDelete} = this.props;
        // increase - get from state
        const {increase} = this.state;
        const {instar} = this.state;

        let className = "list-group-item d-flex justify-content-between";
        let classNameInput = "list-group-item-input";
        if (increase){
            className += ' increase';
            
        }
        if (instar) {
            className += ' like list-group-item-danger';
            classNameInput += ' list-group-item-danger';
        }
        //list-group-item.like .fa-star
        return (
            <li className={className}>
                <span className="list-group-item-label"
                 onClick={this.onStar}>{name}</span>
                <input type="text" className={classNameInput} defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={this.onIncrease}>                        
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
}

export default EmployeesListItem;