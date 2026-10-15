import { useState } from 'react';
import { 
  View, 
  Text,  
  TouchableOpacity, 
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import CurrentAddress from '../../components/CurrentAddress';
import AddressModal from '../../components/AddressModal/index';
import { styles } from './styles';

export default function HomeMapScreen() {
  const [locationText, setLocationText] = useState('25 Mob · Carregando...');
  const [activeModal, setActiveModal] = useState(null);

  const [embarkAddress, setEmbarkAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');

  // 👇 Agora só consome o que o CurrentAddress já entrega pronto
  const handleAddressChange = (data) => {
    if (!data) return;

    // data já tem: { formattedAddress, cityState, city, state, latitude, longitude, place }
    const cityState = data.cityState;

    setLocationText(cityState ? `25 Mob · ${cityState}` : '25 Mob');
  };

  const handleConfirmEmbark = (address) => {
    setEmbarkAddress(address);
    console.log('📍 Embarque:', address);
  };

  const handleConfirmDestination = (address) => {
    setDestinationAddress(address);
    console.log('🏁 Destino:', address);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* ÁREA DO MAPA */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapPlaceholderText}>[ Área do Google Maps ]</Text>
      </View>

      {/* CABEÇALHO */}
      <SafeAreaView style={styles.topSafeArea}>
        <View style={styles.topCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>E</Text>
          </View>

          <View style={styles.topCardTextContainer}>
            <Text style={styles.greetingText}>Olá, Ezequias</Text>
            <Text style={styles.locationText} numberOfLines={1}>
              {locationText}
            </Text>
          </View>
        </View>
      </SafeAreaView>

      {/* CARTÃO INFERIOR */}
      <View style={styles.bottomCardContainer}>
        <View style={styles.bottomCard}>

          <CurrentAddress
            onAddressChange={handleAddressChange}
            onPressEdit={() => setActiveModal('embark')}
          />

          <TouchableOpacity
            style={styles.searchInputContainer}
            activeOpacity={0.7}
            onPress={() => setActiveModal('destination')}
          >
            <Text style={styles.searchIcon}>🔍</Text>
            <Text style={styles.searchPlaceholder}>Para onde?</Text>
            <Text style={styles.searchArrow}>{'>'}</Text>
          </TouchableOpacity>

        </View>
      </View>

      {/* BARRA DE NAVEGAÇÃO */}
      <View style={styles.bottomNavBar}>

        <TouchableOpacity style={styles.navItem}>
          <View style={styles.activeIconCircle}>
            <Image
              source={require('../../../assets/images/ir.jpg')}
              style={styles.navIconImage}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.navTextActive}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconInactive}>🕒</Text>
          <Text style={styles.navTextInactive}>Corridas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconInactive}>👤</Text>
          <Text style={styles.navTextInactive}>Perfil</Text>
        </TouchableOpacity>

      </View>

      {/* MODAL DE EMBARQUE */}
      <AddressModal
        visible={activeModal === 'embark'}
        onClose={() => setActiveModal(null)}
        onConfirm={handleConfirmEmbark}
        title="Onde deseja embarcar?"
        placeholder="Digite o endereço de embarque"
        confirmLabel="Confirmar embarque"
      />

      {/* MODAL DE DESTINO */}
      <AddressModal
        visible={activeModal === 'destination'}
        onClose={() => setActiveModal(null)}
        onConfirm={handleConfirmDestination}
        title="Para onde você vai?"
        placeholder="Digite o destino da viagem"
        confirmLabel="Confirmar destino"
      />

    </View>
  );
}