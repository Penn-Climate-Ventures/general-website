import React, {useEffect, useState} from "react";
import s from "styled-components";
import { useContainerDimensions } from "../ui/useContainerDimensions";
import { Subtitle, Text } from "../ui/Typography";
import {TEXT_PRIMARY_INV} from "../utils/constants";
import {ButtonInverted} from "../ui/Button";

const data = [
  {
    name: "",
    role: "PCV applicant",
    quote: "Through your website I was able to find and apply to RMI's summer internship program!! Thank you 🙂",
  },
]

const TestimonialWrapper = s.div`
  margin: 60px auto auto auto;
  display: flex;
  justify-content: center;
  max-width: 760px;
`

const QuoteWrapper = s.div`
  font-family: serif;
  font-size: 3rem;
  display: flex;
  flex-direction: row;
  align-items: top;
  
  &:before {
    color: var(--c-text-primary-inverted);
    content: open-quote;
  }
  
  &: after {
    color: var(--c-text-primary-inverted);
    content: close-quote;
  }
`

const QuoteText = s(Text)`
  color: var(--c-text-primary-inverted);
  font-style: italic;
  font-size: 2rem;
  line-height: 1.5;
  margin: 0 5px;
`

const QuoterWrapper = s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const QuoterInfo = s.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  
  &:before {
    content: "—";
    color: var(--c-text-primary-inverted);
    font-size: 1.5rem;
    line-height: 1rem;
    display: inline;
    padding-right: 1ch;
  }
`

const QuoterText = s(Text)`
  margin-top: 0;
  font-size: 1.5rem;
  color: var(--c-text-primary-inverted);
`

const QuoterImage = s.div`
  height: auto;
  width: 60px;
`

const LearnMoreWrapper = s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

export const Testimonials = () => {
  const componentRef = React.useRef();
  const { width } = useContainerDimensions(componentRef);

  const [ind, setInd] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setInd((ind + 1) % data.length)
    }, 10000)

    return (() => clearInterval(interval))
  })

  return (
    <div ref={componentRef}>
      <Subtitle fontColor={TEXT_PRIMARY_INV}>Testimonials</Subtitle>
      <TestimonialWrapper>
        <div>
          <QuoteWrapper>
            <QuoteText>{data[ind].quote}</QuoteText>
          </QuoteWrapper>

          <QuoterWrapper>
            <QuoterImage>

            </QuoterImage>
            <QuoterInfo>
              <div>
              {data[ind].name &&
                <QuoterText>{data[ind].name}</QuoterText>
              }
              {data[ind].role &&
                <QuoterText>{data[ind].role}</QuoterText>
              }
              </div>
            </QuoterInfo>
          </QuoterWrapper>
        </div>
      </TestimonialWrapper>

      <LearnMoreWrapper>
        <ButtonInverted href="/collaborate">Learn more</ButtonInverted>
        <Text fontColor={TEXT_PRIMARY_INV} center>Click here to learn more about working with us!</Text>
      </LearnMoreWrapper>
    </div>
  );
};
