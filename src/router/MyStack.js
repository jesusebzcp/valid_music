import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS_STACK, SCREENS_STACK_USER} from '../config/screens';

const Stack = createStackNavigator();

const MyStack = () => {
  const user = false;
  const stackNavigation = user ? SCREENS_STACK_USER : SCREENS_STACK;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {stackNavigation.map((screen, index) => {
          const {Screen, name} = screen;
          return (
            <Stack.Screen
              options={{headerShown: false}}
              name={name}
              component={Screen}
              key={index}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
