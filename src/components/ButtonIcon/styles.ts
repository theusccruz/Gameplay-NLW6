import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,

    backgroundColor: theme.colors.primary,
    borderRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    flex: 1,
    color: theme.colors.heading,

    fontSize: 15,
    textAlign: 'center',
  },

  iconWrapper: {
    width: 56,
    height: 50,

    justifyContent: 'center',
    alignItems: 'center',

    borderRightWidth: 1,
    borderRightColor: theme.colors.line,
  },

  icon: {
    width: 24,
    height: 18,
  },
});

export default styles;
