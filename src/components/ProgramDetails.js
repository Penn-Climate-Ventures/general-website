import React, { Component } from "react"
import s from "styled-components"

import { LIGHT_BLUE } from "../utils/constants"
import {Subtitle, Text} from "../ui/Typography"

const TabLayout = s.div`
  max-width: 800px;
  margin: 45px auto 90px auto;
  box-shadow: 0 3px 25px 1px #ddd;
  border-radius: 20px;
  overflow: hidden;
`

const TabHeader = s.div`
  display: flex;
`

const TabButton = s.div`
  text-align: center;
  // text-decoration: underline;
  padding: 10px 0;
  width: 50%;
  cursor: pointer;
  color: ${LIGHT_BLUE};
`
const TabContent = s.div`
  margin: 0;
  padding: 30px 25px 25px 25px;
`


export class ProgramDetails extends Component {
  state = {
    studentVisible: true,
    companyVisible: false
  }

  getStudentVisible = () => {
    return this.state.studentVisible
  }
  getCompanyVisible = () => {
    return this.state.companyVisible
  }
  toggleToStudent = () => {
    this.setState({
      studentVisible: true,
      companyVisible: false
    })
  }
  toggleToCompany = () => {
    this.setState({
      studentVisible: false,
      companyVisible: true
    })
  }


  render() {
    const inactiveTabStyle = {
      textDecoration: 'none',
      background: '#f2f2f2',
    }

    return (
      <div>
        <Subtitle>Program Details</Subtitle>

        <Text>
          <ul>
            <li>
              Groups of 4-5 students work on a semester-long project for a climate tech
              startup/company
            </li>
            <li>
              Each group is has 1 project lead responsible for liaising between PCV, the
              company, and the team
            </li>
            <li>
              Projects are diverse and could include anything from software development to
              design and business development
            </li>
            <li>
              Applications involve a written application and an interview with PCV
            </li>
          </ul>
        </Text>
      </div>
    )
  }
}
