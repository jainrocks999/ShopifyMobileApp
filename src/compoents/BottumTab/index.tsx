import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {query} from '../../screens/main/Cart/queries';
import {useSelector, useDispatch} from 'react-redux';
import {RootNavigationParams} from '../../Types/NavigationProps';
import {RootState} from '../../sopify/Redux/store';
import userQuery from '../../data/userQuery';
const BottumTab = () => {
  const [foucused, setFocused] = useState<number[]>([0]);
  const navigation = useNavigation<RootNavigationParams>();

  const handleProfile = async () => {
    const token = await AsyncStorage.getItem('Token');

    let data = JSON.stringify({
      query: `query{
        customer(customerAccessToken:${JSON.stringify(token)}){
           ${userQuery}
        }
    }`,
      variables: {},
    });
    if (token != null || token != undefined) {
      dispatch({
        type: 'sopify/userDatareq',
        data: data,
        page: 'raju',
        navigation,
      });
    } else {
      navigation.navigate('Login', {page: ''});
    }
  };
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) => state.data.cartItem);
  const userData = useSelector((state: RootState) => state.data.userData);

  useEffect(() => {
    getCartItem();
  }, []);
  const getCartItem = async () => {
    const cartId = await AsyncStorage.getItem('cartId');
    let data = JSON.stringify({
      query: `{
      cart(id:${JSON.stringify(cartId)}) {
       ${query}
    }
  }
    }`,
      variables: {},
    });
    dispatch({
      type: 'sopify/getCartItem',
      data: data,
    });
  };

  const handleFocuse = (num: number) => {
    setFocused([num]);
  };
  const renderHome = () => {
    return (
      <View style={[styles.itemConatiner]}>
        <SimpleLineIcons name="home" size={wp(6)} color={'black'} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: wp(3),
            marginTop: wp(1),
            color: 'black',
            fontStyle: 'italic',
          }}>
          Home
        </Text>
      </View>
    );
  };
  const renderUser = () => {
    return (
      <View style={[styles.itemConatiner]}>
        <SimpleLineIcons name="user" size={wp(5)} color={'black'} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: wp(3),
            marginTop: wp(1),
            color: 'black',
            fontStyle: 'italic',
          }}>
          Profile
        </Text>
      </View>
    );
  };

  const renderCategoties = () => {
    return (
      <View style={[styles.itemConatiner]}>
        <Feather name="grid" size={wp(5)} color={'black'} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: wp(3),
            color: 'black',
            marginTop: wp(1),
          }}>
          Categories
        </Text>
      </View>
    );
  };

  const renderCart = () => {
    return (
      <View style={[styles.itemConatiner]}>
        <Feather color={'black'} name="shopping-bag" size={wp(6)} />
        {cartItem && cartItem?.lines?.edges?.length ? (
          <View
            style={{
              height: wp(5),
              width: wp(5),
              backgroundColor: 'black',
              position: 'absolute',
              right: wp(4),
              top: wp(-1),
              borderRadius: wp(2.5),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {cartItem?.lines?.edges?.length}
            </Text>
          </View>
        ) : null}
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: wp(3),
            marginTop: wp(1),
            fontStyle: 'italic',
          }}>
          Cart
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.cont}>
        <TouchableOpacity
          style={[foucused.includes(0) ? styles.opacity : {}]}
          onPress={() => {
            handleFocuse(0);
            navigation.navigate('HomeScreen');
          }}>
          {renderHome()}
        </TouchableOpacity>
        <TouchableOpacity
          style={[foucused.includes(1) ? styles.opacity : {}]}
          onPress={() => {
            handleFocuse(1);
            navigation.navigate('Categories');
          }}>
          {renderCategoties()}
        </TouchableOpacity>

        <TouchableOpacity
          style={[foucused.includes(2) ? styles.opacity : {}]}
          onPress={() => {
            handleFocuse(2), navigation.navigate('Cart');
          }}>
          {renderCart()}
        </TouchableOpacity>
        <TouchableOpacity
          style={[foucused.includes(3) ? styles.opacity : {}]}
          onPress={async () => {
            handleFocuse(3);
            let token = await AsyncStorage.getItem('Token');
            if (token === null) {
              handleProfile();
            } else {
              navigation.navigate('Profile');
            }
          }}>
          {renderUser()}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottumTab;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ededed',
    height: hp(8),
    position: 'absolute',
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: wp(1),
    shadowRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    elevation: 5,
  },
  itemConatiner: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(18),
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '98%',
  },
  opacity: {
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: hp(4.5),
    paddingVertical: wp(1),
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 3,
    backgroundColor: 'white',
    paddingHorizontal: wp(1),
    elevation: 5,
  },
});
