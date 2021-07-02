import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SloganImages = styled.div`
    position: relative;
    display: flex;

    & > .bg-mobile {
        width: 100%;
    }

    & > .fg-phone {
        position: absolute;
        bottom: 60px;
        width: 100%;
        background: transparent;
    }
`;

export const SloganText = styled.div`
    margin-top: -50px;
    padding: 0 25px;
    z-index: 2;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    color: hsl(233, 26%, 24%);
`;

export const Text = styled.p`
    font-size: 0.8rem;
    margin-top: 10px;
    text-align: center;
    color: hsl(233, 8%, 62%);
`;

export const BtnInvite = styled.button`
  display: flex;
  border: none;
  padding: 10px 25px;
  border-radius: 30px;
  color: white;
  background: linear-gradient(90deg, rgba(49,211,92,1) 14%, rgba(43,183,218,1) 100%);
  font-size: 0.7rem;
  cursor: pointer;
  margin: 10px auto;

  &:hover {
    opacity: 0.5;
  }
`;