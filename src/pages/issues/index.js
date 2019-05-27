import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as IssuesActions } from '~/store/ducks/issues';

import { FlatList, ActivityIndicator } from 'react-native';
import IssueItem from './IssueItem';

import {
  Container, Wrapper, WrapperButtons, Button, ButtonText,
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
      selected: PropTypes.string.isRequired,
    }).isRequired,
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

  render() {
    const {
      issues: { data: issues, loading, selected },
    } = this.props;

    return (
      <Container>
        <WrapperButtons>
          <Button onPress={() => this.handleClick('all')}>
            <ButtonText active={selected === 'all'}>Todas</ButtonText>
          </Button>

          <Button onPress={() => this.handleClick('open')}>
            <ButtonText active={selected === 'open'}>Abertas</ButtonText>
          </Button>

          <Button onPress={() => this.handleClick('closed')}>
            <ButtonText active={selected === 'closed'}>Fechadas</ButtonText>
          </Button>
        </WrapperButtons>

        <Wrapper>
          {loading ? (
            <ActivityIndicator size="small" />
          ) : (
            <FlatList
              data={issues}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <IssueItem issue={item} />}
            />
          )}
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  issues: state.issues,
});

const mapDispatchToProps = dispatch => bindActionCreators(IssuesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Issues);
