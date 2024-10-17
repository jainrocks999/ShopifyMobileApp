import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Input from './component';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SelectDropdown from 'react-native-select-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../../compoents/Loader';
import {StackScreenProps} from '@react-navigation/stack';
import {RootState} from '../../../sopify/Redux/store';
import {TabRouter} from '@react-navigation/native';
import {NavigationParams} from '../../../navigation';
import checkOuerry from '../../../data/checkout';

type Props = StackScreenProps<NavigationParams>;

const Checkout: React.FC<Props> = ({navigation}) => {
  const iseSevedAddres = useSelector(
    (state: RootState) => state.data.userData?.addresses?.nodes,
  );
  const updateCheckout = useSelector(
    (state: RootState) => state.data.updateCheckout,
  );

  const dispatch = useDispatch();
  const [isEdited, setIsEdited] = useState(false);
  const [tokenn, setToken] = useState<boolean>(false);
  const checkout = useSelector((state: RootState) => state.data.checkoutData);
  const isLoading = useSelector((state: RootState) => state.data.isLoading);
  const useData = useSelector((state: RootState) => state.data.userData);
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    company: '',
    country: '',
    phone: '',
    province: '',
    zip: '',
  });
  const [email, setEmail] = useState<string>(
    useData?.email ? useData.email : updateCheckout.email,
  );

  const [booladdress, setIsBoolAddress] = useState<boolean>(false);
  const updateCheckoutEmail = () => {
    let data = JSON.stringify({
      query: `mutation checkoutEmailUpdateV2($checkoutId: ID!, $email: String!) {
  checkoutEmailUpdateV2(checkoutId: $checkoutId, email: $email) {
    checkout {
       id
    }
    checkoutUserErrors {
      code
      field
      message
    }
  }
}`,
      variables: {checkoutId: checkout.id, email: email},
    });

    dispatch({
      type: 'sopify/updateCheckoutEMail',
      data: data,
    });
  };

  useEffect(() => {
    getAddress();
  }, [useData]);

  const getAddress = async () => {
    setAddress(prev => ({
      firstName: useData?.defaultAddress?.firstName
        ? useData?.defaultAddress?.firstName
        : updateCheckout?.shippingAddress?.firstName
        ? updateCheckout?.shippingAddress?.firstName
        : '',
      lastName: useData?.defaultAddress?.lastName
        ? useData?.defaultAddress?.lastName
        : updateCheckout?.shippingAddress?.lastName
        ? updateCheckout?.shippingAddress?.lastName
        : '',
      company: useData?.defaultAddress?.company
        ? useData?.defaultAddress?.company
        : updateCheckout?.shippingAddress?.company
        ? updateCheckout?.shippingAddress?.company
        : '',
      address1: useData?.defaultAddress?.address1
        ? useData?.defaultAddress?.address1
        : updateCheckout?.shippingAddress?.address1
        ? updateCheckout?.shippingAddress?.address1
        : '',
      address2: useData?.defaultAddress?.address2
        ? useData?.defaultAddress?.address2
        : updateCheckout?.shippingAddress?.address2
        ? updateCheckout?.shippingAddress?.address2
        : '',
      city: useData?.defaultAddress?.city
        ? useData?.defaultAddress?.city
        : updateCheckout?.shippingAddress?.city
        ? updateCheckout?.shippingAddress?.city
        : '',
      country: useData?.defaultAddress?.country
        ? useData?.defaultAddress?.country
        : updateCheckout?.shippingAddress?.country
        ? updateCheckout?.shippingAddress?.country
        : '',
      province: useData?.defaultAddress?.province
        ? useData?.defaultAddress?.province
        : updateCheckout?.shippingAddress?.province
        ? updateCheckout?.shippingAddress?.province
        : '',
      phone: useData?.defaultAddress?.phone
        ? useData?.defaultAddress?.phone.slice(3, 13)
        : updateCheckout?.shippingAddress?.phone
        ? updateCheckout?.shippingAddress?.phone.slice(3, 13)
        : '',
      zip: useData?.defaultAddress?.zip
        ? useData?.defaultAddress?.zip
        : updateCheckout?.shippingAddress?.zip
        ? updateCheckout?.shippingAddress?.zip
        : '',
    }));
  };
  const handleonSubmit = (param: string, input: string) => {
    setAddress(prev => ({...prev, [param]: input}));
  };
  const [show, setSHow] = useState(false);
  useEffect(() => {
    adressses();
  }, [useData]);

  const adressses = async () => {
    const token = await AsyncStorage.getItem('Token');

    if (token === null) {
      if (
        updateCheckout.shippingAddress === null ||
        updateCheckout.shippingAddress === undefined
      ) {
        setSHow(false);
        setEmail('');
        setIsBoolAddress(false);
        setAddress(prev => ({
          ...prev,
          firstName: '',
          lastName: '',
          address1: '',
          address2: '',
          city: '',
          company: '',
          country: '',
          phone: '',
          province: '',
          zip: '',
        }));
      } else {
        setIsBoolAddress(true);
        setSHow(true);
        setEmail(updateCheckout.email);
      }
    } else if (iseSevedAddres?.length > 0) {
      setIsBoolAddress(true);
      setSHow(true);
      setEmail(useData.email);
    } else {
      setToken(true);
    }
  };
  const itemprice = (price: string) => {
    let amount = 0;
    checkout?.lineItems?.edges?.map((item, index) => {
      amount =
        amount +
        item?.node?.quantity * parseInt(item?.node?.variant?.price?.amount);
    });
    if (price === '') return '₹ ' + amount;
    return amount + parseInt(price);
  };
  const countries = ['India', 'Canada', 'Australia', 'Ireland'];

  const createAddress = async () => {
    const userToke = await AsyncStorage.getItem('Token');
    const address2 = {...address, phone: `+91${address.phone}`};

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
      op: 'create',
    });
  };

  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    city: '',
    province: '',
    phone: '',
    zip: '',
    Email: '',
  });
  const handleOnError = (param: string, msg: string) => {
    setError(prev => ({...prev, [param]: msg}));
  };
  const handleOnChangeText = async () => {
    console.log('this is caleed');

    const token = await AsyncStorage.getItem('Token');
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
    } else if (address.firstName.length < 3) {
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
    if (!email) {
      handleOnError('Email', 'Please Enter Email');
      valid = false;
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      handleOnError('Email', 'Please Enter Valid Email');
      valid = false;
    }

    if (valid) {
      if (!address.country) {
        Alert.alert('Please select country');
        valid = false;
      } else {
        updateCheckoutEmail();
        if (token) {
          console.log('called');
          if (iseSevedAddres?.length <= 0) {
            setSHow(true);
            createAddress();
            setIsBoolAddress(true);
          } else if (isEdited) {
            editAddress();
            setSHow(true);
            setIsEdited(false);
            setIsBoolAddress(true);
          } else {
            // dispatch({
            //   type: 'sopify/updateCheckout',
            //   id: checkout?.id,
            //   address: address,
            // });
            doupdateCheckout();
          }
        } else {
          // dispatch({
          //   type: 'sopify/updateCheckout',
          //   id: checkout?.id,
          //   address: {...address, phone: `+91${address.phone}`},
          // });
          doupdateCheckout();

          setIsEdited(false);
          setSHow(true);
          setIsBoolAddress(true);
        }
      }
    }
  };
  const doupdateCheckout = () => {
    console.log('called');
    let data = JSON.stringify({
      query: `mutation checkoutShippingAddressUpdateV2($checkoutId: ID!, $shippingAddress: MailingAddressInput!) {
      checkoutShippingAddressUpdateV2(checkoutId: $checkoutId, shippingAddress: $shippingAddress) {
        checkout {
         ${checkOuerry}
        }
        checkoutUserErrors {
          # CheckoutUserError fields
          code
          field
          message
        }
      }
    }`,
      variables: {
        checkoutId: checkout.id,
        shippingAddress: {
          ...address,
          phone: `+91${address.phone}`,
        },
      },
    });

    dispatch({
      type: 'sopify/updateCheckout',
      id: checkout?.id,
      data: data,
    });
  };
  console.log(checkout.lineItems.edges[0].node.id);
  const editAddress = async () => {
    const userToke = await AsyncStorage.getItem('Token');
    const addres2 = {...address, phone: `+91${address.phone}`};
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
        address: addres2,
        customerAccessToken: userToke,
        id: useData.defaultAddress?.id,
      },
    });
    dispatch({
      type: 'sopify/updateAddress',
      data: data2,
      navigation,
      msg: 'Address updated Successfully',
      token: userToke,
      op: 'create',
    });
  };
  const ship = ['Cart', 'Information', 'Shipping', 'Payment'];
  return (
    <View style={styles.container}>
      {isLoading ? <Loading /> : undefined}

      <ScrollView>
        <View>
          <FlatList
            data={ship}
            horizontal
            renderItem={({item, index}) => {
              return <Text>{item}</Text>;
            }}
          />
        </View>
        <View
          style={[
            styles.contact,
            {
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: wp(4),
              backgroundColor: '#F6F6F6',
              height: hp(10),
              marginTop: wp(0),
            },
          ]}>
          <Text
            onPress={() => {
              setSHow(!show);
            }}
            style={{
              fontSize: wp(4),
              fontWeight: '600',
              color: '#A36B25',
              fontStyle: 'italic',
            }}>
            <Feather name="shopping-cart" size={wp(3.5)} />
            {'  '}
            {!show ? 'Show Order Summery' : 'Hide Order Summery'}
            <Entypo
              name={!show ? 'chevron-small-down' : 'chevron-small-up'}
              size={wp(5)}
            />
          </Text>
          <Text
            style={{
              fontSize: wp(4),
              fontWeight: '600',
              color: '#A36B25',
              marginRight: wp(6),
            }}>
            {itemprice('')}
          </Text>
        </View>

        {show ? (
          <View style={{paddingBottom: wp(3), backgroundColor: '#FAFAFA'}}>
            <FlatList
              scrollEnabled={false}
              data={checkout?.lineItems?.edges}
              keyExtractor={item => item.node.id}
              renderItem={({item}) => {
                return (
                  <View style={{paddingVertical: wp(2)}}>
                    <View style={styles.mainList}>
                      <View style={styles.listContainer}>
                        <View style={styles.listCircle}>
                          <Text style={styles.quality}>
                            {item.node.quantity}
                          </Text>
                        </View>
                        <View style={styles.listImage}>
                          <Image
                            style={{height: '100%', width: '100%'}}
                            source={{uri: item?.node?.variant.image.url}}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          width: '35%',
                          alignSelf: 'center',
                          marginRight: wp(15),
                        }}>
                        <Text
                          style={{
                            fontSize: wp(3.4),
                            fontWeight: '500',
                            textAlign: 'left',
                            fontStyle: 'italic',
                          }}>
                          {item.node.title}
                        </Text>
                      </View>
                      <Text
                        style={{
                          marginRight: wp(4),
                          alignSelf: 'center',
                          fontWeight: '500',
                          fontSize: wp(3.5),
                          fontStyle: 'italic',
                        }}>
                        ₹
                        {parseInt(item.node.variant.price.amount) *
                          item.node.quantity}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: '600',
                  color: 'black',
                  marginVertical: wp(2),
                  marginLeft: wp(3),
                }}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: '500',
                  marginRight: wp(4),
                  fontStyle: 'italic',
                }}>
                {itemprice('')}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: '600',
                  color: 'black',
                  marginLeft: wp(3),
                  fontStyle: 'italic',
                }}>
                Shipping
              </Text>
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: '500',
                  marginRight: wp(4),
                  fontStyle: 'italic',
                }}>
                {'₹ 99'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: wp(3),
              }}>
              <Text
                style={{
                  fontSize: wp(5),
                  fontWeight: '600',
                  color: 'black',
                  marginLeft: wp(3),
                  fontStyle: 'italic',
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: wp(5),
                  fontWeight: '700',
                  marginRight: wp(3),
                  fontStyle: 'italic',
                }}>
                <Text
                  style={{
                    fontSize: wp(3.4),
                    color: 'grey',
                    fontStyle: 'italic',
                  }}>
                  INR
                </Text>{' '}
                {itemprice('99')}
              </Text>
            </View>
          </View>
        ) : null}
        {!booladdress || isEdited ? (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp(3),
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  color: 'black',
                  fontStyle: 'italic',
                  fontSize: wp(5),
                  marginTop: wp(4),
                }}>
                Contact
              </Text>
              {tokenn ? (
                <Text
                  style={{
                    fontSize: wp(3.5),
                    fontWeight: '500',
                    marginRight: wp(2),
                    fontStyle: 'italic',
                  }}>
                  Have and acoount {'  '}
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}
                    onPress={() => {
                      navigation.replace('Login', {page: 'check'});
                    }}>
                    <Text
                      style={{
                        fontSize: wp(4),
                        fontWeight: '600',
                        color: '#A36B25',
                        fontStyle: 'italic',
                      }}>
                      Login?
                    </Text>
                  </TouchableOpacity>
                </Text>
              ) : null}
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: wp(3),
                width: '100%',
                justifyContent: 'space-evenly',
              }}>
              <Input
                placeholder="Firstname*"
                value={address.firstName}
                onChangeText={input => {
                  handleonSubmit('firstName', input);
                }}
                style={styles.input3}
                error={error.firstName}
                onFocus={() => handleOnError('firstName', '')}
                input2={true}
              />

              <Input
                placeholder="Lastname*"
                value={address.lastName}
                onChangeText={input => {
                  handleonSubmit('lastName', input);
                }}
                style={styles.input3}
                error={error.lastName}
                onFocus={() => handleOnError('lastName', '')}
                input2={true}
              />
            </View>

            <Input
              placeholder="Mobile/Phone*"
              value={address.phone}
              onChangeText={input => {
                handleonSubmit('phone', input);
              }}
              input2={false}
              style={styles.inputfield}
              error={error.phone}
              onFocus={() => handleOnError('phone', '')}
            />
            <Input
              placeholder="Email*"
              value={email}
              onChangeText={input => {
                setEmail(input);
              }}
              input2={false}
              style={styles.inputfield}
              error={error.Email}
              onFocus={() => handleOnError('Email', '')}
            />
            <Input
              placeholder="Company"
              value={address.company}
              onChangeText={input => {
                handleonSubmit('company', input);
              }}
              input2={false}
              style={styles.inputfield}
              error=""
              onFocus={() => null}
            />
            <View style={styles.contact}>
              <Text style={styles.cont}>Shipping Address</Text>
            </View>
            <View style={styles.inputfield2}>
              <SelectDropdown
                data={countries}
                defaultButtonText={
                  address.country ? address.country : 'Country'
                }
                dropdownStyle={{
                  width: '100%',
                }}
                onSelect={(selectedItem, index) => {
                  handleonSubmit('country', selectedItem);
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
                handleonSubmit('address1', input);
              }}
              input2={false}
              style={styles.inputfield}
              error={error.address1}
              onFocus={() => handleOnError('address1', '')}
            />
            <Input
              placeholder="Address(2) (House NO,Building,Street,Area)"
              value={address.address2}
              onChangeText={input => handleonSubmit('address2', input)}
              input2={false}
              style={styles.inputfield}
              error=""
              onFocus={() => null}
            />
            <Input
              placeholder="State"
              value={address.province}
              onChangeText={input => {
                handleonSubmit('province', input);
              }}
              style={styles.inputfield}
              error={error.province}
              onFocus={() => handleOnError('province', '')}
              input2={false}
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
                  handleonSubmit('city', input);
                }}
                style={styles.input3}
                error={error.city}
                onFocus={() => handleOnError('city', '')}
                input2={true}
              />

              <Input
                placeholder="Pincode"
                input2={true}
                value={address.zip}
                onChangeText={input => {
                  handleonSubmit('zip', input);
                }}
                style={styles.input3}
                error={error.zip}
                onFocus={() => handleOnError('zip', '')}
              />
            </View>
          </View>
        ) : (
          <View style={{marginTop: hp(3)}}>
            <View
              style={{
                paddingVertical: wp(3),
                marginHorizontal: wp(4),
                flexDirection: 'row',
                paddingHorizontal: wp(4),
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTopWidth: wp(0.1),
                borderRightWidth: wp(0.1),
                borderLeftWidth: wp(0.1),
                borderTopRightRadius: wp(1),
                borderTopLeftRadius: wp(1),
                marginTop: wp(10),
              }}>
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: '600',
                  color: 'grey',
                  fontStyle: 'italic',
                }}>
                contact
              </Text>
              <View style={{width: '66%'}}>
                <Text
                  style={{
                    fontSize: wp(4),
                    fontWeight: '600',
                    fontStyle: 'italic',
                  }}>
                  {email}
                </Text>
              </View>
              <Text
                onPress={() => {
                  setAddress(useData.defaultAddress);

                  setSHow(false);
                }}
                style={{
                  fontSize: wp(4),
                  fontWeight: '400',
                  textDecorationLine: 'underline',
                  color: '#A36B25',
                  fontStyle: 'italic',
                }}>
                {null}
              </Text>
            </View>
            <View
              style={{
                paddingVertical: wp(3),
                marginHorizontal: wp(4),
                flexDirection: 'row',
                paddingHorizontal: wp(4),
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: wp(0.1),
                borderRightWidth: wp(0.1),
                borderLeftWidth: wp(0.1),
                borderBottomRightRadius: wp(1),
                borderBottomLeftRadius: wp(3),
              }}>
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: '600',
                  color: 'grey',
                  fontStyle: 'italic',
                }}>
                ship to
              </Text>
              <View style={{width: '50%'}}>
                <Text
                  style={{
                    fontSize: wp(4),
                    fontWeight: '600',
                    color: 'black',
                    fontStyle: 'italic',
                  }}>
                  {address?.address1 +
                    ', ' +
                    address?.city +
                    ', ' +
                    address?.province +
                    ', ' +
                    address?.country +
                    ', ' +
                    address?.zip}
                </Text>
              </View>
              <Text
                onPress={() => {
                  setIsEdited(true);

                  setSHow(false);
                }}
                style={{
                  fontSize: wp(4),
                  fontWeight: '400',
                  textDecorationLine: 'underline',
                  color: '#A36B25',
                  fontStyle: 'italic',
                }}>
                Change
              </Text>
            </View>
            <Text
              style={{
                marginLeft: wp(4),
                marginTop: wp(4),
                fontSize: wp(4.5),
                fontWeight: '600',
                fontStyle: 'italic',
              }}>
              Shipping Method
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: wp(0.1),
                paddingVertical: wp(3),
                marginHorizontal: wp(4),
                marginTop: wp(2),
                borderRadius: wp(1),
                backgroundColor: '#f2ede7',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: wp(3),
              }}>
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: '500',
                  color: 'black',
                  fontStyle: 'italic',
                }}>
                Outside Delivery
              </Text>
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: '500',
                  color: 'black',
                  marginRight: wp(6),
                  fontStyle: 'italic',
                }}>
                ₹ 99.00
              </Text>
            </View>
          </View>
        )}

        <TouchableOpacity
          onPress={async () => {
            handleOnChangeText();
          }}
          style={styles.btn2}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: wp(3.5),
              fontStyle: 'italic',
            }}>
            {isEdited || !booladdress
              ? 'Continue Shipping'
              : 'Continue for Payment'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Checkout;
