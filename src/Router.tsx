import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './navigation/TabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'HOME'}>
        <Stack.Screen name="HOME" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
