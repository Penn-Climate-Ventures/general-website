import {FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import React from "react";

export const navLinks = [
  {
    linkName: "Membership",
    url: "/membership"
  },
  // {
  //   linkName: "Calendar",
  //   url: "/calendar"
  // },
  {
    linkName: "Class",
    url: "/class"
  },
  {
    linkName: "Fellowships",
    url: "/fellowships"
  },
  {
    linkName: "Prize",
    url: "/prize"
  },
  {
    linkName: "Collaborate",
    url: "/collaborate"
  },
]

export const smLinks = [
  {
    icon: <FaInstagram fontSize={'20px'}/>,
    url: "https://www.instagram.com/pennclimateventures/"
  },
  {
    icon: <FaFacebookF fontSize={'20px'}/>,
    url: "https://www.facebook.com/pennclimateventures/"
  },
  {
    icon: <FaLinkedinIn fontSize={'20px'}/>,
    url: "https://www.linkedin.com/company/penn-climate-ventures/"
  },
]
