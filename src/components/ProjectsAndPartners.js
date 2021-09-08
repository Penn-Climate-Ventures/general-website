import React, { Component } from "react"
import s from "styled-components"
import {SectionHeader, TextP} from "./shared/Layout";
import {SubText} from "./shared/Typography";

// consulting
import BanyanInfrastructure from "../images/partners/banyanInfrastructure.png"
import CarbonInfinity from "../images/partners/carbonInfinity.png"
import ConEdison from "../images/partners/conEdison.png"
import CuriatiCollective from "../images/partners/curiatiCollective.png"
import PowerAdvocate from "../images/partners/powerAdvocate.png"

// internships
import ClimateBase from "../images/partners/climateBase.png"

const PartnersLayout = s.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto;
  
  @media (min-width: 475px) {
    grid-template-columns: auto auto;
  }
  
  @media (min-width: 992px) {
    grid-template-columns: auto auto auto;
  }
`

const Partner = ({imageSrc, name, desc, tall, wide}) => (
  <div style={{display: `flex`, flexDirection: `column`, height: 200 + `px`,
               justifyContent: `center`, alignItems: `center`}}>
    {wide &&
      <img src={imageSrc} alt={name} style={{display: `block`, width: 100 + `%`, height: `auto`}} />
    }
    {tall &&
      <img src={imageSrc} alt={name} style={{display: `block`, width: `auto`, height: 100 + `%`}} />
    }
    <TextP center style={{fontSize: 1 + `rem`, lineHeight: `1rem`, paddingTop: 10 + `px`}}>
      <i>{desc}</i>
    </TextP>
  </div>
)

export class ProjectsAndPartners extends Component {

  render() {

    return (
      <div>
        <SectionHeader>Fall 2021 Projects and Partners</SectionHeader>

        <TextP bold>Consulting</TextP>
        <PartnersLayout>
          <Partner imageSrc={BanyanInfrastructure} name="Banyan Infrastructure" wide
                   desc="Research into project finance and energy"/>
          <Partner imageSrc={ConEdison} name="Con Edison" wide
                   desc="Carbon capture + decarbonization of steam energy system"/>
          <Partner imageSrc={CuriatiCollective} name="Curiati Collective" tall
                   desc="Business development on circular economy"/>
          <Partner imageSrc={PowerAdvocate} name="PowerAdvocate" wide
                   desc="Assessing supply chain emissions"/>
          <Partner imageSrc={CarbonInfinity} name="CarbonInfinity" wide
                   desc="Direct air capture (DAC) factory planning + design"/>
        </PartnersLayout>

        <TextP bold>Internships</TextP>
        <PartnersLayout>
          <Partner imageSrc={ClimateBase} name="ClimateBase" wide
                   desc="Developer, Data Architect/Business Development"/>
        </PartnersLayout>

    <TextP>
          And many more such as Oasis Regenerative and The Sustainability Wiki with positions such
          as Software Engineering Associate and Business Development Associate!
        </TextP>

      </div>
    )
  }
}
