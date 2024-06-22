import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const SocialMedia = () => {
    return (
        <StyledSocialMedia>
        <ul>
            <li>
                <a href='#'>
                    <Icon IconId='nav1' width='30' height='30' />
                </a>
            </li>
            <li>
                <a href='#'>
                    <Icon IconId='nav2'  width='30' height='30' />
                </a>
            </li>
            <li>
                <a href='#'>
                    <Icon IconId='nav3'  width='30' height='30' />
                </a>
            </li>
        </ul>
        </StyledSocialMedia>
    );
};

const StyledSocialMedia = styled.nav`
    ul {
    display: flex
    };
`