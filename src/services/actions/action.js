import ADD_TO_CART from '../constants'
export const addToCart = (data)=>{
    return{
        type:ADD_TO_CART,
        dtata:data
    }
}