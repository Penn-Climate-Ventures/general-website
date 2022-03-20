import React from 'react'
import s from "styled-components"
import { LIGHT_BLUE } from "../utils/constants"
import {Text, UrlLink} from "./Typography"


export const TileBox = s.div`
  font-size: 0.9rem;
  line-height: 1rem;
  padding: 15px 10px;
  border-radius: 10px;
  box-shadow: 0 3px 15px 1px #00000016;
  text-align: center;
  width: 300px;
  height: 100%;
`

const TileImage = s.img`
  width: 100%;
`

const TileTopText = s(Text)`
  color: ${LIGHT_BLUE};
  text-align: center;
  font-weight: 500;
`

const TileMidText = s(Text)`
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
`
const TileMidLink= s(UrlLink)`
  color: var(--c-text-primary);
  font-weight: 600;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
`

const TileBotText = s.p`
  color: var(--c-text-primary);
`


const Tile = ({ imgLink, topText, midText, midLink, botText }) => (
  <TileBox>
    {imgLink &&
      <TileImage src={imgLink} alt={topText}/>
    }
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
