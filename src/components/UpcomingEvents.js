import React from "react";
import s from "styled-components";
import { useContainerDimensions } from "./shared/useContainerDimensions";
import {Subtitle, Text, Title} from "./shared/Typography";

export const UpcomingEvents = () => {
  const componentRef = React.useRef();
  const { width } = useContainerDimensions(componentRef);

  return (
    <div ref={componentRef}>
      <Subtitle>Upcoming Events</Subtitle>
      {/* insert iframe with link to Google Calendar */}
    </div>
  );
};

