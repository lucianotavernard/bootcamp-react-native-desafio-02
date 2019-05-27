import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container, Avatar, Wrapper, Title, Description,
} from './styles';

const IssueItem = ({ issue }) => (
  <Container>
    <Avatar source={{ uri: issue.owner.avatar_url }} />

    <Wrapper>
      <Title>{issue.title}</Title>
      <Description>{issue.owner.username}</Description>
    </Wrapper>

    <Icon name="chevron-right" size={16} />
  </Container>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      username: PropTypes.string,
    }).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default IssueItem;
