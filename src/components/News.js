import React from "react"
import KaseyLee from "../images/headshots/kasey_lee.jpg";
import GeorgePopovici from "../images/headshots/george_popovici.jpg";
import MargotSheridan from "../images/headshots/margot_sheridan.jpg";
import LailaBapna from "../images/headshots/laila_bapna.jpg";
import BridgetteWells from "../images/headshots/bridgette_wells.png";
import LaylaNazif from "../images/headshots/layla_nazif.jpg";
import DayliaLian from "../images/headshots/daylia_lian.jpg";
import HarrisonTang from "../images/headshots/harrison_tang.jpg";
import {GridContainer} from "../ui/layout"
import {CenteredSubtitle} from "../ui/Typography"
import Tile from "../ui/Tile"



const articleItems = [
  {
    imgLink: KaseyLee,
    title: "Co-President",
    publisher: "Kasey Lee",
    email:"kaseylee@sas.upenn.edu",
    date: "CAS"
  },{
    imgLink: GeorgePopovici,
    title: "Co-President",
    publisher: "George Popovici",
    email:"popovici@wharton.upenn.edu",
    date: "Wharton"
  },{
    imgLink: MargotSheridan,
    title: "Director of Marketing",
    publisher: "Margot Sheridan",
    email:"margot28@sas.upenn.edu",
    date: "CAS"
  },{
    imgLink: LailaBapna,
    title: "Director of Ecoventure",
    publisher: "Laila Bapna",
    email:"bapna1@sas.upenn.edu",
    date: "CAS"
  },{
    imgLink: BridgetteWells,
    title: "Director of Events",
    publisher: "Bridgette Wells",
    email:"bvwells@sas.upenn.edu",
    date: "CAS"
  },{
    imgLink: LaylaNazif,
    title: "Director of Policy",
    publisher: "Layla Nazif",
    email:"laylan@sas.upenn.edu",
    date: "CAS"
  },{
    imgLink: DayliaLian,
    title: "Director of Consulting",
    publisher: "Daylia Lian",
    email:"daylian@sas.upenn.edu",
    date: "CAS"
  },{
    imgLink: HarrisonTang,
    title: "Director of Consulting",
    publisher: "Harrison Tang",
    email:"ht118@wharton.upenn.edu",
    date: "Wharton"
  }
]



export const News = () => {
  return (
    <>
      <GridContainer childWidth="150">
        {articleItems.map(article => (
          <Tile
            imgLink={article.imgLink}
            topText={article.publisher}
            midText={article.title}
            botText={article.date}
            email={article.email}
          />
        ))}
      </GridContainer>
    </>
  );
};
