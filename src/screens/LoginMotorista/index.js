import { useState } from 'react';
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

import { styles } from './styles';

export default function LoginMotorista({ navigation }) {   // 👈 nome alterado
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back-outline" size={30} color="#000" />
          </TouchableOpacity>

            <View style={styles.logoContainer}>

                <Image
                source={require('../../../assets/images/logo.jpg')} // 👈 Coloque o caminho correto da sua imagem aqui
                 style={styles.logoImage}
                  resizeMode="cover" // Garante que a imagem não distorça
              />
            </View>



          <Text style={styles.title}>Entrar com seu telefone</Text>

          <Text style={styles.subtitle}>
            Conta de motorista · enviamos um código para o seu e-mail
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
            Use o telefone com DDD. É por ele que o passageiro e o suporte falam com você.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.helperSmall}>
            O código de acesso chega nesse e-mail.
          </Text>

          <TouchableOpacity
            style={styles.termsRow}
            onPress={() => setAccepted(!accepted)}
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
            style={[styles.button, !accepted && styles.buttonDisabled]}
            disabled={!accepted}
            onPress={() => {
              console.log('Continuar pressionado', { phone, email });
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}