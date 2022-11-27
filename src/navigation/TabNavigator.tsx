import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Search,Video,Personel} from '../screens';
import {COLORS, icons} from '../constants';
import {TabIcon} from '../components/TabIcon';
const Tab = createBottomTabNavigator();

interface TabBarCustomButtonInterface {
  children: any;
  onPress: any;
}

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
        component={Home}
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
        component={Search}
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
                  icon={icons.rightArrow}
                  label="VIDEO"
                />
              );
            }
          },
        }}
        name="VIDEO"
        component={Video}
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
                  icon={icons.settings}
                  label="PERSONEL"
                />
              );
            }
          },
        }}
        name="PERSONEL"
        component={Personel}
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
