import React from 'react';
import styled from 'styled-components';

export const AboutMe = () => {
    return (
        <div>
            <StyledAboutMeTitle>About Me</StyledAboutMeTitle>
            <StyledAboutMeText>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</StyledAboutMeText>           
        </div>
    );
};

const StyledAboutMeTitle = styled.h3`
   
`
const StyledAboutMeText = styled.p`

`