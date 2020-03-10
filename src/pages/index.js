import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import LandingSection from "../components/landing"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Contact from "../components/contact"
import MiscWork from "../components/misc-work"



const IndexPage = () => (
  <Layout>
    <SEO title="Min Jea Kim" />
    <LandingSection/>
    <About/>
    <Skills/>
    <Projects/>
    <MiscWork/>
    <Contact/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
