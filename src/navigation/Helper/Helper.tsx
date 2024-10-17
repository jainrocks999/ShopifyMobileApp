import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/main/Home';
import Cart from '../../screens/main/Cart';
import Profile from '../../screens/main/Profile';
import Details from '../../screens/main/Details';
import Categories from '../../screens/main/Categories';
import ProductList from '../../screens/main/ProductList';
import OrderList from '../../screens/main/OrderList';
import Payment from '../../screens/main/Payment';
import OrderDetails from '../../screens/main/OrderDetails';
import AddressBook from '../../screens/main/AdressBook';
import About from '../../screens/main/About';
import Address from '../../screens/main/Checkout/Address';
import {Node} from '../../Types/user';
export type HelperNavigationParams = {
  HomeScreen: undefined;
  Cart: undefined;
  Profile: undefined;
  Details: undefined;
  Categories: undefined;
  ProductList: {
    title: string;
  };
  OrderList: undefined;
  Payment: undefined;
  OrderDetails: undefined;
  AddressBook: undefined;
  About: undefined;
  Address: {
    data: Node;
  };
};
const Stack = createStackNavigator<HelperNavigationParams>();
const HelperStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="OrderList" component={OrderList} />

      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="AddressBook" component={AddressBook} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Address" component={Address} />
    </Stack.Navigator>
  );
};
export default HelperStack;
