import React from 'react';
import { SectionText } from '../../../../components/SectionText';
import styled from 'styled-components';

export const Email = () => {
    return (
        <div>
            <SectionText>For any questions please mail me:</SectionText>
            <EmailLink>hi@pavanmg.in</EmailLink>
        </div>
    );
};

const EmailLink = styled.a`
    display: flex;
    align-items: center;
   
`