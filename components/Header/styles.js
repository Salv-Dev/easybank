import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background-color: hsl(0, 0%, 98%);
`;

export const Image = styled.img``;

export const MenuDesktop = styled.ul`
  display: none;
  justify-content: center;
  list-style: none;
`;

export const Item = styled.li`
  & > a {
    text-decoration: none;
    padding: 10px 20px;
    color: hsl(233, 8%, 62%);
    font-size: 0.8rem;
  }
`;

export const BtnInvite = styled.button`
  display: none;
  border: none;
  padding: 10px 25px;
  border-radius: 30px;
  color: white;
  background: linear-gradient(90deg, rgba(49,211,92,1) 14%, rgba(43,183,218,1) 100%);
  font-size: 0.7rem;
`;

export const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  cursor: pointer;
`;
