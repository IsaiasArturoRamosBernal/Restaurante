import{configureStore} from'@reduxjs/toolkit'
import restaurantSlice from './slices/restaurantSlice'
import cartslice from './slices/cartslice'


export const store = configureStore({
    reducer:{
        cart:cartSlice,
        restaurant:restaurantSlice
    },
})