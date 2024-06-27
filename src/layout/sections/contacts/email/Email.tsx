import React from 'react';
import { SectionText } from '../../../../components/SectionText';
import styled from 'styled-components';

type EmailPropsType = {
    href: string,
    text: string
}

export const Email = (props: EmailPropsType) => {
    return (
        <StyledEmail>
            <EmailLink href={props.href}>{props.text}</EmailLink>
        </StyledEmail>
    );
};

const EmailLink = styled.a`
    
   
`
const StyledEmail = styled.div`
    text-align: center;
`