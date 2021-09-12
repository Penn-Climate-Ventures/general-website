import React, {useState} from "react"
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
import {LIGHT_BLUE} from "../utils/constants";

const ImportantBanner = s(Banner)`
  position: fixed;
  border-width: 2px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 90%;
  top: 90px;
  left: 50%;
  z-index: 200;
  display: flex;
  justify-content: space-between;
  transform: translate(-50%, 0%);
`

const BannerCloseBtn = s.button`
  cursor: pointer;
  border: none;
  background: transparent;

  -webkit-user-select: none;
  -webkit-touch-callout : none
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  
  &:hover {
    color: ${LIGHT_BLUE};
  }
`

export default function IndexPage() {
  const [hidden, setHidden] = useState(false)

  return (
    <>
      <Helmet title="Penn Climate Ventures" defer={false} />
      <Navbar />
      { !hidden &&
        <ImportantBanner>
          <TextP>
            ⚠️ Fall recruitment is open! Apply <UrlLink href="/get-involved">here</UrlLink> now.
            Applications are now due September 18th at 11:59 PM ET.
          </TextP>
          <BannerCloseBtn onClick={() => setHidden(true)}>X</BannerCloseBtn>
        </ImportantBanner>
      }
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
