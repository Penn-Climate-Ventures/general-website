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

        <SectionHeader>Heading 1</SectionHeader>
        <TextP>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam autem
          beatae dolorum, earum ex explicabo labore magni possimus quas quasi quis repellat
          reprehenderit tenetur ut velit voluptatum? Fugit, quos.
        </TextP>
        <TextP>
          Architecto aspernatur at deserunt enim eos esse fuga hic, libero minus non odit quos
          rem vero. Asperiores assumenda, dolorem exercitationem fugit iure molestiae mollitia non
          pariatur perferendis, quis totam vitae.
        </TextP>

        <SectionHeader>Heading 2</SectionHeader>
        <TextP>
          Accusamus accusantium asperiores corporis cupiditate, dolore ducimus error iure
          laborum minima natus nostrum porro quod, unde! A consectetur cumque, dicta, dolor eius
          esse illo illum iure numquam officiis quae ratione.
        </TextP>
        <TextP>Expedita harum iure modi quisquam sed. Alias cupiditate deleniti dolorem eos error
          est et fuga ipsam nam odio optio, porro quae, quam quos ratione repellat rerum sunt
          tenetur velit, vero!
        </TextP>

        <SectionHeader>Heading 3</SectionHeader>
        <TextP>
          Alias consectetur consequatur eaque enim eum eveniet facere harum minus molestias
          odio porro quaerat quasi quia quibusdam quisquam ratione soluta tempora tenetur, unde
          vel! Ab aliquid animi facere quia repudiandae.
        </TextP>
        <Footer />
      </Layout>
    )
  }
}
