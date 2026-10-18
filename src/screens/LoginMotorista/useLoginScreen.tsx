// src/screens/LoginScreen/useLoginScreen.ts
import { useState } from 'react';
import { Alert } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import type {
  AuthContextData,
  LoginScreenReturn,
  UseLoginScreenParams,
} from '../../types/context';   // ✅ .ts removido, .tsx trocado por .ts

// ============================================================================
// useLoginScreen
// ----------------------------------------------------------------------------
// Hook que centraliza TODA a lógica da tela de Login.
// TODAS as interfaces vêm de `context/AuthContext/types.ts` — nada é declarado
// localmente. O contrato de retorno é `LoginScreenReturn`.
// ============================================================================
export function useLoginScreen({
  navigation,
}: UseLoginScreenParams): LoginScreenReturn {
  // useAuth() já retorna AuthContextData — anotamos para deixar explícito
  const { signIn, isLoading }: AuthContextData = useAuth();

  // --------------------------------------------------------------------------
  // ESTADOS (formato declarado em LoginData)
  // --------------------------------------------------------------------------
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [accepted, setAccepted] = useState<boolean>(false);

  // --------------------------------------------------------------------------
  // AÇÕES
  // --------------------------------------------------------------------------
  function toggleAccepted(): void {
    setAccepted((prev) => !prev);
  }

  function goToRegister(): void {
    navigation.navigate('CadastroScreen');
  }

  async function handleContinue(): Promise<void> {
    if (!phone && !email) {
      Alert.alert('Atenção', 'Preencha o telefone ou o e-mail.');
      return;
    }

    if (!accepted) {
      Alert.alert('Atenção', 'Você precisa aceitar os termos.');
      return;
    }

    try {
      const identifier = email.trim() || phone.trim();
      await signIn(identifier);
      navigation.replace('HomeMapScreen');
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Não foi possível entrar.';

      if (message.toLowerCase().includes('não encontrado')) {
        Alert.alert(
          'Conta não encontrada',
          'Não encontramos uma conta com esses dados. Deseja criar uma agora?',
          [
            { text: 'Tentar novamente', style: 'cancel' },
            { text: 'Criar cadastro', onPress: goToRegister },
          ]
        );
      } else {
        Alert.alert('Erro', message);
      }
    }
  }

  // --------------------------------------------------------------------------
  // RETORNO — bate EXATAMENTE com LoginScreenReturn
  // --------------------------------------------------------------------------
  return {
    phone,
    email,
    accepted,
    isLoading,
    setPhone,
    setEmail,
    toggleAccepted,
    goToRegister,
    handleContinue,
  };
}