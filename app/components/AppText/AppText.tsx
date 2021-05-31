import React from 'react';
import {Text} from 'react-native';

import defaultStyles from '../../config/styles';

interface IProps {
  children: any;
  style?: any;
}

function AppText({children, style}: IProps) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
