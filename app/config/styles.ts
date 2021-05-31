import {Platform} from 'react-native';

export default {
  colors: {
    primary: '#763BFF',
    bg: '#1E2125',
    secondary: '#2E3239',
    gray: '#878A91',
    white: '#fff',
    hover: '#282B2F',
  },
  text: {
    fontSize: 14,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontWeight: '400',
    color: '#fff',
  },
};
