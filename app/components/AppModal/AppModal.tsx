import React from 'react';
import {Modal} from 'react-native';
import AppScreen from '../AppScreen';

interface IProps {
  children: any;
  visible: boolean;
}

function AppModal({children, visible}: IProps) {
  return (
    <Modal visible={visible} animationType="slide">
      <AppScreen>{children}</AppScreen>
    </Modal>
  );
}

export default AppModal;
