import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import defaultStyles from '../../config/styles';
import AppText from '../AppText';

interface IProps {
  title: string;
  placeholder: string;
  onPress: () => void;
  style?: any;
}

function AppPicker({title, placeholder, onPress, style}: IProps) {
  return (
    <View style={[styles.container, style]}>
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.placeholder}>{placeholder}</AppText>
      </View>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.hover}
        onPress={onPress}
        style={styles.icon}>
        <Icon
          name="chevron-right"
          color={defaultStyles.colors.gray}
          size={14}
        />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.bg,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    fontSize: 12,
    fontWeight: '400',
    color: defaultStyles.colors.gray,
  },
  text: {flex: 1},
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: defaultStyles.colors.white,
    marginBottom: 8,
  },
});

export default AppPicker;
