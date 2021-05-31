import React from 'react';

interface IProps {
  name: 'search' | 'filter';
}

function AppIcon({name}: IProps) {
  switch (name) {
    case 'search':
      return <></>;
    case 'filter':
      return <></>;

    default:
      return <></>;
  }
}

export default AppIcon;
