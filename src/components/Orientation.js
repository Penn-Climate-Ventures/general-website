import React from "react"
import s from "styled-components"
import { BoxHeading, BoxColumn } from "./shared/BoxColumn"
import {SectionHeader} from "./shared/Layout";
import { STEEL_BLUE, MIDNIGHT_BLUE } from "../utils/constants"


const OrientationGrid = s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
`

const OrientationGoals = s.ul`
  text-align: left;
  line-height: 1.15rem;
  font-size: 0.9rem;
  list-style: circle outside none;
`

const OrientationButton = s.a`
  color: ${MIDNIGHT_BLUE};
  opacity: 0.8;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid ${STEEL_BLUE};
  border-radius: 25px;
  padding: 3px 15px;
  margin: 20px auto;
  display: block;

  &:hover {
    color: ${STEEL_BLUE};
  }
`

const OrientationLayout = () => (
  <div>
    <SectionHeader left={"left"}>Orientation</SectionHeader>
    <OrientationGrid>
      <BoxColumn round="true">
        <BoxHeading>PCV in 2025:</BoxHeading>
        <OrientationGoals>
          <li>A robust recruiting pipeline for climate startups</li>
          <li>A movement to bake climate into our curriculum</li>
          <li>Penn's springboard for climate action</li>
        </OrientationGoals>
        <OrientationButton href="/values">Our Values</OrientationButton>
      </BoxColumn>
      <BoxColumn round="true">
        <BoxHeading>New to Penn? Start here.</BoxHeading>
        {/*<OrientationButton href="/">Massive Events Calendar</OrientationButton>*/}
        <OrientationButton href="https://docs.google.com/document/d/1BFwgQGAzPigndFDxPXGcU27a1QfNhiVtrrBfvqvpGc4/edit?usp=sharing">Startup Resources</OrientationButton>
        <OrientationButton href="https://docs.google.com/document/d/1zT0XivDJk6L21ThWqI46bug2xston4dPstrd-9ayJAQ/edit?usp=sharing">Institution Resources</OrientationButton>
        <OrientationButton href="https://docs.google.com/document/d/1TZKbQ0_FdzxVAlqnNzaP8-wLRAICcr28IeNF0-KXm_M/edit?usp=sharing">Other Penn Groups!</OrientationButton>
        <OrientationButton href="https://docs.google.com/document/d/1ysFC_p9UXTbkzFUL4lS-6KVQGch1qkahEwJXju9i9rM/edit?usp=sharing">Sustainability</OrientationButton>
      </BoxColumn>
      <BoxColumn round="true">
        <BoxHeading>What we're working on.</BoxHeading>
        <OrientationButton href="/class">Workshops</OrientationButton>
        <OrientationButton href="/fellowships">Consulting</OrientationButton>
        <OrientationButton href="https://prize.pennclimateventures.org">Prize Competition</OrientationButton>
        <OrientationButton href="/soon">Ideathon</OrientationButton>
        {/*<OrientationButton href="/">Office Hours</OrientationButton>*/}
      </BoxColumn>
    </OrientationGrid>
  </div>
)

export const Orientation = s(OrientationLayout)`
`
