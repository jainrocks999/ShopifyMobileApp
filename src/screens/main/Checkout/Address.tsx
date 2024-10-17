import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from './component';
import SelectDropdown from 'react-native-select-dropdown';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Loading from '../../../compoents/Loader';
import CheckBox from '@react-native-community/checkbox';
import {StackScreenProps} from '@react-navigation/stack';
import {HelperNavigationParams} from '../../../navigation/Helper/Helper';
import {RootState} from '../../../sopify/Redux/store';
type Props = StackScreenProps<HelperNavigationParams, 'Address'>;
const Address: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const data = props.route.params.data;
  const navigation = useNavigation();
  const countries = ['India', 'Canada', 'Australia', 'Ireland'];
  const isLoading = useSelector((state: RootState) => state.data.isLoading);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [address, setAddress] = React.useState({
    firstName: data?.firstName ? data.firstName : '',
    lastName: data?.lastName ? data.lastName : '',
    address1: data?.address1 ? data.address1 : '',
    address2: data?.address2 ? data.address2 : '',
    city: data?.city ? data.city : '',
    country: data?.country ? data.country : '',
    province: data?.province ? data.province : '',
    phone: data?.phone ? data.phone?.slice(3, 13) : '',
    zip: data?.zip ? data.zip : '',
    company: data?.company ? data.company : '',
  });
  const handleOnChangeText = (text: string, input: string) => {
    setAddress(prev => ({...prev, [text]: input}));
  };

  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    city: '',
    province: '',
    phone: '',
    zip: '',
  });
  const handleOnError = (param: string, msg: string) => {
    setError(prev => ({...prev, [param]: msg}));
  };
  const handleonSubmit = () => {
    let valid = true;
    if (!address.firstName) {
      handleOnError('firstName', 'Please enter first name');
      valid = false;
    } else if (address.firstName.length < 3) {
      handleOnError('firstName', 'Name sould be greater then 2 charecter');
      valid = false;
    }
    if (!address.lastName) {
      handleOnError('lastName', 'Please enter last name');
      valid = false;
    } else if (address.lastName.length < 3) {
      handleOnError('lastName', 'lastname sould be greater then 2 charecter');
      valid = false;
    }
    if (!address.address1) {
      handleOnError('address1', 'Please enter your address');
      valid = false;
    } else if (address.address1.length < 15) {
      handleOnError('address1', 'please enter full address');
      valid = false;
    }
    if (!address.city) {
      handleOnError('city', 'Please enter your city name');
      valid = false;
    }

    if (!address.province) {
      handleOnError('province', 'Please enter your state name');
      valid = false;
    }
    if (!address.phone) {
      handleOnError('phone', 'Please enter your phone number');
      valid = false;
    } else if (address.phone.length < 10) {
      handleOnError('phone', 'phone must be 10 digits');
      valid = false;
    }
    if (!address.zip) {
      handleOnError('zip', 'Please enter yout pincode');
      valid = false;
    }
    if (valid) {
      if (!address.country) {
        Alert.alert('Please select country');
        valid = false;
      } else {
        handleOnSave();
      }
    }
  };

  const handleOnSave = async () => {
    const userToke = await AsyncStorage.getItem('Token');
    const address2 = {...address, phone: `+91${address.phone}`};
    if (data === undefined) {
      let data1 = JSON.stringify({
        query: `mutation customerAddressCreate($address: MailingAddressInput!, $customerAccessToken: String!) {
        customerAddressCreate(address: $address, customerAccessToken: $customerAccessToken) {
            
          customerAddress {
            address1
            address2
            city
            company
            countryCodeV2
            firstName
            lastName
          }
          customerUserErrors {
            code
            field
            message
          }
        }
      }`,
        variables: {
          address: address2,
          customerAccessToken: userToke,
        },
      });
      dispatch({
        type: 'sopify/addAdress',
        data: data1,
        navigation,
        msg: 'Adress Added Succesfully',
        token: userToke,
        op: 'add',
      });
    } else {
      let data2 = JSON.stringify({
        query: `mutation customerAddressUpdate($address: MailingAddressInput!, $customerAccessToken: String!, $id: ID!) {
        customerAddressUpdate(address: $address, customerAccessToken: $customerAccessToken, id: $id) {
          customerAddress {
            address1
          }
          customerUserErrors {
            code
            field
            message
            
          }
        }
      }`,
        variables: {
          address: address2,
          customerAccessToken: userToke,
          id: data.id,
        },
      });
      dispatch({
        type: 'sopify/updateAddress',
        data: data2,
        navigation,
        msg: 'Address updated Successfully',
        token: userToke,
        op: 'update',
        id: data.id,
        check: toggleCheckBox,
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      {isLoading ? <Loading /> : null}
      <ScrollView contentContainerStyle={{paddingBottom: wp(20)}}>
        <View>
          <View style={[styles.contact, {marginTop: wp(4)}]}>
            <Text style={styles.cont}>Contact</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: wp(3),
              width: '100%',
              justifyContent: 'space-evenly',
            }}>
            <Input
              placeholder="Firstname*"
              value={address.firstName}
              onChangeText={input => {
                handleOnChangeText('firstName', input);
              }}
              error={error.firstName}
              input2={true}
              style={[styles.input3]}
              onFocus={() => handleOnError('firstName', '')}
            />

            <Input
              placeholder="Lastname*"
              value={address.lastName}
              onChangeText={input => {
                handleOnChangeText('lastName', input);
              }}
              input2={true}
              error={error.lastName}
              style={styles.input3}
              onFocus={() => handleOnError('lastName', '')}
            />
          </View>

          <Input
            placeholder="Mobile/Phone*"
            value={address.phone}
            onChangeText={input => {
              handleOnChangeText('phone', input);
            }}
            input2={false}
            error={error.phone}
            style={styles.inputfield}
            onFocus={() => handleOnError('phone', '')}
          />
          <Input
            placeholder="Company*"
            value={address.company}
            onChangeText={input => {
              handleOnChangeText('company', input);
            }}
            input2={false}
            error=""
            style={styles.inputfield}
            onFocus={() => {
              null;
            }}
          />
          <View style={styles.contact}>
            <Text style={styles.cont}>Shipping Address</Text>
          </View>
          <View style={[styles.inputfield2]}>
            <SelectDropdown
              data={countries}
              defaultButtonText={data?.country ? data.country : 'Country'}
              dropdownStyle={{
                width: '100%',
              }}
              onSelect={(selectedItem, index) => {
                handleOnChangeText('country', selectedItem);
              }}
            />
            <Fontisto
              name="angle-down"
              size={wp(4)}
              style={{marginRight: wp(4)}}
            />
          </View>

          <Input
            placeholder="Address (House NO,Building,Street,Area)*"
            value={address.address1}
            onChangeText={input => {
              handleOnChangeText('address1', input);
            }}
            input2={false}
            error={error.address1}
            style={styles.inputfield}
            onFocus={() => handleOnError('address1', '')}
          />
          <Input
            placeholder="Address(2) (House NO,Building,Street,Area)"
            value={address.address2}
            onChangeText={input => handleOnChangeText('address2', input)}
            input2={false}
            style={styles.inputfield}
            error=""
            onFocus={() => null}
          />
          <Input
            placeholder="State"
            value={address.province}
            onChangeText={input => {
              handleOnChangeText('province', input);
            }}
            input2={true}
            style={styles.inputfield}
            error={error.province}
            onFocus={() => handleOnError('province', '')}
          />

          <View
            style={{
              flexDirection: 'row',
              marginVertical: wp(3),
              justifyContent: 'space-evenly',
              alignSelf: 'center',
              marginHorizontal: wp(2),
            }}>
            <Input
              placeholder="City"
              value={address.city}
              onChangeText={input => {
                handleOnChangeText('city', input);
              }}
              input2={true}
              style={styles.input3}
              error={error.city}
              onFocus={() => handleOnError('city', '')}
            />

            <Input
              placeholder="Pincode"
              value={address.zip}
              onChangeText={input => {
                handleOnChangeText('zip', input);
              }}
              input2={true}
              style={styles.input3}
              error={error.zip}
              onFocus={() => handleOnError('zip', '')}
            />
          </View>

          {data != undefined ? (
            <View
              style={{
                height: hp(4),
                marginHorizontal: wp(3),
                marginVertical: wp(3),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
              />
              <Text
                style={{
                  fontWeight: '500',
                  marginLeft: wp(2),
                  fontStyle: 'italic',
                }}>
                Set as default address
              </Text>
            </View>
          ) : null}
        </View>
        <TouchableOpacity
          onPress={() => {
            handleonSubmit();
          }}
          style={[styles.btn2, {marginTop: data === null ? wp(3) : wp(0)}]}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: wp(4),
              fontStyle: 'italic',
            }}>
            {'Save'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Address;
