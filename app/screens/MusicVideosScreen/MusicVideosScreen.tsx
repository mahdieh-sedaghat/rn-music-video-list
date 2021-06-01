import React, {useEffect, useState} from 'react';
import {Dimensions, Platform, StatusBar, StyleSheet, View} from 'react-native';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
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
  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1 !== r2;
    }),
  );
  const [layoutProvider] = useState(
    new LayoutProvider(
      index => 1,
      (type, dim) => {
        dim.width = width - 48;
        dim.height = (2 * width) / 3;
      },
    ),
  );

  useEffect(() => {
    async function getList() {
      const response = await MusicVideoAPI.getMusicVideoList();
      setMusicVideoList(response?.data?.videos);
      setSearchResult(response?.data?.videos);
    }
    getList();
  }, []);

  useEffect(() => {
    setDataProvider(prevState => prevState.cloneWithRows(renderedList));
  }, [renderedList]);

  useEffect(() => {
    setRenderedList(searchResult.slice(0, pageNumber * 6));
  }, [pageNumber, searchResult]);

  const rowRenderer = (type, data, index) => {
    return (
      <View style={styles.row}>
        <ListItem
          title={data.artist}
          subTitle={data.title}
          image={data.image_url}
        />
      </View>
    );
  };

  const loadMore = () => {
    setPageNumber(pageNumber + 1);
    setDataProvider(prevState => prevState.cloneWithRows(renderedList));
  };

  const showSearchFilterResult = () => {
    let temp = musicVideoList;

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
      <RecyclerListView
        layoutProvider={layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={rowRenderer}
        onEndReached={loadMore}
        onEndReachedThreshold={25}
        //   renderFooter={renderFooter}
        renderAheadOffset={0}
        ListEmptyComponent={<></>}
        //   scrollViewProps={{
        //     refreshControl: (
        //       <RefreshControl
        //         refreshing={networkStatus === 4}
        //         onRefresh={() => refetch()}
        //       />
        //     )
        //   }}
        scrollViewProps={{
          style: {paddingHorizontal: width * 0.064},
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors.bg,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 24 : 24,
  },
  description: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '300',
    color: defaultStyles.colors.gray,
  },
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
