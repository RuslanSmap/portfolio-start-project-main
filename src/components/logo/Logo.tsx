import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

export const Logo = () => {
    return (
        <IconLink href="">
            <Icon IconId={'HeaderLogo'} width='97' height='59' />
        </IconLink>
    );
};

const IconLink = styled.a`
    margin-top: 40px;
    margin-right: 305px;
`