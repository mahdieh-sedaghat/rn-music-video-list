import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import defaultStyles from '../../config/styles';

interface IProps {
  title: string;
  onPress: any;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
}

function AppButton({title, onPress, color = 'primary', disabled}: IProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: defaultStyles.colors[color],
        },
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 24,
  },
  text: {
    color: defaultStyles.colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default AppButton;
