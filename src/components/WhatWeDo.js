import React from "react";
import s from "styled-components";

import {CenteredSubtitle, Text, UrlLink} from "../ui/Typography"

import {LIGHT_BLUE, TEXT_PRIMARY_INV} from "../utils/constants"
import whatwedo1 from "../images/whatwedo1.png"
import whatwedo2 from "../images/whatwedo2.png"
import whatwedo3 from "../images/whatwedo3.png"


const DoWrapper = s.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 60px;
  row-gap: 60px;
  justify-content: space-evenly;
`

const DoBox = s.div`
  background: var(--c-bg-0);
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 15px 30px 30px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.2);
  }
`

const DoLabel = s.div`
  background: var(--c-bg-0);
  border-radius: 30px;
  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.2);
  padding: 3px 15px;
  transform: translateY(-2rem);
  
  & > * {
    line-height: 0px;
  }
`

const DoImage = s.img`
  height: 90px;
  width: 90px;
`

export const WhatWeDo = () => {
  return (
    <div color={LIGHT_BLUE}>
      <CenteredSubtitle fontColor={TEXT_PRIMARY_INV}>What We Do</CenteredSubtitle>
      <DoWrapper>
        <DoBox>
          <DoLabel><Text><UrlLink href="/class">Workshops</UrlLink></Text></DoLabel>
          <DoImage src={whatwedo1}/>
          {/*<Text>Brief description</Text>*/}
        </DoBox>
        <DoBox>
          <DoLabel><Text><UrlLink href="/prize">Competitions</UrlLink></Text></DoLabel>
          <DoImage src={whatwedo2}/>
          {/*<Text>Brief description</Text>*/}
        </DoBox>
        <DoBox>
          <DoLabel><Text><UrlLink href="/fellowships">Fellowships</UrlLink></Text></DoLabel>
          <DoImage src={whatwedo3}/>
          {/*<Text>Brief description</Text>*/}
        </DoBox>
      </DoWrapper>
    </div>
  );
};
