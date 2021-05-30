import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

interface IProps {
  children: any;
  style?: any;
}

function AppText({children, style}: IProps) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default AppText;
