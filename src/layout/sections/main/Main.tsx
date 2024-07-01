import React from 'react';
import styled from 'styled-components';
import photo from "../../../assets/images/Photo.webp"
import { FlexWrapper } from '../../../components/FlexWrapper';


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"} >
            <StyledMainContent >
                <span>Hi 👋,</span>
                <span>My name is</span>
                <Name>Pavan MG</Name>
                <MainTitle>I build things for web</MainTitle>
            </StyledMainContent>
            <Photo src={photo} alt="" />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
   min-height: 100vh;
   background-color: #fff5e7;
`

const StyledMainContent = styled.div`

`

const Photo = styled.img`
    width:350px;
    height: 350px;
    object-fit: cover;
`

const MainTitle = styled.h1`

`
const Name = styled.h2`

`