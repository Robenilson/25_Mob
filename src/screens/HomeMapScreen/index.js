// src/screens/HomeMapScreen/index.js
import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { useAuth } from '../../hooks/useAuth';
import { Location } from '../../hooks/Location/index'; // ✅ Mantido
import { GOOGLE_MAPS_API_KEY } from '../../config/maps';
import MapView, { Marker } from '../../components/Map';

import CurrentAddress from '../../components/CurrentAddress';
import AddressModal from '../../components/AddressModal/index';
import { styles } from './styles';

export default function HomeMapScreen() {
  const { user } = useAuth();
  const { region, loading, error } = Location(); // ✅ Mantido

  const [locationText, setLocationText] = useState('25 Mob · Carregando...');
  const [activeModal, setActiveModal] = useState(null);
  const [embarkAddress, setEmbarkAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');

  const displayName = user?.name?.trim() || 'Usuário';
  const avatarLetter = displayName.charAt(0).toUpperCase();

  const handleAddressChange = (data) => {
    if (!data) return;
    const cityState = data.cityState;
    setLocationText(cityState ? `25 Mob · ${cityState}` : '25 Mob');
  };

  const handleConfirmEmbark = (address) => {
    setEmbarkAddress(address);
    setActiveModal(null);
    console.log('📍 Embarque:', address);
  };

  const handleConfirmDestination = (address) => {
    setDestinationAddress(address);
    setActiveModal(null);
    console.log('🏁 Destino:', address);
  };

  console.log('[HomeMapScreen]', { loading, region, error });

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* 1️⃣ MAPA (Fundo Absoluto) */}
      <View style={StyleSheet.absoluteFill}>
        {region ? (
          <MapView
            style={StyleSheet.absoluteFill}
            provider="google"
            googleMapsApiKey={GOOGLE_MAPS_API_KEY}
            initialRegion={region}
            showsUserLocation
            showsMyLocationButton={false}
            showsCompass={false}
            toolbarEnabled={false}
          >
            <Marker
              coordinate={region}
              title="Você está aqui"
              pinColor="#8155D6"
            />
          </MapView>
        ) : (
          <View style={styles.mapLoading}>
            <ActivityIndicator size="large" color="#8155D6" />
            <Text style={styles.mapLoadingText}>
              {error ?? 'Obtendo sua localização…'}
            </Text>
          </View>
        )}
      </View>

      {/* 2️⃣ CABEÇALHO (Flutuando no topo) */}
      <SafeAreaView style={styles.topSafeArea} pointerEvents="box-none">
        <View style={styles.topCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{avatarLetter}</Text>
          </View>
          <View style={styles.topCardTextContainer}>
            <Text style={styles.greetingText}>Olá, {displayName}</Text>
            <Text style={styles.locationText} numberOfLines={1}>
              {locationText}
            </Text>
          </View>
        </View>
      </SafeAreaView>

      {/* 3️⃣ CARTÃO INFERIOR E NAVBAR (Flutuando no fundo) */}
      <View style={styles.bottomContainer} pointerEvents="box-none">
        
        {/* Cartão de endereço e busca */}
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

        {/* Barra de Navegação Inferior */}
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
      </View>

      {/* 4️⃣ MODAIS */}
      <AddressModal
        visible={activeModal === 'embark'}
        onClose={() => setActiveModal(null)}
        onConfirm={handleConfirmEmbark}
        title="Onde deseja embarcar?"
        placeholder="Digite o endereço de embarque"
        confirmLabel="Confirmar embarque"
      />

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