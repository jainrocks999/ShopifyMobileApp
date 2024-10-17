import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: wp(16),
  },

  txt: {
    fontSize: wp(5),
    color: 'black',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  cardView: {
    height: hp(28),
    backgroundColor: 'white',
    marginVertical: wp(1),
    width: wp(46),
    marginHorizontal: wp(1),
    marginTop: hp(2.3),
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowColor: '#000',
    shadowRadius: 15,
    marginBottom:5,
    elevation: 5,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  CardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgcontainer: {
    height: wp(40),
    width: '100%',
    borderTopLeftRadius:16,
    borderTopRightRadius:16
   
  },
  img: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius:16,
    borderTopRightRadius:16
    // resizeMode:'contain'
  },
  txt2: {
    alignSelf: 'center',
    marginTop: wp(2),
    fontSize: wp(4),
    fontWeight: '500',
    color: 'black',
    fontStyle: 'italic',
  },
  btn: {
    borderRadius: wp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: wp(22),
    height: hp(3.5),
    borderColor: 'grey',
    alignSelf: 'center',
    marginTop: wp(2),
    backgroundColor: '#0f3a8d',
  },
  priceCOntainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '89%',
    marginTop: wp(1),
    alignSelf: 'center',
  },
  Price: {
    fontSize: wp(4),
    alignSelf: 'center',
    fontWeight: '500',
    color: 'black',
    fontStyle: 'italic',
  },
  icon: {
    fontSize: wp(5),
    position: 'absolute',
    right: wp(3),
    top: wp(2),
    fontStyle: 'italic',
  },
  title: {
    marginLeft:10,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
  },
  discount: {
    borderWidth: wp(0.5),
    height: hp(4.2),
    width: hp(4.2),
    position: 'absolute',
    left: 0,
    top: hp(-2),
    borderRadius: wp(2),
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#A36B25',
  },
});
