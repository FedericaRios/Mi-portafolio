import { DiJavascript } from "react-icons/di";
import { IoLogoHtml5, IoLogoCss3, IoLogoNpm, IoLogoNodejs } from "react-icons/io";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
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
            <div className="skills-item">
                <SiRedux className="redux-image" />
                Redux
            </div>
            <div className="skills-item">
                <IoLogoNodejs className="node-image" />
                Node
            </div>
            <div className="skills-item">
                <h1 className="express-image">express</h1>
                Express
            </div>

        </div >
    )
}


export default Skills;




