import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import CardOption from '../../components/CardOption';
import { styles } from './styles';

export default function AddVehicle({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>

          {/* Botão de voltar */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back-outline" size={30} color="#000" />
          </TouchableOpacity>

          {/* Textos centrais */}
          <Text style={styles.titleMob}>Com o que você dirige?</Text>
          <Text style={styles.subtitle}>
            Escolha o veículo que você usa em Feira de Santana - BA
          </Text>

          {/* Card - Carro — imagem no lugar do ícone */}
          <CardOption
            imageSource={require('../../../assets/images/carro2.jpg')}
            title="Carro"
            subtitle="Corridas com mais conforto e valor por viagem maior."
            onPress={() => navigation.navigate('RegisterVehicles')}
          />

          {/* Card - Moto — imagem no lugar do ícone */}
          <CardOption
            imageSource={require('../../../assets/images/moto.jpg')}
            title="Moto"
            subtitle="Corridas rápidas e mais frequentes no trânsito da cidade."
            onPress={() => navigation.navigate('RegisterVehicles')}
          />

          {/* Rodapé */}
          <Text style={styles.footer}>
            Dá para mudar depois com o suporte
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}