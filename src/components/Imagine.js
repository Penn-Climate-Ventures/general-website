import React, {useEffect, useRef, useState} from "react"
import s from "styled-components"
import { TextP } from "./shared/Layout"
import homeBg1 from "../images/home-backgrounds/home-bg-6.jpg"
import homeBg2 from "../images/home-backgrounds/home-bg-2.jpg"
import homeBg3 from "../images/home-backgrounds/home-bg-3.jpg"
import homeBg4 from "../images/home-backgrounds/home-bg-4.jpg"

const Buffer = s.div`
  height: 40vh;
`

const SlideImageWrapper = s.div`
  height: 100vh;
  width: 100%;
  padding: 0;
  display: flex;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  margin-top: -50vh;
  z-index: 3;
`

const SlideImage = s.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.50s ease-in-out;
`

const ImageOverlay = s.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
`

const Slide = s.div`
  height: 45vh;
  scroll-snap-align: start;
  position: relative;
  
  opacity: 0;
  z-index: 2;
  transform: translateY(120px);
  transition: opacity 0.6s ease-out, transform 1.2s ease-out;
  
  &.is-visible {
    opacity: 1;
    transform: none;
    z-index: 5;
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

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
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
      <div css={'scroll-snap-type: y mandatory;'}>
        <SlideImageWrapper>
          <SlideImage style={{opacity: slide1IsVis ? 1 : 0,
                              transform: slide1IsVis ? "scale(1.1)" : "scale(1.0)",
                              backgroundImage: `url(${homeBg1})`}} />
          <SlideImage style={{opacity: slide2IsVis ? 1 : 0,
                              transform: slide2IsVis ? "scale(1.1)" : "scale(1.0)",
                              backgroundImage: `url(${homeBg2})`}} />
          <SlideImage style={{opacity: slide3IsVis ? 1 : 0,
                              transform: slide3IsVis ? "scale(1.1)" : "scale(1.0)",
                              backgroundImage: `url(${homeBg3})`}} />
          <SlideImage style={{opacity: slide4IsVis ? 1 : 0,
                              transform: slide4IsVis ? "scale(1.1)" : "scale(1.0)",
                              backgroundImage: `url(${homeBg4})`}} />
          <ImageOverlay/>
        </SlideImageWrapper >
        <Slide ref={slideRef1} className={slide1IsVis ? 'is-visible' : ''}>
          <ImagineText>
            Imagine a campus where students line up to work for the biggest movers in climate
            innovation.
          </ImagineText>
        </Slide>
        <Buffer/>
        <Slide ref={slideRef2} className={slide2IsVis ? 'is-visible' : ''}>
          <ImagineText>
            Imagine a campus where sustainability and climate analyses are integrated into our
            course plans, just like intro statistics or calculus.
          </ImagineText>
        </Slide>
        <Buffer/>
        <Slide ref={slideRef3} className={slide3IsVis ? 'is-visible' : ''}>
          <ImagineText>
            Imagine a campus where climate is just... common sense.
          </ImagineText>
        </Slide>
        <Buffer/>
        <Slide ref={slideRef4} className={slide4IsVis ? 'is-visible' : ''}>
          <ImagineText>That's what we're building.</ImagineText>
          <ImagineText>Let's push Penn into climate.</ImagineText>
        </Slide>
      </div>
    </>
  )
}

export default Imagine
