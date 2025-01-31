import React from "react"
import nicholasKwokImg from "../images/headshots/nicholas_kwok.png";
import DLImg from "../images/headshots/daniel_lapinski.png";
import ShSImg from "../images/headshots/shaurya_singhi.png";
import LvKImg from "../images/headshots/lukas_koch.png";
import AYImg from "../images/headshots/angela_ye.png";
import CNImg from "../images/headshots/chloe_ng.png";
import SMImg from "../images/headshots/sandro_mocciolo.png";
import ESImg from "../images/headshots/keya.png";
import KAImg from "../images/headshots/karam_alkaissy.png";
import JLImg from "../images/headshots/jeff_li.png";
import BHImg from "../images/headshots/brianna_hess.png";
import KUImg from "../images/headshots/kana_urigame.png";
import ADImg from "../images/headshots/anmol_dash.png";
import {GridContainer} from "../ui/layout"
import {CenteredSubtitle} from "../ui/Typography"
import Tile from "../ui/Tile"


const articleItems = [
  {
    imgLink: nicholasKwokImg,
    title: "Executive President, CAS '27",
    publisher: "Nicholas Kwok",
    date: "CAS '27"
  },
  {
    imgLink: ShSImg,
    title: "Co-President",
    publisher: "Shaurya Singhi",
    date: "Wharton '26"
  },{
    imgLink: LvKImg,
    title: "Co-Director of Consulting",
    publisher: "Lukas von Koch",
    date: "Wharton '26"
  },{
    imgLink: AYImg,
    title: "Co-Director of Consulting",
    publisher: "Angela Ye",
    date: "CAS '26"
  },{
    imgLink: CNImg,
    title: "Co-Director of Consulting",
    publisher: "Chloe Ng",
    date: "SEAS '26 CAS '26"
  },{
    imgLink: SMImg,
    title: "Director of Policy",
    publisher: "Sandro Mocciolo",
    date: "CAS '27"
  },{
    imgLink: ESImg,
    title: "Director of Marketing",
    publisher: "Keya Krishna",
    date: "CAS '28"
  },{
    imgLink: KAImg,
    title: "Director of Events",
    publisher: "Karam Alkaissy",
    date: "CAS '27"
  },{
    imgLink: JLImg,
    title: "Co-Director of Prize",
    publisher: "Jeff Li",
    date: "CAS '27"
  },{
    imgLink: BHImg,
    title: "Co-Director of Prize",
    publisher: "Brianna Hess",
    date: "CAS '27"
  },{
    imgLink: KUImg,
    title: "Co-Director of Prize",
    link: "https://www.thedp.com/article/2022/03/climate-ventures-competition-prize-student-groups",
    publisher: "Kana Unigame",
    date: "CAS '27"
  },{
    imgLink: ADImg,
    title: "Director of Web Development",
    publisher: "Anmol Dash",
    date: "CAS '26"
  },
  
]


export const News = () => {
  return (
    <>

      <GridContainer childWidth="150">
          { articleItems.map( article => (
            <Tile imgLink={article.imgLink}
                  topText={article.publisher}
                  midText={article.title}
                  botText={article.date} />
          )) }
      </GridContainer>
      
    </>
  )
}
