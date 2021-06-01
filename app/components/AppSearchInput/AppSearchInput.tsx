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
import AppModal from '../AppModal/AppModal';

function AppSearchInput() {
  const [modalVisible, setModalVisible] = useState(false);

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
        />
        <TouchableWithoutFeedback
          style={styles.filter}
          onPress={() => setModalVisible(true)}>
          <Icon name="sliders" color={defaultStyles.colors.white} size={24} />
        </TouchableWithoutFeedback>
      </View>
      <AppModal visible={modalVisible} handleVisible={setModalVisible}>
        <FilterScreen />
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
