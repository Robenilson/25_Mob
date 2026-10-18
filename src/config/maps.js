// src/config/maps.js
// A chave EXPO_PUBLIC_* fica disponível em runtime no web e no mobile.
export const GOOGLE_MAPS_API_KEY =
  process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

if (!GOOGLE_MAPS_API_KEY) {
  console.warn(
    '[maps] EXPO_PUBLIC_GOOGLE_MAPS_API_KEY não definida. ' +
    'Crie o arquivo .env na raiz do projeto.'
  );
}