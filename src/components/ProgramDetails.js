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
        <div>
                <Subtitle>Operations</Subtitle>

                <Text>
                The Operations Committee is responsible for facilitating and planning GBMs, preparing and executing recruitment, and managing finances. 
                The Operations Committee often collaborates with all of the committees of PCV to provide additional support. 
                The team also designs PCV’s semesterly reports and monthly emails, working closely with the entire executive board. 
                We are looking for people who enjoy collaboration and are interested in learning more about the climate space. 

                </Text>
              </div>

            <div>
              <Subtitle>Consulting</Subtitle>

                <Text>
                The largest branch of PCV, our Consulting Committee is a dynamic group of consultants and project leads, all working together to support both 
                emerging startups and established companies in the climate sector. Our 5-6 clients range from innovating startups and VC firms to major utilities 
                and global corporations. For students passionate about climate action, this consulting branch offers invaluable, hands-on experiences while building a 
                powerful network of industry connections that actively recruit from Penn. Beyond the professional growth, it’s an incredible opportunity to connect with 
                like-minded peers, as the committee regularly hosts vibrant socials and insightful presentations throughout the semester. 


                </Text>
              </div>

              <div>
              <Subtitle>Marketing</Subtitle>

                <Text>
                The Marketing & Design Committee drives the creative direction and public presence of PCV’s social media & website. 
                The role is collaborative and open-ended, and you’ll have the opportunity to lead the direction of your work. 
                We are looking for people who are passionate about climate tech, but bonus points go to those with technical design skills and web dev experience.


                </Text>
              </div>

              <div>
              <Subtitle>Policy</Subtitle>

                <Text>
                This year, the Policy committee will work with two statewide environmental nonprofits to provide analysis legislative frameworks, and educational materials 
                for innovative climate policy ideas in Pennsylvania. No prior experience required - we’re looking for students passionate about climate and who 
                like tot write, research, present, and discuss policy!
                </Text>
              </div>

              <div>
              <Subtitle>Prize</Subtitle>

                <Text>
                The Prize committee organizes a climate pitch competition for college startups in the space each April, with participants from 
                across the globe competing for investment. The Prize team is at the core of what PCV does and will be unique in that it will function with it’s own sub
                 teams, enabling members to cross-apply their skills in marketing, logistics, fundraising, and planning. We are looking for students excited about the 
                 climate startup space and cutting-edge innovation, and are collaborative, detail-oriented and organized. 
                </Text>
              </div>

              <div>
              <Subtitle>Events</Subtitle>

                <Text>
                The Events Committee is seeking students to assist with planning and executing club-wide and campus-wide events throughout the year. 
                Our responsibilities include coordinating with stakeholders in Penn’s administrative space as well as leading industry professionals in the climate 
                space to plan and ensure the successful execution of events. The events include social gatherings, speaker panels, networking sessions, 
                conference trips, and Penn Climate Week. We are looking for individuals with strong project management, communication, organizational skills, and charisma. 
                </Text>
              </div>

      </div>
     
      
    )
  }
}
