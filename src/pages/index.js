import React from "react"
import "../styles/styles.scss"

// import components
import Banner from "../components/banner"
import Navbar from "../components/navbar"
import About from "../components/about"
// import Projects from "../components/projects"
// import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <div className="app">
      <Banner />
      <div className="container">
        <Navbar />
        <About />
      </div>
    </div>
  )
}

export default IndexPage
