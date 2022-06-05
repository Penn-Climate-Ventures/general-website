import React, {Component} from "react"

import {
  Container,
  Navbar,
  Footer, ProgramDetails, WavyLayout
} from "../components"
import {FellowshipsFAQ} from "../components/FellowshipsFAQ";
import {Email, Subtitle, Text, Title} from "../ui/Typography";
import SEO from "../components/seo";
import {Testimonials} from "../components/Testimonials";
import {Clients} from "../components/Clients";

import {pastClientsData} from "../data/pastClients"
import {currentClientsData} from "../data/currentClients"

export default class ClassPage extends Component {
  render() {
    return (
      <>
      <SEO title="Fellowships" defer={false} />
      <Navbar />
      <Container>
        <Title>Fellowships</Title>

        <Text bold>Breaking the Barriers to Climate. Your Launchpad into Climate Tech.</Text>

        <Text>
          Penn doesn't have any on-campus recruiting (OCR) for climate innovation, making it
          difficult to break into climate. We aim to change that. Through our fellowships program,
          students apply to work with cutting-edge climate startups/companies, gaining exposure,
          hands-on experience, and connections to the broader climate space while delivering value
          to companies.
        </Text>

        <ProgramDetails/>
      </Container>

      <WavyLayout color={'var(--c-accent-primary)'}>
        <Testimonials/>
      </WavyLayout>

      <Container>
        <Clients clientsData={currentClientsData}/>
        <Clients clientsData={pastClientsData}/>

        {/* Project Showcase */}

        <FellowshipsFAQ/>

        <Subtitle>Are you a company interested in partnering with us?</Subtitle>
        <Text>
          If you're a company interested in partnering with us, we'd love to hear from you! Please
          email <Email/> with "Fellowships Company Partnership" in the subject field and we'll get
          back to you shortly.
        </Text>

        <Footer />
      </Container>
      </>
    )
  }
}
