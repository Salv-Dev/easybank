import React, { useState, useRef } from 'react';
import MobileMenu from './../../components/MobileMenu';

import { Container, Image, MenuIcon, MenuDesktop, Item, BtnInvite } from './styles';

function HeaderComponent() {
  const menuBtnRef = useRef(null);
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
                <Image src="/icon-close.svg" alt="menu-close icon" ref={menuBtnRef} />
                :
                <Image src="/icon-hamburger.svg" alt="menu-hamburger icon" ref={menuBtnRef} />
              }
            </MenuIcon>
      </Container>
      {isOpenMenu && <MobileMenu open={setIsOpenMenu} buttonRef={menuBtnRef} /> }
    </>
  );
}

export default HeaderComponent;