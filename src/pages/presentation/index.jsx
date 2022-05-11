import { useNavigate } from 'react-router-dom';
import { BsEmojiLaughing } from "react-icons/bs";
import styles from './styles.css';

const Presentation = () => {
    const navigater = useNavigate()

    return (
        <div className="presentation-container">
            <div class="presentation-me">
                <h1>Hola! <BsEmojiLaughing /> </h1>
                <h2>Soy Federica Rios, tengo 21 años y soy de Argentina.
                    Te invito a conocer mi portafolio!</h2>
            </div>
            <div className="presentation-button-container">
                <button
                    className="presentation-button"
                    onClick={() => navigater("/home")}>Ingresar!</button>
            </div>

        </div >
    )
}

export default Presentation;