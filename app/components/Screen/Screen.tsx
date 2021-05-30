import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../../config/colors';

interface IProps {
  children: any;
}

function Screen({children}: IProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <View>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.bg,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 32 : 32,
    flex: 1,
    alignItems: 'center',
    // paddingHorizontal: 24,
  },
});

export default Screen;
