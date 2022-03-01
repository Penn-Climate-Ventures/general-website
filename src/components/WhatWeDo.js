import React from "react";
import s from "styled-components";
import { useContainerDimensions } from "./shared/useContainerDimensions";
import {Subtitle, Text, Title} from "./shared/Typography";
import {LIGHT_BLUE, TEXT_PRIMARY_INV} from "../utils/constants";

export const WhatWeDo = () => {
  const componentRef = React.useRef();
  const { width } = useContainerDimensions(componentRef);

  return (
    <div ref={componentRef} color={LIGHT_BLUE}>
      <Subtitle fontColor={TEXT_PRIMARY_INV}>What We Do</Subtitle>
    </div>
  );
};

