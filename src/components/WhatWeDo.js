import React from "react";
import { useContainerDimensions } from "../ui/useContainerDimensions";
import {Subtitle} from "../ui/Typography";
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

