import toDos from '../../assets/todos.png';
import Clima from '../../assets/clima.png'
import Pokemon from '../../assets/pokemon.png'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Carousel from 'react-bootstrap/Carousel'
import style from './styles.css';


const Project = () => {

    return (
        <div className="container" id='/home#projects'>
            <Carousel
                className='carrousel-container'
                nextIcon={<button className="buttons"><FiChevronRight /></button>}
                prevIcon={<button className="buttons"><FiChevronLeft /></button>}
            >
                <Carousel.Item className='carousel-item-container'>
                    <div className="project-item-container">
                        <div className="project-item-img-container">
                            <img
                                className="project-item-img"
                                src={toDos}
                                onClick={() => window.open('https://federicarios.github.io/proyecto-TODOs/')}
                            ></img>
                        </div>
                        <div className="proyect-item-description">
                            <h1>ToDos App</h1>
                            <h3>
                                La app permite gestionar actividades diarias, la desarrollé junto al curso de React en Platzi.
                                Utilicé las tecnologías de React, JavasCript, Html, Css,
                                y Responsive Desing por lo cual está disponible en mobile/celular y desktop.
                                Por último, para hacer deploy/publicarlo utilicé GitHub-pages.
                            </h3>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item className='carousel-item-container'>
                    <div className="project-item-container">
                        <div className="project-item-img-container">
                            <img
                                className="project-item-img"
                                src={Clima}
                                onClick={() => window.open('https://federicarios.github.io/proyecto-clima')}
                            ></img>
                        </div>
                        <div className="proyect-item-description">
                            <h1>Wheater App</h1>
                            <h3>
                                La app permite consultar el pronóstico de ciudades, para lo cual se utilizó una Api,
                                además, las tecnologías de React, JavasCript, Html, Css,
                                y Responsive Desing.
                                Por último, realicé deploy/publicarlo con GitHub-pages.
                            </h3>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item className='carousel-item-container'>
                    <div className="project-item-container">
                        <div className="project-item-img-container">
                            <img
                                className="project-item-img"
                                src={Pokemon}
                                onClick={() => window.open('https://federicarios.github.io/challenge-pokemon/')}
                            ></img>
                        </div>
                        <div className="proyect-item-description">
                            <h1>Pokemon App</h1>
                            <h3>
                                El proyecto brinda información sobre el pokemon que se desee buscar, gracias al consumo de
                                una Api. Las tecnologías utilizadas fueron React, JavasCript, Html, Css,
                                y Responsive Desing.
                                La app se encuentra deployada con GitHub-pages.
                            </h3>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


export default Project;