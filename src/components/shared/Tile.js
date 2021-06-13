import React from 'react'
import s from "styled-components"
import { GREEN, STEEL_BLUE } from "../../utils/constants"


export const TileBox = s.div`
  font-size: 0.85rem;
  line-height: 0.85rem;
  padding: 15px 10px;
  border: 2px solid ${STEEL_BLUE};
  border-radius: 10px;
  text-align: center;
  width: 150px;
`

const TileTopText = s.p`
  color: ${STEEL_BLUE};
  font-weight: bold;
`

const TileMidText = s.a`
  color: #05052C;
  font-weight: bold;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
`

const TileBotText = s.p`
  color: ${GREEN};
  font-weight: bold;
`


const Tile = ({ topText, midText, botText }) => (
    <TileBox>
        <TileTopText>{( topText )}</TileTopText>
        <TileMidText>{( midText )}</TileMidText>
        <TileBotText>{( botText )}</TileBotText>
    </TileBox>
)

export default Tile
