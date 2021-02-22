


import {DECREASE_QTY,INCREASE_QTY,DELETE_FROM_CART,ADD_TO_CART} from './cartType';


// Creating action  creators
export const addProductToCart=(productData)=>{

    return {
        type: ADD_TO_CART,
        product:productData
    }
}

export const deleteProductFromCart=(productId)=>{

    return {
        type: DELETE_FROM_CART,
        itemId:productId
    }
}


export const incQty=(productId)=>{

    return {
        type: INCREASE_QTY,
        itemId:productId,
        

    }
}

export const decQty=(productId)=>{

    return {
        type: DECREASE_QTY,
        itemId:productId,
        

    }
}

