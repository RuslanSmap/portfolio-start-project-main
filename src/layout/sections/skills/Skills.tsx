import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionText } from '../../../components/SectionText';
import { Skill } from '../skills/skill/Skill'
export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionText> Technologies I’ve been working with recently</SectionText>
            <FlexWrapper wrap='wrap' justify='space-around'>
                <Skill IconId={'html'}/>
                <Skill IconId={'css'}/>
                <Skill IconId={'js'}/>
                <Skill IconId={'react'}/>
                <Skill IconId={'vector5'}/>
                <Skill IconId={'bootstrap'}/>
                <Skill IconId={'sass'}/>
                <Skill IconId={'git'}/>
                <Skill IconId={'greensock'}/>
                <Skill IconId={'html'}/>
                <Skill IconId={'vscode'}/>
                <Skill IconId={'github'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
   

`
