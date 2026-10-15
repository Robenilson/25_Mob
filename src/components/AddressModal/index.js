import { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

export default function AddressModal({
  visible,
  onClose,
  onConfirm,
  title = 'Digite um endereço',
  placeholder = 'Digite o endereço',
  confirmLabel = 'Confirmar',
}) {
  const [address, setAddress] = useState('');

  // Reseta o input sempre que o modal abrir
  useEffect(() => {
    if (visible) setAddress('');
  }, [visible]);

  const handleConfirm = () => {
    if (!address.trim()) return;
    if (onConfirm) onConfirm(address.trim());
    setAddress('');
    if (onClose) onClose();
  };

  const handleClose = () => {
    setAddress('');
    if (onClose) onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
    >
      <KeyboardAvoidingView
        style={styles.modalOverlay}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.modalCard}>

          {/* Cabeçalho */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            <TouchableOpacity onPress={handleClose}>
              <Ionicons name="close" size={24} color="#1A1A1A" />
            </TouchableOpacity>
          </View>

          {/* Input */}
          <TextInput
            style={styles.modalInput}
            placeholder={placeholder}
            placeholderTextColor="#999"
            value={address}
            onChangeText={setAddress}
            autoFocus
          />

          {/* Botão confirmar */}
          <TouchableOpacity
            style={[
              styles.modalButton,
              !address.trim() && styles.modalButtonDisabled,
            ]}
            activeOpacity={0.8}
            disabled={!address.trim()}
            onPress={handleConfirm}
          >
            <Text style={styles.modalButtonText}>{confirmLabel}</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}