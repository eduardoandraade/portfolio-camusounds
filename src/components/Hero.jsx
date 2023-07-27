import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 994px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px
`
const Title = styled.h1`
  font-size: 74px;
  color: #ebe8e8;
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px
`
const Line = styled.span`
 width: 5.2rem;
  height: 1px;
  background-color: #F87900;
`
const Subtitle = styled.h2`
  color: #ebe8e8;
`
const Desc = styled.p`
  font-size: 16px;
  color: #ebe8e8;
`
const Button = styled.button`
cursor: pointer;
    width: 200px;
    font-weight: 500;
    padding: 10px;
    background: linear-gradient(to right, #FFFF, #F1f1f1);    
    color: #423f3f;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    transition: .7s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
    background: linear-gradient(to right, #F87900  , #cd6301 );
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: #ffff;
    }
`


const Right = styled.div`
  flex: 3;
  position: relative;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateX(10px);
    }
  }
  
`
const Img = styled.img`
  width: 500px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
   
`

const Hero = () => {
  return (
    <Section>
        <Navbar/>
        <Container>
          <Left>
            <Title>Música. Sentimento. Criação.</Title>
            <WhatWeDo>
              
              <Subtitle>Sound Designer</Subtitle>
              <Line></Line>
            </WhatWeDo>
            <Desc>Transformar conceitos e ideias em realidade auditiva, criando experiências sonoras centradas no ser humano.</Desc>
            <Button>Saiba Mais</Button>
          </Left>
          <Right>
            {/* 3d model */}

            <Img src="./img/3d-music.png" />
          </Right>
        </Container>
    </Section>
  )
}

export default Hero