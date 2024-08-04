import React from 'react';
import styled from 'styled-components';
import { FooterMenu } from '../../components/menu/FooterMenu';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';

const items = ["Home", "About", "Technologies", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterContainer>
                    <FooterMenu menuItems={items} />
                    <Copyright>Designed and built by <StyledName>Pavan MG</StyledName> with <StyledLove>Love </StyledLove>& <StyledCoffee>Coffee</StyledCoffee></Copyright>
                </FooterContainer>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
`
const Copyright = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
`
const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const StyledName = styled.span`
     background: radial-gradient(#13B0F5,#E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const StyledLove = styled.span`
      background: radial-gradient(#13B0F5,#E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const StyledCoffee = styled.span`
      background: radial-gradient(#13B0F5,#E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`