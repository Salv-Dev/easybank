import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;

    @media(min-width: 800px) {
        flex-direction: row-reverse;
        align-items: center;
        margin-top: 60px;
        margin-bottom: 0;
    }
`;

export const SloganImages = styled.div`
    position: relative;
    display: flex;
    flex: 3;
    width: 100%;

    & > picture {
        @media(min-width: 800px) {
            overflow: hidden;
        }
    }

    & > picture, & > picture > .bg-mobile {
        width: 100%;

        @media(min-width: 800px) {
            width: 110%;
            margin-top: -80px;
            margin-right: -60px;
        }

        @media(min-width: 1200px) {
            margin-top: -120px;
        }
    }

    & > .fg-phone {
        position: absolute;
        bottom: 60px;
        width: 100%;
        background: transparent;

        @media(min-width: 600px) {
            bottom: 120px;
        }

        @media(min-width: 800px) {
            width: 90%;
            top: -140px;
            right: -60px;
        }

        @media(min-width: 1200px) {
            width: 80%;
            top: -160px;
            right: -90px;
        }
    }
`;

export const SloganText = styled.div`
    margin-top: -50px;
    padding: 0 25px;
    flex: 2;

    @media(min-width: 800px) {
        z-index: 0;
    }

    @media(min-width: 900px) {
        padding: 0 0 0 15%;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    color: ${props => props.theme.colors.primary};

    @media(min-width: 800px) {
        text-align: left;
        font-size: 1.5rem;
        width: 70%;
    }

    @media(min-width: 1200px) {
        font-size: 2rem;
        width: 65%;
    }
`;

export const Text = styled.p`
    font-size: 0.8rem;
    margin-top: 10px;
    text-align: center;
    color: ${props => props.theme.colors.neutral.primary};

    @media(min-width: 800px) {
        text-align: left;
        font-size: 0.7rem;
        width: 70%;
    }

    @media(min-width: 1200px) {
        font-size: 0.8rem;
        width: 65%;
    }
`;

export const BtnInvite = styled.button`
  display: flex;
  border: none;
  padding: 10px 25px;
  border-radius: 30px;
  color: ${props => props.theme.colors.neutral.white};
  background: linear-gradient(90deg, rgba(49,211,92,1) 14%, rgba(43,183,218,1) 100%);
  font-size: 0.7rem;
  cursor: pointer;
  margin: 20px auto;

  &:hover {
    opacity: 0.5;
  }

  @media(min-width: 800px) {
        margin: 20px 0;
    }
`;