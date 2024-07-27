import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

type SkillPropsType = {
    IconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon IconId={props.IconId} width={props.width} height={props.width} viewBox={props.viewBox}  />
        </StyledSkill>
    );
};

// width='120px' height='120px' viewBox='120 120'

const StyledSkill = styled.div`
 text-align: center;
 gap: 0px;
 margin-right: 105px;
 margin-bottom: 100px;

 :nth-child(6),
 :nth-child(12) {
    margin-right: 0px;
}


`