import React, {Component} from "react"

import {
  Layout,
  Navbar,
  Footer
} from "../components"
import {Text, Title} from "../ui/Typography";
import SEO from "../components/seo";


export default class ValuesPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Values" defer={false} />
        <Navbar />
        <Title>Our Values</Title>

        <Text>
          As a student-led group at Penn, PCV’s mission is to support Penn students in catalyzing climate action.
          Our long-term vision is to build a climate tech career recruiting pipeline at Penn, comparable to those
          of consulting and investment banking that currently exist. Our central thesis is that we CAN act to combat
          the climate crisis and larger anthropogenic issues in our environment.
        </Text>

        <Text>
        Responding to climate change requires movements across economic, social, and political boundaries.
        We aim to make climate and business education more accessible, connect Penn talent to industry needs,
        and foster innovation and entrepreneurship at the undergraduate and graduate levels.
        Our organization operates on these guiding principles:
        </Text>

        <ul>
          <li>
            <b>
            All activities and events should be environmentally mindful </b> and whenever possible
            should decrease our environmental impact. All spending including speakers, merchandise,
            catering, and funded trips should be taken responsibly with the end goal of becoming more
            sustainably knowledgeable or having a net positive impact on the environment.
          </li>
          <li>
            <b>Successful communities are part of a sustainable environment.</b> We are an integral
            part of the community engaged with the Penn students, the Penn administration, and Philadelphia,
            and our patrons globally. We are responsible to engage these groups in mutually-beneficial,
            non-invasive manners.
          </li>
          <li>
            <b>We seek to be diverse.</b> We hope to represent all of Penn schools and students from
            various backgrounds. We aim to foster cross-collaboration across these schools
            and build deeper relationships.
          </li>
          <li>
            <b>We seek innovation.</b> Not only do we hope to engage schools but also institutions
            that cater entrepreneurship, sustainability, and technology. We aim to be the center of
            Penn's climate innovation scene, and we engage our members to do so.

          </li>
          <li>
            <b>We seek growth.</b> We want our members to grow in any avenue they see a need in.
            We run lean with many opportunities for growth and leadership. We hope to put students
            in projects where they can find the most value from. We find free communication vital to our growth.
          </li>
        </ul>

        <Footer />
      </Layout>
    )
  }
}
