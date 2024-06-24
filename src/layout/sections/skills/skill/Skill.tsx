import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

type SkillPropsType = {
    IconId: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon IconId={props.IconId} width='120px' height='120px'  viewBox='0 0 120 120'/>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
 background-color: #c2b2b2;

`