import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionText } from '../../../../components/SectionText';

export const Education = () => {
    return (
        <StyledEducation>
            <SectionTitle>Education</SectionTitle>
            <ul>
                <li>
                    <FlexWrapper>
                        <SectionText>Bachelor in Electronics & Communication</SectionText>
                        <span>Full Time</span>
                        <Icon IconId='workplace' />
                        <span>Bangalore Instutute of Technology</span>
                        <Icon IconId='calendar' />
                        <span>Aug 2015 - Dec 2020</span>
                    </FlexWrapper>
                </li>
            </ul>
        </StyledEducation>
    );
};

const StyledEducation = styled.section`

`