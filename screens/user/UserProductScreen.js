import React from 'react';
import {View, Text, StyleSheet, FlatList, Button } from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import Color from '../../constants/Color'

const UserProductScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);

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
                alert('Edit')
              }}
          />
          <Button
            color={Color.primary}
            title="Delete"
            onPress={()=>{
               alert('Delete')
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
      headerLeft: (
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
    };
  };

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});

export default UserProductScreen;
