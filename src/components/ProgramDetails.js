import React, { Component } from "react"
import s from "styled-components"
import { SectionHeader, TextP, Email } from "./shared/Layout";


const TabLayout = s.div`
  margin-top: 60px;
  box-shadow: 0 3px 25px 1px #ddd;
  border-radius: 20px;
  overflow: hidden;
`

const TabHeader = s.div`
  display: flex;
`

const TabButton = s.div`
  text-align: center;
  text-decoration: underline;
  padding: 10px 0;
  width: 50%;
  cursor: pointer;
`
const TabContent = s.div`
  margin: 0;
  padding: 30px 15px 15px 15px;
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
        <SectionHeader>Program Details</SectionHeader>
        <TabLayout>
          <TabHeader>
            <TabButton onClick={this.toggleToStudent} style={this.getStudentVisible() ? null : inactiveTabStyle}>
              <p>Student</p>
            </TabButton>
            <TabButton onClick={this.toggleToCompany} style={this.getCompanyVisible() ? null : inactiveTabStyle}>
              <p>Company</p>
            </TabButton>
          </TabHeader>

          { this.getStudentVisible() &&
            <TabContent >
              <TextP bold={"bold"}>PCV offers 2 tracks for students:</TextP>

              <TextP>01 Consulting</TextP>
              <TextP>
                <ul>
                  <li>
                    Students work in a group of 4-5 and complete a well defined project for a
                    climate tech startup. Projects are diverse and could include everything from
                    software development to strategy and business development. This is largely
                    dependent on:
                  </li>
                  <li>
                    Startups will discuss potential actionable projects with PCV that they would
                    like students to work on.
                  </li>
                  <li>
                    PCV will act as pre-screening recruiters to ensure the student consultants are
                    both qualified and enthusiastic.
                  </li>
                  <li>
                    After the application process, startups may be matched to a consulting group of
                    4-5 student with complementary skills and preferences.
                  </li>
                  <li>
                    The consulting group will complete the project, adhering to a predetermined
                    deadline.
                  </li>
                </ul>
              </TextP>

              <TextP>02 Fast-Track Internship</TextP>
              <TextP>
                <ul>
                  <li>
                    Students apply to be...
                  </li>
                  <li>
                    Startups decide the area(s) they want intern(s) to help with. There areas
                    include: business development, design, SWE development, research, marketing,
                    analytics, finance, etc.
                  </li>
                  <li>
                    PCV will act as pre-screening recruiters to ensure the student interns are both
                    qualified and enthusiastic.
                  </li>
                  <li>
                    Startups will be matched with a predetermined number of interns.
                  </li>
                  <li>
                    Internship will work with the startups for a predetermined amount of time.
                  </li>
                </ul>
              </TextP>

              <TextP>Time Commitment</TextP>
              <TextP>
                <ul>
                  <li>
                    4-5 hrs / wk for 1 semester
                  </li>
                </ul>
              </TextP>

              <TextP>Project Types</TextP>
              <TextP>
                <ul>
                  <li>
                    Projects depend on the companies we partner with and their needs. In general,
                    we're doing our best to source projects
                  </li>
                </ul>
              </TextP>

              <TextP>Application Process</TextP>
              <TextP>
                <ul>
                  <li>
                    Consulting: Interested students will
                  </li>
                  <li>
                    Fast-Track Internship:
                  </li>
                </ul>
              </TextP>

              <TextP>Project Structure</TextP>
              <TextP>
                <ul>
                  <li>
                    ...
                  </li>
                </ul>
              </TextP>

            </TabContent>
          }

          { this.getCompanyVisible() &&
          <TabContent >
            <TextP bold={"bold"}>PCV offers 2 tracks for companies:</TextP>

            <TextP>01 Consulting</TextP>
            <TextP>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias animi autem
                  deserunt dolor dolores, est, harum illum ipsum minima mollitia necessitatibus
                  nulla officia perferendis sint soluta temporibus ut voluptas.
                </li>
              </ul>
            </TextP>

            <TextP>02 Fast-Track Internship</TextP>
            <TextP>
              <ul>
                <li>
                  If you’re a company interested in partnering with us, we’d love to hear from you!
                  Please email <Email/> with “Fellowships Company Partnership”
                  in the subject field and we’ll get back to you shortly.
                </li>
              </ul>
            </TextP>
          </TabContent>
          }

        </TabLayout>
      </div>
    )
  }
}
