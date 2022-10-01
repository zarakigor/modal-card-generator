import styles from "./modal5.module.scss";
import Image from "next/future/image";

import PrimaryButton from "../../ModalComponents/PrimaryButton/primaryButton";

function Modal5() {
  return (
    <div className={styles.modal}>
      <h2 className="text-3xl font-bold  mb-5">The file is on it's way</h2>
      <p className="text-xl mb-7">
        You’ll get an notified when the receiver has opened the email.
      </p>
      <PrimaryButton
        value={{ text: "Go to dashboard", className: "w-full " }}
      />
    </div>
  );
}

export default Modal5;
