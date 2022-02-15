import React from 'react'
import {useState} from 'react'
import logo from './images/logo.png'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

function Navbar() {
    const [show,setShow] = useState(true);

    function handleShow() {
        setShow(!show);
    }
    return (
            <div className="navContainer">
                <div className="menuCon">
                <h3 className="menuContents">ABOUT</h3>  
                    <h3 className="menuContents">PROJECTS</h3>
                    <div>
                        <h3  className="menuContents" onClick={handleShow}>CONTACT</h3>
                            <div className={show? 'dropdown': 'dropdownOpen'}>
                                <ul>
                                <li>
                                    <a href="https://github.com/jaisree-ramesh" target="_blank" rel="noreferrer noopener" style={{ textDecoration: "none" }}>
                                        <Icon icon="akar-icons:github-fill" color="white" height="20" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/jaisree-ramesh/" target="_blank" rel="noreferrer noopener" style={{ textDecoration: "none" }}>
                                        <Icon icon="akar-icons:linkedin-box-fill" color="white" height="20" />
                                    </a>
                                </li>
                                </ul>
                            </div>
                    </div>
                    <h3 className="menuContents">RESUME</h3>
                </div>
                <div>
                    <button className="logoBtn" >
                        <img src={logo} alt="logo" className="logoCon" />
                    </button>
                </div>
            </div>
    )
}

export default Navbar