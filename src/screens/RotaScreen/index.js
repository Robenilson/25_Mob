import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function RotaScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7B4DCA" />
      
      {/* CABEÇALHO (Header) */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
          {/* Usando um caractere simples como ícone para não precisar instalar bibliotecas agora */}
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>De onde você sai?</Text>
          <Text style={styles.subtitle}>Endereços em Feira de Santana - BA</Text>
        </View>
      </View>

      {/* CARTÃO BRANCO (Card) */}
      <View style={styles.card}>
        
        {/* Linha 1: EMBARQUE */}
        <View style={styles.row}>
          {/* A Bolinha */}
          <View style={styles.dot} />
          
          {/* Coluna de Textos (Equivalente ao Expanded) */}
          <View style={styles.textColumn}>
            <Text style={styles.label}>EMBARQUE</Text>
            <Text style={styles.value}>Rua Landulfo Alves, 165</Text>
          </View>
          
          {/* Ícone de Editar */}
          <TouchableOpacity>
            <Text style={styles.editIcon}>✎</Text>
          </TouchableOpacity>
        </View>

        {/* Divisória */}
        <View style={styles.divider} />

        {/* Linha 2: DESTINO */}
        <View style={styles.row}>
          {/* O Quadrado */}
          <View style={styles.square} />
          
          {/* Coluna de Textos */}
          <View style={styles.textColumn}>
            <Text style={styles.label}>DESTINO</Text>
            <Text style={styles.valuePlaceholder}>Para onde você vai?</Text>
          </View>
        </View>
        
      </View>

      {/* CAMPO DE BUSCA (Input) */}
      <TextInput
        style={styles.input}
        placeholder="Rua, número, bairro..."
        placeholderTextColor="#8A8A8A"
      />
      
    </SafeAreaView>
  );
}

// ESTILOS (Aqui é onde a mágica acontece, igual ao painel de propriedades do FlutterFlow)
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela toda
    backgroundColor: '#7B4DCA', // Cor roxa de fundo
    padding: 20,
  },
  header: {
    flexDirection: 'row', // Equivalente à Row do FlutterFlow
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20, // Metade do tamanho para fazer um círculo perfeito
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: -4, // Ajuste fino para centralizar a seta
  },
  headerTextContainer: {
    marginLeft: 16,
    flex: 1, // Equivalente ao Expanded
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#E0D0FF', // Um roxo mais claro para o subtítulo
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    // Sombra opcional para dar efeito de cartão flutuante
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5, // Faz o círculo
    backgroundColor: '#000000',
    marginRight: 15,
  },
  square: {
    width: 10,
    height: 10,
    backgroundColor: '#000000',
    marginRight: 15,
  },
  textColumn: {
    flex: 1, // Isso é o segredo! Empurra o ícone de editar para a direita e ocupa o espaço do meio
    flexDirection: 'column',
  },
  label: {
    fontSize: 12,
    color: '#8A8A8A',
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  valuePlaceholder: {
    fontSize: 16,
    color: '#8A8A8A',
  },
  editIcon: {
    fontSize: 20,
    color: '#000000',
    padding: 8, // Aumenta a área de clique
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 15,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
    fontSize: 16,
    color: '#1A1A1A',
  }
});