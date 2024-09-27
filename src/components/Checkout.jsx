import { useContext } from "react";
import { CartContext } from "../store/food-order-context";
import { submitCheckout } from "../http";

async function fetchPost(data) {
  try {
    const result = await submitCheckout(data);
    alert(result.message);
  } catch (error) {
    alert(error.message);
  }
}
export default function Checkout({ action }) {
  const { items } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(event.target);

    const submitted = Object.fromEntries(fd.entries());
    const data = {
      customer: {
        ...submitted,
      },
      items,
    };
    fetchPost(data);
  }
  return (
    <>
      <p>Total Amount: {formattedTotalPrice}</p>
      <form method="dialog" onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" name="name" required />
        </div>
        <div className="control">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="control">
          <label htmlFor="address">Street</label>
          <input type="text" id="address" name="street" required />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="postal-code">Postal Code</label>
            <input type="text" id="postal-code" name="postal-code" required />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required />
          </div>
        </div>
        <div className="modal-actions">{action}</div>
      </form>
    </>
  );
}
