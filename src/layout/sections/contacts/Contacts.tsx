import React from 'react';
import { Email } from './email/Email';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <Email href="mailto:hi@pavanmg.in" text="hi@pavanmg.in" />
            <Icon IconId='contacts-logo' />
            <StyledTel href="tel:+911234509876">+91 12345 09876</StyledTel>
            <Email href='mailto:info@example.com' text="info@example.com" />

            <StyledServices>
                <FlexWrapper direction='column' align='end' >

                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <li><Icon height="30" width="30px" viewBox="0 0 30px 30px"IconId='nav1' /></li>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <li><Icon height="30" width="30px" viewBox="0 0 30px 30px"IconId='nav2' /></li>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <li><Icon height="30" width="30px" viewBox="0 0 30px 30px"IconId='nav3' /></li>
                        </SocialLink>
                    </SocialItem>
                </SocialList>

                </FlexWrapper>
            </StyledServices>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
     background-color: #f5b0c5;
`

const StyledTel = styled.a`

`
const StyledServices = styled.div`
    
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`

`