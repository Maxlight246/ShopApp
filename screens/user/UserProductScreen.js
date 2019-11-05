import React from 'react';
import {View, Text, StyleSheet, FlatList, Button } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import Color from '../../constants/Color'
import * as productsAction from '../../store/actions/product'

const UserProductScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);
  const dispatch = useDispatch()
  const editProductHandler = (id) =>{
        props.navigation.navigate('EditProducts',{productId:id})
  }

  return (
      <View style={styles.container}>
    <FlatList 
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
        
        >
          <Button
            color={Color.primary}
            title="Edit"
            onPress={() => {
                editProductHandler(itemData.item.id)
              }}
          />
          <Button
            color={Color.primary}
            title="Delete"
            onPress={()=>{
               dispatch(productsAction.deleteProduct(itemData.item.id))
            }}
          />
        </ProductItem>
      )}
    />
    </View>
  );
};

UserProductScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Your Product',
      headerLeft:(
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="navicon"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight:(
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="edit"
            onPress={() => {
              navData.navigation.navigate('EditProducts')
            }}
          />
        </HeaderButtons>
      )
    };
  };

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});

export default UserProductScreen;
