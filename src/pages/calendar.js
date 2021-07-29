import React from "react"
import Helmet from "react-helmet"
import s from "styled-components"

import {
  Layout,
  Navbar,
  PageTitle,
  TextP,
  Footer,
} from "../components"

import {STEEL_BLUE, MIDNIGHT_BLUE, GREEN} from "../utils/constants"


const CenterButtonContainer = s.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
`

const CalendarButton = s.a`
  color: ${MIDNIGHT_BLUE};
  text-align: center;
  width: 150px;
  font-size: 1rem;
  font-weight: bold;
  border: 1.5px solid ${STEEL_BLUE};
  border-radius: 25px;
  padding: 10px 15px;
  margin: auto;
  display: block;

  &:hover {
    color: ${STEEL_BLUE};
  }
`

const TextLink = s.a`
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: ${GREEN};
  font-weight: bold;
  
  &:hover {
    color: ${GREEN};
  }
`


const CalendarPage = () => {
  return (
    <Layout>
      <Helmet title="Penn Climate Ventures" defer={false} />
      <Navbar />
      <PageTitle>Calendar</PageTitle>
      <TextP bold="true" center={"center"}>
        Your one stop for all climate and entrepreneurship events at Penn.
      </TextP>
      <TextP center={"center"}>
        Please apply for general membership to access our events calendar.
      </TextP>
      <CenterButtonContainer>
        <CalendarButton href="/">Go to Calendar</CalendarButton>
      </CenterButtonContainer>
      <TextLink>Apply for membership</TextLink>
      <Footer />
    </Layout>
  )
}
export default CalendarPage
