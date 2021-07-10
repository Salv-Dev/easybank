import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.neutral.white};
    padding: 60px 10px;

    @media(min-width: 800px) {
        padding: 60px 20px;
        flex-direction: row;
        justify-content: space-between;
    }

    @media(min-width: 900px) {
        padding: 60px 15%;
    }
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
    cursor: pointer;

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

    @media(min-width: 800px) {
        height: 100px;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        margin-bottom: 0;
    }
`;

export const Item = styled.li`
    margin: 5px 0;

    @media(min-width: 800px) {
        margin-right: 80px;
    }

    @media(min-width: 900px) {
        margin-right: 40px;
    }

    @media(min-width: 1200px) {
        margin-right: 100px;
    }

    & > a {
        text-decoration: none;
        color: ${props => props.theme.colors.neutral.white};
        font-weight: 300;
        cursor: pointer;

        &:hover, &:active {
            color: ${props => props.theme.colors.secondary};
        }

        @media(min-width: 800px) {
            font-size: 0.8rem;
        }
    }
`;

export const Copyright = styled.div`
    & > div {
        display: flex;
        justify-content: space-between;
    }
`;

export const Text = styled.p`
    margin-top: 20px;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.neutral.primary};
`;