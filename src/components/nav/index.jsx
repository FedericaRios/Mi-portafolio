import React from 'react'
import styles from './styles.css';

const Nav = () => {

    return (
        <div className="nav-container">
            <nav className="nav-menu">
                <ul>
                    <li><a href="#/home#aboutMe">Sobre mí</a></li>
                    <li><a href="#/home#skills">Skills</a></li>
                    <li><a href="#/home#projects">Proyectos</a></li>
                    <li><a href="#/home#contact">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;