import React from 'react'
import s from "styled-components"
import { GREEN, STEEL_BLUE } from "../../utils/constants"
import { TextP } from "./Layout"


export const TileBox = s.div`
  font-size: 0.9rem;
  line-height: 1rem;
  padding: 15px 10px;
  border-radius: 10px;
  box-shadow: 0 5px 10px 1px #ddd;
  text-align: center;
  width: 150px;
`

const TileTopText = s(TextP)`
  color: ${STEEL_BLUE};
  text-align: center;
  font-weight: bold;
`

const TileMidText = s.a`
  color: #05052C;
  font-weight: 600;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  
  &:hover {
    text-decoration: underline;
  }
`

const TileBotText = s.p`
  color: ${GREEN};
  font-weight: bold;
`


const Tile = ({ topText, midText, midLink, botText }) => (
    <TileBox>
        <TileTopText>{( topText )}</TileTopText>
        <TileMidText href={midLink}>{( midText )}</TileMidText>
        <TileBotText>{( botText )}</TileBotText>
    </TileBox>
)

export default Tile
