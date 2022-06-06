import React, { Component } from "react"
import s from "styled-components"

import {Subtitle, Text} from "../ui/Typography"

import {LIGHT_BLUE} from "../utils/constants"


const Question = s.summary`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all ease-in-out 0.15s;
  
  &:hover {
    color: ${LIGHT_BLUE}
  }
`

export class FellowshipsFAQ extends Component {
  render() {
    return (
      <div>
        <Subtitle>FAQ's</Subtitle>
        <details>
          <Question>What’s the time commitment like?</Question>
          <Text>
             4-5 hrs / wk for 1 semester
          </Text>
        </details>

        <details>
          <Question>What are the projects like?</Question>
          <Text>
            Projects depend on the companies we partner with and their needs. We do our best to
            source projects that span a range of disciplines, but there are no set rules on what
            projects we end up offering.
          </Text>
        </details>

        <details>
          <Question>What’s the application process like?</Question>
          <Text>
              Initial written application → second round in-person or Zoom interview with PCV → decision
          </Text>
        </details>

        <details>
          <Question>When will applications be released?</Question>
          <Text>
            Fall 2021 applications will be released August 31!
          </Text>
        </details>

        <details>
          <Question>Can I apply for multiple consulting projects and/or internships?</Question>
          <Text>
            Yes, however, you will only be assigned to one opportunity based on which opportunity
            fits the best with your interests!.
          </Text>
        </details>
      </div>
    )
  }
}
