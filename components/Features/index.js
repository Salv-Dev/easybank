import React from 'react';

import { Container, Header, Title, Description, ContainerFeatures } from './styles';

function FeaturesComponent() {
  return (
    <Container>
        <Header>
            <Title>Why choose Easybank?</Title>
            <Description>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</Description>
        </Header>
        <ContainerFeatures></ContainerFeatures>
    </Container>
  )
}

export default FeaturesComponent;