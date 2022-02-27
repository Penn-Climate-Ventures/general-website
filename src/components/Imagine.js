import React, {useEffect, useRef, useState} from "react"
import s from "styled-components"
import homeBg1 from "../images/home-backgrounds/home-bg-1.jpg"
import homeBg2 from "../images/home-backgrounds/home-bg-2.jpg"
import homeBg3 from "../images/home-backgrounds/home-bg-3.jpg"
import homeBg4 from "../images/home-backgrounds/home-bg-4.jpg"
import scrollDown from "../images/icons/scroll-down.png"
import {Text} from "./shared/Typography";

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

const ArrowImage = s.img`
  height: 100%;
  width: 100%;
`

const ImagineText = s(Text)`
  font-family: "Metropolis";
  color: white;
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 0 5vw;
  max-width: 500px;
`

const ScrollDownHint = s.div`
  height: 3rem;
  width: 3rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  bottom: 15%;
  animation: bounce 4s infinite;
  
  @keyframes bounce {
    0% {transform: translate(-50%, 0%);}
    50% {transform: translate(-50%, 30%);}
    100% {transform: translate(-50%, 0%);}
  }
`

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  let observer = null

  useEffect(() => {
    observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}

const Imagine = () => {
  const slideRef1 = useRef()
  const slideRef2 = useRef()
  const slideRef3 = useRef()
  const slideRef4 = useRef()
  const slide1IsVis = useOnScreen(slideRef1)
  const slide2IsVis = useOnScreen(slideRef2)
  const slide3IsVis = useOnScreen(slideRef3)
  const slide4IsVis = useOnScreen(slideRef4)

  return (
    <>
      <Buffer/>
      <Slide ref={slideRef1}>
        <SlideImage style={{opacity: slide1IsVis ? 1 : 0,
          transform: slide1IsVis ? "scale(1.1)" : "scale(1.0)",
          backgroundImage: `url(${homeBg1})`}} />
        <SlideContent className={slide1IsVis ? 'is-visible' : ''}>
          <ImagineText>
            Imagine a campus where students line up to work for the biggest movers in climate
            innovation.
          </ImagineText>
        </SlideContent>
        <ScrollDownHint>
          <ArrowImage src={scrollDown} alt="scroll down"/>
        </ScrollDownHint>
      </Slide>
      <Buffer/>
      <Slide ref={slideRef2}>
        <SlideImage style={{opacity: slide2IsVis ? 1 : 0,
          transform: slide2IsVis ? "scale(1.1)" : "scale(1.0)",
          backgroundImage: `url(${homeBg2})`}} />
        <SlideContent className={slide2IsVis ? 'is-visible' : ''}>
          <ImagineText>
            Imagine a campus where sustainability and climate analyses are integrated into our
            course plans, just like intro statistics or calculus.
          </ImagineText>
        </SlideContent>
      </Slide>
      <Buffer/>
      <Slide ref={slideRef3} >
        <SlideImage style={{opacity: slide3IsVis ? 1 : 0,
          transform: slide3IsVis ? "scale(1.1)" : "scale(1.0)",
          backgroundImage: `url(${homeBg3})`}} />
        <SlideContent className={slide3IsVis ? 'is-visible' : ''}>
          <ImagineText>
            Imagine a campus where climate is just... common sense.
          </ImagineText>
        </SlideContent>
      </Slide>
      <Buffer/>
      <Slide ref={slideRef4}>
        <SlideImage style={{opacity: slide4IsVis ? 1 : 0,
          transform: slide4IsVis ? "scale(1.1)" : "scale(1.0)",
          backgroundImage: `url(${homeBg4})`}} />
        <SlideContent className={slide4IsVis ? 'is-visible' : ''}>
          <ImagineText>That's what we're building.</ImagineText>
          <ImagineText>Let's push Penn into climate.</ImagineText>
        </SlideContent>
      </Slide>
    </>
  )
}

export default Imagine
