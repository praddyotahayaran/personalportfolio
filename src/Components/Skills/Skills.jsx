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

    const transition = { duration: 2, type: 'spring' }

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className="skills" id='Skills'>

            {/* Left Side */}

            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>Skills</span>
                <span style={{ color: darkMode ? 'white' : '' }}>I design & build user interfaces.
                    Lorem ipsum dolor sit amet  <br />consectetur adipisicing  elit.
                    Consequatur velit dignissimos,  <br />neque libero aspernatur
                    tempora quos omnisadipisci
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
                        <img style={{ height: "8.5rem" }} src={techCss} alt="" />
                    </div>
                    <div className="skillsSecCircle">
                        <img src={Sass} alt="" />
                    </div>
                    <div className="skillsSecCircle">
                        <img src={JavaScript} alt="" />
                    </div>
                    <div className="skillsSecCircle">
                        <img src={tech} alt="" />
                    </div>
                    <div className="skillsSecCircle">
                        <img src={Html} alt="" />
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