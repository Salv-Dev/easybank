import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.neutral.secondary};
    padding: 50px 20px;
`;

export const Header = styled.div``;

export const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    color: ${props => props.theme.colors.primary};
`;

export const Description = styled.p`
    text-align: center;
    margin-top: 20px;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.neutral.primary};
`;

export const ContainerFeatures = styled.div``;