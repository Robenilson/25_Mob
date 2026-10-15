import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5EA',
  },

  // ----- ÁREA DO MAPA -----
  mapPlaceholder: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholderText: {
    color: '#C0C0C0',        // 👈 mais claro para não competir com o topo
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 80,            // 👈 empurra para baixo, sai de trás do topCard
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

  // ----- CARTÃO INFERIOR (BOTTOM SHEET) -----
  bottomCardContainer: {
    position: 'absolute',
    bottom: 150,              // 👈 150 era exagero; 130 é o ponto certo
    left: 20,
    right: 20,
    zIndex: 10,
  },
  bottomCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
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
    zIndex: 20,
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
  marginBottom: 4,   // 👈 MESMO espaçamento dos outros ícones
  // ⛔ removido: marginTop: -25 (era o que elevava)
  overflow: 'hidden',
},
  navIconImage: {
    width: 32,                // 👈 TAMANHO FIXO, não 100%
    height: 32,
    // ⛔ REMOVIDO o transform: scale(1.8) — estava deformando a imagem
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