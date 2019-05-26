import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container, Wrapper, Avatar, Title, Description,
} from './styles';

const RepositoryItem = ({ repository }) => (
  <Container onPress={() => {}}>
    <Avatar source={{ uri: repository.avatar_url }} />

    <Wrapper>
      <Title>{repository.name}</Title>
      <Description>{repository.fullName}</Description>
    </Wrapper>

    <Icon name="chevron-right" size={16} />
  </Container>
);

export default RepositoryItem;
