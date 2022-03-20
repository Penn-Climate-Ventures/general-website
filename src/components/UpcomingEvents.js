import React from "react";
import { useContainerDimensions } from "../ui/useContainerDimensions";
import {Subtitle, Text} from "../ui/Typography";

export const UpcomingEvents = () => {
  const componentRef = React.useRef();
  const { width } = useContainerDimensions(componentRef);

  return (
    <div ref={componentRef}>
      <Subtitle>Upcoming Events</Subtitle>
      {/* insert iframe with link to Google Calendar */}
      <Text>Coming soon, stay tuned!</Text>
    </div>
  );
};

