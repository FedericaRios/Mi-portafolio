import { AiFillGithub, AiFillLinkedin, AiOutlineIdcard } from "react-icons/ai";
import Me from '../../assets/me.png';
import styles from './styles.css';

const AboutMe = () => {

    return (
        <div className="about-me-container" id='/home#aboutMe'>
            <div className="image-container">
                <img className="image" src={Me} ></img>
            </div>
            <div className="about-me-presentation">
                <h1>About me</h1>
                <h3>Soy una persona sociable, empatica, y me considero exigente, ya que me gusta retarme en los objetivos que me planteo.
                    Me encanta aprender cosas nuevas y conocer nuevas personas. En mis tiempos libres aprecio salir a disfrutar de la naturaleza, escuchar música, hacer ejercicio y leer libros de mi interés.</h3>
                <div className="about-me-pages-container">
                    <h1
                        className="about-me-pages"
                        onClick={() => window.open('https://github.com/FedericaRios')}>
                        <AiFillGithub />
                    </h1>
                    <h1
                        className="about-me-pages"
                        onClick={() => window.open('https://www.linkedin.com/in/federica-rios-bb9ab4197/')}>
                        <AiFillLinkedin />
                    </h1>
                    <h1
                        className="about-me-pages"
                        onClick={() => window.open('https://www.linkedin.com/in/federica-rios-bb9ab4197/')}>
                        <a download href='https://drive.google.com/uc?export=download&id=1SvOVRSgBD-TaH6arcwd5TiytPjAtBR2p'><AiOutlineIdcard /></a>

                    </h1>
                </div>
            </div>
        </div >
    )
}


export default AboutMe;