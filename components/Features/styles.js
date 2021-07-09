import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.neutral.secondary};
    padding: 50px 20px;

    @media(min-width: 900px) {
        padding: 100px 15%;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 800px) {
        align-items: flex-start;
    }
`;

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
        text-align: left;
    }
`;

export const Description = styled.p`
    text-align: center;
    margin-top: 20px;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.neutral.primary};

    @media(min-width: 600px) {
        width: 70%;
    }

    @media(min-width: 800px) {
        width: 50%;
        text-align: left;
    }

    @media(min-width: 900px) {
        width: 70%;
    }

    @media(min-width: 1200px) {
        width: 50%;
    }
`;

export const ContainerFeatures = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    @media(min-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media(min-width: 1200px) {
        flex-direction: row;
        flex-wrap: nowrap;
    }
`;