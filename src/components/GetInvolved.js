import React from "react";
import s from "styled-components";
import { useContainerDimensions } from "../ui/useContainerDimensions";
import {Subtitle} from "../ui/Typography";
import {ButtonInverted} from "../ui/Button";
import {TEXT_PRIMARY_INV} from "../utils/constants";
import getinvolved1 from "../images/getinvolved1.png";
import getinvolved2 from "../images/getinvolved2.png";

const Involvements = s.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 60px;
  justify-content: space-evenly;
`

const Involvement = s.div`
  border: 1px solid red; // temp to see bounds of the div
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`

export const GetInvolved = () => {
  const componentRef = React.useRef();
  const { width } = useContainerDimensions(componentRef);

  return (
    <div ref={componentRef}>
      <Subtitle fontColor={TEXT_PRIMARY_INV}>Get Involved</Subtitle>
      <Involvements>
        <Involvement>
          <img src={getinvolved1}/>
          <ButtonInverted href="" target="_blank" rel="noreferrer noopener">Sign up for our newsletter</ButtonInverted>
        </Involvement>
        <Involvement>
          <img src={getinvolved2}/>
          <ButtonInverted href="" target="_blank" rel="noreferrer noopener">Join a team</ButtonInverted>
        </Involvement>
      </Involvements>
    </div>
  );
};

