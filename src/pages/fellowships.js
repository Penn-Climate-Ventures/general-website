import React, {Component} from "react"
import Helmet from "react-helmet"
import {Link} from 'react-scroll'
import s from "styled-components"
import {FiChevronDown} from "react-icons/Fi"
import {STEEL_BLUE} from "../utils/constants";

import {
  Layout,
  Navbar,
  PageTitle,
  SectionHeader,
  TextP,
  UrlLink,
  Email,
  Footer, ProgramDetails,
} from "../components"

const LearnMore = s.div`
  color: ${STEEL_BLUE};
  text-align: center;
  margin: 90px auto 120px auto;
  
  &:hover > * {
    text-decoration: underline;
    color: ${STEEL_BLUE}
  }
`

export default class ClassPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title="Penn Climate Ventures Prize" defer={false} />
        <Navbar />
        <PageTitle>Fellowships</PageTitle>
        <TextP>
          PCV is launching our first flight of projects Fall 2021. To stay updated, sign up for our
          listserv <UrlLink href="/">here</UrlLink>!
        </TextP>

        <TextP>Breaking the Barriers to Climate</TextP>
        <TextP>Your Launchpad into Climate Tech</TextP>

        <TextP>
          Penn doesn't have any on-campus recruiting (OCR) for climate innovation, making it
          difficult to break into climate. We aim to change that.
        </TextP>
        <TextP>
          Through our fellowship program, students will work on projects for relevant climate
          startups and companies, gaining exposure, hands-on experience, and connections in the
          broader climate space while delivering value to companies.
        </TextP>

        <Link to={'sectionRef'} smooth={true} offset={-100}>
            <LearnMore>
              <TextP center={'center'}>Learn More</TextP>
              <FiChevronDown fontSize={'32px'}/>
          </LearnMore>
        </Link>

        <div id="sectionRef">
          <ProgramDetails id={'sectionRef'}/>
        </div>

        <SectionHeader>Fall 2021 Projects and Partners</SectionHeader>
        <TextP>Projects announced August 31, check back then!</TextP>
        <TextP>Stay tuned for announcements by signing up for our listserve here.</TextP>

        <SectionHeader>Timeline</SectionHeader>
        <TextP>Coming soon!</TextP>

        <SectionHeader>Questions?</SectionHeader>
        <TextP>
          For other questions, comments, feedback, etc., please email <Email/>.
        </TextP>

        <Footer />
      </Layout>
    )
  }
}
