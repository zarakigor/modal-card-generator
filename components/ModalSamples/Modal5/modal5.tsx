import styles from "./modal5.module.scss";
import { useContext, useEffect } from "react";
import { Context } from "../../../context/Context";

import PrimaryButton from "../../ModalComponents/PrimaryButton/primaryButton";

function Modal5() {
  const { contentsOfModals } = useContext(Context);

  return (
    <div className={styles.modal}>
      <h2 className="text-3xl font-bold mb-5">
        {contentsOfModals.Modal5.content1}
      </h2>
      <p className="text-xl mb-7">{contentsOfModals.Modal5.content2}</p>
      <PrimaryButton
        value={{
          text: `${contentsOfModals.Modal5.content3}`,
          className: "w-full ",
        }}
      />
    </div>
  );
}

export default Modal5;
