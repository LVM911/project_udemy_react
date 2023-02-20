
import { Component } from 'react';
import './search-panel.css';

 class SearchPanel extends Component  {
    constructor (props) {
        super(props); 
            this.state = {
                term: ''
            }
        }


    onUpdateSearch = (e) => { // эта будет работаь локально
        const term = e.target.value;
        this.setState({term});
        // пробрасываем на верх
        this.props.onUpdateSearch(term)  
    }
    //set colocl state
    render() {
        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                //локальное состояние
                value = {this.state.term}
                onChange = {this.onUpdateSearch} // отслеживаем событие
                />
        )
    }
}  

export default SearchPanel;