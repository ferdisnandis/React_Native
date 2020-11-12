import React from 'react';
import Login from './src/pages/login'
import Home from './src/pages/home'

export default function App() {
  return (
    isSignedIn ? (
      <>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen name="Configurações" component={SettingsScreen} />
      </>
    ) : (
      <>
        <Stack.Screen name="Entrar" component={Login} />
        <Stack.Screen name="Cadastrar" component={SignUpScreen} />
      </>
    )
  );
}
