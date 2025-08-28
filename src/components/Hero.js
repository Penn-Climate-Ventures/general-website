import React from "react"
import s from "styled-components"

import {Subtitle, Title} from "../ui/Typography"

import {LIGHT_BLUE} from "../utils/constants"
import HeroBackground from "../images/home-backgrounds/hero-bg.jpg" 
import HeroNodes from "../images/home-backgrounds/hero-nodes.png"

const HeroLayout = s.div`
  min-height: 300px;
  width: 100%;
  position: relative;
  padding: 200px 0 100px 0;
  background-image: url(${HeroBackground});
  background-size: cover;
  background-position: center;
  background-color: #002759; /* Fallback color if image doesn't load */
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 39, 89, 0.2); /* Translucent navy overlay */
    z-index: 1;
  }
`

const HeroWrapper = s.div`
  max-width: 900px;
  margin: auto;
  padding: 45px 1rem 90px 1rem;
  position: relative;
  z-index: 2;
  
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
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
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
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`

const TextSpinnerWrapper = s.span`
  height: 40px;
  width: 150px;
  position: relative;
  perspective: 1000px;
`

const TextSpinner = s.div`
  transform-style: preserve-3d;
  transform-origin: 75px 20px 0;
  animation: rotateText 12s ease infinite;
  height: 40px;
  width: 150px;
  position: relative;
  
  @keyframes rotateText {
    0%, 15% { transform: rotateX(0deg); }
    20%, 40% { transform: rotateX(-90deg); }
    45%, 65% { transform: rotateX(-180deg); }
    70%, 90% { transform: rotateX(-270deg); }
    95%, 100% { transform: rotateX(-360deg); }
  }
`

const Word = s.div`
  position: absolute;
  height: 40px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  backface-visibility: hidden;
`

const Word1 = s(Word)`
  transform: translateZ(20px);
`

const Word2 = s(Word)`
  transform: rotateX(90deg) translateZ(20px);
`

const Word3 = s(Word)`
  transform: rotateX(180deg) translateZ(20px);
`

const Word4 = s(Word)`
  transform: rotateX(270deg) translateZ(20px);
`

export const Hero = () => {
  return (
    <HeroLayout>
      <HeroWrapper>
        <HeroTitle>Penn Climate Ventures</HeroTitle>
        <HeroTextWrapper>
          <HeroText>Catalyzing</HeroText>
          <HeroText>climate</HeroText>
          <HeroText>action</HeroText>
          <HeroText>through</HeroText>
          <TextSpinnerWrapper>
            <TextSpinner>
              <Word1><HeroText>workshops</HeroText></Word1>
              <Word2><HeroText>fellowships</HeroText></Word2>
              <Word3><HeroText>competitions</HeroText></Word3>
              <Word4><HeroText>socials</HeroText></Word4>
            </TextSpinner>
          </TextSpinnerWrapper>
        </HeroTextWrapper>
      </HeroWrapper>
    </HeroLayout>
  );
};

