import React from 'react';

import { Container } from './styles';

function SloganComponent() {
  return (
    <Container>
        <img src="/bg-intro-mobile.svg" alt="background mobile slogan" className="bg-mobile" />
        <img src="/image-mockups.png" alt="mobile phone" className="fg-phone" />
    </Container>
  );
}

export default SloganComponent;