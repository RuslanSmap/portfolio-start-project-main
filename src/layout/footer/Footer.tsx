import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { FlexWrapper } from '../../components/FlexWrapper';

const items = ["Home", "About", "Technologies", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify='space-between'>
                <Menu menuItems={items} />
                <Copyright>Designed and built by <span>Pavan MG</span> with <span>Love </span>& <span>Coffee</span></Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #91e59f;
`
const Copyright = styled.small`

`
