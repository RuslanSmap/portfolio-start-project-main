import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionText } from '../../../../components/SectionText';

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <AboutMeTitle>
                <SectionTitle>About Me</SectionTitle>
            </AboutMeTitle>
            <AboutMeText>
                <SectionText>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</SectionText>
            </AboutMeText>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`

`
const AboutMeTitle = styled.div`
    margin-bottom: 38px;
`
const AboutMeText = styled.div`
    margin-bottom: 38px;
`