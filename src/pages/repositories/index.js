import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as RepositoryActions } from '~/store/ducks/repositories';

import { FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import RepositoryItem from './RepositoryItem';

import {
  Container, Wrapper, Form, Input,
} from './styles';

class Repositories extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  static propTypes = {
    repositories: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          fullName: PropTypes.string,
          username: PropTypes.string,
          avatar_url: PropTypes.string,
        }),
      ).isRequired,
      error: PropTypes.string.isRequired,
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    addRepositoryRequest: PropTypes.func.isRequired,
  };

  state = {
    repositoryInput: '',
  };

  handleSubmit = () => {
    const { repositoryInput } = this.state;
    const { addRepositoryRequest } = this.props;

    addRepositoryRequest(repositoryInput);
    this.setState({ repositoryInput: '' });
  };

  render() {
    const { repositoryInput } = this.state;
    const {
      repositories: { data: repositories, error, loading },
    } = this.props;

    return (
      <Container>
        <Form>
          <Input
            hasError={error}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            value={repositoryInput}
            onChangeText={text => this.setState({ repositoryInput: text })}
          />

          <TouchableOpacity onPress={this.handleSubmit} disabled={loading || !repositoryInput}>
            {loading ? <ActivityIndicator size="small" /> : <Icon name="plus" size={20} />}
          </TouchableOpacity>
        </Form>

        <Wrapper>
          <FlatList
            data={repositories}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <RepositoryItem repository={item} />}
          />
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators(RepositoryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
