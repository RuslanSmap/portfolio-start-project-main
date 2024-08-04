import React from 'react';
import styled from 'styled-components';

export const FooterHorizontalLine = () => {
    return (
        <div>
            <Line></Line>
        </div>
    );
};

const Line = styled.hr`
 margin-bottom: 45px;
 opacity: 50%;
`
