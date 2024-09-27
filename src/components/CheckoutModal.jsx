import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Checkout from "./Checkout";

const CheckoutModal = forwardRef(({ title, action }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className="modal cart" ref={dialog}>
      <h2>{title}</h2>
      <Checkout action={action} />
    </dialog>,
    document.getElementById("modal")
  );
});

export default CheckoutModal;
