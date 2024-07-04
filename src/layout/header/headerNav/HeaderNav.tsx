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
    ul {
    display: flex
    }

    li + li {
        margin-left : 20px;
    }

    ;
`

const Link = styled.a`
    
`
