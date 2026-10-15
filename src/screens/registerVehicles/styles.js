import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#7A4FD1',
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#7A4FD1',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  title: {
    marginTop: 100,
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
  footer: {
    marginTop: 32,
    fontSize: 14,
    color: '#FFFFB3',
    textAlign: 'center',
  },
});