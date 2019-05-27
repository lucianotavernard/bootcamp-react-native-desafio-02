import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';

import {
  Container, Wrapper, Avatar, Title, Description,
} from './styles';

const RepositoryItem = ({ repository, navigation }) => (
  <Container onPress={() => navigation.navigate('Issues', { ...repository })}>
    <Avatar source={{ uri: repository.avatar_url }} />

    <Wrapper>
      <Title>{repository.name}</Title>
      <Description>{repository.fullName}</Description>
    </Wrapper>

    <Icon name="chevron-right" size={16} />
  </Container>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    fullName: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(RepositoryItem);
