/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Screen from './app/components/Screen';
// import ListItem from './app/components/ListItem';
// import Screen from './app/components/Screen';
import MusicVideosScreen from './app/screens/MusicVideosScreen';

const App = () => {
  return (
    <Screen>
      <MusicVideosScreen />
    </Screen>
    // <Screen>
    //   <ListItem
    //     title="hi"
    //     subTitle="how areb you"
    //     image="https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501437/images/app/w522_h292.jpg"
    //   />
    // </Screen>
  );
};

export default App;
