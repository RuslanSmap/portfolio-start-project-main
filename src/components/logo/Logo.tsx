import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

export const Logo = () => {
    return (
        <IconLink>
            <Icon IconId={'HeaderLogo'} width='97' height='59'/>
        </IconLink>
    );
};

const IconLink = styled.a`
    margin-top: 41px;
`