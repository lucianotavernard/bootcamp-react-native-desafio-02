import React from 'react';
import PropTypes from 'prop-types';

import { Linking } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container, Avatar, Wrapper, Title, Description,
} from './styles';

const IssueItem = ({ issue }) => (
  <Container onPress={() => Linking.openURL(issue.url)}>
    <Avatar source={{ uri: issue.owner.avatar_url }} />

    <Wrapper>
      <Title numberOfLines={1} ellipsizeMode="tail">
        {issue.title}
      </Title>

      <Description>{issue.owner.username}</Description>
    </Wrapper>

    <Icon name="chevron-right" size={16} />
  </Container>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      username: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default IssueItem;
