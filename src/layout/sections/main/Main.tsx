import React from 'react';
import styled from 'styled-components';
import photo from "../../../assets/images/Photo.webp"
import { FlexWrapper } from '../../../components/FlexWrapper';


export const Main = () => {
    return (
        <StyleMain>
            <FlexWrapper align={"center"} justify={"space-around"} >
            <div>
                <span>Hi 👋,</span>
                <span>My name is</span>
                <Name>Pavan MG</Name>
                <MainTitle>I build things for web</MainTitle>
            </div>
            <Photo src={photo} alt="" />
            </FlexWrapper>
        </StyleMain>
    );
};

const StyleMain = styled.div`
   min-height: 100vh;
   background-color: #fff5e7;
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