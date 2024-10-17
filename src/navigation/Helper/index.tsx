import {View, Text} from 'react-native';
import React from 'react';
import MyStack from './Helper';
import BottumTab from '../../compoents/BottumTab';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from '..';
import Header from '../../compoents/Header';

const HelperRoot:React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <MyStack />
      <BottumTab  />
    </View>
  );
};

export default HelperRoot;
