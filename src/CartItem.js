import { ChevronUp, ChevronDown } from "./icons";
import { useSelector,useDispatch } from "react-redux";
import { clearItem,increase,decrease,calculateTotals } from "./features/cart/cartSlice";

const CartItem = ({id,title,price,img,amount}) => {
    const dispatch=useDispatch();
    return (
    <article className="cart-item">
        <img src={img} alt={title}></img>
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">${price}</h4>
            <button type="button" className="remove-btn" onClick={()=>dispatch(clearItem(id))}>remove</button>
        </div>
        <div>
            <button className="amount-btn" onClick={()=>{dispatch(increase({id}));}}>
                <ChevronUp/>
            </button>
            <p className="amount">{amount}</p>
            <button className="amount-btn" onClick={()=>{dispatch(decrease({id}));}}>
                <ChevronDown/>
            </button>
        </div>

    </article>
  );
}
export default CartItem