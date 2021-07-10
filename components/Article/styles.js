import styled from 'styled-components';

export const Container = styled.article`
    background-color: ${props => props.theme.colors.neutral.white};
    border-radius: 5px;
    margin-top: 20px;
    border: 1px solid transparent;
    transition: border .2s ease-in-out;

    &:hover, &:active {
        border: 1px solid ${props => props.theme.colors.secondary};
    }
`;

export const Image = styled.img`
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
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