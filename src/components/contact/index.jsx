import React from 'react'
import { SiWhatsapp } from "react-icons/si";
import { RiMailLine } from "react-icons/ri";
import style from './styles.css';

const Contact = () => {

    return (
        <div className="contact-container" id='contact'>
            <SiWhatsapp />
            <RiMailLine />
        </div>
    )
}

export default Contact;