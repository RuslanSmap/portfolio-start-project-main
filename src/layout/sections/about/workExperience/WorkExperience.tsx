import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionText } from '../../../../components/SectionText';

export const WorkExperience = () => {
    return (
        <StyledWorkExperience>
            <SectionTitle>Work Experience</SectionTitle>
            <ul>
                <li>
                    <FlexWrapper align='center'>
                        <SectionText>Junior Web Developer</SectionText>
                        <span>Full Time</span>
                        <Icon IconId='workplace' />
                        <SectionText>Dr. Rajkumar’s Learning App</SectionText>
                        <Icon IconId='location' />
                        <span>Bengaluru</span>
                        <Icon IconId='calendar' />
                        <span>Sep 2021 - Dec 2021</span>
                    </FlexWrapper>
                </li>
                <li>
                    <FlexWrapper>
                        <SectionText>Web Development Intern</SectionText>
                        <span>Internship</span>
                        <Icon IconId='workplace' />
                        <SectionText>IonPixelz Web Solutions</SectionText>
                        <Icon IconId='location' />
                        <span>Bengaluru</span>
                        <Icon IconId='calendar' />
                        <span>Sep 2021 - Dec 2021</span>
                    </FlexWrapper>
                </li>
                <li>
                    <FlexWrapper>
                        <SectionText>SEO / SEM Specialist</SectionText>
                        <span>Internship</span>
                        <Icon IconId='workplace' />
                        <SectionText>HAAPS</SectionText>
                        <Icon IconId='location' />
                        <span>Bengaluru</span>
                        <Icon IconId='calendar' />
                        <span>Sep 2021 - Dec 2021</span>
                    </FlexWrapper>
                </li>
            </ul>
        </StyledWorkExperience>
    );
};


const StyledWorkExperience = styled.section`

`