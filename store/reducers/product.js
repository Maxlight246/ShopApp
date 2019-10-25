import PRODUCTS from '../../data/fake-data'


const initialState = {
    availableProducts:  PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerID ==="u1")
}

export default (state = initialState, action) =>{
    return state
}