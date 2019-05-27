import { createAppContainer, createStackNavigator } from 'react-navigation';

import Repositories from '~/pages/repositories';
import Issues from '~/pages/issues';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Repositories,
      Issues,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#333',
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
