import React from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AppText from '../../components/AppText';
import defaultStyles from '../../config/styles';

interface IProps {
  handleVisible: (data: boolean) => void;
}

function FilterScreen({handleVisible}: IProps) {
  return (
    <>
      <View style={styles.header}>
        <TouchableHighlight
          underlayColor={defaultStyles.colors.hover}
          onPress={() => {
            handleVisible(false);
          }}
          style={styles.icon}>
          <Icon
            name="arrow-left"
            size={24}
            color={defaultStyles.colors.white}
          />
        </TouchableHighlight>
        <AppText style={styles.title}>Filter</AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
    width: '100%',
    backgroundColor: defaultStyles.colors.secondary,
    marginTop: Platform.OS === 'android' ? -StatusBar.currentHeight : 0,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 12,
    top: 12,
  },
  title: {fontSize: 16, fontWeight: '600'},
});

export default FilterScreen;
