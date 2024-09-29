import React from "react"

import {GridContainer} from "../ui/layout"
import {CenteredSubtitle} from "../ui/Typography"
import Tile from "../ui/Tile"


const articleItems = [
  {
    imgLink: "src/images/headshots/nicholas_kwok.png",
    title: "Executive President, CAS '27",
    publisher: "Nicholas Kwok",
    date: "CAS '27"
  },
  {
    imgLink: "src/images/headshots/nicholas_kwok.png",
    title: "Co-President and Director of Operations",
    publisher: "Daniel Lapinski",
    date: "CAS '27"
  },{
    imgLink: "src/images/headshots/shaurya_singhi.png",
    title: "Vice President",
    publisher: "Shaurya Singhi",
    date: "CAS '27"
  },{
    imgLink: "src/images/headshots/lukas_koch.png",
    title: "Co-Director of Consulting",
    publisher: "Lukas von Koch",
    date: "Wharton '26"
  },{
    imgLink: "src/images/headshots/angela_ye.png",
    title: "Co-Director of Consulting",
    publisher: "Angela Ye",
    date: "CAS '26"
  },{
    imgLink: "src/images/headshots/chloe_ng.png",
    title: "Co-Director of Consulting",
    publisher: "Chloe Ng",
    date: "SEAS '26 CAS '26"
  },{
    imgLink: "src/images/headshots/sandro_mocciolo.png",
    title: "Director of Policy",
    publisher: "Sandro Mocciolo",
    date: "CAS '27"
  },{
    imgLink: "src/images/headshots/emma_shockley.png",
    title: "Director of Marketing",
    publisher: "Emma Shockley",
    date: "CAS '25"
  },{
    imgLink: "src/images/headshots/karam_alkaissy.png",
    title: "Director of Operations",
    publisher: "Karam Alkaissy",
    date: "CAS '27"
  },{
    imgLink: "src/images/headshots/nicholas_kwok.png",
    title: "Co-Director of Prize",
    publisher: "Jeff Li",
    date: "CAS '27"
  },{
    imgLink: "src/images/headshots/nicholas_kwok.png",
    title: "ECo-Director of Prize",
    publisher: "Brianna Hess",
    date: "CAS '27"
  },{
    imgLink: "src/images/headshots/nicholas_kwok.png",
    title: "Co-Director of Prize",
    link: "https://www.thedp.com/article/2022/03/climate-ventures-competition-prize-student-groups",
    publisher: "Kana Unigame",
    date: "CAS '27"
  },
  
]


export const News = () => {
  return (
    <>
      <CenteredSubtitle left={"left"}>In the News</CenteredSubtitle>
      <GridContainer childWidth="200">
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
