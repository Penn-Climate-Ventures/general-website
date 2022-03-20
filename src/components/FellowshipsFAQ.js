import React, { Component } from "react"
import s from "styled-components"
import {LIGHT_BLUE} from "../utils/constants";
import {Subtitle, Text} from "../ui/Typography";


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
            <ul>
              <li>
                Consulting: 4-5 hrs / wk for 1 semester
              </li>
              <li>
                Internship: determined by you and the founder
              </li>
            </ul>
          </Text>
        </details>

        <details>
          <Question>What are the projects like?</Question>
          <Text>
            <ul>
              <li>
                Projects depend on the companies we partner with and their needs. We do our best to
                source projects that span a range of disciplines, but there are no set rules on what
                projects we end up offering.
              </li>
            </ul>
          </Text>
        </details>

        <details>
          <Question>What’s the application process like?</Question>
          <Text>
            <ul>
              <li>
                Consulting: Initial written application → second round in-person or Zoom interview
                with PCV → decision
              </li>
              <li>
                Fast-Track Internship: Initial written application → second round in-person or
                Zoom interview with PCV → final round interview with founder → decision
              </li>
            </ul>
          </Text>
        </details>

        <details>
          <Question>When will applications be released?</Question>
          <Text>
            <ul>
              <li>
                Fall 2021 applications will be released August 31!
              </li>
            </ul>
          </Text>
        </details>

        <details>
          <Question>Can I apply for multiple consulting projects and/or internships?</Question>
          <Text>
            <ul>
              <li>
                Yes, however, you will only be assigned to one opportunity based on which
                opportunity fits the best with your interests!.
              </li>
            </ul>
          </Text>
        </details>
      </div>
    )
  }
}
