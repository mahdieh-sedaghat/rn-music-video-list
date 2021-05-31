import React from 'react';
import {Dimensions, StyleSheet, TouchableHighlight} from 'react-native';

import defaultStyles from '../../config/styles';
import AppCard from '../AppCard';

interface IProps {
  title: string;
  subTitle: string;
  image?: string;
}

function ListItem({title, subTitle, image}: IProps) {
  return (
    <TouchableHighlight
      underlayColor={defaultStyles.colors.hover}
      onPress={() => {}}
      style={styles.listItem}>
      <AppCard title={title} subTitle={subTitle} image={image} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: Dimensions.get('window').width / 2 - 32,
    borderRadius: 16,
  },
});

export default ListItem;
