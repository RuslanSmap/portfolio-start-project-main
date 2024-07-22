import React from 'react';
// import { GlobalStyle } from '../../../styles/GlobalStyle';
import styled from 'styled-components';
import photo from "../../../assets/images/Photo.webp"
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={""} justify={"space-between"} >
                    <StyledMainContent >
                        <MainText>Hi 👋,</MainText>
                        <MainText>My name is</MainText>
                        <Name>Pavan MG</Name>
                        <MainTitle>I build things for web</MainTitle>
                    </StyledMainContent>
                    <MainContentPhoto>
                        <Photo src={photo} alt="" />
                    </MainContentPhoto>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
   margin-top: 320px;
   margin-bottom: 205px;
   max-height: 345px;
`

const StyledMainContent = styled.div`
    max-width: 636px;
    max-height: 292px;
    margin-top: 45px; 
`

const MainText = styled.p`
color: #42446E;
font-family: 'Poppins', sans-serif;
font-weight: 700;
font-size: 58px;
letter-spacing: -1px;
line-height: 70px;

`
const MainContentPhoto = styled.div`
    margin: 0px 0px 0px 200px;
`

const Photo = styled.img`
    /* width:350px;
    height: 357px; */
    object-fit: cover;
`

const MainTitle = styled.h1`
color: #42446E;
font-family: 'Poppins', sans-serif;
font-weight: 700;
font-size: 58px;
letter-spacing: -1px;
line-height: 70px;
`
const Name = styled.h2`
color: #42446E;
font-family: 'Poppins', sans-serif;
font-weight: 700;
font-size: 58px;
letter-spacing: -1px;
line-height: 70px;
background: radial-gradient(#E70FAA,#13B0F5);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`