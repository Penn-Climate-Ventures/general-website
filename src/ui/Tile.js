import React from "react"
import s from "styled-components"
import { LIGHT_BLUE } from "../utils/constants"
import {Text, UrlLink} from "./Typography"


export const TileBox = s.div`
font-size: 0.9rem;
line-height: 1rem;
padding: 5px 5px;
border-radius: 10px;
box-shadow: 0 3px 15px 1px #00000016;
text-align: center;
width: 200px;
height: 90%; // Increase height to accommodate larger images
margin: 5px; // Reduce margin between tiles
overflow: hidden; // Ensures any overflow content is hidden
`

const TileImage = s.img`
width: 100%;
height: auto; // Maintain aspect ratio
max-height: 60%; // Increase height for bigger images
object-fit: cover; // Ensures the image covers the area
border-radius: 10px 10px 0 0; // Rounds the top corners to match the TileBox
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
