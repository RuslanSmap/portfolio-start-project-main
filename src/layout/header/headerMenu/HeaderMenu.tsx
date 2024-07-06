import React from 'react';
import styled from 'styled-components';

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <ListItem key={index}>
                        <Link href=''>{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    margin: 9px 0px 0px 0px;

    ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    }

`

const ListItem = styled.li`
    :first-child {    
    margin-right: 67px;
}
    :nth-child(2) {
        margin-right: 63px;
    }
    :nth-child(3) {
        margin-right: 54px;
    }
    :nth-child(4) {
        margin-right: 50px;
    }
    :nth-child(5) {
        margin-right: 50px;
    }
`

const Link = styled.a`
color: #666666;
font-family: DM Sans, sans-serif;
font-size: 20px;
font-weight: 500;
letter-spacing: 0px;
text-align: center;
`