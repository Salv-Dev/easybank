import React from 'react';

import { Container, Image, InfosContainer, Author, Title, Description } from './styles';

function ArticleComponent({ data }) {
  return (
      <Container>
          <Image src={data.image} alt="article-image" />
          <InfosContainer>
            <Author>by {data.author}</Author>
            <Title>{data.title}</Title>
            <Description>{data.desc}</Description>
          </InfosContainer>
      </Container>
  );
}

export default ArticleComponent;