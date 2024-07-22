import React from 'react';
import styled from 'styled-components';
import { AboutMe } from './aboutMe/AboutMe';
import { WorkExperience } from './workExperience/WorkExperience';
import { Education } from './education/Education';
import { Container } from '../../../components/Container';

export const About = () => {
    return (
        <Container>
            <StyledAbout>
                <AboutMe />
                <WorkExperience />
                <Education />
            </StyledAbout>
        </Container>
    );
};

const StyledAbout = styled.section`
    max-width: 710px;
`