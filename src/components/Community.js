import React from "react";
import s from "styled-components";
import { BoxHeading, BoxColumn } from "./shared/BoxColumn";
import Button from "../components/shared/Button";
import { LIGHT_BLUE } from "../utils/constants";
import { useContainerDimensions } from "./shared/useContainerDimensions";
import {Subtitle, Text} from "./shared/Typography";

const CommunityColumn = s(BoxColumn)`
  width: 450px;
  margin-left: auto;
  margin-right: auto;
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
      <Subtitle>
        Stay Up to Date On All Things PCV
      </Subtitle>
        <CommunityColumn center="true">
          <div>
            <BoxHeading>Subscribe to Our Newsletter</BoxHeading>
            <Text>
              Sporadically sent out when we have interesting news and
              opportunities to share
            </Text>
            <CommunityButton
              href="https://airtable.com/shrCCh7SJrYNsjeWT"
              rel="noreferrer noopener"
              target="_blank"
            >
              Sign Up
            </CommunityButton>
          </div>
        </CommunityColumn>
    </div>
  );
};

export const Community = s(CommunityLayout)`
`;
