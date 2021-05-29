import React from "react"
import s from "styled-components"
import { Subtitle } from "../shared/Typography"
import { OXFORD_BLUE, mediaMaxWidth } from "../../utils/constants"

const Wrapper = s.div`
    display: flex;
    margin: -.2rem;
    width: 101%;
    align-items: center;
`

const Line = s.hr`
    flex: 1;
    height: .4rem;
    ${({ right }) => right ? "margin-right" : "margin-left"}: 4rem;
    background-color: ${OXFORD_BLUE};

    ${mediaMaxWidth("768px")} {
        display: none;
    }
`

const HeaderTitle = s(Subtitle)`
    font-family: Roboto Condensed;
    text-align: ${({ right }) => right ? "left" : "right"};
    ${({maxWidth}) => maxWidth ? `max-width: ${maxWidth};` : ''}
    ${({textTop}) => textTop && `margin-top: ${textTop};`}
`

const Header = ({ children, right = false, fontSize, maxWidth, textTop }) => {
    return <Wrapper>
        {right && <Line right />}
        <HeaderTitle
            maxWidth={maxWidth}
            fontSize={fontSize}
            textTop={textTop}
            >
            {children}
        </HeaderTitle>
        {!right && <Line left />}
    </Wrapper>
}

export default Header;
