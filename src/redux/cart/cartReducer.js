import {DECREASE_QTY,INCREASE_QTY,DELETE_FROM_CART,ADD_TO_CART} from './cartType';
// //reducer of the cart operations


// // Initialisation of states


const initialState = {
    cart: [],
    // Billing state initailisation
    billingInfo: { Total: 0, tax: 0},
  
}

//creating redux reducer : to change state of redux store
const cartReducer = (state = initialState, action) => {
    let price=0;
    switch (action.type) {
        case ADD_TO_CART:
         //  Add to cart w.r.t ID 
            let index = state.cart.findIndex(i => i.id == action.product.id);
            let cart = {}
            if(index != -1){
                //Item present already so increase quantity
                 cart = state.cart;
                //  console.log("Found");
                //  console.log("cart Items");
                //  console.log(cart);
                cart[index].qty = cart[index].qty + 1;
               // console.log(cart);

            }else{
                //New item
                const product = { ...action.product, qty: 1 };
                 cart  = state.cart.concat(product)
                //  console.log("Unique Items");
                //  console.log("cart Items");
                //  console.log(cart);
            }
         
            return {
                ...state,
                cart: cart,
              
                billingInfo: {
                    Total: state.billingInfo.Total + action.product.price,
                    tax: state.billingInfo.tax + 2.5,
                    
                }
              
            };

        case DELETE_FROM_CART:
            // deleting from the cart with product id
            return { ...state, cart: state.cart.filter((i) => i.id != action.itemId) }

        case INCREASE_QTY:
            // Increase the quantity and price in the cart
             price = 0;
            state.cart.forEach((item) => {
                if (item.id == action.itemId) {
                    item.qty += 1
                    price = item.price;
                }
            })
            return { 
                ...state,
                 cart: [...state.cart],

                
                billingInfo:{
                    Total: state.billingInfo.Total + price,
                    tax: state.billingInfo.tax + 2.5
                } 
           
            }
        case DECREASE_QTY:
             // Decrease the quantity and price in the cart
         price = 0;
            state.cart.forEach((item) => {
                if (item.id == action.itemId && item.qty > 1) {
                    item.qty -= 1
                    price = item.price;
                }
            })
            return { 
                ...state, 
                cart: [...state.cart], 

                billingInfo:{
                    Total: state.billingInfo.Total - price,
                    tax: state.billingInfo.tax - 2.5
                }
              
             }
        default:
            return state;
    }
}



export default cartReducer;