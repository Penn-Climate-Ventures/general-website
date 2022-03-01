import React from "react";
import s from "styled-components";
import { useContainerDimensions } from "./shared/useContainerDimensions";
import {Text, Title} from "./shared/Typography";
import {LIGHT_BLUE, TEXT_PRIMARY_INV} from "../utils/constants";

const HeroLayout = s.div`
  padding-top: 120px;
  background-color: ${LIGHT_BLUE};
  width: 100%;
`

export const Hero = () => {
  const componentRef = React.useRef();
  const { width } = useContainerDimensions(componentRef);

  return (
    <HeroLayout ref={componentRef}>
      <Title fontColor={TEXT_PRIMARY_INV}>Penn Climate Ventures</Title>
      <Text fontColor={TEXT_PRIMARY_INV}>Catalyzing climate action through [rotating text]</Text>
    </HeroLayout>
  );
};

