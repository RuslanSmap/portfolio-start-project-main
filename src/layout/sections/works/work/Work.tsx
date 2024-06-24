import React from 'react';
import styled from 'styled-components';

type WorkPropsType = {
    title: string
    text: string
    technology: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=''/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Technologies>{props.technology}</Technologies>
            <Link href={'#'}>Live Preview</Link>
            <Link href={'#'}>View Code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #ffe869;
    max-width: 375px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Link = styled.a`

`
const Title = styled.h3`

`

const Text = styled.p`

`

const Technologies = styled.span`

`