import React from "react"
import {useSelector} from "react-redux"
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { useReducer } from "react";
import { clearCart } from "./features/cart/cartSlice";
import { calculateTotals } from "./features/cart/cartSlice";
import { openModal,closeModal } from "./features/cart/modalSlice";

const CartContainer = () => {
    const {cartItems,total,amount} = useSelector((store)=>store.cart);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(openModal());
    }

    if(amount<1){
        return (
            <section className="cart">
                <header>
                    <h2>Your Bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        );
    }

    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {
                    cartItems.map((item)=>{
                        return <CartItem key={item.id} {...item} />;
                    })
                }
            </div>
            <footer>
                <hr/>
                <div className="card-total">
                    <h4>
                        total <span>${total.toFixed(2)}</span>
                    </h4>

                </div>
                <button className="btn clear-btn" onClick={handleClearCart}>clear cart</button>
                
            </footer>

        </section>
    )
}
export default CartContainer;