import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionText } from '../../../../components/SectionText';
import { HorizontalLine } from './horizontalLine';

export const WorkExperience = () => {
    return (
        <StyledWorkExperience>
            <TitleContainer>
                <SectionTitle>Work Experience</SectionTitle>
            </TitleContainer>
            <ul>
                <li>
                    <WorkDescription>
                        <WorkDescriptionText>Junior Web Developer</WorkDescriptionText>
                        <StyledSpan>Full Time</StyledSpan>
                    </WorkDescription>
                    
                    <DateAndPlace>
                        <PlaceContainer>
                            <ItemContainer>
                                <Icon IconId='workplace' width='9' height='9' viewBox='20' />
                                <PlaceText>Dr. Rajkumar’s Learning App</PlaceText>
                            </ItemContainer>
                            <ItemContainer>
                                <Icon IconId='location' width='16' height='12' viewBox='20' />
                                <LocationText>Bengaluru</LocationText>
                            </ItemContainer>
                        </PlaceContainer>
                        <ElementContainer>
                            <Icon IconId='calendar' width='12' height='9' viewBox='20' />
                            <DateText>Sep 2021 - Dec 2021</DateText>
                        </ElementContainer>
                    </DateAndPlace>
                    <HorizontalLine />
                </li>
                <li>
                    <WorkDescription>
                        <SectionText>Web Development Intern</SectionText>
                        <StyledSpan>Internship</StyledSpan>
                    </WorkDescription>
                    <DateAndPlace>
                        <PlaceContainer>
                            <ItemContainer>
                                <Icon IconId='workplace' width='9' height='9' viewBox='20' />
                                <PlaceText>IonPixelz Web Solutions</PlaceText>
                            </ItemContainer>
                            <ItemContainer>
                                <Icon IconId='location' width='16' height='12' viewBox='20' />
                                <LocationText>Bengaluru</LocationText>
                            </ItemContainer>
                        </PlaceContainer>
                        <ElementContainer>
                            <Icon IconId='calendar' width='12' height='9' viewBox='20' />
                            <DateText>Sep 2021 - Dec 2021</DateText>
                        </ElementContainer>
                    </DateAndPlace>
                    <HorizontalLine />
                </li>
                <li>
                    <WorkDescription>
                        <SectionText>SEO / SEM Specialist</SectionText>
                        <StyledSpan>Internship</StyledSpan>
                    </WorkDescription>
                    <DateAndPlace>
                        <PlaceContainer>
                            <ItemContainer>
                                <Icon IconId='workplace' width='9' height='9' viewBox='20' />
                                <PlaceText>HAAPS</PlaceText>
                            </ItemContainer>
                            <ItemContainer>
                                <Icon IconId='location' width='16' height='12' viewBox='20' />
                                <LocationText>Bengaluru</LocationText>
                            </ItemContainer>
                        </PlaceContainer>
                        <ElementContainer>
                            <Icon IconId='calendar' width='12' height='9' viewBox='20' />
                            <DateText>Sep 2021 - Dec 2021</DateText>
                        </ElementContainer>
                    </DateAndPlace>
                    <HorizontalLine />
                </li>
            </ul>
        </StyledWorkExperience>
    );
};

export const TitleContainer = styled.div`
    margin-bottom: 35px;
`

const WorkDescription = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3px;
`
const WorkDescriptionText = styled.p`
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 1px;
    height: 28px;
`
const PlaceText = styled.p`
    color: #A7A7A7;
    font-weight: 500;
    font-size: 12px;
    height: 28px;
`


const DateAndPlace = styled.div`
    display: flex;
    justify-content: space-between;
    
`

const ElementContainer = styled.div`
    display: flex;
    gap: 5px;
`
const PlaceContainer = styled.div`
    width: 363px;
    display: flex;
    justify-content: space-between;
`
const ItemContainer = styled.div`
    display: flex;
    gap: 10px;
`

const LocationText = styled.span`
    color: #A7A7A7;
    font-weight: 500;
    font-size: 12px;
    height: 28px;
    
`
const DateText = styled.p`
    color: #A7A7A7;
    font-weight: 500;
    font-size: 12px;
    height: 28px;
`

const StyledSpan = styled.span`
    width: 84px;
    height: 24px;
    border-radius: 100px;
    background-color: #25DAC5;
    color: #018C0F;
    font-size: 9px;
    text-align: center;
    padding-top: 5px;
    margin-top: -3px;
    margin-bottom: 8px;
`

const StyledWorkExperience = styled.section`

`
