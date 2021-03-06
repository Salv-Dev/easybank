import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  background-color: ${props => props.theme.colors.neutral.tertiary};

  @media(min-width: 800px) {
    background-color: ${props => props.theme.colors.neutral.white};
  }

  @media(min-width: 900px) {
    padding: 0 15%;
  }
`;

export const Image = styled.img`
  margin: 20px 0;
`;

export const MenuDesktop = styled.ul`
  display: none;
  justify-content: center;
  list-style: none;

  @media(min-width: 800px) {
    display: flex;
  }
`;

export const Item = styled.li`
  & > a {
    text-decoration: none;
    padding: 20px 0;
    margin: 0 10px;
    color: ${props => props.theme.colors.neutral.primary};
    font-size: 0.8rem;
    position: relative;

    &:before {
      display: none;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, rgba(49,211,92,1) 14%, rgba(43,183,218,1) 100%);
    }

    &:hover {
      color: ${props => props.theme.colors.primary};
    }

    &:hover::before, &:active::before {
      display: block;
    }
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  cursor: pointer;

  @media(min-width: 800px) {
    display: none;
  }
`;
