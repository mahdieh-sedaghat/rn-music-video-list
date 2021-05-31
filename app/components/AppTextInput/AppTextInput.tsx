import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import defaultStyles from '../../config/styles';

interface IProps {
  placeholder?: string;
}

function AppTextInput({placeholder}: IProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={defaultStyles.text}
        placeholder={placeholder || 'Type here...'}
        placeholderTextColor={defaultStyles.colors.gray}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.secondary,
    borderRadius: 50,
    flexDirection: 'row',
    width: '100%',
    padding: 8,
    marginVertical: 24,
  },
});

export default AppTextInput;
