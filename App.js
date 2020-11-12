import React from 'react';
import Login from './src/pages/login/index.js'
import Home from './src/pages/home/index.js'
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const Autenticado = () => {
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  </NavigationContainer>
} 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Autenticado" component={Autenticado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}