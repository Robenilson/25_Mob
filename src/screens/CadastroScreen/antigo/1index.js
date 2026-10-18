import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CadastroScreen() {
  // Estado para simular a seleção dos botões (opcional, mas boa prática)
  const [selectedGender, setSelectedGender] = useState('');

  const genderOptions = [
    'Feminino', 
    'Masculino', 
    'Outro', 
    'Prefiro não responder'
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8155D6" />
      
      {/* ScrollView para permitir rolar a tela caso o teclado cubra os botões */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* CABEÇALHO */}
        <Text style={styles.title}>Como podemos te chamar?</Text>
        <Text style={styles.subtitle}>
          Seu nome aparece para o motorista no app 25 Mob.
        </Text>

        {/* INPUT DE NOME */}
        <TextInput
          style={styles.input}
          defaultValue="Ezequias" // Valor pré-preenchido como na imagem
          placeholder="Digite seu nome"
          placeholderTextColor="#8A8A8A"
          autoCorrect={false}
        />

        {/* SEÇÃO SEXO */}
        <Text style={styles.sectionLabel}>SEXO</Text>
        
        {/* Container dos botões (Flex Wrap faz eles irem para a linha de baixo se não couberem) */}
        <View style={styles.pillsContainer}>
          {genderOptions.map((option) => (
            <TouchableOpacity 
              key={option} 
              style={[
                styles.pillButton,
                selectedGender === option && styles.pillButtonSelected // Muda a cor se estiver selecionado
              ]}
              onPress={() => setSelectedGender(option)}
              activeOpacity={0.7}
            >
              <Text style={styles.pillText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* BOTÃO COMEÇAR (Amarelo) */}
        <TouchableOpacity style={styles.startButton} activeOpacity={0.8}>
          <Text style={styles.startButtonText}>Começar</Text>
        </TouchableOpacity>

        {/* BOTÃO TROCAR DE PERFIL (Apenas Texto) */}
        <TouchableOpacity style={styles.switchProfileButton} activeOpacity={0.8}>
          <Text style={styles.switchProfileText}>Trocar de perfil</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8155D6', // Cor Roxa de fundo
  },
  scrollContent: {
    padding: 24,
    paddingTop: 30,
    paddingBottom: 60, // Espaço extra no final
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#E0D0FF', // Roxo claro/quase branco
    marginBottom: 30,
    lineHeight: 24,
  },
  input: {
    backgroundColor: '#E5E5EA', // Cinza claro
    borderWidth: 2,
    borderColor: '#000000', // Borda preta grossa
    borderRadius: 16,
    padding: 16,
    fontSize: 20,
    color: '#000000',
    marginBottom: 30,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E0D0FF',
    marginBottom: 16,
    letterSpacing: 1,
  },
  pillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // O SEGREDO ESTÁ AQUI: Permite quebrar linha
    gap: 12, // Espaçamento entre os botões (React Native 0.71+)
    marginBottom: 40,
  },
  pillButton: {
    backgroundColor: '#E5E5EA',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30, // Formato de pílula
  },
  pillButtonSelected: {
    backgroundColor: '#FFFFFF', // Fica branco puro se selecionado
    borderWidth: 2,
    borderColor: '#000000',
  },
  pillText: {
    fontSize: 16,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  startButton: {
    backgroundColor: '#FFE600', // Amarelo vibrante
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  switchProfileButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  switchProfileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
});