import s from "styled-components"
import { MIDNIGHT_BLUE, mediaMaxWidth } from "../../utils/constants"

export const Columns = s.div.attrs(() => ({
    className: "columns"
}))`
    ${mediaMaxWidth("768px")} {
        padding: 4vw;
    }

    :before {
        content: '';
        position: absolute;
        top: -.1rem;
        width: 6%;
        left: 47%;
        right: 47%;
        border-bottom: .4rem solid ${MIDNIGHT_BLUE};

        ${mediaMaxWidth("768px")} {
            width: 26%;
            left: 37%;
            right: 37%;
            border-bottom: .2rem solid ${MIDNIGHT_BLUE};
        }
    }
`

export const Col = s.div.attrs(() => ({
    className: 'column'
}))`
    padding: 0
`

export const Left = s(Col)`
    border-right: .3rem solid ${MIDNIGHT_BLUE};
    ${mediaMaxWidth("768px")} {
        border: none !important;
        display: contents;
    }
`

export const Right = s(Col)`
    border-left: .3rem solid ${MIDNIGHT_BLUE};
    ${mediaMaxWidth("768px")} {
        border: none !important;
        display: contents;
    }
`

export const Spacer = s.div`
    height: ${({ height }) => height || `2vw`};
`
