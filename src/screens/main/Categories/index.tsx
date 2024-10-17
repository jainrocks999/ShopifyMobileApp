import React, {useEffect} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../../compoents/Loader';
import {StackScreenProps} from '@react-navigation/stack';
import {HelperNavigationParams} from '../../../navigation/Helper/Helper';
import {RootState} from '../../../sopify/Redux/store';
import {collection} from '../../../Types/collection';
type Props = StackScreenProps<HelperNavigationParams, 'Categories'>;
type List = {
  item: collection;
};
const Categories: React.FC<Props> = ({navigation}) => {
  const data = useSelector((state: RootState) =>
    state.data?.collection?.filter(item => item.products.length > 0),
  );
  const isLoading = useSelector((state: RootState) => state.data.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length <= 0) getData();
  }, [dispatch]);
  const getData = () => {
    dispatch({
      type: 'sopify/getCollection',
    });
  };

  const fetchProductById = (id: string, title: string) => {
    dispatch({
      type: 'sopify/fetchProductById',
      prId: id,
      navigation,
      title: title,
      page: 'home',
    });
  };

  const RenderList: React.FC<List> = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => fetchProductById(item.id, item.title)}
        style={styles.card}>
        <Image
          style={{
            height: '80%',
            width: '100%',
            alignSelf: 'center',
            borderRadius: wp(0),
            justifyContent: 'center',
          }}
          source={
            item?.image
              ? {uri: item?.image?.src}
              : require('../../../assests/noimg.jpeg')
          }
        />
        <Text
          style={{
            marginLeft:10,
            color: 'black',
            fontWeight: '400',
            fontSize: wp(4.5),
            fontStyle: 'italic',
            marginTop: 5,
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, paddingBottom: wp(4)}}>
      {isLoading ? <Loader /> : null}
      <View
        style={{
          flex: 1,

          width: wp(100),
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: wp(8),
        }}>
        {/* <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item, index) => item.id}
          renderItem={({item, index}) => {
            return (
             
            );
          }}
        /> */}
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.id}
          pagingEnabled={false}
          renderItem={({item, index}) => <RenderList item={item} />}
        />
      </View>
    </View>
  );
};
export default Categories;
