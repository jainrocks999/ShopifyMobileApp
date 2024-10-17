import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../../compoents/Loader';
import {StackScreenProps} from '@react-navigation/stack';
import {HelperNavigationParams} from '../../../navigation/Helper/Helper';
import {RootState} from '../../../sopify/Redux/store';
import {Node} from '../../../Types/user';
import Entypo from 'react-native-vector-icons/Entypo';
import Star from 'react-native-vector-icons/AntDesign';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
type Props = StackScreenProps<HelperNavigationParams, 'AddressBook'>;
const AddressBook: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.data.userData);
  const isLoading = useSelector((state: RootState) => state.data.isLoading);
  const deleteAddress = async (id: string, index: number) => {
    const userToke = await AsyncStorage.getItem('Token');
    let data = JSON.stringify({
      query: `mutation customerAddressDelete($customerAccessToken: String!, $id: ID!) {
      customerAddressDelete(customerAccessToken: $customerAccessToken, id: $id) {
        customerUserErrors {
          code
          field
          message
        }
        deletedCustomerAddressId
        
      }
    }`,
      variables: {
        customerAccessToken: userToke,
        id: id,
      },
    });
    dispatch({
      type: 'sopify/deleteAddress',
      data: data,
      token: userToke,
      navigation,
    });
    handleOnVisible(index);
  };
  console.log(userData.id);
  const editAddress = (item: Node, index: number) => {
    navigation.navigate('Address', {data: item});
    handleOnVisible(index);
  };
  const setDefaultAddress = async (id: string, index: number) => {
    const userToken = await AsyncStorage.getItem('Token');

    dispatch({
      type: 'sopify/setDefaulAddress',
      id: id,
      token: userToken,
      page: 'home',
      msg: 'Default Address Updated',
    });

    handleOnVisible(index);
  };
  const [visible, setVisible] = useState<number[]>();
  const handleOnVisible = (indexx: number) => {
    if (visible?.includes(indexx)) {
      let vs = visible.filter(item => item != indexx);
      setVisible(vs);
    } else {
      setVisible([...(visible ?? []), indexx]);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? <Loading /> : null}

      <View style={styles.addtitleContainer}>
        <Text style={styles.address}>Your Addresses</Text>
        <View style={styles.line}></View>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: wp(14)}}>
        <View style={{alignSelf: 'center', marginTop: wp(2)}}>
          <FlatList
            scrollEnabled={false}
            data={userData?.addresses?.nodes}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <View style={styles.addressContainer}>
                  <View>
                    <Text style={styles.nameTitle}>{item.name}</Text>
                    <Text style={[styles.nameTitle, {marginTop: wp(0.5)}]}>
                      {item?.address1 ? item.address1 + ',' : ''}
                    </Text>
                    <Text
                      style={[
                        styles.nameTitle,
                        {marginTop: wp(0.5), width: wp(65)},
                      ]}>
                      {item?.address2 ? item.address2 + ' , ' : ''}
                      {item?.company ? item.company + ' , ' : ''}
                      {item?.city ? item.city + ' , ' : ''}
                      {item?.province ? item.province : ''}
                      {item?.zip ? ' - ' + item.zip : ''}
                    </Text>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginRight: wp(8),
                      }}>
                      <View
                        style={{
                          marginRight:
                            userData?.defaultAddress.id != item.id
                              ? wp(4)
                              : wp(0),
                        }}>
                        {userData.defaultAddress.id === item.id ? (
                          <Star name="star" size={wp(4)} color="#FFD700" />
                        ) : null}
                      </View>
                      <TouchableOpacity onPress={() => handleOnVisible(index)}>
                        <Entypo
                          name="dots-three-vertical"
                          size={wp(4)}
                          color="black"
                          style={{marginLeft: wp(4)}}
                        />
                      </TouchableOpacity>
                    </View>
                    <Menu
                      onRequestClose={() => handleOnVisible(index)}
                      visible={visible?.includes(index)}
                      style={{backgroundColor: '#f2ede7'}}>
                      <MenuItem
                        style={{
                          borderBottomWidth: wp(0.1),
                          height: wp(10),
                        }}
                        onPress={() => setDefaultAddress(item.id, index)}>
                        Set Default
                      </MenuItem>
                      <MenuItem
                        style={{
                          height: wp(10),
                        }}
                        onPress={() => editAddress(item, index)}>
                        Edit
                      </MenuItem>
                      <MenuItem
                        style={{
                          borderTopWidth: wp(0.1),
                          borderBottomWidth: wp(0.1),
                          height: wp(10),
                        }}
                        onPress={() => deleteAddress(item.id, index)}>
                        Delete
                      </MenuItem>
                    </Menu>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
      <AntDesign
        onPress={() => {
          navigation.navigate('Address', {data: undefined as any});
        }}
        name="pluscircle"
        style={styles.plusIcon}
      />
    </View>
  );
};

export default AddressBook;
{
  /*
 <TouchableOpacity
                    onPress={() =>
                      index != 0 ? setDefaultAddress(item.id) : null
                    }>
                    <Text
                      style={[
                        styles.default,
                        {
                          color:
                            userData.defaultAddress.id === item.id
                              ? 'black'
                              : '#D9C5AA',
                        },
                      ]}>
                      {userData.defaultAddress.id == item.id ? 'Default' : null}
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.adText}>{item?.firstName}</Text>
                  <Text style={styles.adText}>{item?.lastName}</Text>
                  {item.phone ? (
                    <Text style={styles.adText}>{item?.phone}</Text>
                  ) : null}
                  {item.company ? (
                    <Text style={styles.adText}>{item?.company}</Text>
                  ) : null}
                  <Text style={styles.adText}>{item?.address1}</Text>
                  {item.address2 ? (
                    <Text style={styles.adText}>{item?.address2}</Text>
                  ) : null}

                  <View style={{flexDirection: 'row'}}>
                   
                    {item.city ? (
                      <Text style={styles.adText}>{' ' + item.city}</Text>
                    ) : null}
                    {item.province ? (
                      <Text style={styles.adText}>{'  ' + item.province}</Text>
                    ) : null}
                     {item.country ? (
                    <Text style={styles.adText}>{' '+item?.country}</Text>
                  ) : null}
                     {item.zip ? (
                      <Text style={styles.adText}>{' '+item.zip}</Text>
                    ) : null}
                  </View>
                 
                  <View
                    style={{
                      width: '10%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: wp(4),

                      marginRight: wp(10),
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        editAddress(item);
                      }}
                      style={styles.btn}>
                      <Text style={styles.btnText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                      <Text
                        onPress={() => deleteAddress(item.id)}
                        style={styles.btnText}>
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
 */
}
