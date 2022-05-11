import React from 'react'
import styles from './styles.css';

const Nav = () => {

    return (
        <div className="nav-container">
            <nav className="nav-menu">
                <ul>
                    <li><a href="#aboutMe">About me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;