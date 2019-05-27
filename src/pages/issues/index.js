import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as IssuesActions } from '~/store/ducks/issues';

import { FlatList, ActivityIndicator } from 'react-native';
import IssueItem from './IssueItem';

import {
  Container, Wrapper, WrapperButtons, Button, ButtonText, Error,
} from './styles';

class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name'),
  });

  static propTypes = {
    issues: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          url: PropTypes.string,
          owner: PropTypes.shape({
            avatar_url: PropTypes.string,
            username: PropTypes.string,
          }),
        }),
      ).isRequired,
      loading: PropTypes.bool.isRequired,
      selected: PropTypes.string,
    }).isRequired,
    filters: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.number,
        title: PropTypes.string,
        name: PropTypes.string,
      }),
    ).isRequired,
    loadIssuesRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { loadIssuesRequest, navigation } = this.props;
    loadIssuesRequest(navigation.getParam('fullName'));
  }

  handleClick = (filter) => {
    const { loadIssuesRequest, navigation } = this.props;
    loadIssuesRequest(navigation.getParam('fullName'), filter);
  };

  loadIssues = () => {
    const { loadIssuesRequest, navigation } = this.props;
    loadIssuesRequest(navigation.getParam('fullName'));
  };

  render() {
    const {
      issues: {
        data: issues, error, loading, selected,
      },
      filters,
    } = this.props;

    return (
      <Container>
        <WrapperButtons>
          {filters.map(filter => (
            <Button key={filter.key} onPress={() => this.handleClick(filter.name)}>
              <ButtonText active={selected === filter.name}>{filter.title}</ButtonText>
            </Button>
          ))}
        </WrapperButtons>

        <Wrapper>
          {!!error && <Error>{error}</Error>}

          {loading ? (
            <ActivityIndicator size="small" />
          ) : (
            <FlatList
              data={issues}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <IssueItem issue={item} />}
              onRefresh={this.loadIssues}
              refreshing={loading}
            />
          )}
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  issues: state.issues,
  filters: [
    { key: 1, title: 'Todas', name: 'all' },
    { key: 2, title: 'Abertas', name: 'open' },
    { key: 3, title: 'Fechadas', name: 'closed' },
  ],
});

const mapDispatchToProps = dispatch => bindActionCreators(IssuesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Issues);
