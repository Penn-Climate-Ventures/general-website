import React from "react"
import s from "styled-components"

import SEO from "../components/seo"
import {Navbar} from "../components/Navbar"
import {Footer} from "../components/Footer"
import {Title} from "./Typography"


export const Container = s.div`
  background-color: ${props => (props.color ? props.color : `none`)};
  padding: 2rem 1rem;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  
  @media (min-width: 576px) {
    max-width: 540px;
  }
  
  @media (min-width: 768px) {
    max-width: 720px;
  }
  
  @media (min-width: 992px) {
    max-width: 960px;
  }
  
   ${props => (props.wide || props.superwide
    ? `
      @media (min-width: 1250px) {
        max-width: 1200px;
      }
      
      @media (min-width: 1500px) {
        max-width: 1440px;
      }`
    : ``
)} 

  ${props => (props.superwide
    ? `
      @media (min-width: 1750px) {
        max-width: 1700px;
      }
      
      @media (min-width: 2000px) {
        max-width: 1950px;
      }`
    : ``
)}
`


export const WaveWrapper = s.div`
  display: inline-block;
  position: relative;
  width: 100%;
  vertical-align: middle;
  overflow: hidden;
  margin-bottom: -5px;
`

export const Wave = ({color, rotation}) => {
  return (
    <WaveWrapper color={color} style={{transform: "scale(" + rotation + ")"}}>
      <svg viewBox="0 0 500 70" preserveAspectRatio="xMinYMin meet">
        <path d="M0,20 C100,70 300,0 500,20 L500,00 L0,0 Z" style={{stroke: "none", fill: color}}></path>
      </svg>
    </WaveWrapper>
  )
}

const FancyWave = () => {
  return (
    <div style={{marginTop: -10}}>
      <svg viewBox="0 0 500 80">
        <path fill={"var(--c-accent-primary)"} fill-opacity="1" d="M0.00,19.98 C160.27,74.97 219.52,18.08 500.00,23.98 L500.00,0.00 L0.00,0.00 Z"></path>
        <path fill={"var(--c-accent-primary)"} fill-opacity="0.6" d="M-1.12,48.32 C115.69,30.55 393.34,81.87 501.69,8.83 L500.00,0.00 L0.00,0.00 Z"></path>
        <path fill={"var(--c-accent-primary)"} fill-opacity="0.3" d="M0.00,34.37 C150.43,66.60 376.97,59.03 501.12,40.28 L500.00,0.00 L0.00,0.00 Z"></path>
      </svg>
    </div>
  )
}

export const WavyLayout = (props) => {
  return (
    <>
    <Wave color={props.color} rotation={-1}/>
    <div style={{backgroundColor: props.color, overflow: "hidden"}}>
      <Container>
        {props.children}
      </Container>
    </div>
    <Wave color={props.color}/>
    </>
  )
}

export const GridContainer = s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => (props.childWidth
  ? props.childWidth : 300)}px, max-content));
  grid-gap: 60px 45px;
  justify-content: center;
  padding: initial;
  @media (max-width: 1100px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`

const HeaderWrapper = s.div`
  padding: 120px 0 0 0;
  background-color: var(--c-accent-primary);
  overflow: hidden;
`

const MainWrapper = s.main`
  min-height: 40vh;
`

export const PageLayout = (props) => {
  return (
    <>
      <SEO title={props.title} defer={false} />
      <Navbar/>

      <HeaderWrapper>
        <Title fontColor="var(--c-text-primary-inverted)">{props.title}</Title>
      </HeaderWrapper>

      <FancyWave/>

      <MainWrapper>
        {props.children}
      </MainWrapper>

      <Footer/>
    </>
  )
}
