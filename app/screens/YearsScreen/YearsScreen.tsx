import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import AppText from '../../components/AppText';
import getYearsRange from '../../utils/yearsRange';
import defaultStyles from '../../config/styles';

function YearsScreen() {
  const years = getYearsRange();
  return (
    <FlatList
      data={years}
      keyExtractor={(item: any) => item.key.toString()}
      renderItem={({item}) => (
        <AppText style={styles.item}>{item?.value}</AppText>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    borderBottomColor: defaultStyles.colors.hover,
    borderBottomWidth: 1,
    width: '100%',
  },
});

export default YearsScreen;
