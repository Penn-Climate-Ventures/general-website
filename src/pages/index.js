import React from "react"
import Helmet from "react-helmet"
import "./styles.scss"

import {
  Layout,
  Navbar,
  Orientation,
  News,
  Community,
  Team,
  Footer,
} from "../components"

import Imagine from "../components/Imagine";

const IndexPage = () => {
  return (
    <>
      <Helmet title="Penn Climate Ventures" defer={false} />
      <Navbar />
      <Imagine />
      <div style={{background: 'white'}}>
        <Layout >
          <Orientation />
          <News />
          <Community />
          <Team />
          <Footer />
        </Layout>
      </div>
    </>
  )
}
export default IndexPage
