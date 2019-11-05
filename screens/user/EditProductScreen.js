import React, {useState, useCallback, useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import {useSelector, useDispatch} from 'react-redux'
import * as productsAction from '../../store/actions/product'

const EditProductScreen = props => {
      const prodId = props.navigation.getParam('productId') 
      const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id === prodId))
      const dispatch = useDispatch()
      const [title, setTitle] = useState(editedProduct ? editedProduct.title : '')
      const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '')
      const [price, setPrice] = useState(editedProduct ? editedProduct.price.toString() : '')
      const [description, setDescription] = useState(editedProduct ? editedProduct.description : '')
      const convertPrice = parseInt(price,10)
      const submitHandler = useCallback(() =>{
            if(editedProduct){
               dispatch(productsAction.updateProduct(prodId,title,description,imageUrl,convertPrice))
            }else{
                dispatch(productsAction.createProduct(title,description,imageUrl,convertPrice))
            }
      }, [dispatch,prodId,title,description,imageUrl,price])

      useEffect(()=>{
        props.navigation.setParams({submit: submitHandler})
      },[submitHandler])

      return (
          <ScrollView>
              <View style={styles.from} >
              <View style={styles.fromControl} >
                  <Text style={styles.label}>Title</Text>
                  <TextInput style={styles.input} value = {title} onChangeText={text =>setTitle(text)} />
              </View>
              <View style={styles.fromControl} >
                  <Text style={styles.label}>Image Url</Text>
                  <TextInput style={styles.input} value = {imageUrl} onChangeText={text =>setImageUrl(text)}/>
              </View>
              <View style={styles.fromControl} >
                  <Text style={styles.label}>Price</Text>
                  <TextInput style={styles.input} value = {price} onChangeText={text =>setPrice(text)}/>
              </View>
              <View style={styles.fromControl} >
                  <Text style={styles.label}>Description</Text>
                  <TextInput style={styles.input} value = {description} onChangeText={text =>setDescription(text)}/>
              </View>
              </View>
          </ScrollView>
      )
}

EditProductScreen.navigationOptions = navData => {
    const submitFn = navData.navigation.getParam('submit')
    return {
      headerTitle: navData.navigation.getParam('productId') ? 'Edit Product' : 'Add Product',
      headerRight:(
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="check"
          onPress={submitFn}
        />
      </HeaderButtons>
      )
      
    };
  };

const styles = StyleSheet.create({
     from:{
         margin: 20
     },
     fromControl:{
         width:'100%'
     },
     label:{
         marginVertical: 8,
         fontWeight:'bold'
     },
     input:{
         paddingHorizontal: 2,
         paddingVertical:5,
         borderBottomColor:'#ccc',
         borderBottomWidth:1
     }
})

export default EditProductScreen