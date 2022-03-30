import React from 'react';
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import {FaUniversity} from 'react-icons/fa';
import {BsBriefcase,BsChat} from 'react-icons/bs';

import "./Nav.scss";
import { useState } from 'react';

function Nav() {
    const [activeSection,setActiveSection] = useState("#");

    return (
        <nav>
            <a href="#" className={activeSection== "#"? 'active':''} onClick={()=>setActiveSection('#')}><AiOutlineHome size={30}/></a>
            <a href="#about" className={activeSection== "about"? 'active':''} onClick={()=>setActiveSection('about')}><AiOutlineUser size={30}/></a>
            <a href="#experience" className={activeSection== "experience"? 'active':''} onClick={()=>setActiveSection('experience')}><FaUniversity size={30}/></a>
            <a href="#portfolio" className={activeSection== "portfolio"? 'active':''} onClick={()=>setActiveSection('portfolio')}><BsBriefcase size={30}/></a>
            <a href="#contact" className={activeSection== "contact"? 'active':''} onClick={()=>setActiveSection('contact')}><BsChat size={30}/></a>
        </nav>
    )
}

export default Nav;
