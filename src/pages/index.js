import React, {useState} from "react"
import Helmet from "react-helmet"
import "../styles/base.scss"
import s from "styled-components"

import {
  WideLayout,
  Navbar,
  News,
  Footer, WavyLayout
} from "../components"

import {WhatWeDo} from "../components/WhatWeDo";
import {UpcomingEvents} from "../components/UpcomingEvents";
import {GetInvolved} from "../components/GetInvolved";
import {Hero} from "../components/Hero";
import {About} from "../components/About";
import {LIGHT_BLUE, WHITE} from "../utils/constants";


export default function IndexPage() {
  return (
    <>
      <Helmet title="Penn Climate Ventures" defer={false} />
      <Navbar />
      <Hero/>
      <WideLayout><About/></WideLayout>
      <WavyLayout color={LIGHT_BLUE}><WhatWeDo/></WavyLayout>
      <WideLayout><UpcomingEvents/></WideLayout>
      <WavyLayout color={LIGHT_BLUE}><GetInvolved/></WavyLayout>
      <WideLayout><News/></WideLayout>
      <Footer />
    </>
  )
}
