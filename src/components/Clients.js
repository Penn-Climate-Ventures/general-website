import React from "react"
import s from "styled-components"


const FlexLayout = s.div`
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  margin: 60px auto;
  justify-content: center;
`

const LogoWrapper = s.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ClientLogo = s.img`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`

export const Clients = (props) => {
  return (
    <FlexLayout>
      {props.clientsData.map((cl => (
        <LogoWrapper>
          <a href={cl.link} target="_blank" rel="noopener noreferrer">
            <ClientLogo src={cl.logo} alt={cl.name} height={cl.height} width={cl.width}/>
          </a>
        </LogoWrapper>
      )))}
    </FlexLayout>
  )
}
