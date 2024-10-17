import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  conatainer: {
    flex: 1,
  },

  headerContainer: {
    marginTop: '3%',
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profilePick: {
    backgroundColor: 'white',
    height: hp('6%'),
    width: hp('6%'),
    borderRadius: hp('6%'),
    overflow: 'hidden',
  },
  icon: {
    fontSize: hp('5%'),
    color: '#0f3a8d',
    alignSelf: 'center',
    fontStyle: 'italic',
  },
  input: {
    height: hp('7.5%'),
    marginBottom: hp('2%'),
    marginHorizontal: wp('5%'),
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: hp('.5%'),
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    elevation: 5,
    marginTop: '2%',
  },
  picker: {
    width: '17%',
    backgroundColor: '#0f3a8d',
    borderRadius: hp('.50%'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: '.50%',
  },
  photos: {
    height: hp('50%'),
    width: wp('95%'),
    alignItems: 'center',
    resizeMode:'contain'

  },
  con: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '95%',
    height: '70%',
    justifyContent: 'space-between',

  },
  viewcontainer: {
    backgroundColor: '#333',
    height: hp('10%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cicle: {
    height: hp('5%'),
    width: hp('5%'),
    borderRadius: hp('6%'),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(13, 82, 214, 1)',
  },
  historyContainer: {
    margin: '2%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: wp(2),
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontStyle: 'italic',
  },
  category: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: 'black',
    marginTop: '2%',
    fontStyle: 'italic',
  },
  categoryContainer: {
    height: hp('16%'),

    width: wp('30%'),
    borderRadius: hp('.50%'),
    overflow: 'hidden',
  },
  txtContainer: {
    height: hp(2.5),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(25),
  },
  titleContainer: {
    width: wp(95),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(5),
    backgroundColor: 'white',
  },
  listCard: {
    height: hp(12),
    width: hp(12),
    borderRadius: wp(3),
    backgroundColor: 'white',
  },
  cardImage: {
    height: hp(15),
    width: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  text: {
    alignSelf: 'center',
    color: 'black',
    fontSize: wp(3),
    fontStyle: 'italic',
  },
  ViewContainer: {
    height: '85%',
    width: '58%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  img2: {
    height: '100%',
    width: '55%',
    alignSelf: 'center',
    marginTop: '10%',
    marginLeft: '-7%',
  },
  btn: {
    height: '15%',
    width: '28%',
    marginLeft: '-45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#0f3a8d',
  },
  cardView: {
    backgroundColor: 'white',
    marginVertical: wp(1),
    width: wp(45),
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
  imgcontainer: {
    height: wp(40),
    width: '100%',
  
    // backgroundColor: '#e6f0f2',
  },
  img: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius:16,
    borderTopRightRadius:16
  },
  title: {
   
    // alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginLeft:10
  },
});
