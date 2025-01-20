import React from "react"
import s from "styled-components"

import { Text, CenteredSubtitle } from "../ui/Typography"

import goal1 from "../images/goal1.png"
import goal2 from "../images/goal2.png"
import goal3 from "../images/goal3.png"
import gbmImage from "../images/gallery/1-IMG_2544.jpg"

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
      <CenteredSubtitle>   <a
            href="https://tinyurl.com/PCVSpring2025"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            <u>Apply Here!</u>
          </a>
            </CenteredSubtitle>
      <AboutImageWrapper>
        <AboutImage src={gbmImage}/>
      </AboutImageWrapper>
    
      {/* <CenteredSubtitle>Our Goals</CenteredSubtitle>
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
      </GoalWrapper> */}
    </>
  );
};

