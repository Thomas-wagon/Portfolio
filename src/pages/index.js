import React from "react"
import "../styles/styles.scss"
import { Helmet } from "react-helmet"

// import components
import Banner from "../components/Banner/Banner"
import Navbar from "../components/NavBar/Navbar"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"

// import images
import Oglake from "../images/og_lake.png"
import Practices from "../components/Practices/Practices"

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Thomas Viaules - Portfolio</title>
        <link rel="canonical" href="https://www.thomasviaules.com/" />
        <meta property="og:title" content="Thomas Viaules - Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thomasviaules.com/" />
        <meta
          property="og:description"
          content="thomas viaules - I'm a web developer based in Montreal, welcome to my portfolio"
        />
        <meta property="og:image" content={Oglake} />
      </Helmet>
      <Banner />
      <Navbar />
      <About />
      <Projects />
      <Practices />
      <Contact />
    </div>
  )
}

export default IndexPage
