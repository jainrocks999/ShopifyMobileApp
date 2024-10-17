import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Eye from 'react-native-vector-icons/MaterialCommunityIcons';
type Props = {
  lable: string;
  error: string;
  isPhone: boolean;
  isOtp: boolean;
  onFocus: () => void;
  password: boolean;
  onChangeText: (input: string) => void;
  placeholder: string;
  value: string;
};
const Input: React.FC<Props> = ({
  lable,
  error,
  isPhone,
  isOtp,
  onFocus,
  onChangeText,
  password,
  placeholder,
  value,
  ...Props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secureText, setSecureText] = useState(true);
  return (
    <View
      style={{
        height: wp(12.8),
        marginBottom: hp('2%'),
        marginHorizontal: wp('5%'),
        borderWidth: isOtp ? 1.9 : 1,
        borderColor: isOtp || isFocused ? '#a26a39' : error ? 'red' : '#c1c0c2',
        borderRadius: wp(1.5),
        justifyContent: 'center',
      }}>
      {error ? (
        <Text
          style={{
            position: 'absolute',
            fontSize: wp(3),
            color: 'red',
            marginLeft: wp('4%'),
            fontWeight: '600',
            top: 1,
            fontStyle: 'italic',
          }}>
          {error}
        </Text>
      ) : lable ? (
        <Text
          style={{
            position: 'absolute',
            fontSize: wp(3),
            color: 'grey',
            marginLeft: wp('4%'),
            fontWeight: '600',
            top: 1,
          }}>
          {lable}
        </Text>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {isPhone && (
          <Text
            style={{
              marginLeft: wp(4),
              alignSelf: 'center',
              fontSize: wp(4.4),
              fontWeight: '600',
              fontStyle: 'italic',
              color: 'grey',
              marginTop: 10,
            }}>
            +91
          </Text>
        )}

        <TextInput
          style={{
            flex: 1,
            fontSize: wp('4.4%'),
            paddingHorizontal: !isPhone ? wp('4%') : wp(1),
            fontStyle: 'italic',
            fontWeight: '500',
            height: wp(15),
            marginTop: 10,
          }}
          placeholderTextColor={'#a26a39'}
          {...Props}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={password && secureText}
        />
        {password ? (
          <Eye
            onPress={() => {
              setSecureText(!secureText);
            }}
            name={secureText ? 'eye-outline' : 'eye-off-outline'}
            style={{
              marginRight: wp(5.6),
              fontSize: wp(6.8),
              color: '#a26a39',
              fontStyle: 'italic',
            }}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Input;
