import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
type Props = {
  name: string;
  onPress: () => void;
};
const Button: React.FC<Props> = ({name, onPress = () => {}, ...props}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.5}
      {...props}
      onFocus={() => {}}
      onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: hp('6%'),
    marginVertical: hp('2%'),
    marginHorizontal: wp('3%'),
    backgroundColor: 'black',
    elevation: 5,
    flexDirection: 'row',
    borderRadius: hp('.50%'),
    justifyContent: 'center',
  },
  text: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center',
    fontStyle: 'italic',
  },
});
