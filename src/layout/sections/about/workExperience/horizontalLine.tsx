import React from 'react';
import styled from 'styled-components';

export const HorizontalLine = () => {
    return (
        <div>
            <Line></Line>
        </div>
    );
};

const Line = styled.hr`
 margin-bottom: 27px;
 opacity: 50%;
`
