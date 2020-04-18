/* eslint-disable react/prop-types */
import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../../pages/Home';
import Camera from '../../pages/Camera';
import Mais from '../../pages/Mais';

export default function TabRoutes() {
  const Tab = createBottomTabNavigator();

  const colorTheme = useColorScheme();

  return (
    <NavigationContainer independent>
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: {
            backgroundColor: colorTheme === 'dark' ? '#222' : '#f0f0f0',
            height: 50,
          },
          activeTintColor: '#D73F8C',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Feed de imagens',
            tabBarIcon: ({color}) => (
              <Icon
                style={{marginTop: 7}}
                color={color}
                size={35}
                name="rss-feed"
              />
            ),
          }}
        />

        <Tab.Screen
          name="Camera"
          component={Camera}
          options={{
            title: 'Tirar foto',

            tabBarIcon: ({color}) => (
              <Icon
                style={{marginTop: 7}}
                color={color}
                size={35}
                name="photo-camera"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Mais"
          component={Mais}
          options={{
            title: 'Mais...',
            tabBarIcon: ({color}) => (
              <Icon
                style={{marginTop: 7}}
                color={color}
                size={50}
                name="more-horiz"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
