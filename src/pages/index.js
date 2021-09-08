import React from "react"
import Helmet from "react-helmet"
import "./styles.scss"
import s from "styled-components"

import {
  Layout,
  Navbar,
  Orientation,
  News,
  Community,
  Team,
  Footer, TextP,
  Banner, UrlLink,
} from "../components"

import Imagine from "../components/Imagine";

const ImportantBanner = s(Banner)`
  position: fixed;
  border-width: 2px;
  width: 90%;
  top: 90px;
  left: 50%;
  z-index: 200;
  transform: translate(-50%, 0%);
`

const IndexPage = () => {
  return (
    <>
      <Helmet title="Penn Climate Ventures" defer={false} />
      <Navbar />
      <ImportantBanner>
        <TextP>
          ⚠️ Fall recruitment is open! Apply <a href="membership">here</a> now.
        </TextP>
      </ImportantBanner>
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
