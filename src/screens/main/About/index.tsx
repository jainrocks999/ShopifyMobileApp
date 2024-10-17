import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import RenderHtml from 'react-native-render-html';
import {useSelector} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StackScreenProps} from '@react-navigation/stack';
import {HelperNavigationParams} from '../../../navigation/Helper/Helper';
import {RootState} from '../../../sopify/Redux/store';
type Props = StackScreenProps<HelperNavigationParams, 'About'>;
const About: React.FC<Props> = () => {
  const about = useSelector((state: RootState) => state.data.about);
  
  return (
    <View style={{flex: 1, backgroundColor: '#e6f0f2'}}>
      <ScrollView
        contentContainerStyle={{
          marginHorizontal: wp(5),
          paddingBottom: wp(20),
        }}>
        <RenderHtml source={{html: about}} />
      </ScrollView>
    </View>
  );
};

export default About;
