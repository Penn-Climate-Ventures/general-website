import React from "react"
import HCImg from "../images/headshots/helen_copple.png";
import AYImg from "../images/headshots/angela_ye.png";
import ManyaTiwari from "../images/headshots/manya_tiwari.png";
import KAImg from "../images/headshots/karam_alkaissy.png";
import BHImg from "../images/headshots/brianna_hess.png";
import JeffreyWang from "../images/headshots/jeffrey_wang.jpg";
import GeorgePopovici from "../images/headshots/george_popovici.png";
import BorisChen from "../images/headshots/boris_chen.png";
import JoeyWu from "../images/headshots/joey_wu.png";
import KaseyLee from "../images/headshots/kasey_lee.png";
import SiyonaSingh from "../images/headshots/siyona_singh.png";
import {GridContainer} from "../ui/layout"
import {CenteredSubtitle} from "../ui/Typography"
import Tile from "../ui/Tile"



const articleItems = [
  {
    imgLink: BHImg,
    title: "Co-President",
    publisher: "Brianna Hess",
    email:"hesslb@sas.upenn.edu",
    date: "CAS"
  },{
    imgLink: KAImg,
    title: "Co-President",
    publisher: "Karam Alkaissy",
    email:"alkaissy@seas.upenn.edu",
    date: "SEAS"
  },{
    imgLink: AYImg,
    title: "Co-Director of Consulting",
    publisher: "Angela Ye",
    email:"angelaye@sas.upenn.edu",
    date: "CAS"
  },{
    imgLink: ManyaTiwari,
    title: "Co-Director of Consulting",
    publisher: "Manya Tiwari",
    email:"angelaye@sas.upenn.edu",
    date: "CAS"
  },{
    imgLink: HCImg,
    title: "Director of Operations",
    publisher: "Helen Copple",
    email:"coppleh@sas.upenn.edu",
    date: "CAS"
  },{
    imgLink: JeffreyWang,
    title: "Co-Director of Prize",
    publisher: "Jeffrey Wang",
    email:"jgw369@seas.upenn.edu",
    date: "CAS"
  },{
    imgLink: GeorgePopovici,
    title: "Co-Director of Prize",
    publisher: "George Popovici",
    email:"popovici@wharton.upenn.edu",
    date: "Wharton"
  },{
    imgLink: BorisChen,
    title: "Co-Director of Prize",
    publisher: "Boris Chen",
    email:"chenbor@wharton.upenn.edu",
    date: "Wharton"
  },{
    imgLink: JoeyWu,
    title: "Director of Marketing",
    publisher: "Joey Wu",
    email:"joeyw@seas.upenn.edu",
    date: "SEAS"
  },{
    imgLink: KaseyLee,
    title: "Director of Policy",
    publisher: "Kasey Lee",
    email:"kaseylee@sas.upenn.edu",
    date: "SAS"
  },{
    imgLink: SiyonaSingh,
    title: "Director of External",
    publisher: "Siyona Singh",
    email:"siyona@wharton.upenn.edu",
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
