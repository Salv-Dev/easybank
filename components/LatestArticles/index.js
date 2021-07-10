import React from 'react';
import Article from './../Article';
import articles from './articlesMock';

import { Container, Header, Title, ArticlesContainer } from './styles';

function LatestArticlesComponent() {
  return (
      <Container>
          <Header>
            <Title>Latest Articles</Title>
          </Header>
          <ArticlesContainer>
              {articles.map((item, index) => (
                  <Article data={item} key={index} />
              ))}
          </ArticlesContainer>
      </Container>
  );
}

export default LatestArticlesComponent;