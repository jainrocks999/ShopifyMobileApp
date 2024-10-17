import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../sopify/Redux/store';
import query from './query';
import productquery from '../../../data/productquery';
import {StackScreenProps} from '@react-navigation/stack';
import {CompositeScreenProps, useIsFocused} from '@react-navigation/native';
import {HelperNavigationParams} from '../../../navigation/Helper/Helper';
import {NavigationParams} from '../../../navigation';
import Loading from '../../../compoents/Loader';
type Props = CompositeScreenProps<
  StackScreenProps<NavigationParams, 'Search'>,
  StackScreenProps<HelperNavigationParams>
>;
const Search: React.FC<Props> = ({navigation, route}) => {
  const seachText = route.params?.searchText;
  const isLoading = useSelector((state: RootState) => state.data.isLoading);
  const Products = useSelector(
    (state: RootState) => state.data.searchProduct.edges,
  );
  const ProductsDetais = useSelector(
    (state: RootState) => state.data.productDetail,
  );
  const [input, setInput] = useState<string>(seachText);
  const dispatch = useDispatch();
  const handleonSearch = () => {
    let data = JSON.stringify({
      query: `query {
      products(query: "${input}",first:10) {
         ${query}
         
    }
    }`,
      variables: {},
    });
    dispatch({
      type: 'sopify/searchProduct',
      data: data,
      navigation,
    });
  };
  const isFocused = useIsFocused();
  useEffect(() => {
    const delay = 100;
    const deBounce = setTimeout(() => {
      handleonSearch();
    }, delay);
    return () => {
      clearTimeout(deBounce);
    };
  }, [input, isFocused]);

  const fetDetails = (id: string) => {
    `  1qq11 q2`;
    let data = JSON.stringify({
      query: `query getProductById($id: ID!) {
  product(id: $id) 
  {
    ${productquery}
  }
}`,
      variables: {id: id},
    });
    dispatch({
      type: 'sopify/ProductDetails',
      data: data,
      navigation,
    });
  };
  return (
    <View style={styles.container}>
      {isLoading ? <Loading /> : null}
      <View style={styles.input}>
        <Icon name="search1" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'grey'}
          placeholder="Search Products"
          value={input}
          onChangeText={text => setInput(text)}
        />
      </View>
      <FlatList
        style={styles.flatList}
        data={Products}
        keyExtractor={(item, index) => item.node.id}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => fetDetails(item.node.id)}
              style={styles.list}>
              <View style={styles.imgContainer}>
                <Image
                  style={styles.img}
                  source={
                    item.node.featuredImage?.url
                      ? {uri: item.node.featuredImage.url}
                      : require('../../../assests/noimg.jpeg')
                  }
                />
              </View>
              <View>
                <Text style={styles.title}>{item.node.title}</Text>
                <Text style={styles.price}>
                  {'₹' +
                    ' ' +
                    item.node.variants.edges[0].node.price.amount +
                    ' ' +
                    item.node.variants.edges[0].node.price.currencyCode}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Search;
