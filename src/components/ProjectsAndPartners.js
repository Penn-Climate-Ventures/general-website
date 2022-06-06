import React, { Component } from "react"
import s from "styled-components"
import {Subtitle, Text, UrlLink} from "../ui/Typography"

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

const PartnerName = s.h2`
  color: black;
  font-size: 1.25rem;
  line-height: 1.25rem;
  margin-bottom: 1.15rem;
  font-family: Georgia, serif;
  font-weight: bold;
`

const PartnerDesc = s(Text)`
  text-align: center;
  font-size: 1rem;
  line-height: 1rem;
  padding-top: 10px;
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
    <PartnerDesc><i>{desc}</i></PartnerDesc>
  </div>
)

const InternshipsLayout = s.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const InternshipCard = s.div`
  border-radius: ${({ round }) => ( round ? "10px" : "0")};
  box-shadow: 0 3px 15px 1px #00000016;
  padding: 30px 20px;
`

const Company = ({imageSrc, name}) => (
  <div>
    {imageSrc &&
      <img src={imageSrc} alt={name} style={{display: `block`}} />
    }
    {!imageSrc &&
      <PartnerName>{name}</PartnerName>
    }
  </div>
)

const InternshipList = s.ul`
`

const InfoLink = ({href}) => (
  <>
    <br/>
    <Text style={{marginBottom: 0}}><i>More info <UrlLink href={href}>here</UrlLink></i></Text>
  </>
)

export class ProjectsAndPartners extends Component {

  render() {

    return (
      <div>
        <Subtitle>Fall 2021 Projects and Partners</Subtitle>

        <Text bold>Consulting</Text>
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

        <Text bold>Internships</Text>
        <InternshipsLayout>
          <InternshipCard>
            <Company name="Andurand Capital"/>
            <InternshipList>
              <li>Investment Stock Pitch (2)</li>
            </InternshipList>
            <InfoLink href="https://docs.google.com/document/d/12KKaM731NcFlDgC78BLNfDYpBuNROto1CJGfFCh7mB4/edit?usp=sharing"/>
          </InternshipCard>
          <InternshipCard>
            <Company imageSrc={CarbonInfinity} name="Carbon Infinity"/>
            <InternshipList>
              <li>ML Intern for Material Discovery</li>
            </InternshipList>
            <InfoLink href="https://docs.google.com/document/d/1f1YeY4vg2cYWaPWLCpBPoIU9EOqwQeS7/edit"/>
          </InternshipCard>
          <InternshipCard>
            <Company imageSrc={ClimateBase} name="ClimateBase"/>
            <InternshipList>
              <li>Developer</li>
              <li>Data Architect/Business Development</li>
            </InternshipList>
            <InfoLink href="https://docs.google.com/document/d/1npCrjjOOUxpP6ppD4f0i7TlOL0Vz1vdqUo2KXCxkYeE/edit?usp=sharing"/>
          </InternshipCard>
          <InternshipCard>
            <Company name="Oasis Regenerative"/>
            <InternshipList>
              <li>Creative Development Associate</li>
              <li>Strategic Development Associate</li>
              <li>Hardware Engineering Associate</li>
              <li>Software Engineering Associate</li>
              <li>Life SciencesAssociate</li>
            </InternshipList>
            <InfoLink href="https://docs.google.com/document/d/1wDn01SPb6pk_Vby0uRHoAWz-FfiPXvnynM3XroDHc9Q/edit?usp=sharing"/>
          </InternshipCard>
          <InternshipCard>
            <Company name="The Sustainability Wiki"/>
            <InternshipList>
              <li>Data Architect/Business Development</li>
              <li>Community Dev/Social Media Marketing</li>
              <InfoLink href="https://docs.google.com/document/d/1SMZIi_XKCre_dMEt88N6GnUCgJ8F9VbkQgdKvo6ICX4/edit?usp=sharing"/>
            </InternshipList>
          </InternshipCard>
        </InternshipsLayout>

      </div>
    )
  }
}
