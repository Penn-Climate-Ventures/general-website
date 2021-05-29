import React from "react"
import s from "styled-components"
import { SubText, Text } from "./shared/Typography"

const LevelItem = s.div.attrs(() => ({
  className: "level-item has-text-left"
}))`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const Level = s.div`
  margin-top: 2vw;
`

const DonorsLayout = ({ className }) => (
  <div className={`container has-text-centered ${className}`}>
    <b><Text>This event could not have been possible without the support of:</Text></b>
    <Level className="level">
      <LevelItem>
        <Text>Penn Institutions</Text>
        <SubText>
          <a href="https://riskcenter.wharton.upenn.edu/">Wharton Risk Center</a>
          <br />
          <a href="https://www.whartonenergy.com/">Wharton Energy Network</a>
          <br />
          <a href="https://www.sp2.upenn.edu/">School of Social Policy & Practice</a>
        </SubText>
      </LevelItem>
      <LevelItem>
        <Text>Student Groups</Text>
        <SubText>
          <a href="https://www.climateleadersatpenn.com/">Climate Leaders @ Penn</a>
          <br />
          <a href="http://pennenvironmentalgroup.weebly.com/">Penn Environmental Group</a>
          <br />
          <a href="https://www.agribusiness-club.com/">Agribusiness Club</a>
        </SubText>
      </LevelItem>
    </Level>
  </div>
)

export const Donors = s(DonorsLayout)`
  margin-top: 10vw;
  margin-bottom: 10vw;
`