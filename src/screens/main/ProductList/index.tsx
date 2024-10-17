import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../../compoents/Loader';
import List from './List';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {HelperNavigationParams} from '../../../navigation/Helper/Helper';
import {RootState} from '../../../sopify/Redux/store';
type Props = StackScreenProps<HelperNavigationParams, 'ProductList'>;
const ProductList: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const {title} = props.route.params;
  const navigation: StackNavigationProp<HelperNavigationParams> =
    useNavigation();
  const Products = useSelector((state: RootState) => state.data.products);
  const id = useSelector((state: RootState) => state.data.id);
  const isFetching = useSelector((state: RootState) => state.data.isLoading);
  const handleOnReachEnd = () => {
    if (Products.length >= 9) {
      let length = Products.length + 10;
      if (id != 'home') {
        dispatch({
          type: 'sopify/fetchProductById',
          prId: id,
          navigation,
          title: title,
          length: length,
          page: 'raju',
        });
      } else {
        dispatch({
          type: 'sopify/fetchAllProducts',
          navigation,
          title: 'Products',
          id: 'raju',
          length: length,
        });
      }
    }
  };
  return (
    <View style={styles.container}>
      {isFetching ? <Loading /> : null}

      <List onEndReached={() => handleOnReachEnd()} Products={Products} />
    </View>
  );
};
export default ProductList;
