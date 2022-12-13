import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


//screens
import HomeScreen from '../screens/home/index';
import LibraryScreen from '../screens/library/index';
import PlayListScreen from '../screens/playlist/indes';
import SearchScreen from '../screens//home';
import { COLOR_BLACK, COLOR_WHITE } from '../../res/drawables';




const Tab = createMaterialBottomTabNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      
        // screenOptions={{
        //   headerShown: false,
        //   tabBarActiveBackgroundColor: COLOR_BLACK,
        //   tabBarInactiveBackgroundColor: COLOR_BLACK,
        //   tabBarActiveTintColor: COLOR_WHITE,
        //   tabBarStyle: { borderTopWidth: 0 }
        // }} 
        
        barStyle={{ backgroundColor: COLOR_BLACK, }} 
        activeColor="#000000" inactiveColor='#ffffff' 
      >


        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color, }) => (
            <MaterialCommunityIcons name="home" color={color} size={26}/> 
          ),  
          
        }} />

        <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="text-search" color={color} size={26} />
          ),
        }} />

        <Tab.Screen name="Library" component={LibraryScreen} options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-gallery" color={color} size={26} />
          ),
        }} />

        <Tab.Screen name="PlayList" component={PlayListScreen} options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="playlist-music" color={color} size={26} />
          ),
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen