import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import LandingSection from "../components/landing"

const IndexPage = () => (
  <Layout>
    <SEO title="Min Jea Kim" />
    <LandingSection/>
    <h1>Hi people</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
