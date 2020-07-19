import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Image from "../components/image"

import "../components/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image />
  </Layout>
)

export default IndexPage
