import Navbar from "./components/Navbar";
import CartContainer from "./CartContainer";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import cartItems from "./cartItems";
import Modal from "./modal";
import { getCardItems } from "./features/cart/cartSlice";

function App() {
  const dispatch=useDispatch();
  const {cartItems,isLoading}=useSelector((store)=>store.cart);
  const {isOpen}=useSelector((store)=>store.modal);
  useEffect(()=>{
    dispatch(getCardItems());
  },[])
  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems])

  if(isLoading){
    return <div className="loading">
      <h1>Loading...</h1>
    </div>
  }
  return <main>
    {isOpen && <Modal/>}
    <Navbar/>
    <CartContainer/>
  </main>
}
export default App;
