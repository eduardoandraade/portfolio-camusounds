import React from 'react'
import styled  from 'styled-components';

const Navbar = () => {

const Section = styled.div`
     display: flex;
     justify-content: center;
`;

const Container = styled.div`
    width: 1000px;
    margin: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px
`;
const Logo = styled.img`
    width: 3rem;
    cursor: pointer;
`;
const List = styled.ul`
    display: flex;
    gap: .9rem;
    list-style: none;
`;
const ListItem = styled.li`
    cursor: pointer;
    transition: .7s;

    &:hover {
    color: #F87900;
    }
`;
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`;
const Icon = styled.img`
    width: 1.5rem;
    cursor: pointer;
`;
const Button = styled.button`
    cursor: pointer;
    width: 10rem;
    font-weight: 400;
    padding: 6px;
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
`;


  return (
    <Section>
        <Container>
            <Links>
                <Logo src="./img/logo-camusounds.svg" />
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Sobre</ListItem>
                    <ListItem>Contato</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src="./img/icon-ig.svg"/>
                <Icon src="./img/icon-linkedin.svg"/>
                <Button>Solicitar Orçamento</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar