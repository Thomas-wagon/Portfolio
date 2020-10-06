import React from "react"
import "../styles/styles.scss"

// import components
import Banner2 from "../components/banner2"
import Navbar from "../components/navbar"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <div className="container">
      <Banner2 />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default IndexPage
