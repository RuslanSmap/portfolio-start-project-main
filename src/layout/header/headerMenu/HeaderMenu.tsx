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
    ul {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    }

`

const ListItem = styled.li`

`

const Link = styled.a`
color: rgb(102, 102, 102);
font-family: DM Sans, sans-serif;
font-size: 20px;
font-weight: 500;
letter-spacing: 0px;
text-align: center;
`