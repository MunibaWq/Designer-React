import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      {/* HeroGroup div is gonna allow us to position the content and give us more freedom to make it adaptive later. */}
      <div className="HeroGroup">
        <SEO title="Home" />
        <h1>Learn to Design and Code React Apps</h1>
        <p>This is my new React website using gatsby.</p>
        <p>Now I will build something great.</p>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </div>
    </div>
  </Layout>
)

export default IndexPage
