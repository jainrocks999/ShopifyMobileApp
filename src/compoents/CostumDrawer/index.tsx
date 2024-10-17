import React, {useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Check from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../Loader';
import {DrawerNavigationPramas} from '../../navigation/drawer';
import {RootState} from '../../sopify/Redux/store';
import {RootNavigationParams} from '../../Types/NavigationProps';
type Props = DrawerScreenProps<DrawerNavigationPramas>;
const CostumDrawer: React.FC<Props> = () => {
  const [show, setShow] = useState(false);
  const isLoading = useSelector((state: RootState) => state.data.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    getToken();
  });
  const navigation = useNavigation<RootNavigationParams>();
  const [token, setToken] = useState<string>();

  const getToken = async () => {
    let Token = await AsyncStorage.getItem('Token');
    if (Token != null) {
      setToken(Token);
    }
  };
  const menu = useSelector((state: RootState) => state.data.menu);
  console.log('ksdgolsdj v efw',menu?.items);
  const handleOnPress = (type: string, title: string, id: string) => {
    console.log('dwarer .....',title,type,id);
    
    let data = JSON.stringify({
      query: `{
      page(id: ${JSON.stringify(id)}) {
        title
        body
      }
    }`,
      variables: {},
    });
    if (type === 'COLLECTION') {
      dispatch({
        type: 'sopify/fetchProductById',
        prId: id,
        navigation,
        title: title,
        length: 10,
        page: 'home',
      });
    } else if (type === 'PAGE') {
      dispatch({
        type: 'sopify/pageDeatails',
        data: data,
        navigation,
      });
    }
  };
  const handleLogin = async () => {
    if (token != null) {
      dispatch({type: 'sopify/userLogout'});
      await AsyncStorage.setItem('Token', '');
      navigation.replace('Home');
    } else {
      navigation.navigate('Login', {page: ''});
    }
  };
  const userData = useSelector((state: RootState) => state.data.userData);
  const pages = useSelector((state: RootState) => state.data.pages);


  const handleProfile = () => {
    let data = JSON.stringify({
      query: `query{
        customer(customerAccessToken:${JSON.stringify(token)}){
            firstName
            lastName
            email
            acceptsMarketing
            createdAt
            numberOfOrders
            defaultAddress{
                address2
                            city
                            company
                            country
                            countryCodeV2
                            firstName
                            formatted
                            formattedArea
                            id
                            lastName
                            latitude
                            longitude
                            zip
                            provinceCode
                            province
                            phone
                            name
            }
            addresses(first:10){
                nodes{
                    address1
                            address2
                            city
                            company
                            country
                            countryCodeV2
                            firstName
                            formatted
                            formattedArea
                            id
                            lastName
                            latitude
                            longitude
                            zip
                            provinceCode
                            province
                            phone
                            name
                }
                edges{
                    cursor
                    node{
                        address1
                            address2
                            city
                            company
                            country
                            countryCodeV2
                            firstName
                            formatted
                            formattedArea
                            id
                            lastName
                            latitude
                            longitude
                            zip
                            provinceCode
                            province
                            phone
                            name
                    }
                }
            }
            orders(first:10){
                edges{
                    cursor
                    node{
                        billingAddress{
                            address1
                            address2
                            city
                            company
                            country
                            countryCodeV2
                            firstName
                            formatted
                            formattedArea
                            id
                            lastName
                            latitude
                            longitude
                            zip
                            provinceCode
                            province
                            phone
                            name
                        }
                    }
                }
               nodes{
                   billingAddress{
                        address1
                            address2
                            city
                            company
                            country
                            countryCodeV2
                            firstName
                            formatted
                            formattedArea
                            id
                            lastName
                            latitude
                            longitude
                            zip
                            provinceCode
                            province
                            phone
                            name
                   }
                   canceledAt
                   cancelReason
                   currencyCode
                  currentSubtotalPrice{
                      amount
                      currencyCode
                  }
                  totalPrice{
                      amount
                      currencyCode
                  }
                  subtotalPrice{
                      amount
                      currencyCode
                  }
                  currentTotalDuties{
                      amount
                      currencyCode
                  }
                  billingAddress{
                      address1
                            address2
                            city
                            company
                            country
                            countryCodeV2
                            firstName
                            formatted
                            formattedArea
                            id
                            lastName
                            latitude
                            longitude
                            zip
                            provinceCode
                            province
                            phone
                            name
                  }
                  email
                  totalShippingPrice{
                      amount
                      currencyCode
                  }
                  originalTotalPrice{
                      amount
                      currencyCode
                  }
                  orderNumber
                 
               }
            }
        }
    }`,
      variables: {},
    });
    if (token === null) {
      navigation.navigate('Register', {page: 'login'});
    } else {
      dispatch({
        type: 'sopify/userDatareq',
        data: data,
        page: 'raju',
        navigation,
      });
    }
  };

  const fetchPeges = () => {
    let data = JSON.stringify({
      query: `{
        pages(first:10){
            edges{
                cursor
                node{
                    body
                    bodySummary
                    createdAt
                    handle
                    id
                    onlineStoreUrl
                    seo{
                        description
                        title
                    }
                    title
                    updatedAt
                    
                }
                node{
                    body
                    bodySummary
                    createdAt
                    handle
                    id
                    onlineStoreUrl
                    seo{
                        description
                        title
                    }
                    title
                    updatedAt
                    
                }
            }
        }
    }`,
      variables: {},
    });
    dispatch({
      type: 'sopify/fetchPages',
      data: data,
    });
  };
  useEffect(() => {
    fetchPeges();
  }, []);
  const [text, setText] = useState<string>('');
  return (
    <View style={{height: hp(100), backgroundColor: 'black'}}>
      {isLoading ? <Loading /> : null}
      <DrawerContentScrollView
        contentContainerStyle={{
          backgroundColor: 'black',
          paddingVertical: wp(3),
        }}>
        <View style={styles.input}>
          <TextInput
            placeholder="Search our store"
            style={{fontSize: wp(4), fontStyle: 'italic', flex: 1}}
            placeholderTextColor={'grey'}
            value={text}
            onChangeText={input => setText(input)}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Search', {searchText: text})}
            style={styles.searchIocnCOntianer}>
            <AntDesign name="search1" size={wp(5)} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: hp(3), marginLeft: wp(8)}}>
          <FlatList
            data={menu?.items}
            scrollEnabled={false}
            keyExtractor={item => {
              return item.id;
            }}
            renderItem={({item, index}) => {
              return (
                <View>
                  <View
                    style={[
                      styles.titleContainer,
                      item.title === 'Products' && {
                        flexDirection: 'row',
                        width: '85%',
                        justifyContent: 'space-between',
                      },
                    ]}>
                    
                      
                    <Text
                      onPress={() =>
                        handleOnPress(item.type, item.title, item.resourceId)
                      }
                      style={styles.title}>
                      {item.title}
                    </Text>
                    {item.title === 'Products' ? (
                      <Entypo
                        name="plus"
                        size={wp(6)}
                        color="white"
                        onPress={() => {
                          setShow(!show);
                        }}
                      />
                    ) : null}
                  </View>
                  {item.title === 'Products' && show ? (
                    <View>
                      <FlatList
                        data={item.items}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => {
                          return item.id;
                        }}
                        renderItem={({item, index}) => {
                          return (
                            <View
                              style={{
                                paddingVertical: wp(1),
                                marginVertical: wp(1),
                                marginLeft: wp(2),
                              }}>
                              <Text
                                onPress={() => {
                                  handleOnPress(
                                    'COLLECTION',
                                    item.title,
                                    item.resourceId,
                                  );
                                }}
                                style={[
                                  styles.title,
                                  {
                                    fontSize: wp(4),
                                    fontWeight: '400',
                                    fontStyle: 'italic',
                                  },
                                ]}>
                                {item.title}
                              </Text>
                            </View>
                          );
                        }}
                      />
                    </View>
                  ) : null}
                </View>
              );
            }}
          />
          <Text
            onPress={() => handleLogin()}
            style={[styles.title, {marginTop: wp(1)}]}>
            {token === undefined ? 'Login' : 'Logout'}
          </Text>

          <Text
            onPress={() => {
              if (token !== undefined) {
                handleProfile();
              } else {
                navigation.navigate('Register', {page: 'home'});
              }
            }}
            style={[styles.title, {marginTop: wp(4)}]}>
            {token === undefined ? 'Create an Account' : 'Profile'}
          </Text>
          {/*  <View style={{marginLeft: wp(14)}}>
          <Text style={styles.terms}>FAQs</Text>
          <Text style={styles.terms}>ABOUT US</Text>
          <Text style={styles.terms}>TERMS OF USE</Text>
          <Text style={styles.terms}>PRIVACY POLICY</Text>
        </View>*/}
          <View style={{marginTop: wp(5)}}></View>
          <FlatList
            scrollEnabled={false}
            data={pages.pages?.edges}
            keyExtractor={(item, index) => item.node.id}
            renderItem={({item, index}) => {
              return (
              
                <View style={{marginTop: wp(1)}}>

               
                  
                  <Text
                    onPress={() => {
                      let data = JSON.stringify({
                        query: `{
                      page(id: ${JSON.stringify(item.node.id)}) {
                        title
                        body
                      }
                    }`,
                        variables: {},
                      });
                      dispatch({
                        type: 'sopify/pageDeatails',
                        data: data,
                        navigation,
                      });
                    }}
                    style={styles.terms}>
                    {item.node.title}
                  </Text>
                  
                </View>
              );
            }}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
export default CostumDrawer;
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: hp(5.7),
    marginHorizontal: wp(4),
    marginTop: wp(5),
    borderRadius: wp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: wp(2),
  },
  terms: {
    fontSize: wp(4),
    fontWeight: '500',
    color: 'grey',
    paddingVertical: wp(1),
    fontStyle: 'italic',
  },
  searchIocnCOntianer: {
    alignSelf: 'flex-end',
    height: '100%',
    width: '20%',
    backgroundColor: '#d29d4b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: wp(5),
    textAlign: 'left',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  titleContainer: {
    paddingVertical: wp(2),
    marginVertical: wp(1),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
});
