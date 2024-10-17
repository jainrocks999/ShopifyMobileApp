import React, {useRef, useState,useEffect} from 'react';
import { StyleSheet, Text, View,BackHandler,TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigationParams} from '../../../navigation';
import WebView from 'react-native-webview';
import Loading from '../../../compoents/Loader';
import {query} from '../Home/query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
type Props = StackScreenProps<NavigationParams, 'Webview'>;
type Navraf = {
  target: number;
  url: string;
  title: string;
  canGoBack: boolean;
  loading: boolean;
  canGoForward: boolean;
  navigationType: string;
};
const Webview: React.FC<Props> = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const {checkouturl, page} = route.params;
  const [success,setSuccess]=useState(false)
  // Thank you for your purchase! - Shopify Store - Checkout
  const webViewRef = useRef(null);


  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleShopping);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleShopping);
    };
  }, []);

  const onNavigationStateChange = async (navRaf: Navraf) => {
    console.log(navRaf);
    if (
      navRaf.title === 'Thank you for your purchase! - Shopify Store - Checkout'
    ) {
      setSuccess(true)
      if (page === 'cart') {
        await AsyncStorage.setItem('cartId', '');
      }
      const userToke = await AsyncStorage.getItem('Token');
      let data = JSON.stringify({
        query: `query{
          customer(customerAccessToken:${JSON.stringify(userToke)}){
          ${query}
      }`,
        variables: {},
      });
      dispatch({
        type: 'sopify/userDatareq',
        data: data,
        page: 'home',
        navigation,
      });
    
    }
  };

 

  const handleShopping=()=>{
    if(success){
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
      return true
    }
   else{
    navigation.goBack()
    return true
   }
  }

  return (
    <View style={{flex: 1}}>
      {isLoading ? <Loading /> : null}
      <WebView
        onLoad={() => setIsLoading(false)}
        style={{flex: 1}}
        source={{uri: checkouturl}}
        onNavigationStateChange={onNavigationStateChange}
      />
     {success? <View style={{height:100}}/>:null}
     {success? <View 
      style={{
        position:'absolute',
        left:0,
        right:0,
        bottom:10
        }}>
         <TouchableOpacity
      style={{ height: hp('6%'),
      marginVertical: hp('2%'),
      marginHorizontal: wp('3%'),
      backgroundColor: 'green',
      elevation: 5,
      flexDirection: 'row',
      borderRadius: hp('.50%'),
      justifyContent: 'center',}}
      activeOpacity={0.5}
    
      
      onPress={()=>handleShopping()}>
      <Text style={{
         fontSize: wp('4.5%'),
         fontWeight: '600',
         color: 'white',
         alignSelf: 'center',
         fontStyle: 'italic',
      }}>{'Continue Shopping'}</Text>
    </TouchableOpacity>
      </View>:null}
    </View>
  );
};

export default Webview;
