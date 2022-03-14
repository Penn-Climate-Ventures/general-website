import React from "react";
import s from "styled-components";
import { useContainerDimensions } from "../ui/useContainerDimensions";
import { Subtitle, Text } from "../ui/Typography";
import goal1 from "../images/goal1.png";
import goal2 from "../images/goal2.png";
import goal3 from "../images/goal3.png";

const Goals = s.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 60px;
  justify-content: space-evenly;
`

const Goal = s.div`
  border: 1px solid red; // temp to see bounds of the div
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`

export const About = () => {
  const componentRef = React.useRef();
  const { width } = useContainerDimensions(componentRef);

  return (
    <div ref={componentRef}>
      <Subtitle>About Us</Subtitle>
        <Text>Brief description to make it really obvious what PCV is and what its main purpose is</Text>
      <Subtitle>Our Goals</Subtitle>
      <Goals>
        <Goal>
          <img src={goal1}/>
          <Text>A robust recruiting pipeline for climate startups</Text>
        </Goal>
        <Goal>
          <img src={goal2}/>
          <Text>A movement to bake climate into our curriculum</Text>
        </Goal>
        <Goal>
          <img src={goal3}/>
          <Text>Penn's springboard for climate action</Text>
        </Goal>
      </Goals>
    </div>
  );
};

