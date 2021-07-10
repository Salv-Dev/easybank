import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.neutral.white};
    padding: 60px 10px;
`;

export const LogoAndSocialMedia = styled.div``;

export const Logo = styled.div`

    & > svg .word {
        fill: white;
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`;

export const Icon = styled.div`
    &:hover > svg path, &:active > svg path {
        fill: ${props => props.theme.colors.secondary}
    }
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    margin-bottom: 20px;
`;

export const Item = styled.li`
    margin: 5px 0;

    & > a {
        text-decoration: none;
        color: ${props => props.theme.colors.neutral.white};
        font-weight: 300;
        cursor: pointer;

        &:hover, &:active {
            color: ${props => props.theme.colors.secondary};
        }
    }
`;

export const Copyright = styled.p`
    margin-top: 20px;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.neutral.primary};
`;