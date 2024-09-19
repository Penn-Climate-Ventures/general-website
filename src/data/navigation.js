import React from "react"
import s from "styled-components"

import Facebook from "../images/icons/facebook.png"
import Instagram from "../images/icons/instagram.png"
import LinkedIn from "../images/icons/linkedin.png"


export const navLinks = [
  {
    linkName: "Get Involved",
    url: "/get-involved"
  },
  // {
  //   linkName: "Our Team",
  //   url: "/our-team"
  // },
  {
    linkName: "Committees",
    url: "/consulting"
  },
  {
    linkName: "Internships",
    url: "/internships"
  },
  {
    linkName: "Prize",
    url: "/prize"
  },
  {
    linkName: "Collaborate",
    url: "/collaborate"
  },
  {
    linkName: "Blog",
    url: "/blog"
  },
  // {
  //   linkName: "About",
  //   url: "/about"
  // }
]

const SocialMedia = s.img`
  height: 1.25rem;
  object-fit: cover;
`

export const smLinks = [
  {
    icon: <SocialMedia src={Instagram} alt="Instagram"/>,
    url: "https://www.instagram.com/pennclimateventures/"
  },
  {
    icon: <SocialMedia src={Facebook} alt="Facebook"/>,
    url: "https://www.facebook.com/pennclimateventures/"
  },
  {
    icon: <SocialMedia src={LinkedIn} alt="LinkedIn"/>,
    url: "https://www.linkedin.com/company/penn-climate-ventures/"
  },
]
