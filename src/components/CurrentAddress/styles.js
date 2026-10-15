import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  embarkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000000',
    marginRight: 12,
  },
  embarkTexts: {
    flex: 1,
  },
  embarkLabel: {
    fontSize: 12,
    color: '#8A8A8A',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  embarkAddress: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  editIcon: {
    fontSize: 20,
    color: '#6B7280',
    padding: 5,
  },
  // Estado carregando
  loadingText: {
    fontSize: 16,
    color: '#8A8A8A',
    fontStyle: 'italic',
  },
});