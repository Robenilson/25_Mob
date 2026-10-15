import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Linking,
} from 'react-native';
import * as Location from 'expo-location';

import { styles } from './styles';

export default function CurrentAddress({ onAddressChange, onPressEdit }) {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Função que pega o GPS e faz geocodificação reversa
  const fetchCurrentAddress = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // 1. Pede permissão
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permissão de localização negada');
        Alert.alert(
          'Permissão necessária',
          'Precisamos da sua localização para mostrar o endereço de embarque.',
          [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Abrir configurações', onPress: () => Linking.openSettings() },
          ]
        );
        return;
      }

      // 2. Pega a posição atual
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      const { latitude, longitude } = location.coords;

      // 3. Geocodificação reversa (coordenadas → endereço)
      const [place] = await Location.reverseGeocodeAsync({ latitude, longitude });

      if (!place) {
        setError('Não foi possível obter o endereço');
        return;
      }

      // 4. Monta o endereço completo (linha 1)
      const street = place.street || place.name || '';
      const number = place.streetNumber ? `, ${place.streetNumber}` : '';
      const district = place.district || place.subregion || '';
      const city = place.city || place.subAdministrativeArea || '';
      const state = place.region || '';

      const formattedAddress =
        [
          `${street}${number}`,
          district,
          city,
        ]
          .filter(Boolean)
          .join(' · ') || 'Endereço não identificado';

      // 5. 👇 Monta a cidade + estado prontos (linha 2)
      //    Ex.: "Feira de Santana - Bahia" ou "Feira de Santana - BA"
      const cityState = [city, state].filter(Boolean).join(' - ');

      setAddress(formattedAddress);

      // 6. Avisa o componente pai com TUDO pronto
      if (onAddressChange) {
        onAddressChange({
          // Endereço completo da rua
          formattedAddress,

          // 👇 Já formatado para exibir direto: "Feira de Santana - Bahia"
          cityState,

          // Campos separados (para quem precisar)
          city,
          state,

          // Coordenadas
          latitude,
          longitude,

          // Objeto completo do reverseGeocode
          place,
        });
      }
    } catch (err) {
      console.error('Erro ao obter endereço:', err);
      setError('Erro ao obter localização');
    } finally {
      setLoading(false);
    }
  }, [onAddressChange]);

  useEffect(() => {
    fetchCurrentAddress();
  }, [fetchCurrentAddress]);

  return (
    <View style={styles.embarkRow}>
      <View style={styles.dot} />

      <View style={styles.embarkTexts}>
        <Text style={styles.embarkLabel}>EMBARQUE</Text>

        {loading ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
            <ActivityIndicator size="small" color="#8A8A8A" />
            <Text style={[styles.loadingText, { marginLeft: 8 }]}>
              Buscando endereço...
            </Text>
          </View>
        ) : error ? (
          <TouchableOpacity onPress={fetchCurrentAddress}>
            <Text style={[styles.embarkAddress, { color: '#EF4444' }]}>
              {error} — toque para tentar de novo
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.embarkAddress} numberOfLines={1}>
            {address}
          </Text>
        )}
      </View>

      <TouchableOpacity onPress={onPressEdit}>
        <Text style={styles.editIcon}>✎</Text>
      </TouchableOpacity>
    </View>
  );
}