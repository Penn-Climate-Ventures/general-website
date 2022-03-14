import React from "react";
import s from "styled-components";
import { useContainerDimensions } from "../ui/useContainerDimensions";
import { Subtitle, Text } from "../ui/Typography";
import goal1 from "../images/goal1.png";
import goal2 from "../images/goal2.png";
import goal3 from "../images/goal3.png";

const GoalWrapper = s.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 60px;
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

export const About = () => {
  const componentRef = React.useRef();
  const { width } = useContainerDimensions(componentRef);

  return (
    <div ref={componentRef}>
      <Subtitle>About Us</Subtitle>
        <Text>Brief description to make it really obvious what PCV is and what its main purpose is</Text>
      <Subtitle>Our Goals</Subtitle>
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
    </div>
  );
};

