import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/cart/modalSlice';

export const store = configureStore({
    reducer:{
        //cart is a key name can be anything
        cart:cartReducer,
        modal:modalReducer,
    },
});