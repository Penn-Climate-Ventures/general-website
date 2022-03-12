import React from 'react'
import s from "styled-components"
import { LIGHT_BLUE } from "../utils/constants"
import { Text} from "./Typography"


export const TileBox = s.div`
  font-size: 0.9rem;
  line-height: 1rem;
  padding: 15px 10px;
  border-radius: 10px;
  box-shadow: 0 3px 15px 1px #00000016;
  text-align: center;
  width: 150px;
`

const TileTopText = s(Text)`
  color: ${LIGHT_BLUE};
  text-align: center;
  font-weight: 500;
`

const TileMidText = s.p`
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
`
const TileMidLink= s.a`
  color: black;
  font-weight: 600;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
`

const TileBotText = s.p`
  color: ${LIGHT_BLUE};
  font-weight: bold;
`


const Tile = ({ topText, midText, midLink, botText }) => (
  <TileBox>
    <TileTopText>{( topText )}</TileTopText>
    {midLink &&
    <TileMidLink href={midLink}>{( midText )}</TileMidLink>
    }
    {!midLink &&
    <TileMidText>{( midText )}</TileMidText>
    }
    <TileBotText>{( botText )}</TileBotText>
  </TileBox>
)

export default Tile
