import React from 'react';
import features from './features';
import Feature from './../Feature';

import { Container, Header, Title, Description, ContainerFeatures } from './styles';

function FeaturesComponent() {
  return (
    <Container>
        <Header>
            <Title>Why choose Easybank?</Title>
            <Description>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</Description>
        </Header>
        <ContainerFeatures>
            {features.map(item => (
                <Feature data={item} />
            ))}
        </ContainerFeatures>
    </Container>
  )
}

export default FeaturesComponent;