import Home from '../screens/Home';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';

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
];
export const SCREENS_STACK = [
  {
    Screen: Login,
    name: 'Login',
  },
];
