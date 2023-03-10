import {Component} from 'react'
import './emploees-add-form.scss';

class EmployeesAddForm extends Component  {
        state = {
            name: '',
            salary: ''
        }

    // methods
    onValueChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
    } 

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary:''
        })

    }
    // Log
    static onLog = () => {
        console.log('Hey');
    }
    // Static variables
    static logged = 'on';

    render () {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name} 
                       onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

EmployeesAddForm.onLog();
console.log(EmployeesAddForm.logged);

export default EmployeesAddForm;
