import React from 'react';
import { ContactsEmail } from './email/ContactsEmail';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { TitleEmail } from './email/TitleEmail';
import { FooterHorizontalLine } from '../../footer/FooterHorizontalLine';

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <ContactsTitle>For any questions please mail me:</ContactsTitle>
                <TitleEmail href="mailto:hi@pavanmg.in" text="hi@pavanmg.in" />
                <ContactsContainer>
                    <Icon IconId='contacts-logo' width='97' height='59' viewBox='0 0 97 59' />
                    <StyledTel href="tel:+911234509876">+91 12345 09876</StyledTel>
                    <ContactsEmail href='mailto:info@example.com' text="info@example.com" />

                    <StyledServices>
                        <FlexWrapper direction='column' align='end' >

                            <SocialList>
                                <SocialItem>
                                    <SocialLink href='#'>
                                        <Icon height="30" width="30px" viewBox="0 0 30px 30px" IconId='nav-footer-1' />
                                    </SocialLink>
                                </SocialItem>

                                <SocialItem>
                                    <SocialLink href='#'>
                                        <Icon height="30" width="30px" viewBox="0 0 30px 30px" IconId='nav-footer-2' />
                                    </SocialLink>
                                </SocialItem>

                                <SocialItem>
                                    <SocialLink href='#'>
                                        <Icon height="30" width="30px" viewBox="0 0 30px 30px" IconId='nav-footer-3' />
                                    </SocialLink>
                                </SocialItem>
                            </SocialList>

                        </FlexWrapper>
                    </StyledServices>
                </ContactsContainer>
                <FooterHorizontalLine />
            </Container>
        </StyledContacts>
    );
};

const ContactsContainer = styled.div`
    margin-top: 200px;
    display: flex;
`

const StyledContacts = styled.section`
  
`
const ContactsTitle = styled.h2`
    text-align: center;
    color: #1E0E62;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
`




const StyledTel = styled.a`
    margin-left: 480px;
    margin-right: 35px;
    margin-bottom: 60px;
    color: #42446E;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
`

const StyledServices = styled.div`
    margin-left: auto;
    margin-bottom: 50px;
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`
    
`