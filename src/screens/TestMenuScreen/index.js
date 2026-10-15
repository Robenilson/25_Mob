// src/screens/TestMenuScreen/index.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// 👇 CORRIJA OS IMPORTS ABAIXO: Remova o "../screens/" e deixe apenas "../"
// (Isso assume que suas telas estão soltas na pasta 'screens', ex: src/screens/Home.js)
// Se elas estiverem em pastas, ex: src/screens/Home/index.js, o import fica '../Home'
import Home from '../Home'; 
import RegisterVehicles from '../registerVehicles';
import LoginMotorista from '../LoginMotorista';
import RotaScreen from '../RotaScreen/index';
import PerfilScreen from '../PerfilScreen/index';
import CadastroScreen from '../CadastroScreen/index';
import HomeMapScreen from '../HomeMapScreen/index';

export default function TestMenuScreen({ navigation }) {
  // Lista de todas as telas que você quer testar
  const screens = [
    { name: 'HomeMapScreen', label: '1. Mapa Principal (Home)' },
    { name: 'PerfilScreen', label: '2. Perfil' },
    { name: 'CadastroScreen', label: '3. Cadastro (Como chamar?)' },
    { name: 'RotaScreen', label: '4. Rota (De onde você sai?)' },
    { name: 'LoginMotorista', label: '5. Login Motorista' },
    { name: 'RegisterVehicles', label: '6. Registrar Veículos' },
    { name: 'Home', label: '7. Home Antiga' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛠️ Menu de Testes</Text>
      <Text style={styles.subtitle}>Selecione uma tela para visualizar</Text>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {screens.map((screen, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.button} 
            onPress={() => navigation.navigate(screen.name)}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>{screen.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F0F0', paddingTop: 60 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#1A1A1A' },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#6B7280', marginBottom: 20, marginTop: 5 },
  scrollContainer: { padding: 20, gap: 15 },
  button: { backgroundColor: '#8155D6', padding: 18, borderRadius: 12, alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }
});