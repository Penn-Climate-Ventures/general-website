import React from "react"
import "../styles/base.scss"

import {
  Container,
  Navbar,
  UpcomingWorkshops,
  Footer,
} from "../components"
import {Text, Title} from "../ui/Typography";
import SEO from "../components/seo";


const ClassPage = () => {
  return (
    <>
    <SEO title="Class" defer={false} />
    <Navbar />
    <Container>
      <Title>Class</Title>
      <Text bold center>
          Providing students with practical climate and business knowledge to
          use regardless of what industry they pursue.
      </Text>
      <Text center>
          The class team (1) lobbies Penn administration to push more climate
          oriented classes (think everyday classes like accounting,
          mathematics, or management with a climate focus!) and (2) creates
          educational climate and business workshops (Waste Management Ideation
          Workshop, A Guide to B-Corp Certification, Sustainable Finance 101,
          etc.)
      </Text>
      <UpcomingWorkshops />
      {/*<PastWorkshops />*/}
      <Footer />
    </Container>
    </>
  )
}

export default ClassPage
