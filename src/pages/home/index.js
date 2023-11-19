import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './home';
import SettingScreen from './setting';

const Tab = createBottomTabNavigator();

const HomePage = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen 
          name="Homech" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default HomePage;