import React from "react"
import s from "styled-components"

import { Text, CenteredSubtitle } from "../ui/Typography"

import goal1 from "../images/goal1.png"
import goal2 from "../images/goal2.png"
import goal3 from "../images/goal3.png"
import gbmImage from "../images/gallery/gbm-2022-02-20.jpg"

import EmblaCarousel from './EmblaCarousel'
import '../styles/embla.css'

const OPTIONS = { loop: true }
const SLIDES = [1, 2, 3, 4, 5]


const AboutImageWrapper = s.div`
  display: flex;
  align-items: center;
`

const AboutImage = s.img`
  width: 100%;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
`

const GoalWrapper = s.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 60px;
  row-gap: 30px;
  justify-content: space-evenly;
`

const Goal = s.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`

const GoalImage = s.img`
  height: 120px;
  width: 120px;
`

const IntroTextWrapper = s.div`
`

export const About = () => {
  return (
    <>
      <CenteredSubtitle>About Us</CenteredSubtitle>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <IntroTextWrapper>
        <Text>
          Imagine a campus where students line up to work for the biggest movers in climate innovation.
        </Text>
        <Text>
          Imagine a campus where sustainability and climate analyses are integrated into our course plans, just like intro statistics or calculus.
        </Text>
        <Text>
          Imagine a campus where climate is just... common sense.
        </Text>
        <Text>
          That's what we're building.
        </Text>
        <Text>
          Let's push Penn into climate.
        </Text>
      </IntroTextWrapper>
      <CenteredSubtitle>Our Goals</CenteredSubtitle>
      <GoalWrapper>
        <Goal>
          <GoalImage src={goal1}/>
          <Text center>A robust recruiting pipeline for climate startups</Text>
        </Goal>
        <Goal>
          <GoalImage src={goal2}/>
          <Text center>A movement to bake climate into our curriculum</Text>
        </Goal>
        <Goal>
          <GoalImage src={goal3}/>
          <Text center>Penn's springboard for climate action</Text>
        </Goal>
      </GoalWrapper>
    </>
  );
};

