import styled from 'styled-components';

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 40px 0;
    margin-top: 80px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 2px 0px 151px 200px rgba(45,49,77,0.49);

    @media(min-width: 800px) {
        display: none;
    }
`;

export const Item = styled.li`
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0px;
    }

    & > a {
        text-decoration: none;
        color: hsl(233, 26%, 24%);
    }

    & > a:active {
        opacity: 0.5;
    }
`;