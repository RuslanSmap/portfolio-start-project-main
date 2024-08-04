import React from 'react';
import styled from 'styled-components';
import { AboutMe } from './aboutMe/AboutMe';
import { WorkExperience } from './workExperience/WorkExperience';
import { Education } from './education/Education';
import { Container } from '../../../components/Container';
import { Decor } from '../../../components/icon/decor/Decor';

export const About = () => {
    return (
        <Container>
            <AboutContainer>
                <StyledAbout>
                    <AboutMe />
                    <WorkExperience />
                    <Education />
                </StyledAbout>
                <Decoration>
                    <Decor />
                </Decoration>
            </AboutContainer>
        </Container>
    );
};

const AboutContainer = styled.div`
    display: flex;
`

const StyledAbout = styled.section`
    max-width: 710px;
    margin-right: 90px;
`

const Decoration = styled.div`
    
`