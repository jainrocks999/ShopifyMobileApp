import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import netinfo from '@react-native-community/netinfo';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigationParams} from '../../navigation';
type Props = StackScreenProps<NavigationParams, 'Splash'>;
const Splash: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      goTo();
    }, 2000);
  }, []);
  const goTo = async () => {
    netinfo.addEventListener(state => {
      if (state.isConnected) {
        navigation.reset({index: 0, routes: [{name: 'Home'}]});
      } else {
        navigation.navigate('Internet');
      }
    });
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={{height: '100%', width: '100%'}}
        // source={{
        //   uri: `https://cdn.shopify.com/s/files/1/0548/9570/6327/files/Wholespoon_logo_180x.png?v=1632130611`,
        // }}
        source={require('../../assests/splash.png')}
      />
    </View>
  );
};

export default Splash;
