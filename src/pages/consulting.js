import React from "react"

import {Container, PageLayout, WavyLayout} from "../ui/layout"
import {Email, Subtitle, Text} from "../ui/Typography"
import {FellowshipsFAQ} from "../components/FellowshipsFAQ"
import {Testimonials} from "../components/Testimonials"
import {ProgramDetails} from "../components/ProgramDetails"
import {Clients} from "../components/Clients"

import {pastClientsData} from "../data/pastClients"
import {currentClientsData} from "../data/currentClients"

import "../styles/base.scss"


const Fellowships = () => {
    return (
    <PageLayout title="Committees">
      <Container>
        <ProgramDetails/>
      </Container>

      <Container>
        {/*<Clients clientsData={currentClientsData}/>*/}
        {/*<Clients clientsData={pastClientsData}/>*/}

        {/* Project Showcase */}

        <Subtitle>Are you a company interested in partnering with us?</Subtitle>
        <Text>
          If you're a company interested in partnering with us, we'd love to hear from you! Please
          email <Email/> with "Fellowships Company Partnership" in the subject field and we'll get
          back to you shortly.
        </Text>

      </Container>
    </PageLayout>
  )
}

export default Fellowships
