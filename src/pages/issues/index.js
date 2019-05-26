import React from 'react';

import { Text } from 'react-native';

import Header from '~/components/Header';

import { Container, Wrapper } from './styles';

const Issues = () => (
  <Container>
    <Header />

    <Wrapper>
      <Text>Issues</Text>
    </Wrapper>
  </Container>
);

export default Issues;
