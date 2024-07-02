import React from 'react';
import styled from 'styled-components';
import { AboutMe } from './aboutMe/AboutMe';
import { WorkExperience } from './workExperience/WorkExperience';
import { Education } from './education/Education';

export const About = () => {
    return (
        <StyledAbout>
            <AboutMe />
            <WorkExperience />
            <Education />
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
   
    min-height: 100vh;
`