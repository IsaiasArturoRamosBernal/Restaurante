import { createSlice } from '@reduxjs/toolkit'
const initialState = {
items:[],
}

export const cartSlice = createSlice({
name: 'cart',
initialState, 
reducers: {
addToCart: (state, action) => { 
state.restaurant = [...state.items,action.payload];
},
removeFromCart: (state, action) => { 
    let newCart= [...state.items];
    let itemIndex= state.items.findIndex(item=> item, id==action.payload.id);
    if(itemIndex=>0){
newCart.slice(itemIndex,1);
    }else{
        console.log("No se puede eliminar el artículo que no está agregado al carrito.")
    }
    state.items=newCart;
},
    emptycart: (state, action) => { 
        state.items=[];
        },
},
})
// Action creators are generated for each case reduce function export const { setRestaurant } = restaurantSlice.actions;
export const{addToCart, removedFromCart, emptyCart}=cartSlice.action;
export const selectCartItems= state.cart.items;
export const selectCartItemsById=(state,id)=> state.cart.items.filter(item.id==id);
export const selectCartTotal=state=> state.cart.items.reduce((total, item)=>total=total+item.price,0);
export default cartSlice.reducer