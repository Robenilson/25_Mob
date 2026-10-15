import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles'; // mantém os estilos do card

export default function CardOption({ icon, imageSource, title, subtitle, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.cardIcon}>
        {imageSource ? (
          <Image
            source={imageSource}
            style={{ width: 45, height: 45 }}  
            resizeMode="contain"
          />
        ) : (
          <Ionicons name={icon} size={40} color="#000" />
        )}
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );
}