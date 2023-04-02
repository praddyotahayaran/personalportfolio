import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Experience = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='Experience'>
        <div className="achievement">
            <div className="circle" style={{color: darkMode? 'black' : ''}}>1</div>
            <span>years</span>
            <span>Experience</span>
        </div>

        <div className="achievement">
            <div className="circle" style={{color: darkMode? 'black' : ''}}>3</div>
            <span>projects</span>
            <span>completed</span>
        </div>

        <div className="achievement">
            <div className="circle" style={{color: darkMode? 'black' : ''}}>0</div>
            <span>companies</span>
            <span>work</span>
        </div>
    </div>
  )
}

export default Experience