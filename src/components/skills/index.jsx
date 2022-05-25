import { DiJavascript } from "react-icons/di";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoNpm } from "react-icons/io";
import styles from './styles.css';

const Skills = () => {

    return (
        <div className="skills-container" id='/home#skills'>
            <div className="skills-item">
                <DiJavascript className="js-image" />
                JavasCript
            </div>
            <div className="skills-item">
                <IoLogoHtml5 className="html-image" />
                HTML
            </div>
            <div className="skills-item">
                <IoLogoCss3 className="css-image" />
                CSS
            </div>
            <div className="skills-item">
                <FaReact className="react-image" />
                React
            </div>
            <div className="skills-item">
                <FaGitAlt className="git-image" />
                Git
            </div>
            <div className="skills-item">
                <IoLogoNpm className="npm-image" />
                Npm
            </div>
        </div >
    )
}


export default Skills;




