import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';


export const HeaderNav = () => {
    return (
        <StyledHeaderNav>
        <ul>
            <li>
                <Link href='#'>
                    <Icon IconId='nav1' width='30' height='30' viewBox='0 0 30px 30px'/>
                </Link>
            </li>
            <li>
                <Link href='#'>
                    <Icon IconId='nav2'  width='30' height='30' viewBox='0 0 30px 30px'/>
                </Link>
            </li>
            <li>
                <Link href='#'>
                    <Icon IconId='nav3'  width='30' height='30' viewBox='0 0 30px 30px'/>
                </Link>
            </li>
        </ul>
        </StyledHeaderNav>
    );
};

const StyledHeaderNav = styled.nav`
    margin: 9px 0px 0px 0px;

    ul {
    display: flex;
    margin: 0;
    padding: 0;
    }

    li + li {
        margin: 0px 0px 0px 20px;
    };
`

const Link = styled.a`

`
