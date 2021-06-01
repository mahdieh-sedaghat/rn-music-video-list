import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import AppSearchInput from '../../components/AppSearchInput';

import AppText from '../../components/AppText';
import ListItem from '../../components/ListItem';
import defaultStyles from '../../config/styles';
import MusicVideoAPI from '../../services/API/MusicVideoAPI';
import {IFilter} from '../../types/filter';

function MusicVideosScreen() {
  const {width} = Dimensions.get('window');
  const [musicVideoList, setMusicVideoList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [renderedList, setRenderedList] = useState(musicVideoList.slice(0, 6));
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<IFilter>();
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  useEffect(() => {
    async function getList() {
      const response = await MusicVideoAPI.getMusicVideoList();
      setMusicVideoList(response?.data?.videos);
      setSearchResult(response?.data?.videos);
    }
    getList();
  }, []);

  useEffect(() => {
    setRenderedList(searchResult.slice(0, pageNumber * 6));
  }, [pageNumber, searchResult]);

  const loadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  const filterByGenre = (data: any) => {
    const temp = [];
    for (const iterator of data) {
      for (const item of selectedFilter?.genres as any) {
        if (iterator?.genre_id === item?.id) {
          temp.push(iterator);
        }
      }
    }

    return temp;
  };

  const showSearchFilterResult = () => {
    let temp: any = musicVideoList;

    if (searchQuery?.length) {
      temp = temp?.filter(
        (item: any) =>
          item?.artist
            ?.toString()
            ?.toLowerCase()
            ?.includes(searchQuery?.toLowerCase()) ||
          item?.title
            ?.toString()
            ?.toLowerCase()
            .includes(searchQuery?.toLowerCase()),
      );
    }

    if (isFiltered) {
      if (selectedFilter?.year?.key) {
        temp = temp?.filter(
          (item: any) => item?.release_year === selectedFilter?.year?.value,
        );
      }
      if (selectedFilter?.genres?.length) {
        temp = filterByGenre(temp);
      }
    }

    setSearchResult(temp);
  };

  useEffect(() => {
    showSearchFilterResult();
  }, [selectedFilter, isFiltered, searchQuery]);

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: width * 0.064}}>
        <AppText style={styles.title}>Discover</AppText>
        <AppText style={styles.description}>
          Search in Milion and more tracks
        </AppText>
        <AppSearchInput
          setSearchQuery={setSearchQuery}
          selectedFilter={selectedFilter as IFilter}
          setSelectedFilter={setSelectedFilter}
          setIsFiltered={setIsFiltered}
        />
      </View>
      <FlatList
        onEndReached={loadMore}
        data={renderedList}
        keyExtractor={(item: any) => item?.id?.toString()}
        style={styles.flatList}
        numColumns={2}
        columnWrapperStyle={styles.columnStyle}
        renderItem={({item}) => (
          <ListItem
            title={item.artist}
            subTitle={item.title}
            image={item.image_url}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  columnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  container: {
    paddingTop: 24,
  },
  description: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '300',
    color: defaultStyles.colors.gray,
  },
  flatList: {paddingHorizontal: 24},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '600',
    color: defaultStyles.colors.white,
    marginBottom: 8,
  },
});

export default MusicVideosScreen;
