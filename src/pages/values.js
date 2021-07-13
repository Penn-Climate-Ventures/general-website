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
        <PageTitle>Our Values</PageTitle>

        <TextP>
          At Penn Climate Ventures, all of our actions ought to be centered around sustainability.
          Our central thesis is that we can act to combat the climate crisis and larger human-caused
          issues in our environment, and we seek to make all activities
        </TextP>

        <TextP>
          At Penn Climate Ventures, we recognize that the Earth is facing a crisis unlike ever
          before. Climate change threatens the lives of billions of people in all socioeconomic
          status. Extreme weather conditions, depleting resources, and natural disasters are a few
          of the long lasting effects. These problems are exacerbated on impoverished people,
          communities, and nations. Not just human lives are at risk but the quality and experiences
          of life. Our ecosystem and biodiversity have intangible value that may very well
          disappear. Responding to climate change requires movements across economic, social, and
          political boundaries. And one of the least lacking movements is economics.
        </TextP>

        <TextP>
          Penn Climate Ventures aims to build business oriented climate leaders to solve this
          crisis. To help achieve this goal, we will base our decisions on a list of values. They
          are not organized on any level of importance and do not act as dogma. Rather they will
          act as guidance as we move forward.
        </TextP>

        <ul>
          <li>
            <b>All activities made internally should do no harm to the environment.</b> And whenever
            possible should decrease our environmental impact. Merchandise should be bought from
            sustainable suppliers. Catering and food orders should be from sustainable sources.
            Funded trips should be taken responsibly with the end goal of becoming more sustainably
            knowledgeable or having a net positive impact on the environment.
          </li>
          <li>
            <b>Events should be environmentally mindful.</b> Fellowship working on projects should
            be under the basis that they will make a positive impact and prepare students for these
            opportunities. And lectures/workshops should work to achieve climate leaders.
          </li>
          <li>
            <b>Successful communities are part of a sustainable environment.</b> We should consider
            ourselves to be an integral part of the community engaged with the Penn students, the
            Penn administration, and the Philadelphia city. We are responsible to engage these
            groups with their benefit in mind.
          </li>
          <li>
            <b>We seek to be diverse.</b> We hope to represent all of Penn schools while being
            culturally and ethnically diverse. It is our policy to have cross-collaboration across
            these schools and build deeper relationships.
          </li>
          <li>
            <b>We seek innovation.</b> Not only do we hope to engage schools but also institutions
            that cater entrepreneurship, sustainability, and technology. We aim to be the center of
            the Penn Climate innovation scene and we engage our members to do so.
          </li>
          <li>
            <b>We seek growth.</b> Our members' mental and physical welfare are of the utmost
            importance to us. That being said, we want our members to grow in any avenue they see
            lacking. We hope to put you in a position or working on a project where you can find the
            most value from.
          </li>
          <li>
            <b>Communication.</b> Feel free to voice your opinion. We run lean and nothing is really
            set in stone. We find free communication vital to our growth.
          </li>
        </ul>

        <Footer />
      </Layout>
    )
  }
}
