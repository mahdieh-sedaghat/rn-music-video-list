import React from 'react';
import {
  Modal,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import defaultStyles from '../../config/styles';
import AppScreen from '../AppScreen';
import AppText from '../AppText';

interface IProps {
  children: any;
  visible: boolean;
  handleVisible: (data: boolean) => void;
}

function AppModal({children, visible, handleVisible}: IProps) {
  return (
    <Modal visible={visible} animationType="slide">
      <AppScreen>
        <View style={styles.header}>
          <TouchableHighlight
            underlayColor={defaultStyles.colors.hover}
            onPress={() => handleVisible(false)}
            style={styles.icon}>
            <Icon
              name="arrow-left"
              size={24}
              color={defaultStyles.colors.white}
            />
          </TouchableHighlight>
          <AppText style={styles.title}>Filter</AppText>
        </View>
        {children}
      </AppScreen>
    </Modal>
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

export default AppModal;
