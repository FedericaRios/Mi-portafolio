import { useNavigate } from 'react-router-dom';
import { BsEmojiLaughing } from "react-icons/bs";
import saludo from '../../assets/saludar.png';
import styles from './styles.css';

const Presentation = () => {
    const navigater = useNavigate()

    return (
        <div className="presentation-container">
            <div class="presentation-me">
                <h1>Hola!
                    <img className="presentation-img" src={saludo}></img>
                </h1>
                <h2>Soy Federica, Front-end web developer, tengo 21 años y soy de Argentina. <br />
                    Te invito a conocer mi portafolio<BsEmojiLaughing className="presentation-icon" /></h2>

            </div>
            <div className="presentation-button-container">
                <button
                    className="presentation-button"
                    onClick={() => navigater("/home")}>Ingresar</button>
            </div>
            <h3>¡Que tengas un hermoso día!</h3>
        </div >
    )
}

export default Presentation;