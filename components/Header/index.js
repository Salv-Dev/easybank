import React from 'react';

import { Container, Logo, Image } from './styles';

function HeaderComponent() {
  return (
    <Container>
        <Logo>
            <Image src="/logo.svg" alt="easybank logo" />
        </Logo>
    </Container>
  );
}

export default HeaderComponent;