import React from "react";
import s from "styled-components"

import {CenteredSubtitle} from "../ui/Typography"


const CalendarWrapper = s.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`

export const Calendar = () => {
  return (
    <div>
      <CenteredSubtitle>Upcoming Events</CenteredSubtitle>
      <CalendarWrapper>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showCalendars=1&showPrint=0&title=Penn%20Climate%20Ventures&src=ZDVobTczNWdsNmM1dTF1Zzh2Ym1wZ2RtbG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23#217CFF"
          css="border-width:0" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
      </CalendarWrapper>
    </div>
  );
};

