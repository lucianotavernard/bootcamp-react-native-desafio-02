import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';

import {
  Container, Wrapper, Avatar, Title, Description,
} from './styles';

const RepositoryItem = ({ repository, navigation }) => (
  <Container onPress={() => navigation.navigate('Issues', { ...repository })}>
    <Avatar source={{ uri: repository.avatar_url }} />

    <Wrapper>
      <Title>{repository.title}</Title>
      <Description>{repository.fullName}</Description>
    </Wrapper>

    <Icon name="chevron-right" size={16} />
  </Container>
);

export default withNavigation(RepositoryItem);
