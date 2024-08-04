import React from 'react';
import styled from 'styled-components';

export const FooterMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item: string, index: number)=>{
                    return <li key={index}>
                        <a href=''>{item}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav `
    ul {
    display: flex;
    /* gap: 50px; */
    margin-right: 165px;;
    margin-bottom: 60px;
    }
    ul li {
        color: #42446E;
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        letter-spacing: 0px;
        margin-right: 52px;
    } 
    ul :nth-child(5) {
        margin-right: 0;
    }

`
