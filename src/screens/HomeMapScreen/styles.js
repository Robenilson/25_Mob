// src/screens/HomeMapScreen/styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5EA',
  },

  // ----- ÁREA DE CARREGAMENTO DO MAPA -----
  mapLoading: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    gap: 12,
  },
  mapLoadingText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 24,
  },

  // ----- CABEÇALHO (TOPO) -----
  topSafeArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  topCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 12,
    padding: 12,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFE600',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  topCardTextContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  locationText: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },

  // ----- CONTAINER INFERIOR (Cartão + NavBar) -----
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    zIndex: 10,
  },

  // ----- CARTÃO INFERIOR (BOTTOM SHEET) -----
  bottomCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    marginBottom: 16, // Espaço entre o cartão e a barra de navegação
  },

  // ----- CAMPO DE BUSCA -----
  searchInputContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
    color: '#1A1A1A',
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  searchArrow: {
    fontSize: 18,
    color: '#8A8A8A',
    fontWeight: 'bold',
  },

  // ----- BARRA DE NAVEGAÇÃO INFERIOR -----
  bottomNavBar: {
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
  activeIconCircle: {
    backgroundColor: '#FFE600',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    overflow: 'hidden',
  },
  navIconImage: {
    width: 32,
    height: 32,
  },
  navTextActive: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  navIconInactive: {
    fontSize: 20,
    color: '#8A8A8A',
    marginBottom: 4,
  },
  navTextInactive: {
    fontSize: 12,
    color: '#8A8A8A',
  },
});