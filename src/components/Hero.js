import React from "react";
import s from "styled-components";
import { useContainerDimensions } from "../ui/useContainerDimensions";
import {Subtitle, Title} from "../ui/Typography";
import {LIGHT_BLUE} from "../utils/constants";
import HeroNodes from "../images/home-backgrounds/hero-nodes.png"

const HeroLayout = s.div`
  padding: 200px 0 50px 0;
  background-color: ${LIGHT_BLUE};
  width: 100%;
`

const HeroWrapper = s.div`
  max-width: 900px;
  margin: auto;
  padding: 45px 1rem 90px 1rem;
  
  @media (min-width: 900px) {
    background-image: url(${HeroNodes});
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: right;
  }
`

const HeroTitle = s(Title)`
  text-align: left;
  font-size: 3.5rem;
  padding: 0;
  margin: 0;
`

const HeroTextWrapper = s.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`

const HeroText = s(Subtitle)`
  font-size: 1.5rem;
  text-transform: none;
  margin: 10px 0.75ch 10px 0;
  padding: 0 0;
`

const TextSpinnerWrapper = s.span`
  height: 40px;
  width: 150px;
`

const TextSpinner = s.div`
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  
  -webkit-transform-origin: 20px 20px 0;
  -ms-transform-origin: 20px 20px 0;
  transform-origin: 20px 20px 0;
  
  -webkit-animation: rotateText 12s infinite;
  animation: rotateText 12s ease infinite;
  
  @-webkit-keyframes rotateText {
    25%  { -webkit-transform: rotateY(90deg);  }
    50%  { -webkit-transform: rotateY(180deg); }
    75%  { -webkit-transform: rotateY(270deg); }
    100% { -webkit-transform: rotateY(360deg); }
  }
  @keyframes rotateText {
    20%  { -ms-transform: rotateX(90deg);   transform: rotateX(90deg);  }
    25%  { -ms-transform: rotateX(90deg);   transform: rotateX(90deg);  }
    45%  { -ms-transform: rotateX(180deg);  transform: rotateX(180deg); }
    50%  { -ms-transform: rotateX(180deg);  transform: rotateX(180deg); }
    70%  { -ms-transform: rotateX(270deg);  transform: rotateX(270deg); }
    75%  { -ms-transform: rotateX(270deg);  transform: rotateX(270deg); }
    95%  { -ms-transform: rotateX(360deg);  transform: rotateX(360deg); }
    100% { -ms-transform: rotateX(360deg);  transform: rotateX(360deg); }
  }
`

const Word = s.div`
  background-color: ${LIGHT_BLUE};
  height: 40px;
  width: 150px;
  position: absolute;
  display: table;
  
  & > * {
    display: table-cell;
    vertical-align: middle;
  }
`

const Word1 = s(Word)`
  -webkit-transform: translateZ(20px);
  -ms-transform: translateZ(20px);
  transform: translateZ(20px);
  
`

const Word2 = s(Word)`
  -webkit-transform: rotateX(-90deg) translateZ(20px); 
  -ms-transform: rotateX(-90deg) translateZ(20px); 
  transform: rotateX(-90deg) translateZ(20px); 
`

const Word3 = s(Word)`
  -webkit-transform: rotateY(180deg) rotateZ(180deg) translateZ(20px); 
  -ms-transform: rotateY(180deg) rotateZ(180deg) translateZ(20px); 
  transform: rotateY(180deg) rotateZ(180deg) translateZ(20px); 
`

const Word4 = s(Word)`
  -webkit-transform: rotateX(90deg) translateZ(20px); 
  -ms-transform: rotateX(90deg) translateZ(20px); 
  transform: rotateX(90deg) translateZ(20px); 
`

const HeroWave = () => {
  return (
    <div style={{marginTop: -10}}>
      <svg viewBox="0 0 500 80">
        <path fill={LIGHT_BLUE} fill-opacity="1" d="M0.00,19.98 C160.27,74.97 219.52,18.08 500.00,23.98 L500.00,0.00 L0.00,0.00 Z"></path>
        <path fill={LIGHT_BLUE} fill-opacity="0.6" d="M-1.12,48.32 C115.69,30.55 393.34,81.87 501.69,8.83 L500.00,0.00 L0.00,0.00 Z"></path>
        <path fill={LIGHT_BLUE} fill-opacity="0.3" d="M0.00,34.37 C150.43,66.60 376.97,59.03 501.12,40.28 L500.00,0.00 L0.00,0.00 Z"></path>
      </svg>
    </div>
  )
}
export const Hero = () => {
  const componentRef = React.useRef();
  const { width } = useContainerDimensions(componentRef);

  return (
    <>
    <HeroLayout ref={componentRef}>
      <HeroWrapper>
        <HeroTitle fontColor="var(--c-text-primary-inverted)">Penn Climate Ventures</HeroTitle>
        <HeroTextWrapper>
          <HeroText fontColor="var(--c-text-primary-inverted)">Catalyzing</HeroText>
          <HeroText fontColor="var(--c-text-primary-inverted)">climate</HeroText>
          <HeroText fontColor="var(--c-text-primary-inverted)">action </HeroText>
          <HeroText fontColor="var(--c-text-primary-inverted)">through</HeroText>
          <TextSpinnerWrapper>
            <TextSpinner>
              <Word1><HeroText fontColor="var(--c-text-primary-inverted)">workshops</HeroText></Word1>
              <Word2><HeroText fontColor="var(--c-text-primary-inverted)">fellowships</HeroText></Word2>
              <Word3><HeroText fontColor="var(--c-text-primary-inverted)">competitions</HeroText></Word3>
              <Word4><HeroText fontColor="var(--c-text-primary-inverted)">socials</HeroText></Word4>
            </TextSpinner>
          </TextSpinnerWrapper>
        </HeroTextWrapper>
      </HeroWrapper>
    </HeroLayout>
    <HeroWave color={LIGHT_BLUE}/>
  </>
);
};

