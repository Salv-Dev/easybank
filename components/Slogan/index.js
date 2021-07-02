import React from 'react';

import { Container, SloganImages, SloganText, Title, Text, BtnInvite } from './styles';

function SloganComponent() {
  return (
    <Container>
        <SloganImages>
          <img src="/bg-intro-mobile.svg" alt="background mobile slogan" className="bg-mobile" />
          <img src="/image-mockups.png" alt="mobile phone" className="fg-phone" />
        </SloganImages>
        <SloganText>
          <Title>Next generation digital banking</Title>
          <Text>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</Text>
          <BtnInvite>Request Invite</BtnInvite>
        </SloganText>
    </Container>
  );
}

export default SloganComponent;