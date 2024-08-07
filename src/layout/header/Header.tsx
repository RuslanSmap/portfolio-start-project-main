import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { HeaderNav } from './headerNav/HeaderNav';

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                <Logo />
                <HeaderMenu menuItems={items} />
                <HeaderNav/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: #FFFFFF;
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 99999;
`