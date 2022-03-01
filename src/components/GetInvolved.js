import React from "react";
import s from "styled-components";
import { useContainerDimensions } from "./shared/useContainerDimensions";
import {Subtitle, Text, Title} from "./shared/Typography";
import Button, {ButtonInverted} from "./shared/Button";
import {TEXT_PRIMARY_INV} from "../utils/constants";

export const GetInvolved = () => {
  const componentRef = React.useRef();
  const { width } = useContainerDimensions(componentRef);

  return (
    <div ref={componentRef}>
      <Subtitle fontColor={TEXT_PRIMARY_INV}>Get Involved</Subtitle>
      <ButtonInverted href="" target="_blank" rel="noreferrer noopener">Sign up</ButtonInverted>
    </div>
  );
};

