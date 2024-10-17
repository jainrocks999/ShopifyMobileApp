import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootState} from '../../sopify/Redux/store';
import {RootNavigationParams} from '../../Types/NavigationProps';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerNavigationPramas} from '../../navigation/drawer';

const Header = () => {
  const navigation = useNavigation<RootNavigationParams>();
  const navigation2 =
    useNavigation<DrawerNavigationProp<DrawerNavigationPramas>>();
  const [token, setToken] = useState<string>();
  const menu = useSelector((state: RootState) => state.data.menu);
  const dispatch = useDispatch();
  useEffect(() => {
    getToken();
  }, []);
  const getToken = async () => {
    let token = await AsyncStorage.getItem('Token');
    if (token != null) {
      setToken(token);
    }
  };

  const handleMenu = () => {
    let data = JSON.stringify({
      query: `query{
     
        menu(handle: "main-menu") {
          id
          handle
          title
          items {
            
              id
              title
              resourceId
              tags
              url
              type
              items{
                  id
                  resourceId
                  title
                  url
              }}}}`,
      variables: {},
    });
    dispatch({
      type: 'sopify/fetchMenu',
      data,
      navigation: navigation,
    });
  };
  const handleLogin = async () => {
    let token = await AsyncStorage.getItem('Token');
    if (token != null) {
      dispatch({type: 'sopify/userLogout'});
      await AsyncStorage.setItem('Token', '');
      navigation.replace('Home');
    } else {
      navigation.replace('Login', {page: ''});
    }
  };
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#ededed',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '4%',
        paddingBottom: wp(1),
        shadowColor: 'black',
        shadowOffset: {height: 3, width: 0},
        shadowOpacity: wp(2),
        elevation: 5,
      }}>
      <View style={{width: '33.67%'}}>
        <Feather
          onPress={() => {
            if (menu.id === undefined) {
              handleMenu();
            } else {
              navigation2.openDrawer();
            }
          }}
          name="menu"
          style={{fontSize: wp(9), color: 'black'}}
        />
      </View>
      <View
        style={{
          width: '33.67%',
          alignItems: 'center',

          justifyContent: 'center',
        }}>
        <Image
          style={{
            height: hp(5),
            width: hp(5),
          }}
          source={require('../../assests/header3.png')}
        />
      </View>
      <View style={[styles.container2, {width: '33.67%', paddingLeft: wp(14)}]}>
        <AntDesign
          name="search1"
          onPress={() => navigation.navigate('Search', {searchText: ''})}
          size={wp(5.6)}
          color="black"
        />
        <FontAwesome5
          name={token ? 'log-out' : 'login'}
          size={wp(6)}
          color="grey"
          onPress={() => {
            handleLogin();
          }}
        />
      </View>
    </View>
  );
};
export default Header;
{
  /* <View style={styles.search}>
         
          <TextInput
            placeholder="Search...."
            style={{
              flex: 1,
              fontSize: wp(3.7),
              marginLeft: '3%',
            }}
            placeholderTextColor={'grey'}
          />
        </View> */
}
