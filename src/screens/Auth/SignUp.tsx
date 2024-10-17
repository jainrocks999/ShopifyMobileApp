import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Input from '../../compoents/Input';
import Button from '../../compoents/Button';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../compoents/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {query} from '../main/Home/query';
import CheckBox from '@react-native-community/checkbox';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigationParams} from '../../navigation';
import {RootState} from '../../sopify/Redux/store';
type Props = StackScreenProps<NavigationParams, 'Register'>;
const SignUp: React.FC<Props> = ({navigation, route}) => {
  const userData = useSelector((state: RootState) => state.data.userData);
  const page = route.params?.page;
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    firstName: userData?.firstName ? userData.firstName : '',
    lastName: userData?.lastName ? userData.lastName : '',
    email: userData?.email ? userData.email : '',
    phone: userData?.phone ? userData.phone?.slice(3, 13) : '',
    password: '',
    confrimPassword: '',
  });
  const [errors, setErros] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confrimPassword: '',
  });
  const isLoading = useSelector((state: RootState) => state.data.isLoading);
  const handleOnchange = (input: string, name: string) => {
    setInputs(prev => ({...prev, [name]: input}));
  };
  const [toggleCheckBox, setToggleCheckBox] = useState(
    userData.acceptsMarketing,
  );
  const Register = () => {
    let data = JSON.stringify({
      query: `mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
          customer {
            firstName
            lastName
            email
            phone
            acceptsMarketing
          }
          customerUserErrors {
            field
            message
            code
          }
        }
      }`,
      variables: {
        input: {
          acceptsMarketing: toggleCheckBox,
          email: inputs.email,
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          password: inputs.password,
          phone: `+91${inputs.phone}`,
        },
      },
    });

    dispatch({
      type: 'sopify/register',
      data: data,
      navigation,
    });
  };
  const updateCostumer = async () => {
    const token = await AsyncStorage.getItem('Token');

    let data = JSON.stringify({
      query: `mutation customerUpdate($customer: CustomerUpdateInput!, $customerAccessToken: String!) {
      customerUpdate(customer: $customer, customerAccessToken: $customerAccessToken) {
        customer {
            firstName
            acceptsMarketing
        }
        customerAccessToken {
          accessToken
          expiresAt
        }
        customerUserErrors {
          code
          field
          message
         
        }
      }
    }`,
      variables: {
        customer: {
          acceptsMarketing: toggleCheckBox,
          email: inputs.email,
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          phone: `+91${inputs.phone}`,
        },
        customerAccessToken: token,
      },
    });
    dispatch({
      type: 'sopify/updateProfile',
      data: data,
      navigation,
    });
  };
  const Vailidate = () => {
    let valid = true;
    if (!inputs.firstName) {
      handleError('Please Enter First Name', 'firstName');
      valid = false;
    }
    if (!inputs.lastName) {
      handleError('Please Enter Last Name', 'lastName');
      valid = false;
    }
    if (!inputs.email) {
      handleError('Please Enter Email', 'email');
      valid = false;
    } else if (
      !inputs.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      handleError('Please Enter Valid Email', 'email');
      valid = false;
    }

    if (!inputs.phone) {
      handleError('Please Enter Mobile Numer', 'phone');
      valid = false;
    } else if (inputs.phone.length < 10) {
      handleError('Please Enter 10 Digit Mobile Number', 'phone');
      valid = false;
    }
    if (page != 'update') {
      if (!inputs.password) {
        handleError('Please Enter Password', 'password');
        valid = false;
      } else if (
        !inputs.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
      ) {
        handleError('Password not secure', 'password');
        valid = false;
      }

      if (!inputs.confrimPassword) {
        handleError('Please re-enter your password', 'confrimPassword');
        valid = false;
      } else if (inputs.password != inputs.confrimPassword) {
        handleError("Password Dosen't Matched", 'confrimPassword');
        valid = false;
      }
    }
    if (valid) {
      page != 'update' ? Register() : updateCostumer();
    }
  };
  const handleError = (errorMassege: string, input: string) => {
    setErros(prevState => ({...prevState, [input]: errorMassege}));
  };

  return (
    <View style={styles.container}>
      {isLoading ? <Loading /> : null}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 30}}>
        <View style={{marginTop: wp(25)}}>
          <View style={styles.logoConatainer}>
            <Image
              style={styles.img}
              // source={{
              //   uri: `https://cdn.shopify.com/s/files/1/0548/9570/6327/files/Wholespoon_logo_180x.png?v=1632130611`,
              // }}
              source={require('../../assests/header3.png')}
            />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.login}>
              {page != 'update' ? 'Create Account' : 'Update Account'}
            </Text>
            <View style={styles.line}></View>
          </View>

          <Input
            lable="First name"
            value={inputs.firstName}
            onChangeText={text => {
              handleOnchange(text, 'firstName');
            }}
            error={errors.firstName}
            onFocus={() => handleError('', 'firstName')}
            isOtp={false}
            isPhone={false}
            password={false}
            placeholder=""
          />
          <Input
            lable="Last name"
            value={inputs.lastName}
            onChangeText={text => {
              handleOnchange(text, 'lastName');
            }}
            onFocus={() => handleError('', 'lastName')}
            error={errors.lastName}
            isOtp={false}
            isPhone={false}
            password={false}
            placeholder=""
          />
          <Input
            lable="E-mail"
            value={inputs.email}
            onChangeText={text => {
              handleOnchange(text, 'email');
            }}
            onFocus={() => handleError('', 'email')}
            error={errors.email}
            isOtp={false}
            isPhone={false}
            password={false}
            placeholder=""
          />
          <Input
            lable="Telephone"
            value={inputs.phone}
            onChangeText={text => {
              handleOnchange(text, 'phone');
            }}
            isPhone
            error={errors.phone}
            onFocus={() => handleError('', 'phone')}
            isOtp={false}
            password={false}
            placeholder=""
          />
          {page != 'update' ? (
            <>
              <Input
                lable="Password"
                value={inputs.password}
                onChangeText={text => {
                  handleOnchange(text, 'password');
                }}
                password
                error={errors.password}
                onFocus={() => handleError('', 'password')}
                isOtp={false}
                isPhone={false}
                placeholder=""
              />
              <Input
                lable="Confirm  Password"
                onChangeText={text => {
                  handleOnchange(text, 'confrimPassword');
                }}
                password
                value={inputs.confrimPassword}
                error={errors.confrimPassword}
                onFocus={() => handleError('', 'confrimPassword')}
                isOtp={false}
                isPhone={false}
                placeholder=""
              />
            </>
          ) : null}
          <View
            style={{
              height: hp(4),
              marginHorizontal: wp(4),
              marginVertical: wp(2),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
            />
            <Text style={{fontWeight: '500', marginLeft: wp(2)}}>
              Subscribe for Newsletter
            </Text>
          </View>
          <Button
            name={page === 'update' ? 'UPDATE' : 'REGISTER'}
            onPress={() => {
              Vailidate();
            }}
          />
          {page != 'update' ? (
            <View
              style={{
                width: wp(65),
                alignSelf: 'center',
                marginTop: wp(5),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                onPress={() => navigation.navigate('Login', {page: ''})}
                style={styles.text}>
                Login
              </Text>
              <Text
                onPress={() => navigation.replace('Home')}
                style={styles.text}>
                Return to Store
              </Text>
            </View>
          ) : (
            <View
              style={{
                width: wp(65),
                alignSelf: 'center',
                marginTop: wp(0),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                onPress={() => navigation.replace('Home')}
                style={styles.text}>
                Return to Store
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0f2',
  },
  logoConatainer: {
    top: hp('1%'),
    width: '90%',
    height: hp('10%'),
    marginHorizontal: '5%',
  },

  infoTextContainer: {
    marginHorizontal: '5%',
    marginVertical: '4%',
  },
  login: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: 'black', //'#a26a39',
    fontStyle: 'italic',
    alignSelf: 'center',
    marginTop: wp(6),
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  info: {
    fontSize: hp('2%'),
    fontWeight: '400',
    color: '#a26a39',
    fontStyle: 'italic',
  },
  line: {
    borderWidth: wp(0.6),
    marginTop: wp(2),
    width: wp(30),
    alignSelf: 'center',
    borderRadius: wp(4),
  },
  text: {
    fontSize: wp(5),
    fontWeight: '400',
    color: 'black',
    marginTop: wp(1),
    fontStyle: 'italic',
    borderBottomWidth:1
  },
});
