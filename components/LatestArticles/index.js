import React from 'react';
import Article from './../Article';

import { Container, Header, Title, ArticlesContainer } from './styles';

function LatestArticlesComponent() {
  return (
      <Container>
          <Header>
            <Title>Latest Articles</Title>
          </Header>
          <ArticlesContainer>
            <Article />
          </ArticlesContainer>
      </Container>
  );
}

export default LatestArticlesComponent;