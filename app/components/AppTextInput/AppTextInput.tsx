import React from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
import colors from '../../config/colors';

interface IProps {
  placeholder?: string;
}

function AppTextInput({placeholder}: IProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder || 'Type here...'}
        placeholderTextColor={colors.gray}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 50,
    flexDirection: 'row',
    width: '100%',
    padding: 8,
    marginVertical: 24,
  },
  textInput: {
    fontSize: 14,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontWeight: '400',
    color: colors.white,
  },
});

export default AppTextInput;
