import React from "react"
import s from "styled-components"
import Seth from '../../images/seth.jpg'
import Lidiya from '../../images/lidiya.jpg'

import { Title, Text, Subtitle, SubText } from "../shared/Typography"
import Button from "../shared/Button"

import {
    Columns,
    Left,
    Right,
    Spacer
} from "./Layout"
import Header from "./Header"

const TimelineTitle = s(Subtitle)`
    margin-bottom: 1.5vw;
`

const TimelineCenteredText = s(SubText).attrs(() => ({
    className: 'has-text-left'
}))`
    width: 90%;
    display: inline-block;
    padding: 2rem;
`

const Event = ({ right, date, children }) => {
    const Date = () => <div className={`column is-3 has-text-left`}>
        <Subtitle fontSize="1.5rem" roboto css={`white-space: pre-line; padding: 0;`}>{date}</Subtitle>
    </div>
    return <div className="columns is-mobile">
        {right && <Date />}
        <div className={`column ${right ? 'is-9 has-text-left': 'p-0 is-9 has-text-right'}`}>
            {children}
        </div>
        {!right && <Date />}
    </div>
}

const TimelineLayout = ({ className }) => (
    <div className={`container has-text-centered ${className}`}>
        <TimelineTitle fontSize="1.5rem">Open to students globally.</TimelineTitle>
        <div css={`
            position: relative;
        `}>
            <Columns>
                <Left>
                    <Spacer height="2vw" />
                    <Header>
                        Eligibility
                    </Header>
                    <TimelineCenteredText>
                        All students are eligible.
                        <br />
                        Teams need at least one Penn student to compete in finals.
                    </TimelineCenteredText>
                    <br />
                    <Button
                        target="_blank"
                        rel="noreferrer noopener"
                        href="/faq"
                    >Rules and FAQs</Button>
                    <Spacer height="10vw" />
                    <Header>
                        Attend a
                    </Header>
                    <Subtitle roboto css={`text-align: left; width: 100%;`}>State-of-the-Field Panel</Subtitle>
                    <Spacer height="2vw" />
                    <Event date={"3/29\n\n\n"} right>
                        <Text>Energy and Transportation</Text>
                        <SubText>
                            <b>Dr. Arthur Van Benthem</b> @ <a target="_blank" rel="noreferrer noopener" href="https://www.arthurvanbenthem.com/">Wharton</a><br></br>
                            <b>Ally Warson</b> @ <a target="_blank" rel="noreferrer noopener" href="https://www.up.partners/">UP.Partners</a>
                        </SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"3/30\n\n\n"} right>
                        <Text>Waste and Circularity</Text>
                        <SubText>
                            <b>Dr. Jim Hagan</b> @ <a target="_blank" rel="noreferrer noopener" href="https://www.lps.upenn.edu/degree-programs/mes/faculty/james-hagan">Penn CAS</a><br></br>
                            <b>Shuo Yang</b> @ <a target="_blank" rel="noreferrer noopener" href="https://fiftyyears.com/">Fifty Years</a>
                        </SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"4/2\n\n\n"} right>
                        <Text>Food and Agriculture</Text>
                        <SubText>
                            <b>Dr. Zhangxia Dou</b> @ <a target="_blank" rel="noreferrer noopener" href="https://www.vet.upenn.edu/people/faculty-clinician-search/zhengxiadou">Penn Vet</a>
                        </SubText>
                    </Event>

                    <Spacer height="5vw" />
                    <Header>
                        Workshop
                    </Header>
                    <Subtitle roboto css={`text-align: left; width: 100%;`}>your proposal</Subtitle>
                    <Spacer height="2vw" />
                    <Event date={"April\n\n\n"} right>
                        <Text>Product Development</Text>
                        <SubText>What does it mean to be feasible?</SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"April\n\n\n"} right>
                        <Text>Impact Analysis</Text>
                        <SubText>Can your solution can make a difference?</SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"April\n\n\n"} right>
                        <Text>Regulations</Text>
                        <SubText>How will policy affect your startup?</SubText>
                    </Event>
                    <Spacer height="2vw" />
                    <Event date={"April\n\n\n"} right>
                        <Text>What VCs Look For</Text>
                        <SubText>How can you secure funding?</SubText>
                    </Event>

                </Left>
                <Right>
                    <Spacer height="10vw" />
                    <Header right>
                        Register
                    </Header>
                    <TimelineCenteredText>
                        Stay updated on event details and the PCV Prize.
                        <br />
                    </TimelineCenteredText>
                    <br />
                    <Button
                        right
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://tinyurl.com/PCVPrizeS21"
                    >
                        Sign Up by 4/5
                    </Button>

                    <Spacer height="10vw" />

                    <Header right>
                        Meet Others!
                    </Header>
                    <TimelineCenteredText>
                        <Text>Discord</Text>
                        Register to start building your team through our online PCV Prize community.
                    </TimelineCenteredText>
                    
                    <Spacer height="4vw" />
                    
                    <Header right>
                        Opening Keynote
                    </Header>
                    <Subtitle roboto className="has-text-right">
                        w/ Dr. Arun Majumdar
                    </Subtitle>
                    
                    <Event date={"4/3\n1 PM\n EST\n"} left>
                        <TimelineCenteredText>
                            Founding Director @ <a target="_blank" rel="noreferrer noopener" href="https://arpa-e.energy.gov/"> ARPA-E </a>
                            <br />
                            Former VP, Energy @ <a target="_blank" rel="noreferrer noopener" href="https://google.com/"> Google </a>
                            <br />
                            Co-Director, Precourt Institute for Energy @ <a target="_blank" rel="noreferrer noopener" href="https://energy.stanford.edu/"> Stanford </a>
                        </TimelineCenteredText>
                    </Event>

                    <Event date={"4/3\n2 PM\n EST\n"} left>
                        <TimelineCenteredText>
                            <Text as="h1">Find a Team</Text>
                            Speed-dating, but for climate co-founders.
                        </TimelineCenteredText>
                    </Event>
                    

                    <Spacer height="4vw" />
                    <Header right>
                        Register Your Team
                    </Header>
                    <TimelineCenteredText>
                        Full team eligibility rules <a href="/faq">here</a>
                        <Spacer height="2vw" />
                        <Button
                            right
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://tinyurl.com/PCVPrizeTeamRegistration"
                        >
                            Submit by 4/5
                        </Button>
                    </TimelineCenteredText>

                    <Spacer height="4vw" />

                    <Header right>
                        From PCV
                    </Header>
                    <Spacer height="2vw" />

                    <Event date={"April\n\n\n"} left>
                        
                        <TimelineCenteredText>
                            <Text as="h1">Pitch Office Hours</Text>
                            Perfect your pitches. By appointment.
                            <br />
                        </TimelineCenteredText>                    
                    </Event>

                    <Event date={"April\n\n\n"} left>
                        <TimelineCenteredText>
                            <Text as="h1">What comes next?</Text>
                            Climate founder AMAs.
                        </TimelineCenteredText>                    
                    </Event>
                </Right>
            </Columns>
        </div>
        <TimelineTitle>
        <Spacer height="4vw" />
        <div className="has-text-centered" css={`width: 100%; display: block;`}>
            <Button
                fontSize="1.5rem"
                css={
                `
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 1vw;
                    margin-bottom: 2rem;
                    padding-top: 2rem;
                    padding-bottom: 2rem;
                    display: inline-block;
                    float: none;
                `
                }
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://tinyurl.com/PCVPrizeSubmission"
                >
                    Submit your decks here!
                </Button>
            <Title fontSize="2rem">4/17 11:59PM EST</Title>
        </div>
        </TimelineTitle>
        <Spacer height="5vw"/>
        <Title fontSize="3.5rem" className="has-text-left" css={`margin-top: 3vw`}>
            Live Finals,
            4/24 at 12 PM EST.
        </Title>
        <Subtitle
                fontSize="3rem"
                className="has-text-left"
                css={`
                    font-weight: bold;
                    justify-self: flex-start;
                `}
            >Judges Panel:</Subtitle>
        <Spacer width="15vw" />
        <div css={`display: flex; justify-content: space-evenly;`}>
            <div>
                <img css={`
                    width: 13vw;
                    height: 13vw;
                    border-radius: 999px;

                `} src={Seth} />
                <Spacer />
                <Text><b>Seth Bannon</b></Text>
                <SubText>Founding Partner<br />@ Fifty Years</SubText>
            </div>
            <div>
                <img css={`
                    width: 13vw;
                    height: 13vw;
                    border-radius: 999px;
                    object-fit: cover;
                `} src={Lidiya} />
                <Spacer />
                <Text><b>Lidiya Dervisheva</b></Text>
                <SubText>Partner<br />@ Next47</SubText>
            </div>
        </div>
    </div>
)

export const Timeline = s(TimelineLayout)`
    margin-top: 5vw;
    padding: 2vw;
`
