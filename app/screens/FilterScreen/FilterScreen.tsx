import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AppModal from '../../components/AppModal/AppModal';
import AppPicker from '../../components/AppPicker';
import defaultStyles from '../../config/styles';
import YearsScreen from '../YearsScreen';

function FilterScreen() {
  const [yearModalVisible, setYearModalVisible] = useState(false);

  return (
    <>
      <View>
        <AppPicker
          title="Year"
          placeholder="Select Year"
          onPress={() => setYearModalVisible(true)}
          style={styles.picker}
        />
        <AppPicker
          title="Genre"
          placeholder="Select Genre(s)"
          onPress={() => {}}
        />
      </View>
      <AppModal visible={yearModalVisible} handleVisible={setYearModalVisible}>
        <YearsScreen />
      </AppModal>
    </>
  );
}

const styles = StyleSheet.create({
  picker: {
    borderBottomColor: defaultStyles.colors.hover,
    borderBottomWidth: 1,
  },
});

export default FilterScreen;
