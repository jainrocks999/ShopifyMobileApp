import {Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0f2',
  },
  input: {
    //borderWidth: wp(0.2),
    marginHorizontal: wp(6),
    marginTop: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey',
    borderRadius: wp(2),
    paddingLeft: wp(3),
    overflow: 'hidden',
    height: hp(6.5),

    shadowColor: 'black',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: wp(5),
    // shadowRadius: 2.3,
    elevation: 5,
    backgroundColor: '#fff',
  },
  icon: {
    fontSize: wp(6),
    color: 'grey',
    fontStyle: 'italic',
  },
  textInput: {
    fontSize: wp(5),
    marginLeft: wp(3),
    color: 'grey',
    fontStyle: 'italic',
  },
  list: {
    height: hp(18),
    paddingRight: wp(3),
    // marginVertical: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    // paddingBottom: wp(3),
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 4,
    elevation: 4,
    margin:10,
    borderRadius:16
  },
  flatList: {
    marginTop: wp(3),
  },
  imgContainer: {
    width: wp(40),
    height: '100%',
  },
  img: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius:16,
    borderBottomLeftRadius:16
  },
  title: {
    fontSize: wp(4),
    textAlign: 'center',
    marginLeft: wp(3),
    width: wp(50),
    fontWeight: '600',
    color: 'black',
    fontStyle: 'italic',
  },
  price: {
    fontSize: wp(4),
    textAlign: 'center',
    marginLeft: wp(3),
    width: wp(50),
    fontWeight: '600',
    color: 'black',
    marginTop: wp(2),
    fontStyle: 'italic',
  },
});
