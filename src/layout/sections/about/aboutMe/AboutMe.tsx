import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionText } from '../../../../components/SectionText';

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <SectionTitle>About Me</SectionTitle>
            <SectionText>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</SectionText>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`

`
