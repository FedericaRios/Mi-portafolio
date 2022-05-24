import toDos from '../../assets/todos.png';
import Clima from '../../assets/clima.png'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Carousel from 'react-bootstrap/Carousel'
import style from './styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Project = () => {

    return (
        <div className="container" id='projects'>
            <Carousel
                className='carrousel-container'
                nextIcon={<button className="buttons"><FiChevronRight /></button>}
                prevIcon={<button className="buttons"><FiChevronLeft /></button>}
            >
                <Carousel.Item className='carousel-item-container'>
                    <div className="project-Todos-container">
                        <div className="project-Todos-img-container">
                            <img
                                className="project-Todos-img"
                                src={toDos}
                                onClick={() => window.open('https://federicarios.github.io/proyecto-TODOs/')}
                            ></img>
                        </div>
                        <div className="proyect-Todos-description">
                            <h1>ToDos</h1>
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

                    <div className="project-Clima-container">
                        <img
                            className="project-Clima-img"
                            src={Clima}
                            onClick={() => window.open('')}
                        ></img>
                        <div className="proyect-Todos-description">
                            <h1>Clima</h1>
                            <h3>

                            </h3>

                        </div>
                    </div>
                </Carousel.Item>
                {/* <Carousel.Item>
                    
                </Carousel.Item> */}
            </Carousel>
        </div>
    )
}


export default Project;