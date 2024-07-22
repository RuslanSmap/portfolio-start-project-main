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
                        <WorkDescription>
                            <SectionText>Junior Web Developer</SectionText>
                            <StyledSpan>Full Time</StyledSpan>
                        </WorkDescription>

                        <DateAndPlace>
                            <ElementContainer>
                                <Icon IconId='workplace' width='9' height='9' viewBox='20' />
                                <SectionText>Dr. Rajkumar’s Learning App</SectionText>
                            </ElementContainer>
                            <ElementContainer>
                                <Icon IconId='location' width='16' height='12' viewBox='20' />
                                <SectionText>Bengaluru</SectionText>
                            </ElementContainer>
                            <ElementContainer>
                                <Icon IconId='calendar' width='12' height='9' viewBox='20'/>
                                <SectionText>Sep 2021 - Dec 2021</SectionText>
                            </ElementContainer>
                        </DateAndPlace>
                </li>
                <li>
                        <WorkDescription>
                            <SectionText>Web Development Intern</SectionText>
                            <StyledSpan>Internship</StyledSpan>
                        </WorkDescription>
                        
                        <DateAndPlace>
                            <ElementContainer>
                                <Icon IconId='workplace' width='9' height='9' viewBox='20' />
                                <SectionText>IonPixelz Web Solutions</SectionText>
                            </ElementContainer>
                            <ElementContainer>
                                <Icon IconId='location' width='16' height='12' viewBox='20' />
                                <SectionText>Bengaluru</SectionText>
                            </ElementContainer>
                            <ElementContainer>
                                <Icon IconId='calendar' width='12' height='9' viewBox='20'/>
                                <SectionText>Sep 2021 - Dec 2021</SectionText>
                            </ElementContainer>
                        </DateAndPlace>
                </li>
                <li>
                        <WorkDescription>
                            <SectionText>SEO / SEM Specialist</SectionText>
                            <StyledSpan>Internship</StyledSpan>
                        </WorkDescription>
                        
                        <DateAndPlace>
                            <ElementContainer>
                                <Icon IconId='workplace' width='9' height='9' viewBox='20' />
                                <SectionText>HAAPS</SectionText>
                            </ElementContainer>
                            <ElementContainer>
                                <Icon IconId='location' width='16' height='12' viewBox='20' />
                                <SectionText>Bengaluru</SectionText>
                            </ElementContainer>
                            <ElementContainer>
                                <Icon IconId='calendar' width='12' height='9' viewBox='20'/>
                                <SectionText>Sep 2021 - Dec 2021</SectionText>
                            </ElementContainer>
                        </DateAndPlace>
                </li>
            </ul>
        </StyledWorkExperience>
    );
};


const WorkDescription = styled.div`
    display: flex;
    justify-content: space-between;
`
const DateAndPlace = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
`

const ElementContainer = styled.div`
    display: flex;
    gap: 5px;
`

const StyledSpan = styled.span`
    
`

const StyledWorkExperience = styled.section`

`
