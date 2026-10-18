// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider } from './src/AuthContext';                 // ✅ caminho real
// import { LocationProvider } from './src/LocationContext';       // ⏸️ desativado

import LoginScreen from './src/screens/LoginMotorista';
import CadastroScreen from './src/screens/CadastroScreen';
import HomeMapScreen from './src/screens/HomeMapScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      {/* <LocationProvider> */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
            <Stack.Screen name="HomeMapScreen" component={HomeMapScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </LocationProvider> */}
    </AuthProvider>
  );
}