import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import TrustedContacts from '../../components/TrustedContacts'; // 👈 ajuste o caminho

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* CARTÃO 1: Modo Mulher */}
        <View style={styles.whiteCard}>
          <Text style={styles.cardDescription}>
            Usamos para liberar o Modo Mulher. Não aparece para ninguém.
          </Text>
        </View>

        {/* CARTÃO 2: Contatos de Confiança (agora é um componente) */}
        <TrustedContacts onChange={(contacts) => console.log('Contatos:', contacts)} />

        {/* Botões de menu */}
        <TouchableOpacity style={styles.menuButton} activeOpacity={0.8}>
          <Ionicons name="headset-outline" size={20} color="#1A1A1A" />
          <Text style={styles.menuText}>Falar com o suporte</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} activeOpacity={0.8}>
          <Ionicons name="swap-horizontal-outline" size={20} color="#1A1A1A" />
          <Text style={styles.menuText}>Trocar de perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8}>
          <Ionicons name="log-out-outline" size={20} color="#EF4444" />
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteAccountButton} activeOpacity={0.8}>
          <Ionicons name="trash-outline" size={18} color="#FFFFFF" />
          <Text style={styles.deleteText}>Excluir minha conta</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>25 Mob · versão 1.0.0</Text>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* BARRA DE NAVEGAÇÃO INFERIOR */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../../../assets/images/ir.jpg')}
            style={styles.navIconImage}
            resizeMode="cover"
          />
          <Text style={styles.navTextInactive}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="time-outline" size={22} color="#8A8A8A" style={{ marginBottom: 4 }} />
          <Text style={styles.navTextInactive}>Corridas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <View style={styles.activeIconCircle}>
            <Ionicons name="person" size={24} color="#000" />
          </View>
          <Text style={styles.navTextActive}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8155D6',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 10,
  },
  // 👇 ESSES ESTILOS FICARAM PORQUE AINDA SÃO USADOS NO CARTÃO 1
  whiteCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardDescription: {
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 22,
  },
  // ----- MENU -----
  menuButton: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 30,
    marginBottom: 12,
    gap: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  logoutButton: {
    backgroundColor: '#FEF2F2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#EF4444',
    gap: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EF4444',
  },
  deleteAccountButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 20,
    gap: 8,
  },
  deleteText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  versionText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#E0D0FF',
    marginBottom: 20,
  },
  // ----- BARRA DE NAVEGAÇÃO -----
  bottomNavBar: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  navIconImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginBottom: 4,
  },
  navTextInactive: {
    fontSize: 12,
    color: '#8A8A8A',
  },
  activeIconCircle: {
    backgroundColor: '#FDE047',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
    marginBottom: 4,
  },
  navTextActive: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
});