import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

// <Skills></Skills>
//<Promotion></Promotion>
const IndexPage = () => (
  <Layout>
    <SEO title="Fiona Wang" />
    <Header></Header>
    <About></About>
    <Work></Work>
    
    <Footer></Footer>
  </Layout>
)

export default IndexPage
