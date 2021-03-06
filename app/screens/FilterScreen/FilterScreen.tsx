import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, StatusBar, Platform} from 'react-native';
import AppButton from '../../components/AppButton';
import AppModal from '../../components/AppModal/AppModal';
import AppPicker from '../../components/AppPicker';
import defaultStyles from '../../config/styles';
import {IFilter} from '../../types/filter';
import GenreScreen from '../GenreScreen/GenreScreen';
import YearsScreen from '../YearsScreen';

interface IProps {
  selectedFilter: IFilter;
  setSelectedFilter: (data: IFilter) => void;
  setFilterModalVisible: (data: boolean) => void;
  setIsFiltered: (data: boolean) => void;
}

function FilterScreen({
  selectedFilter,
  setSelectedFilter,
  setFilterModalVisible,
  setIsFiltered,
}: IProps) {
  const [yearModalVisible, setYearModalVisible] = useState(false);
  const [genreModalVisible, setGenreModalVisible] = useState(false);
  const [text, setText] = useState('');

  const onShowResult = () => {
    setFilterModalVisible(false);
    setIsFiltered(true);
  };

  useEffect(() => {
    if (selectedFilter?.genres?.length) {
      let temp = '';

      selectedFilter?.genres?.map((item: any) => {
        temp = temp + `${item?.name}, `;
      });

      setText(temp);
    }
  }, [selectedFilter]);

  return (
    <>
      <View
        style={{
          height:
            Dimensions.get('window').height -
            72 -
            (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
        }}>
        <View style={styles.pickerWrap}>
          <AppPicker
            title="Year"
            placeholder="Select Year"
            onPress={() => setYearModalVisible(true)}
            style={styles.picker}
            selectedItem={selectedFilter?.year}
            selectedItemText={selectedFilter?.year?.value}
          />
          <AppPicker
            title="Genre"
            placeholder="Select Genre(s)"
            onPress={() => setGenreModalVisible(true)}
            selectedItem={selectedFilter?.genres}
            selectedItemText={text?.slice(0, text.length - 2)}
          />
        </View>
        <AppButton
          title="Show Result"
          onPress={onShowResult}
          disabled={
            !selectedFilter?.year?.key && !selectedFilter?.genres?.length
          }
        />
      </View>
      <AppModal visible={yearModalVisible} handleVisible={setYearModalVisible}>
        <YearsScreen
          setYearModalVisible={setYearModalVisible}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </AppModal>
      <AppModal
        visible={genreModalVisible}
        handleVisible={setGenreModalVisible}>
        <GenreScreen
          setGenreModalVisible={setGenreModalVisible}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </AppModal>
    </>
  );
}

const styles = StyleSheet.create({
  picker: {
    borderBottomColor: defaultStyles.colors.hover,
    borderBottomWidth: 1,
  },
  pickerWrap: {
    flex: 1,
  },
});

export default FilterScreen;
