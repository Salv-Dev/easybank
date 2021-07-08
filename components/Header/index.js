import React, { useState } from 'react';
import MobileMenu from './../../components/MobileMenu';

import { Container, Image, MenuIcon, MenuDesktop, Item, BtnInvite } from './styles';

function HeaderComponent() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(prevState => !prevState);
  }

  return (
    <>
      <Container>
            <Image src="/logo.svg" alt="easybank logo" />
            <MenuDesktop>
              <Item><a href="#">Home</a></Item>
              <Item><a href="#">About</a></Item>
              <Item><a href="#">Contact</a></Item>
              <Item><a href="#">Blog</a></Item>
              <Item><a href="#">Carreers</a></Item>
            </MenuDesktop>
            <BtnInvite>Request Invite</BtnInvite>
            <MenuIcon onClick={handleMenu}>
              {isOpenMenu ? 
                <Image src="/icon-close.svg" alt="menu-close icon" />
                :
                <Image src="/icon-hamburger.svg" alt="menu-hamburger icon" />
              }
            </MenuIcon>
      </Container>
      {isOpenMenu && <MobileMenu />}
    </>
  );
}

export default HeaderComponent;