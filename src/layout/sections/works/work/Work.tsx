import React from 'react';
import styled from 'styled-components';
import iconLink from '../../../../assets/images/link-icon.svg'
import worksGitLink from '../../../../assets/images/git-link.svg'

type WorkPropsType = {
    title: string
    text: string
    // technology: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt='' />
            <WorkContainer>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Technologies>
                    <TechnologyTitle>Tech stack : &nbsp;</TechnologyTitle>
                    <TechnologyText>HTML , JavaScript, SASS, React</TechnologyText>
                </Technologies>
                <LinkContainer>
                    <IconLink src={iconLink}></IconLink>
                    <Link href={'#'}>Live Preview</Link>

                    <IconLink src={worksGitLink}></IconLink>
                    <Link href={'#'}>View Code</Link>
                </LinkContainer>
            </WorkContainer>
        </StyledWork>
    );
};


const StyledWork = styled.div`
    /* background-color: #ffe869; */
    max-width: 375px;
    max-height: 570px;
    width: 100%;
    margin-right: 35px;
    margin-bottom: 60px;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
  
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const WorkContainer = styled.div`
    max-width: 315px;
    margin: 0px 30px 0px 30px;
`

const Link = styled.a`
   
`
const Title = styled.h3`
    color: #000000;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 28px;
    line-height: 26px;
    letter-spacing: 0px;
    margin-top: 27px;
    margin-bottom: 17px;
`

const Text = styled.p`
    color: #666666;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;   
    margin-bottom: 12px;
`

const TechnologyTitle = styled.span`
    color: #42446E;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0px;
`
const TechnologyText = styled.p`
    color: #42446E;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0px;
    margin-bottom: 20px;
`

const Technologies = styled.p`
    display: flex;
    justify-content: flex-start;
`

const LinkContainer = styled.div`
  a:nth-child(2){
    margin-right: 48px;
  }
  margin-bottom: 25px;
`
const IconLink = styled.img`
    margin-right: 10px;
`