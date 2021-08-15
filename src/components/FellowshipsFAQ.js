import React, { Component } from "react"
import s from "styled-components"
import { SectionHeader, TextP, Email } from "./shared/Layout";
import {LIGHT_BLUE} from "../utils/constants";


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
        <SectionHeader>FAQ's</SectionHeader>
        <details>
          <Question>What’s the time commitment like?</Question>
          <TextP>
            <ul>
              <li>
                Consulting: 4-5 hrs / wk for 1 semester
              </li>
              <li>
                Internship: determined by you and the founder
              </li>
            </ul>
          </TextP>
        </details>

        <details>
          <Question>What are the projects like?</Question>
          <TextP>
            <ul>
              <li>
                Projects depend on the companies we partner with and their needs. We do our best to
                source projects that span a range of disciplines, but there are no set rules on what
                projects we end up offering.
              </li>
            </ul>
          </TextP>
        </details>

        <details>
          <Question>What’s the application process like?</Question>
          <TextP>
            <ul>
              <li>
                Consulting: Initial written application → second round in-person or Zoom interview
                with PCV → decision
              </li>
              <li>
                Fast-Track Internship:  Initial written application → second round in-person or
                Zoom interview with PCV → final round interview with founder → decision
              </li>
              <li>
                Fall 2021 applications will be released August 31!
              </li>
            </ul>
          </TextP>
        </details>

        <details>
          <Question>Can I apply for multiple consulting projects and/or internships?</Question>
          <TextP>
            <ul>
              <li>
                Yes, but you will only be assigned 1 in the end (for both tracks).
              </li>
            </ul>
          </TextP>
        </details>
      </div>
    )
  }
}
