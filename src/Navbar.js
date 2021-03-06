import React from 'react'
import logo from './images/logo.png'
import { Icon } from '@iconify/react';
import EN from './images/EN.pdf';
import DE from './images/DE.pdf';

function Navbar() {

    return (
    
        <div className="navigation">
            <div className="navigationS">
                <ul>
                    <li>
                        <a href='#'><h3>ABOUT</h3></a>
                    </li>
                    <li>
                        <a href="#projects"><h3>PROJECTS</h3></a>
                    </li>
                    <li>
                        <a ><h3>CONTACT</h3></a>
                        <ul className="dropdown">
                            <li>
                                <a href="https://github.com/jaisree-ramesh" target="_blank" rel="noreferrer noopener">
                                    <Icon icon="akar-icons:github-fill" color="white" height="20" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/jaisree-ramesh/" target="_blank" rel="noreferrer noopener" style={{ textDecoration: "none" }}>
                                    <Icon icon="akar-icons:linkedin-box-fill" color="white" height="20" />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a><h3>RESUME</h3></a>
                        <ul className="dropdown">
                            <li>
                                <a href={EN} target = "_blank">EN</a>
                            </li>
                            <li>
                                <a href={DE} target = "_blank">DE</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div>
                    <button className="logoBtn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                        <img src={logo} alt="logo" className="logoCon" />
                    </button>
                </div> 
            </div> 

            <div className="navigationXL">
                <ul>
                    <li>
                        <Icon icon="charm:menu-hamburger" height="30" style={{ marginLeft:'10px'}} />
                        <ul className="dropdown">
                            <li>
                                <a href='#'><h4>ABOUT</h4></a>
                            </li>
                            <li>
                                <a href="#projects"><h4>PROJECTS</h4></a>
                            </li>
                            <li>
                                <a href={EN} target = "_blank"><h4>RESUME (EN)</h4></a>
                            </li>
                            <li>
                                <a href={DE} target = "_blank"><h4>RESUME (DE)</h4></a>
                            </li>
                            <li>
                                <a href="https://github.com/jaisree-ramesh" target="_blank" rel="noreferrer noopener">
                                    <Icon icon="akar-icons:github-fill" color="white" height="35" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/jaisree-ramesh/" target="_blank" rel="noreferrer noopener" style={{ textDecoration: "none" }}>
                                    <Icon icon="akar-icons:linkedin-box-fill" color="white" height="35" />
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul> 
                <div>
                    <button className="logoBtn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                        <img src={logo} alt="logo" className="logoCon" />
                    </button>
                </div> 
            </div> 
        </div>
    )
}

export default Navbar
