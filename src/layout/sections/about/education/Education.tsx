import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionText } from '../../../../components/SectionText';
import { HorizontalLine } from '../workExperience/horizontalLine';


export const Education = () => {
    return (
        <StyledEducation>
            <TitleEducationContainer>
                <SectionTitle>Education</SectionTitle>
            </TitleEducationContainer>
            <ul>
                <li>
                    <EducationDescription>
                        <EducationDescriptionText>Bachelor in Electronics & Communication</EducationDescriptionText>
                        <StyledEducationSpan>Full Time</StyledEducationSpan>
                    </EducationDescription>

                    <EducationDateAndPlace>

                        <EducationPlaceContainer>
                            <EducationItemContainer>
                                <Icon IconId='workplace' width='9' height='9' viewBox='20' />
                                <EducationPlaceText>Bangalore Instutute of Technology</EducationPlaceText>
                            </EducationItemContainer>
                        </EducationPlaceContainer>

                        <EducationDateContainer>
                            <Icon IconId='calendar' width='12' height='9' viewBox='20' />
                            <EducationDateText>Aug 2015 - Dec 2020</EducationDateText>
                        </EducationDateContainer>
                    </EducationDateAndPlace>
                    <HorizontalLine />
                </li>
            </ul>
        </StyledEducation>
    );
};

const StyledEducation = styled.section`

`
const EducationDescription = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3px;
`

const TitleEducationContainer = styled.div`
    margin-bottom: 35px;
`
const EducationDescriptionText = styled.p`
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 1px;
    height: 28px;
`
const EducationDateAndPlace = styled.div`
     display: flex;
     justify-content: space-between;
`
const EducationDateContainer = styled.div`
     display: flex;
     gap: 5px;
`
const EducationPlaceContainer = styled.div`
    width: 363px;
    display: flex;
    justify-content: space-between;
`
const EducationPlaceText = styled.p`
    color: #A7A7A7;
    font-weight: 500;
    font-size: 12px;
    height: 28px;
`

const EducationItemContainer = styled.div`
    display: flex;
    gap: 10px;
`
const EducationDateText = styled.p`
    color: #A7A7A7;
    font-weight: 500;
    font-size: 12px;
    height: 28px;
`

const StyledEducationSpan = styled.span`
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