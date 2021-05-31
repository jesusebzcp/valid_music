import Home from '../screens/Home';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';
import DetailTrack from '../screens/DetailTrack';
import Search from '../screens/Search';

export const SCREENS_STACK_USER = [
  {
    Screen: Home,
    name: 'Home',
  },
  {
    Screen: Profile,
    name: 'Profile',
  },
  {
    Screen: Notifications,
    name: 'Notifications',
  },
  {
    Screen: DetailTrack,
    name: 'DetailTrack',
  },
  {
    Screen: Search,
    name: 'Search',
  },
];
export const SCREENS_STACK = [
  {
    Screen: Login,
    name: 'Login',
  },
];
