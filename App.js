import React from 'react';
import Login from './src/pages/login/index.js'
import Home from './src/pages/home/index.js'
//Navigation
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Autenticado = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Logout" component={Logout}/>
    </Drawer.Navigator>
  )
} 

const Logout = ( {navigation} ) => {
    return(
      <View>
        <Text>Deseja sair da aplicação?</Text>
        <Button onPress={() => {
          AsyncStorage.removeItem('@jwt');
          navigation.push('Login');
        }} title="Sair"></Button>
      </View>
    )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Autenticado" component={Autenticado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}