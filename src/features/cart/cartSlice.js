import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const url = 'https://www.course-api.com/react-useReducer-cart-project';

export const getCardItems = createAsyncThunk('cart/getCartItems',()=>{
    return fetch(url)
    .then((resp)=>resp.json())
    .catch((err)=>console.log(err));
});

const initialState = {
    cartItems:cartItems,
    amount:0,
    total:0,
    isLoading:false
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems=[];
        },
        clearItem:(state,action)=>{
            state.cartItems = state.cartItems.filter((item)=>item.id!==action.payload);
        },
        increase:(state,{payload})=>{
            const cartItem = state.cartItems.find((item)=>item.id===payload.id);
            cartItem.amount=cartItem.amount+1;

        },
        decrease:(state,{payload})=>{
            const cartItem = state.cartItems.find((item)=>item.id===payload.id);
            if(cartItem.amount>0){cartItem.amount=cartItem.amount-1;};
        },
        calculateTotals:(state)=>{
            let total=0;
            let itemTotal=0;
            state.cartItems.map((item)=>{
                itemTotal=itemTotal+item.amount;
                total = total + item.amount*item.price;
            })
            state.amount=itemTotal;
            state.total=total;
        },
        extraReducers:{
            [getCardItems.pending]:(state,action)=>{
                state.isLoading=true;
                
            },
            [getCardItems.fulfilled]:(state,action)=>{
                console.log(action);
                state.isLoading=true;
                state.cartItems=action.payload;
            },
            [getCardItems.rejected]:(state)=>{
                state.isLoading=false;
            }
        }

    }
});
console.log(cartSlice);

export const {clearCart,clearItem,increase,decrease,calculateTotals} = cartSlice.actions;
export default cartSlice.reducer;


