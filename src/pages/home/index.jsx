import React from 'react'
import styles from './styles.css';
import Nav from '../../components/nav'
import AboutMe from '../../components/aboutMe'
import Skills from '../../components/skills'
import Projects from '../../components/projects'
import Contact from '../../components/contact'

const Home = () => {
    return (
        <>
            <Nav />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default Home;