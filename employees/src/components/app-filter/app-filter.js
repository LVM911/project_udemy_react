import './app-filter.css';

const AppFilter = (props) => {
    // array of button
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники', colored: false},
        {name: 'rise', label: 'На повышение', colored: false},
        {name: 'moreThen1000', label: 'ЗП больше 1000', colored: true},
    ];
    // creating array of elements
    const buttons = buttonsData.map(({name, label, colored}) => {
            // lighting of buttons
            const active = props.filter === name; // this same then if (props.filter === name), variable activ - true or false
            // ternar operator "?" if active is true 'btn-light': ='btn-light': else 'btn-outline-light'
            const clazz = active ? 'btn-light':'btn-outline-light';
            // с этой колбек функции делаем возвращаем кнопку
            const style = colored ? {color: 'red'} : null; 
            return (
                <button className={`btn ${clazz}`}
                    type="button" 
                    key={name}
                    onClick={() => props.onFilterSelect(name)}
                    style={style}> 
                    {label}
                </button>                 
            )

    })
        return (
            <div className="btn-group">
                {buttons}
            </div>       
        );

}

export default AppFilter;