import React from 'react';
import {TouchableHighlight} from 'react-native';

import defaultStyles from '../../config/styles';
import AppCard from '../AppCard';

interface IProps {
  title: string;
  subTitle: string;
  image?: string;
}

function ListItem({title, subTitle, image}: IProps) {
  return (
    <TouchableHighlight
      underlayColor={defaultStyles.colors.white}
      onPress={() => {}}>
      <AppCard
        title={title}
        subTitle={subTitle}
        image={image}
        // style={{height: size}}
      />
    </TouchableHighlight>
  );
}

export default ListItem;
