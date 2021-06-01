import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import defaultStyles from '../../config/styles';

function EmptyState() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/empty.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Empty box :(</Text>
      <Text style={styles.subText}>There’s nothing to show</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    display: 'flex',
    height: 100,
    width: 100,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: defaultStyles.colors.white,
    marginBottom: 8,
  },
  subText: {
    fontSize: 12,
    fontWeight: '400',
    color: defaultStyles.colors.secondary,
  },
});

export default EmptyState;
