import React, { useEffect, useState } from 'react'
import s from "styled-components"
import './carousel-styles.scss'
import { STEEL_BLUE, MIDNIGHT_BLUE } from "../../utils/constants"


const NavArrow = s.div`
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  width: 0;
  height: 0;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  cursor: pointer;
`

const Carousel = (props) => {
  const {children, show} = props

  const [currIndex, setCurrIndex] = useState(0)
  const [length, setLength] = useState(children.length)

  const [touchPos, setTouchPos] = useState(null)

  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => currIndex < (length - show)
                   ? setCurrIndex(prevState => prevState + 1)
                   : null

  const prev = () => (currIndex > 0)
                   ? setCurrIndex(prevState => prevState - 1)
                   : null

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPos(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPos

    if (touchDown === null) {
      return
    }

    const currTouch = e.touches[0].clientX
    const diff = touchDown - currTouch
    diff > 5 ? next() :
    diff < -5 ? prev() :

    setTouchPos(null)
  }

  return (
    <div className="carousel-container">
        {
          currIndex > 0 &&
          <NavArrow
            onClick={prev}
            css={`left: 0;
                  border-right: 20px solid ${STEEL_BLUE};`}
          />
        }
        <div
          className="content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          >
          <div className={`content show-${show}`}
            style={{ transform: `translateX(-${currIndex * (100 / show)}%)` }} >
            {children}
          </div>
        </div>
        {
          currIndex < (length - show) &&
          <NavArrow
            onClick={next}
            css={`right: 0;
                  border-left: 20px solid ${STEEL_BLUE};`}
          />
        }
    </div>
  )
}

export default Carousel
