import React from 'react'
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Achievement from '../Achievement/Achievement'
import Project from '../Projects/Projects'
import Contact from '../Contact/Contact'

export default function Dashbaord() {
  return (
    <div className='body1'>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Achievement/>
        <Project/>
        <Contact/>
    </div>
  )
}
