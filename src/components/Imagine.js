import React from "react"
import {InView} from 'react-intersection-observer';
import s from "styled-components"
import { TextP } from "./shared/Layout"
import homeBg1 from "../images/home-backgrounds/home-bg-6.jpg"
import homeBg2 from "../images/home-backgrounds/home-bg-2.jpg"
import homeBg3 from "../images/home-backgrounds/home-bg-3.jpg"
import homeBg4 from "../images/home-backgrounds/home-bg-4.jpg"

const Buffer = s.div`
  height: 40vh;
`

const Slide = s.div`
  height: 50vh;
`

const SlideImage = s.div`
  top: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  filter: brightness(70%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.50s ease-in-out;
  z-index: -3;
`

const SlideContent  = s.div`
  position: relative;
  margin: auto;
  
  opacity: 0;
  z-index: -5;
  transform: translateY(120px);
  transition: opacity 0.6s ease-out, transform 1.2s ease-out;
  
  &.is-visible {
    opacity: 1;
    transform: none;
    z-index: -1;
  }
`

const ImagineText = s(TextP)`
  font-family: "Metropolis";
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7); 
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 0 5vw;
  max-width: 500px;
`

const Imagine = () => {
  return (
    <>
      <Buffer/>
      <InView threshold={0}>
        {({ inView, ref, entry }) => (
          <Slide ref={ref}>
            <SlideImage style={{opacity: inView ? 1 : 0,
                                transform: inView ? "scale(1.1)" : "scale(1.0)",
                                backgroundImage: `url(${homeBg1})`}} />
            <SlideContent className={inView ? 'is-visible' : ''}>
              <ImagineText>
                Imagine a campus where students line up to work for the biggest movers in climate
                innovation.
              </ImagineText>
            </SlideContent>
          </Slide>
        )}
      </InView>
      <Buffer/>
      <InView threshold={0}>
        {({ inView, ref, entry }) => (
          <Slide ref={ref}>
            <SlideImage style={{opacity: inView ? 1 : 0,
                                transform: inView ? "scale(1.1)" : "scale(1.0)",
                                backgroundImage: `url(${homeBg2})`}} />
            <SlideContent className={inView ? 'is-visible' : ''}>
              <ImagineText>
                Imagine a campus where sustainability and climate analyses are integrated into our
                course plans, just like intro statistics or calculus.
              </ImagineText>
            </SlideContent>
          </Slide>
        )}
      </InView>
      <Buffer/>
      <InView threshold={0}>
        {({ inView, ref, entry }) => (
          <Slide ref={ref} >
            <SlideImage style={{opacity: inView ? 1 : 0,
                                transform: inView ? "scale(1.1)" : "scale(1.0)",
                                backgroundImage: `url(${homeBg3})`}} />
            <SlideContent className={inView ? 'is-visible' : ''}>
              <ImagineText>
                Imagine a campus where climate is just... common sense.
              </ImagineText>
            </SlideContent>
          </Slide>
        )}
      </InView>
      <Buffer/>
      <InView threshold={0}>
        {({ inView, ref, entry }) => (
          <Slide ref={ref}>
            <SlideImage style={{opacity: inView ? 1 : 0,
                                transform: inView ? "scale(1.1)" : "scale(1.0)",
                                backgroundImage: `url(${homeBg4})`}} />
            <SlideContent className={inView ? 'is-visible' : ''}>
              <ImagineText>That's what we're building.</ImagineText>
              <ImagineText>Let's push Penn into climate.</ImagineText>
            </SlideContent>
          </Slide>
        )}
      </InView>
    </>
  )
}

export default Imagine
