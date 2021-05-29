import React from "react"
import s from "styled-components"
import { Title, Subtitle } from "./shared/Typography"

const LevelItem = s.div.attrs(() => ({
  className: "level-item has-text-centered"
}))`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const Level = s.div`
  margin-top: 2vw;
`

const PartnersLayout = React.forwardRef(({ className }, ref) => (
  <div ref={ref} className={`container is-fluid has-text-centered ${className}`}>
  </div>
))

export const Partners = s(PartnersLayout)`
  margin-top: 10vw;
`