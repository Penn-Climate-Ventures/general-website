import React from "react";
import s from "styled-components";
import { useContainerDimensions } from "../ui/useContainerDimensions";
import {Subtitle, Text} from "../ui/Typography";
import {LIGHT_BLUE, TEXT_PRIMARY_INV} from "../utils/constants";
import whatwedo1 from "../images/whatwedo1.png";
import whatwedo2 from "../images/whatwedo2.png";
import whatwedo3 from "../images/whatwedo3.png";


const Dos = s.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 60px;
  justify-content: space-evenly;
`

const Rectangle = s.div`
  position: relative;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #FFFFFF;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.2);
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`

export const WhatWeDo = () => {
  const componentRef = React.useRef();
  const { width } = useContainerDimensions(componentRef);

  return (
    <div ref={componentRef} color={LIGHT_BLUE}>
      <Subtitle fontColor={TEXT_PRIMARY_INV}>What We Do</Subtitle>
      <Dos>
        <Rectangle>
          <Rectangle>Workshops</Rectangle>
          <img src={whatwedo1}/>
          <Text>Brief description</Text>
        </Rectangle>
        <Rectangle>
          <Rectangle>Competitions</Rectangle>
          <img src={whatwedo2}/>
          <Text>Brief description</Text>
        </Rectangle>
        <Rectangle>
          <Rectangle>Fellowships</Rectangle>
          <img src={whatwedo3}/>
          <Text>Brief description</Text>
        </Rectangle>
      </Dos>
    </div>
  );
};
