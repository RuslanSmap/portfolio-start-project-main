import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';

export const Education = () => {
    return (
        <div>
            <StyledEducationTitle>Education</StyledEducationTitle>
            <ul>
                <li>
                    <FlexWrapper>
                        <StyledEducationText>Bachelor in Electronics & Communication</StyledEducationText>
                        <span>Full Time</span>
                        <Icon IconId='workplace' />
                        <StyledEducationText>Bangalore Instutute of Technology</StyledEducationText>
                        <Icon IconId='calendar' />
                        <StyledEducationCalendarDate>Aug 2015 - Dec 2020</StyledEducationCalendarDate>

                    </FlexWrapper>
                </li>
            </ul>
        </div>
    );
};

const StyledEducationTitle = styled.h3`

`

const StyledEducationText = styled.p`

`

const StyledEducationCalendarDate = styled.p`

`