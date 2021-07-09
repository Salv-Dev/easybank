import React from 'react';

import { Container, Image, Title, Description } from './styles';

function FeatureComponent({ data }) {
  return (
    <Container>
        <Image src={data.image} alt="img-feature" />
        <Title>{data.title}</Title>
        <Description>{data.desc}</Description>
    </Container>
  );
}

export default FeatureComponent;