import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 16,
    padding: spacing.md,
    marginVertical: spacing.sm,
    width: '100%',
    elevation: 2,
  },
  cardIcon: { marginRight: spacing.sm },
  cardContent: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: colors.text },
  cardSubtitle: { fontSize: 12, color: colors.gray, marginTop: spacing.xs },
});