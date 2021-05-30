import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText';

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
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 16,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  subTitle: {
    color: colors.gray,
    fontSize: 12,
  },
  title: {
    color: colors.white,
    fontSize: 14,
    marginBottom: 4,
  },
});

export default AppCard;
