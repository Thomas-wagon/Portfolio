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
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <title>Thomas Viaules</title>
        <link rel="canonical" href="https://www.thomasviaules.com/" />
        <meta property="og:title" content="Thomas Viaules - Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thomasviaules.com/" />
        <meta
          property="og:description"
          content="thomas viaules - web developer portfolio - thomas is a web developer based in montreal"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
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
