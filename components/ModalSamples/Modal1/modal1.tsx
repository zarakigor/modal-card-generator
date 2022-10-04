import styles from "./modal1.module.scss";
import { RiShieldStarLine } from "react-icons/ri";

import PrimaryButton from "../../ModalComponents/PrimaryButton/primaryButton";
import SecondaryButton from "../../ModalComponents/SecondaryButton/secondaryButton";
import { useContext } from "react";
import { Context } from "../../../context/Context";

function Modal1() {
  const { contentsOfModals } = useContext(Context);
  return (
    <div className={styles.modal}>
      <div className="w-24 h-24 bg-primary_purple rounded-full flex justify-center items-center">
        <RiShieldStarLine className="w-12 h-12   text-white" />
      </div>
      <h2 className="text-3xl font-bold mt-7 mb-5">
        {contentsOfModals.Modal1.content1}
      </h2>
      <p className="text-xl mb-10">{contentsOfModals.Modal1.content2}</p>
      <input
        type="input"
        className="form-input border-gray-300 rounded-lg w-full"
        value={contentsOfModals.Modal1.content3}
      />
      <div className="flex justify-between w-full mt-8">
        <SecondaryButton
          value={{
            text: `${contentsOfModals.Modal1.content4}`,
            className: "w-6/12 mr-3",
          }}
        />
        <PrimaryButton
          value={{
            text: `${contentsOfModals.Modal1.content5}`,
            className: "w-6/12",
          }}
        />
      </div>
    </div>
  );
}

export default Modal1;
