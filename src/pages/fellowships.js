import React, {Component} from "react"

import {
  Layout,
  Navbar,
  Footer, ProgramDetails
} from "../components"
import {ProjectsAndPartners} from "../components/ProjectsAndPartners";
import {FellowshipsFAQ} from "../components/FellowshipsFAQ";
import {Email, Subtitle, Text, Title} from "../ui/Typography";
import SEO from "../components/seo";


export default class ClassPage extends Component {
  render() {
    return (
      <>
      <SEO title="Fellowships" defer={false} />
      <Navbar />
      <Layout>
        <Title>Fellowships</Title>

        <Text bold>Breaking the Barriers to Climate. Your Launchpad into Climate Tech.</Text>

        <Text>
          Penn doesn't have any on-campus recruiting (OCR) for climate innovation, making it
          difficult to break into climate. We aim to change that. Through our fellowships program,
          students apply to work with cutting-edge climate startups/companies, gaining exposure,
          hands-on experience, and connections to the broader climate space while delivering value
          to companies.
        </Text>

        <div id="sectionRef">
          <ProgramDetails id={'sectionRef'}/>
        </div>

        <ProjectsAndPartners/>

        <FellowshipsFAQ/>

        <Subtitle>Are you a company interested in partnering with us?</Subtitle>
        <Text>
          If you're a company interested in partnering with us, we'd love to hear from you! Please
          email <Email/> with "Fellowships Company Partnership" in the subject field and we'll get
          back to you shortly.
        </Text>

        <Footer />
      </Layout>
      </>
    )
  }
}
