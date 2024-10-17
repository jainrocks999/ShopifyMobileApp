import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0f2',
  },
  address: {
    alignSelf: 'center',

    fontSize: wp(5),
    fontWeight: '700',
    color: '#A97732',
  },
  line: {
    borderWidth: wp(0.5),
    width: wp(45),
    borderRadius: wp(1),
    alignSelf: 'center',
    marginTop: wp(1),

    borderColor: '#A97732',
  },
  adText: {
    fontSize: wp(4),
    fontWeight: '500',
    color: 'black',
    marginVertical: wp(0.5),
    textAlign: 'left',
    fontStyle: 'italic',
  },
  btn: {
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(30),
  },
  btnText: {
    color: '#D9C5AA',
    fontSize: wp(4),
    fontWeight: '800',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
  },
  plusIcon: {
    fontSize: wp(12),
    position: 'absolute',
    bottom: wp(23),
    right: wp(5),
    fontStyle: 'italic',
  },
  default: {
    position: 'absolute',
    right: wp(4),
    top: wp(4),
    fontSize: wp(4),
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#D9C5AA',
  },
  addtitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp(3),
    marginTop: wp(2),
    backgroundColor: '#f2ede7',
  },
  addressContainer: {
    paddingVertical: wp(3),
    width: wp(95),
    backgroundColor: 'white', //'#f2ede7',
    marginVertical: wp(1),
    paddingLeft: wp(4),
    borderRadius: wp(1),
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 4,
    flexDirection: 'row',
  },
  nameTitle: {
    fontSize: wp(3.9),
    fontWeight: '500',
    color: 'black',
    marginRight: wp(9),
  },
  menuItem: {
    borderBottomWidth: wp(0.1),
    paddingVertical: wp(1),
  },
});
