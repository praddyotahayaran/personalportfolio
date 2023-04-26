import React from 'react'
import './Skills.css'
import Resume from './Resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

import Sass from '../../img/sass.png'
import JavaScript from '../../img/javaScript.webp'
import tech from '../../img/react.webp'
import Html from '../../img/html.webp'
import techCss from '../../img/CSS.png'


const Skills = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className="skills" id='Skills'>

            {/* Left Side */}

            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>Skills</span>
                <span style={{ color: darkMode ? 'white' : '' }}>
                I enjoy making web apps here are my skills.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita aliquam perferendis velit eum itaque, sapiente maiores odio accusantium nesciunt veritatis est exercitationem a assumenda, ad autem laboriosam recusandae. Debitis illo dicta, assumenda hic autem iure odio, aperiam itaque omnis incidunt optio, odit exercitationem suscipit ad quaerat? Esse, a culpa.
                    
                </span>
                <a href={Resume} download>
                    <button className="button serviceBtn">Download CV</button>
                </a>

            </div>


            {/* Right Side */}


            <div className="skillsRight">
                <motion.div
                    initial={{ rotate: 60 }}
                    whileInView={{ rotate: 0 }}
                    transition={{ duration: 1 }}

                    className="skillsmainCircle" >

                    <div className="skillsSecCircle">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='blank'><img src={techCss} alt="" />
                        </a>
                    </div>
                    <div className="skillsSecCircle">
                        <a href="https://en.wikipedia.org/wiki/Sass_(style_sheet_language)" target='blank'> <img src={Sass} alt="" /></a>
                    </div>
                    <div className="skillsSecCircle">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='blank'><img src={JavaScript} alt="" /></a>
                    </div>
                    <div className="skillsSecCircle">
                        <a href="https://react.dev/"><img src={tech} alt="" /></a>
                    </div>
                    <div className="skillsSecCircle">
                        <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target='blank'><img src={Html} alt="" /></a>
                    </div>
                </motion.div>

                {/* Background Circle */}

                <div className="skillsBackCircle blueCircle"></div>
                <div className="skillsBackCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Skills