import styled from 'styled-components';

export const Container = styled.section`
    background-color: ${props => props.theme.colors.neutral.tertiary};
    padding: 50px 20px;

    @media(min-width: 900px) {
        padding: 100px 15%;
    }
`;

export const Header = styled.div``;

export const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    color: ${props => props.theme.colors.primary};

    @media(min-width: 800px) {
        font-size: 1.5rem;
        text-align: left;
    }

    @media(min-width: 1200px) {
        font-size: 2rem;
    }
`;

export const ArticlesContainer = styled.div`
    margin-top: 20px;

    @media(min-width: 600px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;
    }

    @media(min-width: 800px) {
        justify-content: flex-start;
    }
`;