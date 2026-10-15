import { ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CardOption from '../../components/CardOption';
import { styles } from './styles';
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>

          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/images/logo.jpg')}
              style={styles.logoImage}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.titleMob}>25 Mob</Text>
          <Text style={styles.subtitle}>Feira de Santana - BA</Text>

          {/* 👇 Card 1 — imagem ir.jpg */}
          <CardOption
            imageSource={require('../../../assets/images/ir.jpg')}
            title="Pedir corrida"
            subtitle="Peça uma viagem e acompanhe o motorista no mapa."
            onPress={() => navigation.navigate('RegisterVehicles')}
          />

          {/* 👇 Card 2 — imagem carro.jpg */}
          <CardOption
            imageSource={require('../../../assets/images/carro.jpg')}
            title="Dirigir e ganhar"
            subtitle="Cadastre seu veículo e receba corridas na sua região."
            onPress={() => navigation.navigate('RegisterVehicles')}
          />

          <Text style={styles.footer}>Você pode trocar depois</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}