import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

import AppText from '../AppText';
import defaultStyles from '../../config/styles';

interface IProps {
  title: string;
  subTitle: string;
  image?: any;
}

const AppCard = ({title, subTitle, image}: IProps) => {
  return (
    <View style={styles.card}>
      <Image style={[styles.image]} source={{uri: image}} resizeMode="cover" />
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 8,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width / 2 - 40,
    marginBottom: 12,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  subTitle: {
    color: defaultStyles.colors.gray,
    fontSize: 10,
  },
  title: {
    color: defaultStyles.colors.white,
    fontSize: 14,
    marginBottom: 4,
  },
});

export default AppCard;
