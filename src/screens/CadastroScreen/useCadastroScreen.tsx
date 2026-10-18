// src/screens/CadastroScreen/useCadastroScreen.js
import { useState } from 'react';
import { Alert } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { INITIAL_CADASTRO } from '../../types/cadastro';
import { DISPLAY_MAP, onlyDigits } from './masks';
import { validarCadastro } from './validators';

export function useCadastroScreen({ navigation }) {
  const { signUp, isLoading } = useAuth();

  /** @type {[import('../../types/cadastro').Cadastro, Function]} */
  const [dados, setDados] = useState(INITIAL_CADASTRO);

  function setField(key, value) {
    const hasMask = key in DISPLAY_MAP;
    const finalValue = hasMask ? onlyDigits(value) : value;
    setDados((prev) => ({ ...prev, [key]: finalValue }));
  }

  function goBack() {
    navigation.goBack();
  }


  
  async function handleSubmit() {
  console.log('🟢 handleSubmit disparou');
  console.log('   dados:', dados);



  const erros = validarCadastro(dados);
  console.log('   erros:', erros);

  if (erros.length > 0) {
    Alert.alert('Atenção', erros.join('\n'));
    return;
  }

  try {
    console.log('   chamando signUp...');
    const user = await signUp(dados);
    console.log('   signUp OK:', user);

    Alert.alert('Cadastro realizado!', `Bem-vindo(a), ${user.name}!`);
    console.log('   chamando navigation.replace');
  
    
  
    navigation.replace('HomeMapScreen');
 
 
  } catch (err) {
    console.log('❌ erro:', err);
    const message =
      err instanceof Error ? err.message : 'Não foi possível cadastrar.';
    Alert.alert('Erro', message);
  }
}

  return { dados, isLoading, setField, goBack, handleSubmit };
}