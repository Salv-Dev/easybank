import React from 'react';

import { Container, Image, InfosContainer, Author, Title, Description } from './styles';

function ArticleComponent() {
  return (
      <Container>
          <Image src="/image-currency.jpg" alt="article-image" />
          <InfosContainer>
            <Author>by Claire Robinson</Author>
            <Title>Receive money in any currency with no fees</Title>
            <Description>The world is gettinh smaller and we're becoming more mobile. So why should you be forced to only receive momney in a single...</Description>
          </InfosContainer>
      </Container>
  );
}

export default ArticleComponent;