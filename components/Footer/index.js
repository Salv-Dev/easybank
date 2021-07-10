import React from 'react';

import { Container, LogoAndSocialMedia, Logo, SocialMedia, Image,  } from './styles';

function FooterComponent() {
  return (
      <Container>
          <LogoAndSocialMedia>
              <Logo />
              <SocialMedia>
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
              </SocialMedia>
          </LogoAndSocialMedia>
          

      </Container>
  );
}

export default FooterComponent;