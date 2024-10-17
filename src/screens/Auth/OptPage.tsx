import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Input from '../../compoents/Input';
import Button from '../../compoents/Button';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../compoents/Loader';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigationParams} from '../../navigation';
import {RootState} from '../../sopify/Redux/store';
type Props = StackScreenProps<NavigationParams, 'Otp'>;
const Opt: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [err, setError] = useState('');
  const isLoading = useSelector((state: RootState) => state.data.isLoading);
  const validate = () => {
    let valid = true;
    if (!email) {
      Toast.show({
        type: 'info',
        text1: 'Please Enter Email',
      });
      valid = false;
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      Toast.show({
        type: 'info',
        text1: 'Please Enter Valid Email',
      });
      valid = false;
    }
    if (valid) {
      sendOtp();
    }
  };

  const sendOtp = () => {
    let data = JSON.stringify({
      query: `mutation customerRecover($email: String!) {
      customerRecover(email: $email) {
        customerUserErrors {
        code
        field
        message
        }
      }
    }`,
      variables: {email: email},
    });
    dispatch({
      type: 'sopify/resetPassword',
      data,
      navigation,
    });
  };
  return (
    <View style={styles.container}>
      {isLoading ? <Loading /> : null}
      <ScrollView>
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
            <Text style={styles.login}>Reset Your Passwod</Text>
            <View style={{width: wp(60), alignSelf: 'center'}}>
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: wp(1),
                  fontSize: wp(4),
                  fontStyle: 'italic',
                  color: 'grey',
                }}>
                We will send you an email to reset your password.
              </Text>
            </View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.input}>
            <Input
              isOtp
              lable="Email"
              onChangeText={text => {
                setEmail(text);
              }}
              value={email}
              error={err}
              onFocus={() => null}
              isPhone={false}
              password={false}
              placeholder=""
            />
            <Button name="SUBMIT" onPress={() => validate()} />
            <Text
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                alignSelf: 'center',
                fontSize: wp(5),
                fontStyle: 'italic',
                fontWeight: '600',
                color: 'black',
              }}>
              Cancel
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Opt;
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
    width: wp(25),
    alignSelf: 'center',
    borderRadius: wp(4),
  },
  input: {
    height: hp(55),
    marginTop: wp(10),
  },
});
