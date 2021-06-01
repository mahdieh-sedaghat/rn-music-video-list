import React, {useEffect, useState} from 'react';
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

import defaultStyles from '../../config/styles';
import AppText from '../../components/AppText';
import MusicVideoAPI from '../../services/API/MusicVideoAPI';
import AppButton from '../../components/AppButton';
import {IFilter} from '../../types/filter';

interface IProps {
  selectedFilter: IFilter;
  setSelectedFilter: (data: IFilter) => void;
  setGenreModalVisible: (data: boolean) => void;
}

function GenreScreen({
  selectedFilter,
  setSelectedFilter,
  setGenreModalVisible,
}: IProps) {
  const [genreList, setGenreList] = useState<any>([]);
  const [selectedGenres, setSelectedGenres] = useState<any>(
    selectedFilter?.genres || [],
  );

  useEffect(() => {
    async function getList() {
      const response = await MusicVideoAPI.getMusicVideoList();
      setGenreList(response?.data?.genres);
    }
    getList();
  }, []);

  const onSelectGenres = () => {
    setSelectedFilter({...selectedFilter, genres: selectedGenres});
    setGenreModalVisible(false);
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
        data={genreList}
        keyExtractor={(item: any) => item?.id?.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedGenres([...selectedGenres, {...item, selected: true}]);
            }}
            style={styles.item}>
            <AppText>{item?.name}</AppText>
            {selectedGenres?.find((genre: any) => genre?.id === item?.id) && (
              <Icon name="check" color={defaultStyles.colors.white} size={20} />
            )}
          </TouchableOpacity>
        )}
      />
      <AppButton title="Show Result" onPress={onSelectGenres} />
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

export default GenreScreen;
