// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importe todas as suas telas
import Home from '../screens/Home';
import RegisterVehicles from '../screens/registerVehicles';
import LoginMotorista from '../screens/LoginMotorista';
import RotaScreen from '../screens/RotaScreen/index';
import PerfilScreen from '../screens/PerfilScreen/index';
import CadastroScreen from '../screens/CadastroScreen/index';
import HomeMapScreen from '../screens/HomeMapScreen/index';
import TestMenuScreen from '../screens/TestMenuScreen/index';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="TestMenuScreen"
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' }, // Esconde a barra padrão
        }}
      >
        <Tab.Screen name="TestMenuScreen" component={TestMenuScreen} />
        <Tab.Screen name="HomeMapScreen" component={HomeMapScreen} />
        <Tab.Screen name="PerfilScreen" component={PerfilScreen} />
        <Tab.Screen name="RotaScreen" component={RotaScreen} />
        <Tab.Screen name="CadastroScreen" component={CadastroScreen} />
        <Tab.Screen name="LoginMotorista" component={LoginMotorista} />
        <Tab.Screen name="RegisterVehicles" component={RegisterVehicles} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}