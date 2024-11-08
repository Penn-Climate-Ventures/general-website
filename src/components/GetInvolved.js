import React from "react"
import s from "styled-components"

import {CenteredSubtitle} from "../ui/Typography"
import {ButtonInverted} from "../ui/Button"

import {TEXT_PRIMARY_INV} from "../utils/constants"
import getinvolved1 from "../images/getinvolved1.png"
import getinvolved2 from "../images/getinvolved2.png"


const InvolvementWrapper = s.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 60px;
  justify-content: space-evenly;
`

const Involvement = s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
`

const InvolvementImage = s.img`
  height: auto;
  width: ${({ width }) => width || `90px`};
`

export const GetInvolved = () => {
  return (
    <>
    <CenteredSubtitle fontColor={TEXT_PRIMARY_INV} fontSize="48px">
      Get Involved
    </CenteredSubtitle>
    <InvolvementWrapper>
      <Involvement>
        <InvolvementImage src={getinvolved1}/>
        <ButtonInverted href="" target="_blank" rel="noreferrer noopener">Sign up for our newsletter!</ButtonInverted>
      </Involvement>
      <Involvement>
        <InvolvementImage src={getinvolved2} width="100px"/>
        <ButtonInverted href="" target="_blank" rel="noreferrer noopener">Join a team</ButtonInverted>
      </Involvement>
    </InvolvementWrapper>
  </>
  );
};

