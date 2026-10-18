// src/services/serviceLocation.js
// ============================================================================
// Camada de acesso à localização do dispositivo.
// Hoje: expo-location. Amanhã: qualquer outro — só este arquivo muda.
// Nada de estado React aqui, só funções.
// ============================================================================
import * as Location from 'expo-location';

/** Região fallback (São Paulo) para quando não há permissão/GPS */
export const DEFAULT_REGION = {
  latitude: -23.55052,
  longitude: -46.633308,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

const toRegion = (coords, delta = 0.01) => ({
  latitude: coords.latitude,
  longitude: coords.longitude,
  latitudeDelta: delta,
  longitudeDelta: delta,
});

/**
 * Pede permissão de localização em primeiro plano.
 * @returns {Promise<'granted' | 'denied' | 'undetermined'>}
 */
export async function requestLocationPermission() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  return status;
}

/**
 * Obtém a posição atual (uma vez).
 * @returns {Promise<{latitude:number, longitude:number, latitudeDelta:number, longitudeDelta:number}>}
 */
export async function getCurrentRegion() {
  const pos = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.High,
  });
  return toRegion(pos.coords);
}

/**
 * Acompanha mudanças de posição.
 * @param {(region: {latitude:number, longitude:number, latitudeDelta:number, longitudeDelta:number}) => void} onUpdate
 * @returns {Promise<{ remove: () => void }>} subscription para cleanup
 */
export async function watchRegion(onUpdate) {
  return Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.High,
      distanceInterval: 10,
      timeInterval: 5000,
    },
    (p) => onUpdate(toRegion(p.coords))
  );
}