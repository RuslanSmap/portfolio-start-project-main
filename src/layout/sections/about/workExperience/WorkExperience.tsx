import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';

export const WorkExperience = () => {
    return (
        <div>
            <StyledWorkExperienceTitle>Work Experience</StyledWorkExperienceTitle>
            <ul>
                <li>
                    <FlexWrapper align='center'>
                        <StyledWorkExperienceText>Junior Web Developer</StyledWorkExperienceText>
                        <span>Full Time</span>
                        <Icon IconId='workplace' />
                        <StyledWorkExperiencePlaceText>Dr. Rajkumar’s Learning App</StyledWorkExperiencePlaceText>
                        <Icon IconId='location' />
                        <StyledWorkExperienceLocationText>Bengaluru</StyledWorkExperienceLocationText>
                        <Icon IconId='calendar' />
                        <StyledWorkExperienceCalendarDate>Sep 2021 - Dec 2021</StyledWorkExperienceCalendarDate>
                    </FlexWrapper>
                </li>
                <li>
                    <FlexWrapper>
                        <StyledWorkExperienceText>Web Development Intern</StyledWorkExperienceText>
                        <span>Internship</span>
                        <Icon IconId='workplace' />
                        <StyledWorkExperiencePlaceText>IonPixelz Web Solutions</StyledWorkExperiencePlaceText>
                        <Icon IconId='location' />
                        <StyledWorkExperienceLocationText>Bengaluru</StyledWorkExperienceLocationText>
                        <Icon IconId='calendar' />
                        <StyledWorkExperienceCalendarDate>Sep 2021 - Dec 2021</StyledWorkExperienceCalendarDate>
                    </FlexWrapper>
                </li>
                <li>
                    <FlexWrapper>
                        <StyledWorkExperienceText>SEO / SEM Specialist</StyledWorkExperienceText>
                        <span>Internship</span>
                        <Icon IconId='workplace' />
                        <StyledWorkExperiencePlaceText>HAAPS</StyledWorkExperiencePlaceText>
                        <Icon IconId='location' />
                        <StyledWorkExperienceLocationText>Bengaluru</StyledWorkExperienceLocationText>
                        <Icon IconId='calendar' />
                        <StyledWorkExperienceCalendarDate>Sep 2021 - Dec 2021</StyledWorkExperienceCalendarDate>
                    </FlexWrapper>
                </li>
            </ul>
        </div>
    );
};

const StyledWorkExperienceTitle = styled.h3`

`
const StyledWorkExperienceText = styled.p`

`


const StyledWorkExperiencePlaceText = styled.p`

`

const StyledWorkExperienceLocationText = styled.p`

`

const StyledWorkExperienceCalendarDate = styled.p`

`