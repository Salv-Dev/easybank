import styled from "styled-components";

export const Button = styled.button`
    display: ${props => props.isVisible ? 'flex' : 'none'};
    border: none;
    padding: 10px 25px;
    border-radius: 30px;
    color: ${props => props.theme.colors.neutral.white};
    background: linear-gradient(90deg, rgba(49,211,92,1) 14%, rgba(43,183,218,1) 100%);
    font-size: 0.7rem;
    cursor: pointer;
    margin: 0 auto;

    &:hover {
        opacity: 0.5;
    }

    @media(min-width: 800px) {
        display: flex;
        margin: 0;
    }
`;