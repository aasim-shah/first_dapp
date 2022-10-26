import {useState} from 'react'
import '../App.css'
import Banner from '../components/Banner/Banner'
import Courses from '../components/Courses/Courses'
import Tutorials from '../components/Tutorials/Tutorials'
import Hero from '../components/Hero/Hero'
import Blogs from '../components/Blogs/Blogs'


import Navbar from '../components/Navbar/Navbar'
function Homepage() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Courses/>
    <Banner/>
    <Tutorials/>
    <Blogs/>
    <div className="mb">asdfdsa</div>
    </>
  )
}

export default Homepage