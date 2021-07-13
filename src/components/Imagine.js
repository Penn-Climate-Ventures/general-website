import React from "react"
import s from "styled-components"
import { TextP } from "./shared/Layout"
import { STEEL_BLUE } from "../utils/constants"


const ImagineGrid = s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1rem;
`

const EmphasizedText = s(TextP)`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.2rem;
`

const SolutionBox = s.div`
  font-size: 1.75rem;
  color: white;
	-webkit-text-stroke: 1.25px ${STEEL_BLUE};
	border: 1px solid ${STEEL_BLUE};
  display: table;
  text-align: center;
  vertical-align: middle;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;
  }
`

const ImagineLayout = () => (
  <div>
    <ImagineGrid>
      <div>
        <TextP>Imagine a campus where students line up to work for the biggest moveers in climate innovation.</TextP>
        <TextP>Imagine a campus where sustainability and climate analyses are integrated into our course plans, just like intro statistics or calulus.</TextP>
        <EmphasizedText>Imagine a campus where climate is just... common sense.</EmphasizedText>
      </div>
      <SolutionBox>
        <div css={`display: table-cell; vertical-align: middle; `}>
        <p>That's what we're building.</p>
        <p>Let's push Penn into climate.</p>
        </div>
      </SolutionBox>
    </ImagineGrid>
  </div>
)

export const Imagine = s(ImagineLayout)`
`
