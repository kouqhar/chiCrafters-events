import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import styles from "./styles/styles.module.css";

const Modal = forwardRef(function Modal({ children }, ref) {
  const ModalDialog = useRef();

  // Exposing component APIs via the useImperativeHandle Hook
  // The method open is bound to the native showModal()
  useImperativeHandle(ref, () => {
    return {
      open() {
        ModalDialog.current.showModal();
      },
      close() {
        ModalDialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog ref={ModalDialog} className={styles.dialog_modal}>
      {children}
    </dialog>,
    document.getElementById("react-modal")
  );
});

export default Modal;
