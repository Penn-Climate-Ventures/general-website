import React from "react"
import Helmet from "react-helmet"
import "./styles.scss"

import {
  Layout,
  Navbar,
  Imagine,
  Orientation,
  News,
  Community,
  Team,
  Footer,
} from "../components"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet title="Penn Climate Ventures" defer={false} />
      <Navbar />
      <Imagine />
      <Orientation />
      <News />
      <Community />
      <Team />
      <Footer />
    </Layout>
  )
}
export default IndexPage
