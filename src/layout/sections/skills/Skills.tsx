import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionText } from '../../../components/SectionText';
import { Skill } from '../skills/skill/Skill'
import { Container } from '../../../components/Container';
export const Skills = () => {
    return (

        <StyledSkills>
            <Container>
                <SkillsTitle>My Tech Stack</SkillsTitle>
                <SkillsText> Technologies I’ve been working with recently</SkillsText>
                <FlexWrapper wrap='wrap' justify='space-around'>
                    <Skill IconId={'html'} />
                    <Skill IconId={'css'} />
                    <Skill IconId={'js'} />
                    <Skill IconId={'react'} />
                    <Skill IconId={'vector5'} />
                    <Skill IconId={'bootstrap'} />
                    <Skill IconId={'sass'} />
                    <Skill IconId={'git'} />
                    <Skill IconId={'greensock'} />
                    <Skill IconId={'html'} />
                    <Skill IconId={'vscode'} />
                    <Skill IconId={'github'} />
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