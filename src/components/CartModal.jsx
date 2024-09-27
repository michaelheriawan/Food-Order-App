import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";

const CartModal = forwardRef(({ title, action }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });
  return createPortal(
    <dialog className="modal cart" ref={dialog}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" className="modal-actions">
        {action}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
