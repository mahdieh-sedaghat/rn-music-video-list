import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import defaultStyles from '../../config/styles';
import FilterScreen from '../../screens/FilterScreen';
import {IFilter} from '../../types/filter';
import AppModal from '../AppModal/AppModal';

interface IProps {
  setSearchQuery: (data: any) => void;
  selectedFilter: IFilter;
  setSelectedFilter: (data: IFilter) => void;
  setIsFiltered: (data: boolean) => void;
}

function AppSearchInput({
  setSearchQuery,
  selectedFilter,
  setSelectedFilter,
  setIsFiltered,
}: IProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = (text: string) => {
    setTimeout(() => {
      setSearchQuery(text);
    }, 500);
  };

  return (
    <>
      <View style={styles.container}>
        <Icon
          name="search"
          color={defaultStyles.colors.gray}
          size={24}
          style={styles.search}
        />
        <TextInput
          style={[defaultStyles.text, {flex: 1}]}
          placeholder="Artists, Songs, Or Podcats"
          placeholderTextColor={defaultStyles.colors.gray}
          onChangeText={text => handleSearch(text)}
        />
        <TouchableWithoutFeedback
          style={styles.filter}
          onPress={() => setModalVisible(true)}>
          <Icon name="sliders" color={defaultStyles.colors.white} size={24} />
        </TouchableWithoutFeedback>
      </View>
      <AppModal visible={modalVisible} handleVisible={setModalVisible}>
        <FilterScreen
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          setFilterModalVisible={setModalVisible}
          setIsFiltered={setIsFiltered}
        />
      </AppModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.secondary,
    borderRadius: 50,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 12,
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filter: {marginLeft: 16},
  search: {marginRight: 16},
});

export default AppSearchInput;
