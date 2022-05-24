import toDos from '../../assets/todos.png';
import Clima from '../../assets/clima.png'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Carousel from 'react-bootstrap/Carousel'
import style from './styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
const Project = () => {

    return (
        <div className="container">
            <div className="projects-Todos-container" id='projects'>
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
            {/* <div className="button-container">
                <button
                    className="buttons"><FiChevronLeft /></button>
                <button
                    className="buttons"><FiChevronRight /></button>
            </div> */}
            <div>
                <Carousel>
                    <div className="button-container">
                        <button
                            className="buttons"><FiChevronLeft /></button>
                        <button
                            className="buttons"><FiChevronRight /></button>
                    </div>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=f5f5f5"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=eee"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* <div className="project-Clima-container">
                <img
                    src={Clima}
                    onClick={() => window.open('')}
                ></img>
                <div className="proyect-Todos-description">
                    <h1>Clima</h1>
                    <h3>

                    </h3>
                </div>
            </div> */}
        </div>
    )
}


export default Project;