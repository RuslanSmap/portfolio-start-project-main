import React from 'react';
import { SectionText } from '../../../../components/SectionText';
import styled from 'styled-components';

type EmailPropsType = {
    href: string,
    text: string
}

export const ContactsEmail = (props: EmailPropsType) => {
    return (
        <StyledEmail>
            <EmailLink href={props.href}>{props.text}</EmailLink>
        </StyledEmail>
    );
};

const EmailLink = styled.a`
    color: #42446E;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
    margin-right: 50px;
`
const StyledEmail = styled.div`
   
`