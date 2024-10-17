import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StackScreenProps} from '@react-navigation/stack';
import {HelperNavigationParams} from '../../../navigation/Helper/Helper';
type Props = StackScreenProps<HelperNavigationParams, 'Payment'>;
const Payment: React.FC<Props> = ({navigation}) => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={wp(5)}
            color="grey"
          />
          <Text style={styles.txt}> Payment</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{paddingVertical: wp(5)}}>
        <View style={styles.lable}>
          <Text
            style={{
              fontSize: wp(3.5),
              fontWeight: 'bold',
              color: 'grey',
              fontStyle: 'italic',
            }}>
            Secure Payment
          </Text>
          <Text
            style={{
              fontSize: wp(3.5),
              fontWeight: 'bold',
              color: 'grey',
              fontStyle: 'italic',
            }}>
            Easy Return
          </Text>

          <Text
            style={{
              fontSize: wp(3.5),
              fontWeight: 'bold',
              color: 'grey',
              fontStyle: 'italic',
            }}>
            Fast Refund
          </Text>
        </View>
        <View style={styles.discount}>
          <View
            style={{
              height: hp(4),
              alignItems: 'center',
              width: wp(28),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <MaterialCommunityIcons
              name="brightness-percent"
              style={styles.textIcon}
            />
            <Text style={[styles.textIcon, {fontSize: wp(4), color: 'black'}]}>
              Bank Offer
            </Text>
          </View>
          <View style={{paddingVertical: wp(3)}}>
            <Text style={{fontSize: wp(3.5), fontStyle: 'italic'}}>
              . 10% Instant Discount on Kotak Creadit and Debit Cards on a min
              spend of Rs 3,000 TCA
            </Text>
            {show ? (
              <View>
                <Text
                  style={{
                    fontSize: wp(3.5),
                    marginTop: wp(3),
                    fontStyle: 'italic',
                  }}>
                  . 10% Instant Discount on Kotak Creadit and Debit Cards on a
                  min spend of Rs 3,000 TCA
                </Text>
                <Text
                  style={{
                    fontSize: wp(3.5),
                    marginTop: wp(3),
                    fontStyle: 'italic',
                  }}>
                  . 10% Instant Discount on Kotak Creadit and Debit Cards on a
                  min spend of Rs 3,000 TCA
                </Text>
                <Text
                  style={{
                    fontSize: wp(3.5),
                    marginTop: wp(3),
                    fontStyle: 'italic',
                  }}>
                  . 10% Instant Discount on Kotak Creadit and Debit Cards on a
                  min spend of Rs 3,000 TCA
                </Text>
                <Text
                  style={{
                    fontSize: wp(3.5),
                    marginTop: wp(3),
                    fontStyle: 'italic',
                  }}>
                  . 10% Instant Discount on Kotak Creadit and Debit Cards on a
                  min spend of Rs 3,000 TCA
                </Text>
                <Text
                  style={{
                    fontSize: wp(3.5),
                    marginTop: wp(3),
                    fontStyle: 'italic',
                  }}>
                  . 10% Instant Discount on Kotak Creadit and Debit Cards on a
                  min spend of Rs 3,000 TCA
                </Text>
              </View>
            ) : null}
          </View>
          <View style={{marginLeft: wp(5), flexDirection: 'row'}}>
            <Text
              onPress={() => setShow(!show)}
              style={{
                fontSize: wp(4),
                fontWeight: 'bold',
                color: '#AA336A',
                fontStyle: 'italic',
              }}>
              {show ? 'Show Less' : 'Show More'}
            </Text>
            <Entypo
              color="#AA336A"
              size={wp(5)}
              name={show ? 'chevron-up' : 'chevron-down'}
            />
          </View>
        </View>
        <Text
          style={{
            marginTop: wp(7),
            marginLeft: wp(3),
            fontSize: wp(3),
            fontWeight: 'bold',
            color: 'black',
            fontStyle: 'italic',
          }}>
          RECOMENDED PAYMENT OPTION
        </Text>
        <View style={styles.btnText}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="cash-100" size={wp(5)} />
            <Text
              style={{fontSize: wp(4), fontWeight: '500', marginLeft: wp(3)}}>
              Cash On Delivery
            </Text>
          </View>
          <Entypo name="chevron-down" size={wp(6)} />
        </View>
        <Text
          style={{
            marginTop: wp(5),
            marginLeft: wp(3),
            fontSize: wp(3),
            fontWeight: 'bold',
            color: 'black',
            fontStyle: 'italic',
          }}>
          OTHER PAYMENT OPTION
        </Text>
        <View style={styles.btnText}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="cash-100" size={wp(5)} />
            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '500',
                marginLeft: wp(3),
                fontStyle: 'italic',
              }}>
              Cash On Delivery
            </Text>
          </View>
          <Entypo name="chevron-down" size={wp(6)} />
        </View>
        <View
          style={[styles.btnText, {marginTop: 0, borderTopWidth: wp(0.08)}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="creditcard" size={wp(5)} />
            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '500',
                marginLeft: wp(3),
                fontStyle: 'italic',
              }}>
              Cradit/Debit Card
            </Text>
          </View>
          <Entypo name="chevron-down" size={wp(6)} />
        </View>
        <View
          style={[styles.btnText, {marginTop: 0, borderTopWidth: wp(0.08)}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons name="payments" size={wp(5)} />
            <Text
              style={{fontSize: wp(4), fontWeight: '500', marginLeft: wp(3)}}>
              PhonePe/Google Pay/Bhim UPI
            </Text>
          </View>
          <Entypo name="chevron-down" size={wp(6)} />
        </View>
        <View
          style={[styles.btnText, {marginTop: 0, borderTopWidth: wp(0.08)}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Entypo name="wallet" size={wp(5)} />
            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '500',
                marginLeft: wp(3),
                fontStyle: 'italic',
              }}>
              Paytm/Wallets
            </Text>
          </View>
          <Entypo name="chevron-down" size={wp(6)} />
        </View>
        <View
          style={[styles.btnText, {marginTop: 0, borderTopWidth: wp(0.08)}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="bank" size={wp(5)} />
            <Text
              style={{fontSize: wp(4), fontWeight: '500', marginLeft: wp(3)}}>
              Net Banking
            </Text>
          </View>
          <Entypo name="chevron-down" size={wp(6)} />
        </View>
        <View
          style={[styles.btnText, {marginTop: 0, borderTopWidth: wp(0.08)}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="account-cash" size={wp(5)} />
            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '500',
                marginLeft: wp(3),
                fontStyle: 'italic',
              }}>
              EMI
            </Text>
          </View>
          <Entypo name="chevron-down" size={wp(6)} />
        </View>
        <View
          style={[styles.btnText, {marginVertical: wp(8), marginTop: wp(4)}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="account-cash" size={wp(5)} />
            <Text
              style={{
                fontSize: wp(4),
                fontWeight: '500',
                marginLeft: wp(3),
                fontStyle: 'italic',
              }}>
              Have a Gift Card
            </Text>
          </View>
          <Text
            style={{fontWeight: 'bold', color: '#AA336A', marginRight: wp(5)}}>
            Apply
          </Text>
        </View>
        <View
          style={{
            paddingVertical: wp(5),
            backgroundColor: '#f2f5f4',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginVertical: wp(3),
              marginLeft: wp(4),
              fontSize: wp(4),
              color: 'black',
              fontWeight: '500',
              fontStyle: 'italic',
            }}>
            Price Details<Text style={{fontWeight: '400'}}>{' (1 item)'}</Text>
          </Text>
          <View
            style={{
              borderTopWidth: wp(0.08),
              borderBottomWidth: wp(0.08),
              paddingVertical: wp(5),

              marginHorizontal: wp(6),
            }}>
            <View style={{marginHorizontal: wp(5)}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                }}>
                <Text>Total MRP</Text>
                <Text>$45</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                  marginTop: wp(3),
                }}>
                <Text>Discount on MRP</Text>
                <Text>$5</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                  marginTop: wp(3),
                }}>
                <Text>Delivery on Charges</Text>
                <Text>$1</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: wp(79),
              alignItems: 'center',
              marginTop: wp(3),
              alignSelf: 'center',
            }}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Total Amount
            </Text>
            <Text style={{fontWeight: 'bold', color: 'black'}}>$41</Text>
          </View>
        </View>
      </ScrollView>
      <View style={{height: hp(8), bottom: 0}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: wp(3),
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: wp(4),
                fontWeight: 'bold',
                marginLeft: wp(4),
                fontStyle: 'italic',
              }}>
              $41
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: wp(3),
                fontWeight: '500',
                marginLeft: wp(4),
                color: '#AA336A',
                fontStyle: 'italic',
              }}>
              Details
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: hp(5.5),
              width: '65%',
              backgroundColor: 'green',
              marginRight: wp(6),
              borderRadius: wp(1.4),
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: wp(1),
            }}>
            <Text
              style={{
                fontSize: wp(5),
                color: 'white',
                fontWeight: '500',
                fontStyle: 'italic',
              }}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Payment;
