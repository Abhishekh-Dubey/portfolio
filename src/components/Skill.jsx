import React from 'react'
import './Skill.css'
import mypic from '../Img/html.png'
import image_js from '../Img/js1.png'
import image_react from '../Img/react.png'
import image_python from '../Img/python.png'
import image_nodejs from '../Img/pngegg.png'
import image_css from '../Img/css.png'
import image_express from '../Img/express.png'

import image_mongo from '../Img/mongo-log1.png'
export default function Skill() {
    return (
        <div className="skill component__space" id="Skill">
            <div className="skill_text">My Skills</div>
            <div className="flax-box contn">
                
                <div className="box">
                <p className="skill-text"><img src={mypic} alt="" className="myimg1"/></p>
                <div class='center12'><p className="skill-134">HTML</p></div>
                </div>
                <div className="box">                      
                <p className="skill-text">
                    <img src={image_css} alt="" className="myimg"/></p>
                <div class='center12'><p className="skill-134">CSS</p></div>
                </div> 
                <div className="box">
                <p className="skill-text"><img src={image_js} alt="" className="myimg"/></p>
                <div class='center12'><p className="skill-134">JavaScript</p></div>
                </div>
                <div className="box">
                <p className="skill-text"><img src={image_react} alt="" className="myimg"/></p>
                <div class='center12'><p className="skill-134">ReactJS</p></div>
                </div>
                <div className="box">
                <p className="skill-text"><img src={image_nodejs} alt="" className="myimg"/></p>
                <div class='center12'><p className="skill-134">NodeJS</p></div>
                </div>
                <div className="box">
                <p className="skill-text"><img src={image_express} alt="" className="myimg"/></p>
                <div class='center12'><p className="skill-134">ExpressJS</p></div>    
                </div>
                <div className="box">
                <p className="skill-text"><img src={image_mongo} alt="" className="myimg"/></p>
                <div class='center12'><p className="skill-134">MongoDB</p></div>    
                </div>
                <div className="box">
                <p className="skill-text"><img src={image_python} alt="dfjhd" className="myimg"/></p>
                <div class='center12'><p className="skill-134">Python</p></div>    
                </div>
            </div>
        </div>
    )
}
