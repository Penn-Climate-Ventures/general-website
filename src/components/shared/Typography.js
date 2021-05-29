import s from "styled-components"

export const Title = s.h1`
  font-size: calc(${({ fontSize }) => fontSize || '4rem'} + 2vw);
  font-family: Roboto Condensed; 
`

export const Subtitle = s.h2`
  font-size: calc(${({ fontSize }) => fontSize || '2rem'} + 1vw);
  font-family: ${({roboto}) => roboto ? `Roboto Condensed` : `Metropolis`};
  font-weight: bold;
`

export const Text = s.p`
  font-size: calc(${({ fontSize }) => fontSize || '1rem'} + 1vw);
  font-family: ${({roboto}) => roboto ? `Roboto Condensed` : `Metropolis`};
`

export const SubText = s.p`
  font-size: calc(${({ fontSize }) => fontSize || '.75rem'} + 1vw);
  font-family: ${({roboto}) => roboto ? `Roboto Condensed` : `Metropolis`};
`
