import React from 'react';
import { Email } from './email/Email';
import styled from 'styled-components';

export const Contacts = () => {
    return (
        <StyledContacts>
            <Email />
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
     background-color: #f5b0c5;
`