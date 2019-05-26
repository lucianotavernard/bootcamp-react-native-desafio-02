import React, { Component } from 'react';

import { FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as RepositoryActions } from '~/store/ducks/repositories';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';
import RepositoryItem from './RepositoryItem';

import {
  Container, Wrapper, Form, Input,
} from './styles';

class Repositories extends Component {
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
    const { data: repositories, error, loading } = this.props.repositories;

    return (
      <Container>
        <Header title="GitIssues" />

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
