import React from 'react'
import pic from './images/pic.jpeg'

function Info() {
    return (
        <div className="infoContainer" id='about'>
            <div >
                <img src={pic} alt="photo" className="infoPic"/>
            </div>
            <div className="infoText">
                <p>Hi there! <br /> <br />
                    I am Jaisree Ramesh, a Junior Full Stack Web Developer. <br />
                    As a B-tech Engineer in Information Technology,<br />
                    I Enjoy coding from scratch and bring ideas to life.  <br />
                    My previous experiences has enabled me to develop fast and user-friendly websites.  <br /> <br />
                    I am a focused, organized and highly motivated person. <br />
                    Through working in teams, I have learned to take responsibility and handle multiple tasks at the same time.
                </p>
            </div>
        </div>    
    )
}

export default Info
