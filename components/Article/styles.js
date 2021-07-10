import styled from 'styled-components';

export const Container = styled.article`
    background-color: ${props => props.theme.colors.neutral.white};
    border-radius: 5px;
    border: 1px solid transparent;
    margin-bottom: 20px;
    cursor: pointer;
    transition: border .2s ease-in-out;

    &:hover, &:active {
        border: 1px solid ${props => props.theme.colors.secondary};
    }

    @media(min-width: 600px) {
        width: 45%;
        margin: 0 20px 20px 0;
    }

    @media(min-width: 800px) {
        width: 280px;
    }
`;

export const Image = styled.img`
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    @media(min-width: 600px) {
        height: 200px;
    }

    @media(min-width: 800px) {
        height: 200px;
    }
`;

export const InfosContainer = styled.div`
    padding: 40px;
`;

export const Author = styled.p`
    font-size: 0.7rem;
    color: ${props => props.theme.colors.neutral.primary};
    margin-bottom: 10px;
`;

export const Title = styled.h3`
    font-weight: 300;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-size: 0.8rem;
    color: ${props => props.theme.colors.neutral.primary};
`;