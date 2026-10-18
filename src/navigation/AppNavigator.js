// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginMotorista from '../screens/LoginMotorista';
import HomeMapScreen from '../screens/HomeMapScreen/index';
import PerfilScreen from '../screens/PerfilScreen/index';
import RotaScreen from '../screens/RotaScreen/index';
import CadastroScreen from '../screens/CadastroScreen/index';
import RegisterVehicles from '../screens/registerVehicles';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginMotorista"   // 👈 começa aqui
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginMotorista" component={LoginMotorista} />
        <Stack.Screen name="HomeMapScreen" component={HomeMapScreen} />
        <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
        <Stack.Screen name="RotaScreen" component={RotaScreen} />
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
        <Stack.Screen name="RegisterVehicles" component={RegisterVehicles} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}