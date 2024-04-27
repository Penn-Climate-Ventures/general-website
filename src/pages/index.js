import React from "react"
import "../styles/base.scss"

import {WhatWeDo} from "../components/WhatWeDo"
import {Calendar} from "../components/Calendar"
import {GetInvolved} from "../components/GetInvolved"
import {Hero} from "../components/Hero"
import {About} from "../components/About"
import {Testimonials} from "../components/Testimonials"
import SEO from "../components/seo"
import {Navbar} from "../components/Navbar"
import {Container, WavyLayout} from "../ui/layout"
import {News} from "../components/News"
import {Footer} from "../components/Footer"

import "../styles/base.scss"


export default function IndexPage() {
  return (
    <>
      <SEO title="Home" defer={false} />
      <Navbar />
      <Hero/>
      <About/>
      <WavyLayout color={'var(--c-accent-primary)'}><WhatWeDo/></WavyLayout>
      <Container wide><Calendar/></Container>
      <WavyLayout color={'var(--c-accent-primary)'}><GetInvolved/></WavyLayout>
      <Container wide><News/></Container>
      <WavyLayout color={'var(--c-accent-primary)'}><Testimonials/></WavyLayout>
      <Footer />
    </>
  )
}
