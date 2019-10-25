import React from 'react';
import {View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import Color from '../../constants/Color';
import Icon from 'react-native-vector-icons/FontAwesome'

const CartItem = props =>{
    return(<View style={styles.cartItem} >
        <Text style={styles.itemData} >
            <Text style={styles.quantity}>{props.quantity} </Text>
            <Text style={styles.title}>{props.title}</Text>
        </Text>
        <View style={styles.itemData2} >
            <Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
            <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton} >
                <Icon name='trash-o' size={23} color='red' />
            </TouchableOpacity>
        </View>
    </View>
    )}

const styles = StyleSheet.create({
     cartItem:{
         padding: 10,
         backgroundColor: 'white',
         flexDirection:'row',
         justifyContent:'space-between',
         marginHorizontal:20
     },
     itemData:{
         flexDirection:'row',
         alignItems:'center',
         flexWrap:'wrap',
         flex:2
     },
     itemData2:{
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },
     quantity:{
         color:'#888',
         fontSize:16
     },
     title:{
         fontSize:16,
         fontWeight:'bold'
     },
     amount:{
         fontSize:16,
         fontWeight:'bold'
     },
     deleteButton:{
        marginLeft:20
     }
})

export default CartItem