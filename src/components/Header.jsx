import { useRef, useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "../Util/Button";
import CartModal from "./CartModal";
import { CartContext } from "../store/food-order-context";
import CheckoutModal from "./CheckoutModal";

export default function Header() {
  const modal = useRef();
  const modal2 = useRef();

  const { items } = useContext(CartContext);

  const cartQuantity = items.length;
  function handleOpenCartClick() {
    modal.current.open();
  }

  function handleOpenCheckoutClick() {
    modal.current.close();
    modal2.current.open();
  }
  let action = (
    <>
      <Button text="Close" className="text-button" formNoValidate />
    </>
  );

  if (cartQuantity > 0) {
    action = (
      <>
        <Button text="Close" className="text-button" formNoValidate />
        <Button
          text="Go to checkout"
          className="button"
          onClick={handleOpenCheckoutClick}
        />
      </>
    );
  }
  const action2 = (
    <>
      <Button text="Close" className="text-button" formNoValidate />
      <Button text="Submit Order" className="button" type="submit" />
    </>
  );

  return (
    <>
      <CheckoutModal title="Checkout" action={action2} ref={modal2} />
      <CartModal title="Your Cart" action={action} ref={modal} />
      <header id="main-header">
        <span id="title">
          <img src={logo} alt="logo" />
          <h1>REACTFOOD</h1>
        </span>
        <Button
          className="text-button"
          text={`Cart (${cartQuantity})`}
          onClick={handleOpenCartClick}
        />
      </header>
    </>
  );
}
