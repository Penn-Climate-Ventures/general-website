import React from "react";
import s from "styled-components";
import { BoxHeading, BoxColumn } from "./shared/BoxColumn";
import { SectionHeader } from "./shared/Layout";
import Button from "../components/shared/Button";
import { LIGHT_BLUE } from "../utils/constants";
import Carousel from "./shared/Carousel";
import { useContainerDimensions } from "./shared/useContainerDimensions";

const CommunityColumn = s(BoxColumn)`
  width: 450px;
  margin-left: auto;
  margin-right: auto;
`;

const CommunityText = s.p`
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const CommunityButton = s(Button)`
  font-size: 0.9rem;
  padding: 10px 15px;
  border: 2px solid ${LIGHT_BLUE};
  border-radius: 30px;
  width: 70%;
  z-index: 1;
  transition: all ease-in-out 0.15s;
`;

const CommunityLayout = () => {
  const componentRef = React.useRef();
  const { width } = useContainerDimensions(componentRef);

  return (
    <div ref={componentRef}>
      <SectionHeader left={"left"}>
        Stay Up to Date On All Things PCV
      </SectionHeader>
        <CommunityColumn center="true">
          <div>
            <BoxHeading>Subscribe to Our Newsletter</BoxHeading>
            <CommunityText>
              Sporadically sent out when we have interesting news and
              opportunities to share
            </CommunityText>
            <CommunityButton
              href="https://airtable.com/shrCCh7SJrYNsjeWT"
              rel="noreferrer noopener"
              target="_blank"
            >
              Sign Up
            </CommunityButton>
          </div>
        </CommunityColumn>
        {/*<BoxColumn center="true">*/}
        {/*  <div>*/}
        {/*    <BoxHeading>Subscribe to Prize Updates</BoxHeading>*/}
        {/*    <CommunityText>*/}
        {/*      Up to date news about the latest that's happening with our Prize*/}
        {/*      Competition.*/}
        {/*     </CommunityText>*/}
        {/*    <CommunityButton href="/">email</CommunityButton>*/}
        {/*  </div>*/}
        {/*</BoxColumn>*/}
    </div>
  );
};

export const Community = s(CommunityLayout)`
`;
