import React from "react"
import "../styles/styles.scss"
import { Helmet } from "react-helmet"

// import components
import Banner2 from "../components/banner2"
import Navbar from "../components/navbar"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

// import images
import Oglake from "../images/og_lake.png"

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
      <Banner2 />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default IndexPage
