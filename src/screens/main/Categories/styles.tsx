import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  back: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(55),
    alignItems: 'center',
  },
  card: {
    width: wp(45),
    height: hp(28),
   
    borderRadius: wp(0),
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginVertical: wp(2),
    marginHorizontal: wp(2),
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowColor: '#000',
    shadowRadius: 15,
    
    elevation: 5,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
});
