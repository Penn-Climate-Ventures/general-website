import React from "react";
import { useContainerDimensions } from "../ui/useContainerDimensions";
import {Subtitle} from "../ui/Typography";
import {ButtonInverted} from "../ui/Button";
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

