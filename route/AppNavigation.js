import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Screen load here
import HomeScreen from '../Screens/HomeScreen';
import TDP from '../Screens/ThunkDemoP1';
import GSigninD3 from '../Screens/GSingin3';
import GwelScreenD3 from '../Screens/GWelcomeScreenD3';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  GSigninD3: {
    screen: GSigninD3,
  },
  GwelScreenD3: {
    screen: GwelScreenD3,
  },
});

export default createAppContainer(AppNavigator);
