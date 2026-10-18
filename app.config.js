// app.config.js
export default {
  expo: {
    name: 'mobapp',
    slug: 'mobapp',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',

    plugins: [
      'expo-sqlite',
      [
        'react-native-maps',
        {
          androidGoogleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
          iosGoogleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
        },
      ],
    ],

    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.freedombrr.mobapp', // Adicionado para o iOS também
      NSContactsUsageDescription:
        'Precisamos acessar seus contatos para adicionar pessoas de confiança.',
      infoPlist: {
        NSLocationWhenInUseUsageDescription:
          'Precisamos da sua localização para mostrar o endereço de embarque.',
      },
      config: {
        googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
      },
    },

    android: {
      package: 'com.freedombrr.mobapp', // 👈 AQUI ESTÁ A CORREÇÃO
      adaptiveIcon: {
        backgroundColor: '#E6F4FE',
        foregroundImage: './assets/android-icon-foreground.png',
        backgroundImage: './assets/android-icon-background.png',
        monochromeImage: './assets/android-icon-monochrome.png',
      },
      permissions: [
        'READ_CONTACTS',
        'WRITE_CONTACTS',
        'ACCESS_COARSE_LOCATION',
        'ACCESS_FINE_LOCATION',
      ],
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
        },
      },
    },

    web: {
      favicon: './assets/favicon.png',
    },
  },
};