import React from 'react';
import {Modal} from 'react-native';
import Screen from '../Screen';

interface IProps {
  children: any;
  visible: boolean;
}

function AppModal({children, visible}: IProps) {
  return (
    <Modal visible={visible} animationType="slide">
      <Screen>{children}</Screen>
    </Modal>
  );
}

export default AppModal;
