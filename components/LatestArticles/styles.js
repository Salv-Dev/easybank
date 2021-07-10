import styled from 'styled-components';

export const Container = styled.article`
    background-color: ${props => props.theme.colors.neutral.white};
    padding: 50px 20px;
`;

export const Header = styled.div``;

export const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    color: ${props => props.theme.colors.primary};
`;