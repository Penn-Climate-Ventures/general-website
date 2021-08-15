import React, { Component } from "react"
import s from "styled-components"
import { SectionHeader, TextP, Email } from "./shared/Layout";
import { LIGHT_BLUE } from "../utils/constants"

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

              <TextP bold>01 Consulting</TextP>
              <TextP>
                <ul>
                  <li>
                    Groups of 4-5 students work on a semester-long project for a climate tech
                    startup/company
                  </li>
                  <li>
                    Each group is has 1 project lead (PL) responsible for liaising between PCV, the
                    company, and the team
                  </li>
                  <li>
                    Projects are diverse and could include anything from software development to
                    design and business development. This is largely dependent on clients’ needs and
                    the companies sourced for that semester
                  </li>
                  <li>
                    Applications involve a written application and an interview with PCV
                  </li>
                </ul>
              </TextP>

              <TextP bold>02 Fast-Track Internship</TextP>
              <TextP>
                <ul>
                  <li>
                    1-2 students are selected to work closely with a founder in the climate space
                  </li>
                  <li>
                    Founders tell us what kind of skills and support they’re looking for, but
                    specific projects and commitments are discussed between you and the founder.
                  </li>
                  <li>
                    Minimum 10 weeks commitment
                  </li>
                  <li>
                    Applications involve a written application, an interview with PCV, and an
                    interview with the founder
                  </li>
                </ul>
              </TextP>
            </TabContent>
          }

          { this.getCompanyVisible() &&
          <TabContent >
            <TextP bold={"bold"}>PCV offers 2 tracks for companies:</TextP>

            <TextP bold>01 Consulting</TextP>
            <TextP>
              Have a project that you just can’t get to? Or maybe you’d like a fresh perspective on
              it? Consider our consulting track.
            </TextP>
            <TextP>
              With consulting, a group of 4-5 students work on a project for you over the course of
              a semester.
            </TextP>
            <TextP>
              <ul>
                <li>
                  You have control over the project, deliverables, expectations, etc., and we ask
                  you give us a detailed project outline and expectations prior to student
                  recruitment.
                </li>
                <li>
                  We take care of student recruitment, team formation, and all in-program logistics.
                </li>
                <li>
                  You can choose to check in with the team weekly or biweekly.
                </li>
                <li>
                  You will receive a tangible deliverable at the conclusion of the program.
                </li>
                <li>
                  There is a set schedule for this track.
                </li>
                <li>
                  This is intended for companies looking for students to work on a project
                  independent of your day-to-day work.
                </li>
              </ul>
            </TextP>

            <TextP>Pros:</TextP>
            <ul>
              <li>
                Since the project is independent of your day-to-day work, all the work you have to
                do is upfront / pre-program; after you get the students get started, all you have to
                do is wait for their results
              </li>
              <li>
                A team of students contribute to the final work → diversity of opinions and
                perspectives
              </li>
              <li>
                At the end of the day, you walk away with a project off your plate and/or something
                that adds value to your venture
              </li>
            </ul>

            <TextP>Cons:</TextP>
            <ul>
              <li>
                There is less flexibility since the project is set for a semester
              </li>
              <li>
                There’s a greater upfront cost and time needed to prepare the project for student
                recruitment
              </li>
            </ul>

            <TextP bold>02 Fast-Track Internship</TextP>
            <TextP>
              Moving fast and finding it difficult to carve out a project weeks in advance?
            </TextP>
            <TextP>
              Consider our internship track.
            </TextP>
            <TextP>
              We understand it can be hard to carve out a specific project weeks in advance. With
              the internship track, instead of giving us a project, you tell us what kind of
              skills/people your company needs and we match you with a Penn student interested in
              your company with the skills you’re looking for. This is effectively an in-semester
              internship program where you don’t have to worry about recruiting (we do the majority
              of it for you, all you worry about is the final interview).
            </TextP>
            <TextP>
              <ul>
                <li>
                  We ask you give us a detailed JD prior to student recruitment so that we can find
                  the best students for you
                </li>
                <li>
                  We take care of the majority of recruitment; we do a pre-screening and an
                  interview before passing students we think are the best fit to you for a final
                  round
                </li>
                <li>
                  There is no set schedule for this track. Length of involvement and schedule is
                  left to your discretion.
                  <ul>
                    <li>
                      Only caveat is that we ask for a 8 week minimum commitment unless something
                      comes up to ensure a valuable experience for you and the student.
                    </li>
                  </ul>
                </li>
                <li>
                  Applications for this have no hard deadline and will be taken in on a rolling
                  basis. We will do our best to encourage a wave of applications early in the
                  semester, but our goal is to find the right person for you, not just any person,
                  which may not happen within x weeks.
                </li>
                <li>
                  This is intended for companies looking for more long-term help with a discipline
                  rather than a timeboxed project.
                </li>
              </ul>
            </TextP>

            <TextP>Pros:</TextP>
            <TextP>
              <ul>
                <li>
                  More flexibility on your end with regards to projects and how/what the student
                  contributes
                </li>
                <li>
                  Student is able to be fully onboarded within your organization, increasing their
                  ability to contribute (if it’s a great fit, this could open opportunities for
                  extended internship)
                </li>
              </ul>
            </TextP>
            <TextP>Cons:</TextP>
            <TextP>
              <ul>
                <li>
                  Less support from us; after we connect you with the student it’s up to you to
                  oversee the student and their work
                </li>
              </ul>
            </TextP>

            <TextP>
              If you’re a company interested in partnering with us, we’d love to hear from you!
              Please email <Email/> with “Fellowships Company Partnership” in
              the subject field and we’ll get back to you shortly.
            </TextP>

          </TabContent>
          }

        </TabLayout>
      </div>
    )
  }
}
