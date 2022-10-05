import styles from "./modal4.module.scss";
import { MdDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../context/Context";

import PrimaryButton from "../../ModalComponents/PrimaryButton/primaryButton";
import SecondaryButton from "../../ModalComponents/SecondaryButton/secondaryButton";

function Modal4() {
  const { contentsOfModals, chosenModalColor } = useContext(Context);
  return (
    <div className={styles.modal}>
      <div
        className={`${chosenModalColor} w-24 h-24 rounded-full flex justify-center items-center`}
      >
        <MdDeleteOutline
          className={`${chosenModalColor} w-12 h-12 text-white`}
        />
      </div>

      <h2 className="text-3xl font-bold mt-7 mb-5">
        {contentsOfModals.Modal4.content1}
      </h2>
      <p className="text-xl mb-7">{contentsOfModals.Modal4.content2}</p>
      <p className="text-gray-500 leading-tight">
        {contentsOfModals.Modal4.content3}
        <span className="text-black"> {contentsOfModals.Modal4.content4}</span>.
      </p>

      <div className="w-full mt-8">
        <PrimaryButton
          value={{
            text: `${contentsOfModals.Modal4.content5}`,
            className: `${chosenModalColor} w-full mb-4`,
          }}
        />
        <SecondaryButton
          value={{
            text: `${contentsOfModals.Modal4.content6}`,
            className: "w-full",
          }}
        />
      </div>
    </div>
  );
}

export default Modal4;
