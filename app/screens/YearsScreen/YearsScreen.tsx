import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import AppText from '../../components/AppText';
import getYearsRange from '../../utils/yearsRange';
import defaultStyles from '../../config/styles';
import {IFilter} from '../../types/filter';

interface IProps {
  selectedFilter: IFilter;
  setSelectedFilter: (data: IFilter) => void;
  setYearModalVisible: (data: boolean) => void;
}

function YearsScreen({
  selectedFilter,
  setSelectedFilter,
  setYearModalVisible,
}: IProps) {
  const years = getYearsRange();

  const onSelectYear = (selectedYear: any) => {
    setSelectedFilter({...selectedFilter, year: selectedYear});
    setYearModalVisible(false);
  };

  return (
    <FlatList
      data={years}
      keyExtractor={(item: any) => item.key.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => onSelectYear(item)}
          style={styles.item}>
          <AppText>{item?.value}</AppText>
          {item?.key === selectedFilter?.year?.key && (
            <Icon name="check" color={defaultStyles.colors.white} size={20} />
          )}
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    borderBottomColor: defaultStyles.colors.hover,
    borderBottomWidth: 1,
  },
});

export default YearsScreen;
