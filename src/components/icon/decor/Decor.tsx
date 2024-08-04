import React from 'react';
import styled from 'styled-components';
import decorImg from '../../../assets/images/decor.svg'


export const Decor = () => {
    return (
        <div>
            <DecorImg src={decorImg}></DecorImg>
        </div>
    );
};

const DecorImg = styled.img`
  width: 835px;
  height: 835px;
  position: static;
  margin-right: -390px;

`