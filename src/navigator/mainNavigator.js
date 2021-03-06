import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile73953Navigator from '../features/UserProfile73953/navigator';
import Maps73934Navigator from '../features/Maps73934/navigator';
import Settings73912Navigator from '../features/Settings73912/navigator';
import Settings73897Navigator from '../features/Settings73897/navigator';
import NotificationList73896Navigator from '../features/NotificationList73896/navigator';
import Maps73895Navigator from '../features/Maps73895/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile73953: { screen: UserProfile73953Navigator },
Maps73934: { screen: Maps73934Navigator },
Settings73912: { screen: Settings73912Navigator },
Settings73897: { screen: Settings73897Navigator },
NotificationList73896: { screen: NotificationList73896Navigator },
Maps73895: { screen: Maps73895Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
