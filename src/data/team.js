import React from "react";
import s from "styled-components"

import AliceFeng from "../images/headshots/AliceFeng.jpg"
import AndrewYu from "../images/headshots/AndrewYu.jpg"
import EmmaShockley from "../images/headshots/EmmaShockley.jpg"
import IziLee from "../images/headshots/IziLee.jpg"
import NicoleChau from "../images/headshots/NicoleChau.jpg"
import PranaviAgrawal from "../images/headshots/PranaviAgrawal.jpg"
import PreetShah from "../images/headshots/PreetShah.jpg"
import RyomaHarris from "../images/headshots/RyomaHarris.jpg"

const Headshot = s.img`
  height: ${({ size }) => ( size ? size : "120px")};
  width: ${({ size }) => ( size ? size : "120px")};
  border-radius: 50%;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`

export const teamData = [
  {
    name: "Andrew Yu",
    headshot: <Headshot src={AndrewYu} alt="Andrew Yu"/>,
    linkedin: "Empty Linkedin",
    roles: ["Co-Director"],
    teams: ["Dev"],
    bio: "Hello!"
  },
  {
    name: "Alice Feng",
    headshot: <Headshot src={AliceFeng} alt="Alice Feng"/>,
    linkedin: "Empty Linkedin",
    roles: ["Prize Lead"],
    teams: ["Prize"],
    bio: "Hello!"
  },
  {
    name: "Emma Shockley",
    headshot: <Headshot src={EmmaShockley} alt="Emma Shockley"/>,
    linkedin: "Empty Linkedin",
    roles: ["People Ops"],
    teams: ["Dev"],
    bio: "Hello!"
  },
  {
    name: "Izi Lee",
    headshot: <Headshot src={IziLee} alt="Izi Lee"/>,
    linkedin: "Empty Linkedin",
    roles: ["Social Chair"],
    teams: ["Dev"],
    bio: "Hello!"
  },
  {
    name: "Nicole Chau",
    headshot: <Headshot src={NicoleChau} alt="Nicole Chau"/>,
    linkedin: "Empty Linkedin",
    roles: ["Prize Design", "Prize Web Dev"],
    teams: ["Design", "Dev", "Prize", "Web"],
    bio: "Hello!"
  },
  {
    name: "Pranavi Agrawal",
    headshot: <Headshot src={PranaviAgrawal} alt="Pranavi Agrawal"/>,
    linkedin: "Empty Linkedin",
    roles: ["Branding / Marketing Lead"],
    teams: ["Dev", "Marketing"],
    bio: "Hello!"
  },
  {
    name: "Preet Shah",
    headshot: <Headshot src={PreetShah} alt="Preet Shah"/>,
    linkedin: "Empty Linkedin",
    roles: ["Internal Dev", "People Ops"],
    teams: ["Dev"],
    bio: "Hello!"
  },
  {
    name: "Ryoma Harris",
    headshot: <Headshot src={RyomaHarris} alt="Ryoma Harris"/>,
    linkedin: "Empty Linkedin",
    roles: ["Prize Web Dev", "Web Dev Lead"],
    teams: ["Dev", "Prize", "Web"],
    bio: "Hello!"
  },
]
