import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionText } from '../../../components/SectionText';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import projectImage1 from '../../../assets/images/proj-1.webp'
import projectImage2 from '../../../assets/images/proj-2.webp'
import projectImage3 from '../../../assets/images/proj-3.webp'
import projectImage4 from '../../../assets/images/proj-4.webp'
import projectImage5 from '../../../assets/images/proj-5.webp'
import projectImage6 from '../../../assets/images/proj-6.webp'
import { Container } from '../../../components/Container';


export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <ProjectsTitle>Projects</ProjectsTitle>
                <ProjectsText>Things I’ve built so far</ProjectsText>
                <ProjectsWorks>
                <FlexWrapper justify={'space-around'} wrap={'wrap'}>
                    <Work title={'Project Tile goes here'}
                        text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                        // technology={'Tech stack : HTML , JavaScript, SASS, React'}
                        src={projectImage1} />

                    <Work title={'Project Tile goes here'}
                        text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                        // technology={'Tech stack : HTML , JavaScript, SASS, React'}
                        src={projectImage2} />

                    <Work title={'Project Tile goes here'}
                        text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                        // technology={'Tech stack : HTML , JavaScript, SASS, React'}
                        src={projectImage3} />

                    <Work title={'Project Tile goes here'}
                        text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                        // technology={'Tech stack : HTML , JavaScript, SASS, React'}
                        src={projectImage4} />

                    <Work title={'Project Tile goes here'}
                        text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                        // technology={'Tech stack : HTML , JavaScript, SASS, React'}
                        src={projectImage5} />

                    <Work title={'Project Tile goes here'}
                        text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                        // technology={'Tech stack : HTML , JavaScript, SASS, React'}
                        src={projectImage6} />
                </FlexWrapper>
                </ProjectsWorks>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    /* min-height: 100vh; */
   
`
const ProjectsTitle = styled.h2`
   margin: 200px 0px 50px 0px;
   text-align: center;
   color: #42446E; 
   font-family: 'Poppins', sans-serif;
   font-weight: 700px;
   font-size: 48px;
   letter-spacing: 0px;
   line-height: 26px;
`
const ProjectsText = styled.p`
   margin-bottom: 100px;
   text-align: center;
   color: #666666; 
   font-family: 'Poppins', sans-serif;
   font-weight: 400px;
   font-size: 32px;
   letter-spacing: 0px;
   line-height: 26px;
`

const ProjectsWorks = styled.div`
      div:nth-child(3),
      div:nth-child(6) {
        margin-right: 0px;
    }
`