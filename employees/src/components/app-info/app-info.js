import './app-info.css';

const Appinfo = ({increased, employees}) => {
    return (
        <div className="app-info"> 
            <div className="h1"> Учет сотрудников АН Диана</div>
            <div className="h2"> Общее число сотрудников:{employees} </div>
            <div className="h2"> Комиссию получат: {increased}</div>
        </div>
    )
}

export default Appinfo;