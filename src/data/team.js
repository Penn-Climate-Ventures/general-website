import React from "react";
import s from "styled-components"

// import AliceFeng from "../images/headshots/AliceFeng.jpg"
// import AndrewYu from "../images/headshots/AndrewYu.jpg"
// import EmmaShockley from "../images/headshots/EmmaShockley.jpg"
// import IziLee from "../images/headshots/IziLee.jpg"
// import NicoleChau from "../images/headshots/NicoleChau.jpg"
// import PranaviAgrawal from "../images/headshots/PranaviAgrawal.jpg"
// import PreetShah from "../images/headshots/PreetShah.jpg"
import RyomaHarris from "../images/headshots/RyomaHarris.jpg"

const Headshot = s.img`
  height: ${({ size }) => ( size ? size : "120px")};
  width: ${({ size }) => ( size ? size : "120px")};
  border-radius: 50%;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`
// TODO: Add all team names (Sam)
export const teamNames = [
  "Dev",
  "Prize",
  "Web Dev",
]

export const teamData = [
  {
    name: "Ryoma Harris",
    headshot: <Headshot src={RyomaHarris} alt="Ryoma Harris"/>,
    year: "SEAS '24",
    student: "Undergraduate",
    roles: ["Prize Web Dev", "Web Dev Lead"],
    teams: ["Dev", "Prize", "Web Dev"],
  },
  // TODO: For each person in PCV, do the following:
  //    1. Download the image into the headshots folder
  //    2. Import the image into this file
  //    3. Add the JSON for the person into this list (example for Ryoma Harris above)
  //        - Follow the same format as in the example above
  //        - Make sure spelling is correct, particularly for roles and teams
  //    4. Don't forget the comma at the end!
]

// TODO: GRAPH QL SOLUTION
