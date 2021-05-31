import {Platform} from 'react-native';
import colors from './colors';

export default {
  colors,
  text: {
    fontSize: 14,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontWeight: '400',
    color: colors.white,
  },
};
