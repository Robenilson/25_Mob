import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import { Contact, requestPermissionsAsync } from 'expo-contacts'; // 👈 Nova API
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

export default function TrustedContacts({ onChange }) {
  const [trustedContacts, setTrustedContacts] = useState([]);

  const updateContacts = (updater) => {
    setTrustedContacts((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      if (onChange) onChange(next);
      return next;
    });
  };

  const handleAddContact = async () => {
    try {
      // 1. Pede permissão (nova API: função importada direto do root)
      const { status } = await requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Permissão necessária',
          'Para adicionar contatos de confiança, precisamos acessar sua lista de contatos.',
          [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Abrir configurações', onPress: () => Linking.openSettings() },
          ]
        );
        return;
      }

      // 2. Abre o seletor nativo (nova API: Contact.presentPicker())
      const contact = await Contact.presentPicker();
      if (!contact) return; // usuário cancelou

      // 3. Obtém nome e telefone (agora são métodos assíncronos)
      const fullName = await contact.getFullName();
      const phones = await contact.getPhones();
      const phoneNumber = phones?.[0]?.number || 'Sem telefone';
      const contactName = fullName || 'Sem nome';

      // 4. Evita duplicados (comparando pelo ID do contato)
      const alreadyExists = trustedContacts.some((c) => c.id === contact.id);
      if (alreadyExists) {
        Alert.alert('Ops!', 'Esse contato já está na sua lista.');
        return;
      }

      // 5. Adiciona à lista local
      updateContacts((prev) => [
        ...prev,
        { id: contact.id, name: contactName, phone: phoneNumber },
      ]);
    } catch (error) {
      console.error('Erro ao acessar contatos:', error);
      Alert.alert('Erro', 'Não foi possível abrir sua lista de contatos.');
    }
  };

  const handleRemoveContact = (id) => {
    Alert.alert(
      'Remover contato',
      'Deseja remover esse contato da lista de confiança?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => updateContacts((prev) => prev.filter((c) => c.id !== id)),
        },
      ]
    );
  };

  return (
    <View style={styles.whiteCard}>
      <Text style={styles.cardTitle}>CONTATOS DE CONFIANÇA</Text>
      <Text style={styles.cardDescription}>
        Na corrida, um toque avisa essas pessoas por mensagem com o link da sua viagem.
      </Text>

      {trustedContacts.length === 0 ? (
        <Text style={styles.emptyStateText}>
          Você ainda não tem ninguém aqui.
        </Text>
      ) : (
        <View style={styles.contactsList}>
          {trustedContacts.map((item) => (
            <View key={item.id} style={styles.contactRow}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarText}>
                  {item.name.charAt(0).toUpperCase()}
                </Text>
              </View>

              <View style={styles.contactInfo}>
                <Text style={styles.contactName} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.contactPhone} numberOfLines={1}>
                  {item.phone}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => handleRemoveContact(item.id)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Ionicons name="trash-outline" size={22} color="#EF4444" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      <TouchableOpacity
        style={styles.addContactButton}
        activeOpacity={0.8}
        onPress={handleAddContact}
      >
        <Ionicons name="person-add-outline" size={20} color="#1A1A1A" />
        <Text style={styles.addContactText}>Adicionar contato</Text>
      </TouchableOpacity>
    </View>
  );
}