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

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <SectionText>Things I’ve built so far</SectionText>
            <FlexWrapper justify={'space-around'} wrap={'wrap'}>
                <Work title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    technology={'Tech stack : HTML , JavaScript, SASS, React'}
                    src={projectImage1} />

                <Work title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    technology={'Tech stack : HTML , JavaScript, SASS, React'}
                    src={projectImage2} />

                <Work title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    technology={'Tech stack : HTML , JavaScript, SASS, React'}
                    src={projectImage3} />

                <Work title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    technology={'Tech stack : HTML , JavaScript, SASS, React'}
                    src={projectImage4} />

                <Work title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    technology={'Tech stack : HTML , JavaScript, SASS, React'}
                    src={projectImage5} />

                <Work title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    technology={'Tech stack : HTML , JavaScript, SASS, React'}
                    src={projectImage6} />
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #deefff;
`