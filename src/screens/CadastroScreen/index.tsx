// src/screens/CadastroScreen/index.js
import {
  ScrollView, Text, View, TextInput, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

// ✅ Importa os ARRAYS (valores reais em runtime). Não importa tipos.
import { GENERO_OPTIONS, ROLE_OPTIONS } from '../../types/cadastro';

import { useCadastroScreen } from './useCadastroScreen';
import { styles } from './styles';
import { DISPLAY_MAP } from './masks';

export default function CadastroScreen({ navigation }) {
  const { dados, isLoading, setField, goBack, handleSubmit } = useCadastroScreen({ navigation });
  const display = (key) => {
    const fmt = DISPLAY_MAP[key];
    return fmt ? fmt(dados[key]) : dados[key];
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {navigation.canGoBack() && (
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <Ionicons name="chevron-back-outline" size={30} color="#FFF" />
          </TouchableOpacity>
        )}

        <Text style={styles.title}>Crie sua conta</Text>
        <Text style={styles.subtitle}>
          Preencha seus dados para começar a usar o app 25 Mob.
        </Text>

        <View style={styles.row}>
          <View style={styles.halfField}>
            <Text style={styles.label}>NOME</Text>
            <TextInput
              style={styles.input}
              placeholder="Ezequias"
              placeholderTextColor="#8A8A8A"
              value={dados.name}
              onChangeText={(v) => setField('name', v)}
              autoCorrect={false}
            />
          </View>
          <View style={styles.halfField}>
            <Text style={styles.label}>SOBRENOME</Text>
            <TextInput
              style={styles.input}
              placeholder="Silva"
              placeholderTextColor="#8A8A8A"
              value={dados.surname}
              onChangeText={(v) => setField('surname', v)}
              autoCorrect={false}
            />
          </View>
        </View>

        <Text style={styles.label}>DATA DE NASCIMENTO</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#8A8A8A"
          keyboardType="numeric"
          value={display('birthDate')}
          onChangeText={(v) => setField('birthDate', v)}
          maxLength={10}
        />

        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={styles.input}
          placeholder="000.000.000-00"
          placeholderTextColor="#8A8A8A"
          keyboardType="numeric"
          value={display('cpf')}
          onChangeText={(v) => setField('cpf', v)}
          maxLength={14}
        />

        <Text style={styles.label}>E-MAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="voce@email.com"
          placeholderTextColor="#8A8A8A"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={dados.email}
          onChangeText={(v) => setField('email', v)}
        />

        <Text style={styles.label}>TELEFONE</Text>
        <TextInput
          style={styles.input}
          placeholder="(11) 90000-0000"
          placeholderTextColor="#8A8A8A"
          keyboardType="phone-pad"
          value={display('phone')}
          onChangeText={(v) => setField('phone', v)}
          maxLength={15}
        />

        {/* SEXO — usa GENERO_OPTIONS importado */}
        <Text style={styles.sectionLabel}>SEXO</Text>
        <View style={styles.pillsContainer}>
          {GENERO_OPTIONS.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.pillButton,
                dados.gender === option && styles.pillButtonSelected,
              ]}
              onPress={() => setField('gender', option)}
            >
              <Text style={styles.pillText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* VOCÊ É — usa ROLE_OPTIONS importado */}
        <Text style={styles.sectionLabel}>VOCÊ É</Text>
        <View style={styles.tipoContainer}>
          {ROLE_OPTIONS.map(({ value, label, emoji, sub }) => (
            <TouchableOpacity
              key={value}
              style={[
                styles.tipoCard,
                dados.role === value && styles.tipoCardSelected,
              ]}
              onPress={() => setField('role', value)}
            >
              <Text style={styles.tipoEmoji}>{emoji}</Text>
              <Text style={styles.tipoTitle}>{label}</Text>
              <Text style={styles.tipoSub}>{sub}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.startButton, isLoading && styles.startButtonDisabled]}
          disabled={isLoading}
          onPress={handleSubmit}
        >
          <Text style={styles.startButtonText}>
            {isLoading ? 'Criando conta...' : 'Criar conta'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.switchProfileButton} onPress={goBack}>
          <Text style={styles.switchProfileText}>Trocar de perfil</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}