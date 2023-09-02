import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  width: 100%;
  height: 1.5rem;
  background-color: #03a9f4;
  padding: 1.3rem;
  font-size: 12px;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 680px) {
    font-size: 16px;
    padding: 1.8rem;
  }
`

const Footer = () => {
  return (
    <>
      <FooterContainer>
        Desarrollado por<span>&nbsp;</span>
        <a href='https://linktr.ee/emibrav' target='blank' style={{ color: "white", textDecoration: "none" }}>
          emibrav
        </a>
      </FooterContainer>
    </>
  )
}

export default Footer
