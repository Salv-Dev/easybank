import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 20px;
    margin-top: 40px;

    @media(min-width: 600px) {
        width: 50%;
    }
`;

export const Image = styled.img`
    margin: 0 auto;

    @media(min-width: 800px) {
        margin: 0 auto 0 0;
    }
`;

export const Title = styled.h3`
    text-align: center;
    font-size: 1.2rem;
    font-weight: 300;
    color: ${props => props.theme.colors.primary};
    margin: 20px 0;

    @media(min-width: 800px) {
        text-align: left;
    }
`;

export const Description = styled.p`
    text-align: center;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.neutral.primary};

    @media(min-width: 800px) {
        text-align: left;
    }
`;