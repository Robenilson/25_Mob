// src/screens/LoginScreen/index.js
import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import { useLoginScreen } from './useLoginScreen';
import { styles } from './styles';

export default function LoginScreen({ navigation }) {
  const {
    phone,
    email,
    accepted,
    isLoading,
    setPhone,
    setEmail,
    toggleAccepted,
    goToRegister,
    handleContinue,
  } = useLoginScreen({ navigation });

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>

          {navigation.canGoBack() && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <Ionicons name="chevron-back-outline" size={30} color="#000" />
            </TouchableOpacity>
          )}

          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/images/logo.jpg')}
              style={styles.logoImage}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.title}>Entrar na sua conta</Text>
          <Text style={styles.subtitle}>
            Enviamos um código de acesso para o seu e-mail
          </Text>

          <TextInput
            style={styles.input}
            placeholder="(00) 00000-0000"
            placeholderTextColor="#999"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <Text style={styles.helper}>
            Use o telefone com DDD. É por ele que passageiro e suporte falam com você.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.helperSmall}>
            O código de acesso chega nesse e-mail.
          </Text>

          <TouchableOpacity
            style={styles.termsRow}
            onPress={toggleAccepted}
            activeOpacity={0.7}
          >
            <View style={[styles.checkbox, accepted && styles.checkboxChecked]}>
              {accepted && <Ionicons name="checkmark" size={16} color="#FFF" />}
            </View>
            <Text style={styles.termsText}>
              Li e aceito os termos de uso e a política de privacidade.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, (!accepted || isLoading) && styles.buttonDisabled]}
            disabled={!accepted || isLoading}
            onPress={handleContinue}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              {isLoading ? 'Entrando...' : 'Continuar'}
            </Text>
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>ou</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={goToRegister}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Criar cadastro</Text>
          </TouchableOpacity>

          <Text style={styles.registerHint}>
            É novo por aqui? Crie sua conta em menos de 1 minuto.
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}