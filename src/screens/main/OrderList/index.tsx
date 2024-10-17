import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../sopify/Redux/store';
import styles from './styles';
import {StackScreenProps} from '@react-navigation/stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {RootNavigationParams} from '../../../Types/NavigationProps';
import {HelperNavigationParams} from '../../../navigation/Helper/Helper';
import {NavigationParams} from '../../../navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
type Props = CompositeScreenProps<
  StackScreenProps<HelperNavigationParams, 'OrderList'>,
  StackScreenProps<NavigationParams, 'Webview'>
>;
const OrderList: React.FC<Props> = ({navigation}) => {
  const orders = useSelector(
    (state: RootState) => state.data.userData.orders.edges,
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.txt}>Your Orders</Text> */}
      <FlatList
        data={orders}
        keyExtractor={(item, index) => item.node.id}
        style={{marginBottom:65}}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={
              async () =>
                navigation.navigate('Webview', {
                  checkouturl: item.node.statusUrl,
                })
              // await AsyncStorage.clear()
            }
            style={styles.listCard}>
            <Text style={styles.txt3}>{'#' + item.node.orderNumber}</Text>
            <Image
              style={styles.img}
              source={
                item.node.lineItems.nodes[0].variant.image?.url
                  ? {uri: item.node.lineItems.nodes[0].variant.image.url}
                  : require('../../../assests/noimg.jpeg')
              }
            />
            <View>
              <Text style={styles.txt2}>
                {item.node.lineItems.nodes[0].quantity + ' items'}
              </Text>
              <Text style={styles.add}>
                {item.node.shippingAddress?.address1
                  ? item.node.shippingAddress.address1
                  : ''}
                {item.node.shippingAddress?.address2
                  ? ', ' + item.node.shippingAddress.address2
                  : ''}
                {item.node.shippingAddress?.city
                  ? ', ' + item.node.shippingAddress.city
                  : ''}
                {item.node.shippingAddress?.company
                  ? ', ' + item.node.shippingAddress.company
                  : ''}
                {item.node.shippingAddress?.province
                  ? ', ' + item.node.shippingAddress.province
                  : ''}
                {item.node.shippingAddress?.country
                  ? ', ' + item.node.shippingAddress.country
                  : ''}
                {item.node.shippingAddress?.zip
                  ? ', ' + item.node.shippingAddress.zip
                  : ''}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default OrderList;
