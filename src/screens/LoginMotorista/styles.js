import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // ===== Container principal =====
  safeArea: {
    flex: 1,
    backgroundColor: '#7A4FD1',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#7A4FD1',
    alignItems: 'center',
    paddingTop: 20,
  },

  // ===== Botão de voltar =====
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: 25,
  },

  // ===== Logo placeholder =====
  logoContainer: {
  width: 130,
  height: 130,
  borderRadius: 28, // Bordas arredondadas
  overflow: 'hidden', // Garante que a imagem não saia do quadrado arredondado
  marginBottom: 24,
  backgroundColor: '#1A1A1A', // Cor de fundo escura (caso a imagem tenha transparência)
  justifyContent: 'center',
  alignItems: 'center',
},
logoImage: {
  width: '100%',
  height: '100%',
},
  // ===== Textos principais =====
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E8E8E8',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#E8E8E8',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 32,
    paddingHorizontal: 16,
  },

  // ===== Inputs =====
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: '#000',
    marginTop: 16,
  },

  // ===== Textos de ajuda =====
  helper: {
    fontSize: 15,
    color: '#E8E8E8',
    textAlign: 'center',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  helperSmall: {
    fontSize: 15,
    color: '#E8E8E8',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },

  // ===== Checkbox de termos =====
  termsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 14,
    width: '100%',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#DAD1D1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: '#7A4FD1',
    borderColor: '#FFFFFF',
  },
  termsText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
  },

  // ===== Botão Continuar =====
  button: {
    width: 300,
    height: 44,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});