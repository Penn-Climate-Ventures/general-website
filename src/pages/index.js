import React from "react"
import "../styles/base.scss"

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
import {LIGHT_BLUE} from "../utils/constants";
import {Testimonials} from "../components/Testimonials";
import SEO from "../components/seo";


export default function IndexPage() {
  return (
    <>
      <SEO title="Home" defer={false} />
      <Navbar />
      <Hero/>
      <WideLayout><About/></WideLayout>
      <WavyLayout color={LIGHT_BLUE}><WhatWeDo/></WavyLayout>
      <WideLayout><UpcomingEvents/></WideLayout>
      <WavyLayout color={LIGHT_BLUE}><GetInvolved/></WavyLayout>
      <WideLayout><News/></WideLayout>
      <WavyLayout color={LIGHT_BLUE}><Testimonials/></WavyLayout>
      <Footer />
    </>
  )
}
