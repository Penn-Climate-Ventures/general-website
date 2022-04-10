import React from "react"
import s from "styled-components"
import Carousel from "../ui/Carousel"
import { useContainerDimensions } from "../ui/useContainerDimensions"
import Tile from "../ui/Tile";
import {Subtitle} from "../ui/Typography";


const articleItems = [
  {
    imgLink: "https://snworksceo.imgix.net/dpn/9d04e1df-97c6-4dec-b9f3-0d16aa1ea004.sized-1000x1000.jpg?w=1000",
    title: "Penn Climate Ventures hosts second annual competition ",
    link: "https://www.thedp.com/article/2022/03/climate-ventures-competition-prize-student-groups",
    publisher: "Daily Pennsylvanian",
    date: "Mar 28, 2022"
  },
  {
    imgLink: "https://snworksceo.imgix.net/dpn/17408c7b-dbab-4f87-8ede-db45b8933a46.sized-1000x1000.jpg?w=800",
    title: "Penn Climate Ventures holds inaugural environmental tech startup competition",
    link: "https://www.thedp.com/article/2021/04/penn-climate-ventures-impossible-foods",
    publisher: "Daily Pennsylvanian",
    date: "Apr 26, 2021"
  },
  {
    imgLink: "https://static01.nyt.com/images/2021/02/24/opinion/24chatterjee/24chatterjee-facebookJumbo.jpg?year=2021&h=550&w=1050&s=3318cdf5414524ac4cfb0b6bd9f71fe4cdc13d13a77e290b369e4e2bf3181968&k=ZQJBKqZ0VN",
    title: "How We Can Better Predict Weather Catastrophes",
    link: "https://www.nytimes.com/2021/02/25/opinion/weather-forecast-climate-change.html",
    publisher: "New York Times",
    date: "Feb 25, 2021"
  },
  {
    imgLink: "https://snworksceo.imgix.net/dpn/4ad60ade-ed53-436a-bb12-cd235b84bfd5.sized-1000x1000.jpg?w=800",
    title: "New student group looks to design Penn course on business solutions to climate crisis",
    link: "https://www.thedp.com/article/2021/01/penn-climate-ventures-innovation-environment-sustainable",
    publisher: "Daily Pennsylvanian",
    date: "Jan 29, 2021"
  },
]

const FlexBox = s.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 45px;
`

const NewsLayout = () => {
  const componentRef = React.useRef()
  const { width } = useContainerDimensions(componentRef)

  return (
    <div ref={componentRef}>
      <Subtitle left={"left"}>In the News</Subtitle>
      <FlexBox>
          { articleItems.map( article => (
            <Tile imgLink={article.imgLink}
                  topText={article.publisher}
                  midText={article.title}
                  midLink={article.link}
                  botText={article.date} />
          )) }
      </FlexBox>
    </div>
  )
}


export const News = s(NewsLayout)`
`
