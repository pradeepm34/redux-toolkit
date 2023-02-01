import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

const App = () => {
  const dispatch = useDispatch();

  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotals());
    // dispatch(getCartItems());

    // eslint-disable-next-line
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
    // eslint-disable-next-line
  }, []);

  if (isLoading) return <div>loading....</div>;

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};
export default App;
