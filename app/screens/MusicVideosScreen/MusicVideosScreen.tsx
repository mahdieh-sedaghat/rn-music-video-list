import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import AppText from '../../components/AppText';
import AppTextInput from '../../components/AppTextInput';
import ListItem from '../../components/ListItem';
import defaultStyles from '../../config/styles';
import MusicVideoAPI from '../../services/API/MusicVideoAPI';

function MusicVideosScreen() {
  const [musicVideoList, setMusicVideoList] = useState([]);
  const [renderedList, setRenderedList] = useState(musicVideoList.slice(0, 6));
  const [pageNumber, setPageNumber] = useState(1);

  const {width} = Dimensions.get('window');

  useEffect(() => {
    async function getList() {
      const response = await MusicVideoAPI.getMusicVideoList();
      setMusicVideoList(response?.data?.videos);
    }
    getList();
  }, []);

  useEffect(() => {
    setRenderedList(musicVideoList.slice(0, pageNumber * 6));
  }, [pageNumber, musicVideoList]);

  const loadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: width * 0.064}}>
        <AppText style={styles.title}>Discover</AppText>
        <AppText style={styles.description}>
          Search in Milion and more tracks
        </AppText>
        <AppTextInput placeholder="Artists, Songs, Or Podcats" />
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
