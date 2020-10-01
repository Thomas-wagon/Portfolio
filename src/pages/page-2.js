import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <br/><br/><br/><br/>
    <div style={{ position: `sticky`, top: `0` }}> <p>THIS WILL STICK</p> </div>
=    <p>Now go build something great.</p>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
