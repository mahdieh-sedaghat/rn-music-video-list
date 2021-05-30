import React from 'react';
import {TouchableHighlight} from 'react-native';
import colors from '../../config/colors';
import AppCard from '../AppCard';

interface IProps {
  title: string;
  subTitle: string;
  image?: string;
}

function ListItem({title, subTitle, image}: IProps) {
  return (
    <TouchableHighlight underlayColor={colors.white} onPress={() => {}}>
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
