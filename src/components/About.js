import React from "react";
import s from "styled-components";
import { useContainerDimensions } from "../ui/useContainerDimensions";
import {Subtitle, Text } from "../ui/Typography";

const Goals = s.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 60px;
  justify-content: space-evenly;
`

const Goal = s.div`
  border: 1px solid red; // temp to see bounds of the div
`

export const About = () => {
  const componentRef = React.useRef();
  const { width } = useContainerDimensions(componentRef);

  return (
    <div ref={componentRef}>
      <Subtitle>About Us</Subtitle>
      <Subtitle>Our Goals</Subtitle>
      <Goals>
        <Goal>
          <Text>1</Text>
        </Goal>
        <Goal>
          <Text>2</Text>
        </Goal>
        <Goal>
          <Text>3</Text>
        </Goal>
      </Goals>
    </div>
  );
};

