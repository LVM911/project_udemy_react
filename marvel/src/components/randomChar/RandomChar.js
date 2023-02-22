import { Component } from 'react';
import MarvelServices from '../../services/MarvelServices';
import Spinner from '../spiner/spiner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './randomChar.scss';
import thor from '../../resources/img/thor.jpeg';
import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {
    //Вызываем метод updateChar испольщуя котрокутор
    constructor (props) {
        super(props);
       
        console.log("1. constructor");
    }

    // Состояние
    state = {
        char: {},
        loading: true,
        error: false
    }
    // создаем новое свойство внутри класа RandomChar
    marvelService = new MarvelServices(); 
    // Лбые обновления, запросы к серверу делать в этом компонененте
    componentDidMount () {
        this.updateChar();
        //this.timerId = setInterval(this.updateChar, 3000);
        console.log("3. Mount");
    }
    componentWillUnmount () {
       // clearInterval(this.timerId);
        console.log("4. Unmount");
    }
    // method записи, перезаписи, переририсовки, персонажа
    onCharLoaded = (char) => {
        this.setState({
            char, 
            loading: false
        })
    }
    // Error collection
    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }
    // Создаем отдельный метод, который будет обращаться к серверу, получать данные и записывать в state
    updateChar = () => { // стрелочная функция чтобы не терять контекст
        const id = Math.floor(Math.random()*(1011400 - 1011000)+1011000);
        this.marvelService
        .getCharacter(id)
        .then(this.onCharLoaded)
        .catch(this.onError); 
        //.getAllCharacters()
       // .then(res => console.log(res))
    } 


    render() {
        console.log("2. Render");
       // комплексная десструктуризация, вытаскивание данных из стейта
       const {char, loading, error} = this.state;
       const errorMessage = error ? <ErrorMessage/> : null;
       const spinner = loading ? <Spinner/> : null;
       const content =  !(loading || error) ? <View char={char}/> : null;   

        return (
            <div className="randomchar">
                 {errorMessage}
                 {spinner}
                 {content}

                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}
// Рендерящий компонент
const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;
    return (
        
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className="randomchar__img"/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>       
    )
}

export default RandomChar;