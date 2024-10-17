import React, {useEffect} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import Mat from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../../compoents/Loader';
import {query} from './queries';
import {RootState} from '../../../sopify/Redux/store';
import {StackScreenProps} from '@react-navigation/stack';
import {HelperNavigationParams} from '../../../navigation/Helper/Helper';
import checkout from '../../../data/checkout';

type Props = StackScreenProps<HelperNavigationParams, 'Cart'>;
const Cart: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const cartItem = useSelector((state: RootState) => state.data.cartItem);
  const isLoading = useSelector((state: RootState) => state.data.isLoading);
  const userData = useSelector((state: RootState) => state.data.userData);

  useEffect(() => {
    getCartItem();
  }, [isFocused]);
  const getCartItem = async () => {
    const cartId = await AsyncStorage.getItem('cartId');
    console.log(cartId);

    let data = JSON.stringify({
      query: `{
      cart(id:${JSON.stringify(cartId)}) {
       ${query}
    }
  }
    }`,
      variables: {},
    });
    dispatch({
      type: 'sopify/getCartItem',
      data: data,
    });
  };

  const createCheckout = async () => {
    let varients = [] as {variantId: string; quantity: number}[];
    cartItem?.lines?.edges?.map((item, index) => {
      let variant = {
        variantId: item.node.merchandise.id,
        quantity: item.node.quantity,
      };
      varients.push(variant);
    });
    let data = JSON.stringify({
      query: `mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
           ${checkout}
          }
          checkoutUserErrors {
             field
            message
          }
          queueToken
        }
      }`,
      variables: {
        input: {
          allowPartialAddresses: true,
          buyerIdentity: {countryCode: 'CA'},
          email: userData.email,
          lineItems: varients,
        },
        queueToken: '',
      },
    });
    dispatch({
      type: 'sopify/createCheckout',
      data: data,
      navigation,
      email: userData.email,
      address: userData.defaultAddress,
      page:'cart'
    });
  };
  const pecentcalculate = (low: string, high: string) => {
    let percent = 0;
    const n1 = parseInt(low);
    const n2 = parseInt(high);
    percent = ((n2 - n1) / n1) * 100;
    return percent.toFixed(2);
  };

  const cartItemRemove = async (id: string) => {
    const cartId = await AsyncStorage.getItem('cartId');
    let data = JSON.stringify({
      query: `mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart  {
       ${query}
    }
    }
        userErrors {
          field
          message
        }
      }
    }`,
      variables: {
        cartId: cartId,
        lineIds: id,
      },
    });
    dispatch({
      type: 'sopify/cartItemRemove',
      data: data,
    });
  };
  const handleRemove = (id: string) => {
    cartItemRemove(id);
  };

  const cartLineUpdate = async (lines: {
    verId: string;
    quantity: number;
    cartLineId: string;
  }) => {
    const cartId = await AsyncStorage.getItem('cartId');
    let data = JSON.stringify({
      query: `mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
            ${query}
    }
          
        }
        userErrors {
          field
          message
        }
      }
    }`,
      variables: {
        cartId: cartId,
        lines: [
          {
            attributes: [{key: 'messege', value: 'true'}],
            merchandiseId: lines.verId,
            quantity: lines.quantity,
            id: lines.cartLineId,
          },
        ],
      },
    });
    dispatch({
      type: 'sopify/updateCart',
      data: data,
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#e6f0f2', paddingBottom: hp(1)}}>
      {isLoading ? <Loading /> : null}

      {cartItem?.lines?.edges?.length > 0 ? (
        <View style={{flex: 1,paddingHorizontal:10}}>
          <FlatList
            data={cartItem?.lines.edges}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.node.id}
            renderItem={({item}) => {
              return (
                <View style={styles.listContainer}>
                  <View style={styles.imgContainer}>
                    <Image
                      // resizeMode="center"
                      style={styles.img}
                      source={
                        item?.node.merchandise.product?.featuredImage?.url
                          ? {
                              uri: item?.node.merchandise.product?.featuredImage
                                .url,
                            }
                          : require('../../../assests/noimg.jpeg')
                      }
                    />
                  </View>

                  <View style={styles.itemContainer}>
                    <View style={{height: hp(5)}}>
                      <Text
                        style={{
                          marginTop: '5%',
                          fontSize: wp(4),
                          fontWeight: '400',
                          fontStyle: 'italic',
                        }}>
                        {item?.node.merchandise.product?.title?.substring(
                          0,
                          19,
                        )}
                        ...
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginVertical: wp(1)}}>
                      <Text
                        style={{
                          marginTop: '2%',
                          color: 'black',
                          fontSize: wp(3.9),
                          fontStyle: 'italic',
                        }}>
                        {'  ₹'}
                       { <Text
                          style={{
                            fontSize: wp(4.5),
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                          }}>
                          {+item.node.cost?.amountPerQuantity?.amount}
                        </Text>}
                      </Text>
                      {item.node.cost?.compareAtAmountPerQuantity?.amount ? (
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              marginTop: '2%',
                              fontSize: wp(3.5),
                              textDecorationLine: 'line-through',
                              color: 'grey',
                              fontStyle: 'italic',
                            }}>
                            {'   '}₹
                            <Text
                              style={{
                                fontSize: wp(4.5),
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                              }}>
                              {
                                item.node.cost?.compareAtAmountPerQuantity
                                  .amount
                              }
                            </Text>
                          </Text>

                          <Text
                            style={{
                              marginTop: '2%',
                              color: '#CC0066',
                              fontSize: wp(3),
                              marginLeft: '3%',
                              fontStyle: 'italic',
                            }}>
                            {' ' +
                              pecentcalculate(
                                item.node.cost?.amountPerQuantity?.amount,
                                item.node.cost?.compareAtAmountPerQuantity
                                  ?.amount,
                              ) +
                              '%'}
                          </Text>
                        </View>
                      ) : null}
                    </View>

                    <Text style={{marginLeft: '3%', color: 'grey'}}>
                      14 days return policy
                    </Text>
                    <View style={styles.btnContainer}>
                      <View style={styles.quantityContainer}>
                        <TouchableOpacity
                          onPress={() =>
                            cartLineUpdate({
                              verId: item.node.merchandise.id,
                              quantity: item.node.quantity - 1,
                              cartLineId: item.node.id,
                            })
                          }
                          style={styles.quantity}>
                          {item.node.quantity >= 2 ? (
                            <Entypo name="minus" size={wp(4.5)} />
                          ) : (
                            <Mat name="delete-outline" size={wp(6.5)} />
                          )}
                        </TouchableOpacity>
                        <View
                          style={{
                            height: '100%',
                            backgroundColor: 'lightgrey',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40%',
                          }}>
                          <Text
                            style={{
                              fontSize: wp(4),
                              fontWeight: '600',
                              fontStyle: 'italic',
                            }}>
                            {item.node.quantity}
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() =>
                            cartLineUpdate({
                              verId: item.node.merchandise.id,
                              quantity: item.node.quantity + 1,
                              cartLineId: item.node.id,
                            })
                          }
                          style={styles.quantity}>
                          <Entypo name="plus" size={wp(4.5)} />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          handleRemove(item.node.id);
                        }}
                        style={styles.delebtn}>
                        <Text
                          style={{
                            color: 'grey',
                            fontSize: wp(3.5),
                            fontStyle: 'italic',
                          }}>
                          Delete
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />

          <View style={styles.placeContainer}>
            <TouchableOpacity
              onPress={() => createCheckout()}
              style={styles.btn}>
              <Text style={styles.btnText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: wp(5),
              fontWeight: '700',
              color: 'grey',
              fontStyle: 'italic',
            }}>
            Your Cart Is Empty
          </Text>
        </View>
      )}
    </View>
  );
};
export default Cart;
