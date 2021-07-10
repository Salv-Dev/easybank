import styled from 'styled-components';

export const Container = styled.section`
    background-color: ${props => props.theme.colors.neutral.tertiary};
    padding: 50px 20px;
`;

export const Header = styled.div``;

export const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    color: ${props => props.theme.colors.primary};
`;

export const ArticlesContainer = styled.div``;