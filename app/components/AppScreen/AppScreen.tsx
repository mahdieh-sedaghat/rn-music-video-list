import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import defaultStyles from '../../config/styles';

interface IProps {
  children: any;
}

function AppScreen({children}: IProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <View>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyles.colors.bg,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default AppScreen;
