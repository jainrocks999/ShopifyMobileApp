import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',

    flexDirection: 'row',
    elevation: 5,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.84,
    justifyContent: 'space-between',
  },
  search: {
    height: '72%',
    width: '65%',
    borderRadius: wp(5),
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '4%',
    elevation: 5,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.84,
    marginLeft: '4%',
  },
  bell: {
    height: '72%',
    width: '11%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebeded',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.84,
  },
  container2: {
    width: wp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
