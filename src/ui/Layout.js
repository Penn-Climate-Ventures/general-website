import React from "react"
import s from "styled-components"


export const Layout = s.div`
  padding: 2rem 1rem;
  margin: 75px auto 0 auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    padding: 2rem 3rem;
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }
`

export const WideLayout = s.div`
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
  
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
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
      <svg viewBox="0 0 500 100" preserveAspectRatio="xMinYMin meet">
        <path d="M0,50 C100,150 300,0 500,50 L500,00 L0,0 Z" style={{stroke: "none", fill: color}}></path>
      </svg>
    </WaveWrapper>
  )
}

export const WavyLayout = (props) => {
  return (
    <>
    <Wave color={props.color} rotation={-1}/>
    <div style={{backgroundColor: props.color, overflow: "hidden"}}>
      <WideLayout>
        {props.children}
      </WideLayout>
    </div>
    <Wave color={props.color}/>
    </>
  )
}
