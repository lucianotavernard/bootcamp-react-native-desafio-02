import { combineReducers } from 'redux';

import repositories from './repositories';
import issues from './issues';

const reducers = combineReducers({
  repositories,
  issues,
});

export default reducers;
