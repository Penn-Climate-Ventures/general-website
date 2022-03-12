import React from "react"
import s from "styled-components"
import { BoxHeading, BoxColumn } from "../ui/BoxColumn"
import { LIGHT_BLUE } from "../utils/constants"
import Carousel from "../ui/Carousel";
import {useContainerDimensions} from "../ui/useContainerDimensions";
import {Subtitle} from "../ui/Typography";

const OrientationColumn = s(BoxColumn)`
  width: 230px;
`

const OrientationGoals = s.ul`
  text-align: left;
  line-height: 1.2rem;
  font-size: 0.9rem;
  list-style: circle outside none;
`

const OrientationButton = s.a`
  color: black;
  opacity: 0.8;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid ${LIGHT_BLUE};
  border-radius: 25px;
  padding: 3px 15px;
  margin: 20px auto;
  display: block;
  transition: 0.2s;

  &:hover {
    color: ${LIGHT_BLUE};
  }
`

const OrientationLayout = () =>  {
  const componentRef = React.useRef()
  const { width } = useContainerDimensions(componentRef)

  return (
    <div ref={componentRef}>
      <Subtitle>Orientation</Subtitle>
      <Carousel show={width / 300}>
        <OrientationColumn round="true">
          <BoxHeading>PCV in 2025:</BoxHeading>
          <OrientationGoals>
            <li>A robust recruiting pipeline for climate startups</li>
            <li>A movement to bake climate into our curriculum</li>
            <li>Penn's springboard for climate action</li>
          </OrientationGoals>
        </OrientationColumn>
        <OrientationColumn round="true">
          <BoxHeading>New to Penn? Start here.</BoxHeading>
          {/*<OrientationButton href="/">Massive Events Calendar</OrientationButton>*/}
          <OrientationButton href="https://docs.google.com/document/d/1BFwgQGAzPigndFDxPXGcU27a1QfNhiVtrrBfvqvpGc4/edit?usp=sharing">Startup Resources</OrientationButton>
          <OrientationButton href="https://docs.google.com/document/d/1zT0XivDJk6L21ThWqI46bug2xston4dPstrd-9ayJAQ/edit?usp=sharing">Institution Resources</OrientationButton>
          <OrientationButton href="https://docs.google.com/document/d/1TZKbQ0_FdzxVAlqnNzaP8-wLRAICcr28IeNF0-KXm_M/edit?usp=sharing">Other Penn Groups!</OrientationButton>
          <OrientationButton href="https://docs.google.com/document/d/1ysFC_p9UXTbkzFUL4lS-6KVQGch1qkahEwJXju9i9rM/edit?usp=sharing">Sustainability</OrientationButton>
        </OrientationColumn>
        <OrientationColumn round="true">
          <BoxHeading>What we're working on.</BoxHeading>
          <OrientationButton href="/class">Workshops</OrientationButton>
          <OrientationButton href="/fellowships">Fellowship Programs</OrientationButton>
          <OrientationButton href="https://prize.pennclimateventures.org">Prize Competition</OrientationButton>
          <OrientationButton href="https://ideathon.pennclimateventures.org">Ideathon</OrientationButton>
          {/*<OrientationButton href="/">Office Hours</OrientationButton>*/}
        </OrientationColumn>
      </Carousel>
    </div>
  )
}

export const Orientation = s(OrientationLayout)`
`
