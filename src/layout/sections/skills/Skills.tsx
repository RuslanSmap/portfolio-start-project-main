import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Skill } from '../skills/skill/Skill'
import { Container } from '../../../components/Container';
export const Skills = () => {
    return (

        <StyledSkills>
            <Container>
                <SkillsTitle>My Tech Stack</SkillsTitle>
                <SkillsText> Technologies I’ve been working with recently</SkillsText>
                <FlexWrapper wrap='wrap' justify='flex-start'>
                    <Skill IconId={'html'} width='120px' height='120px' viewBox='0 0 120 120' />
                    <Skill IconId={'css'} width='120px' height='120px' viewBox='0 0 120 120' />
                    <Skill IconId={'js'} width='105px' height='105px' viewBox='0 0 105 105' />
                    <Skill IconId={'react'} width='112px' height='112' viewBox='0 0 112 112' />
                    <Skill IconId={'vector5'} width='105px' height='100px' viewBox='0 0 105 100' />
                    <Skill IconId={'bootstrap'} width='88px' height='87px' viewBox='0 0 88 87' />
                    <Skill IconId={'vector7'} width='120px' height='120px' viewBox='0 0 130 130' />
                    <Skill IconId={'sass'} width='120px' height='87px' viewBox='0 0 120 120' />
                    <Skill IconId={'git'} width='105px' height='105px' viewBox='0 0 105 105' />
                    <Skill IconId={'greensock'} width='112px' height='120px' viewBox='0 0 102 120' />
                    <Skill IconId={'vscode'} width='105px' height='100px' viewBox='0 0 112 112' />
                    <Skill IconId={'github'} width='88px' height='58px' viewBox='0 0 88 88' />
                </FlexWrapper>
            </Container>
        </StyledSkills>

    );
};

const StyledSkills = styled.section`
   
`
const SkillsTitle = styled.h2`
   margin: 200px 0px 50px 0px;
   text-align: center;
   color: #42446E; 
   font-family: 'Poppins', sans-serif;
   font-weight: 700px;
   font-size: 48px;
   letter-spacing: 0px;
   line-height: 26px;
`
const SkillsText = styled.p`
    margin-bottom: 125px;
    text-align: center;
    color: #666666;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 32px;
    letter-spacing: 0px;
    line-height: 26px;
`