import PRODUCTS from '../../data/fake-data'
import {DELETE_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT} from '../actions/product'
import Product from '../../models/Product'

const initialState = {
    availableProducts:  PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
}

export default (state = initialState, action) =>{
    switch(action.type){
        case CREATE_PRODUCT:
            const newProduct = new Product(
                new Date().toString(),
                'u1',
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                action.productData.price,
            )
            return{
                ...state,
                availableProducts: state.availableProducts.concat(newProduct),
                userProducts: state.userProducts.concat(newProduct)
            }

        case UPDATE_PRODUCT:
            const productIndex = state.userProducts.findIndex(prod => prod.id === action.pid)
            const updateProduct = new Product(
                action.pid,
                state.userProducts[productIndex].ownerId,
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                action.productData.price,
            )
            const updatedUserProducts = [...state.userProducts]
            updatedUserProducts[productIndex] = updateProduct
            const availableProductIndex = state.availableProducts.findIndex(
                prod => prod.id === action.pid
            ) 
            const updatedAvailableProducts = [...state.availableProducts]
            updatedAvailableProducts[availableProductIndex] = updateProduct
            return{
                ...state,
                availableProducts: updatedAvailableProducts,
                userProducts: updatedUserProducts
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                userProducts: state.userProducts.filter(
                    product => product.id != action.pid
                ),
                availableProducts: state.availableProducts.filter(
                    product => product.id != action.pid
                ),
            }
    }
    return state
}