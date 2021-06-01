import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import AppText from '../../components/AppText';
import getYearsRange from '../../utils/yearsRange';
import defaultStyles from '../../config/styles';
import {IFilter} from '../../types/filter';
import AppButton from '../../components/AppButton';

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

  const [selectedYear, setSelectedYear] = useState<any>();

  const onSelectYear = () => {
    setSelectedFilter({...selectedFilter, year: selectedYear});
    setYearModalVisible(false);
  };

  return (
    <View
      style={{
        height:
          Dimensions.get('window').height -
          72 -
          (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
      }}>
      <FlatList
        style={styles.list}
        data={years}
        keyExtractor={(item: any) => item.key.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setSelectedYear(item)}
            style={styles.item}>
            <AppText>{item?.value}</AppText>
            {item?.key === selectedYear?.key && (
              <Icon name="check" color={defaultStyles.colors.white} size={20} />
            )}
          </TouchableOpacity>
        )}
      />
      <AppButton title="Show Result" onPress={onSelectYear} />
    </View>
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
  list: {flex: 1},
});

export default YearsScreen;
