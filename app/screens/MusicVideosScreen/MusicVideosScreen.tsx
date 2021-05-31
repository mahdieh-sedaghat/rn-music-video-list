import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import AppText from '../../components/AppText';
import AppTextInput from '../../components/AppTextInput';
import ListItem from '../../components/ListItem';
import colors from '../../config/colors';
import MusicVideoAPI from '../../services/API/MusicVideoAPI';

function MusicVideosScreen() {
  const [musicVideoList, setMusicVideoList] = useState([]);
  const [twoColumnList, setTwoColumnList] = useState([]);
  const [renderedList, setRenderedList] = useState(twoColumnList.slice(0, 6));
  const [pageNumber, setPageNumber] = useState(0);

  const {width} = Dimensions.get('window');
  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1 !== r2;
    }),
  );
  const [layoutProvider] = useState(
    new LayoutProvider(
      index => 1,
      (type, dim) => {
        dim.width = (width - 64) / 2;
        dim.height = width;
      },
    ),
  );

  useEffect(() => {
    async function getList() {
      const response = await MusicVideoAPI.getMusicVideoList();
      // setGenreList(response?.data?.genres);
      setMusicVideoList(response?.data?.videos);
    }
    getList();
  }, []);

  const generateTwoColumnList = (data: any) => {
    let i,
      j,
      temp: any = [],
      chunk = 2;
    for (i = 0, j = data.length; i < j; i += chunk) {
      temp.push(data.slice(i, i + chunk));
    }
    setTwoColumnList(temp);
  };

  useEffect(() => {
    generateTwoColumnList(musicVideoList);
  }, [musicVideoList]);

  useEffect(() => {
    setDataProvider(prevState => prevState.cloneWithRows(renderedList));
  }, [renderedList]);

  useEffect(() => {
    setRenderedList(twoColumnList.slice(0, pageNumber * 6));
  }, [pageNumber, twoColumnList]);

  const rowRenderer = (type, data, index) => {
    return (
      <View>
        <ListItem
          title={data[0].artist}
          subTitle={data[0].title}
          image={data[0].image_url}
        />
      </View>
    );
  };

  const loadMore = () => {
    setPageNumber(pageNumber + 1);
    setDataProvider(prevState => prevState.cloneWithRows(renderedList));
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Discover</AppText>
      <AppText style={styles.description}>
        Search in Milion and more tracks Search in Milion and more tracks Search
        in Milion and more tracks
      </AppText>
      <AppTextInput placeholder="Artists, Songs, Or Podcats" />
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  description: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '300',
    color: colors.gray,
  },
  row: {justifyContent: 'center'},
  title: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 8,
  },
});

export default MusicVideosScreen;
