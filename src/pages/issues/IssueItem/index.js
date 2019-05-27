import React from 'react';

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

export default IssueItem;
