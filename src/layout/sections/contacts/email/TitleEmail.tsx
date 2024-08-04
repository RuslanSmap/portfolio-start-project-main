import React from 'react';

import styled from 'styled-components';

type EmailPropsType = {
    href: string,
    text: string
}

export const TitleEmail = (props: EmailPropsType) => {
    return (
        <StyledEmail>
            <EmailLink href={props.href}>{props.text}</EmailLink>
        </StyledEmail>
    );
};

const EmailLink = styled.a`
    
   
`
const StyledEmail = styled.div`
    margin-top: 10px;
    text-align: center;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
    background: radial-gradient(#13B0F5,#E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`