/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import productReducer from './store/reducers/product'
import cartReducer from './store/reducers/cart'
import ordersReducer from './store/reducers/orders'

import ShopNavigator from './navigation/ShopNavigator'

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: ordersReducer
})

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
        <ShopNavigator/>
    </Provider>
    
  );
};



export default App;
