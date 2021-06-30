import React, { useState } from 'react';

import { Container, Image, MenuIcon } from './styles';

function HeaderComponent() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(prevState => !prevState);
  }

  return (
    <Container>
          <Image src="/logo.svg" alt="easybank logo" />
          <MenuIcon onClick={handleMenu}>
            {isOpenMenu ? 
              <Image src="/icon-close.svg" alt="menu-close icon" />
              :
              <Image src="/icon-hamburger.svg" alt="menu-hamburger icon" />
            }
          </MenuIcon>
    </Container>
  );
}

export default HeaderComponent;