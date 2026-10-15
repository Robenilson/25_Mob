import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#7A4FD1',
  },
  scrollContent: {
    flexGrow: 1,
  },

  // 👇 ADICIONE ESTE CONTAINER (ou ajuste se já tiver)
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center', // Centraliza tudo horizontalmente
    paddingTop: 20,
  },

  logoContainer: {
    width: 130,
    height: 130,
    borderRadius: 28,
    overflow: 'hidden',
    marginBottom: 24,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // 👈 FORÇA A CENTRALIZAÇÃO
    marginTop: 30,       // 👈 DÁ UM ESPAÇO DO TOPO DA TELA
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },

  titleMob: {
    marginTop: 0, // 👈 REMOVA O 50, a logo já deu o espaçamento
    fontSize: 28,
    fontWeight: 'bold',
    color: '#B7BBBD',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 32,
    fontSize: 16,
    color: '#FFFFCC',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    width: '100%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  cardIcon: {
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  footer: {
    marginTop: 32,
    fontSize: 14,
    color: '#FFFFB3',
    textAlign: 'center',
  },
});