import styles from "./modal2.module.scss";
import Image from "next/future/image";
import { useContext } from "react";
import { Context } from "../../../context/Context";

import PrimaryButton from "../../ModalComponents/PrimaryButton/primaryButton";
import SecondaryButton from "../../ModalComponents/SecondaryButton/secondaryButton";

function Modal2() {
  const { contentsOfModals, chosenModalColor } = useContext(Context);
  return (
    <div className={styles.modal}>
      <Image
        src="/images/stockphoto1.png"
        alt="#"
        width="0"
        height="0"
        sizes="100vh"
        className="w-full h-6/12"
      />
      <div>
        <h2 className="text-3xl font-bold mt-7 mb-5">
          {contentsOfModals.Modal2.content1}
        </h2>
        <p className="text-xl mb-8">{contentsOfModals.Modal2.content2}</p>

        <div className="  w-full mt-8">
          <PrimaryButton
            value={{
              text: `${contentsOfModals.Modal2.content3}`,
              className: `${chosenModalColor} w-full mb-4`,
            }}
          />
          <SecondaryButton
            value={{
              text: `${contentsOfModals.Modal2.content4}`,
              className: "w-full",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal2;
