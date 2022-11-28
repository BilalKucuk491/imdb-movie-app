import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen, SearchScreen,VideoScreen,PersonelScreen} from '../screens';
import {COLORS, icons} from '../constants';
import {TabIcon} from '../components/TabIcon';
import { TabBarCustomButtonInterface } from '../types/TabBarCustomButtonInterface';
const Tab = createBottomTabNavigator();



const TabBarCustomButton = ({
  children,
  onPress,
}: TabBarCustomButtonInterface) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const TabNavigator = () => {

  const [isTradeModalVisible, setTradeModalVisibility] = useState(false);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 90,
          backgroundColor: COLORS.backgroundColor,
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon focused={focused} icon={icons.home} label="Home" />
              );
            }
          },
        }}
        name="Home"
        component={HomeScreen}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.search}
                  label="Search"
                />
              );
            }
          },
        }}
        name="Search"
        component={SearchScreen}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.video}
                  label="VIDEO"
                />
              );
            }
          },
        }}
        name="VIDEO"
        component={VideoScreen}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.personel}
                  label="PERSONEL"
                />
              );
            }
          },
        }}
        name="PERSONEL"
        component={PersonelScreen}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
