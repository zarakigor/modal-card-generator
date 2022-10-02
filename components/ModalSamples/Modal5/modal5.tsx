import styles from "./modal5.module.scss";
import Image from "next/future/image";
import { useContext, useEffect } from "react";
import { Context } from "../../../context/Context";

import PrimaryButton from "../../ModalComponents/PrimaryButton/primaryButton";

function Modal5() {
  const { contentOfModal5, setContentOfModal5 } = useContext(Context);
  console.log(contentOfModal5);

  return (
    <div className={styles.modal}>
      <h2 className="text-3xl font-bold mb-5">{contentOfModal5.content1}</h2>
      <p className="text-xl mb-7">{contentOfModal5.content2}</p>
      <PrimaryButton
        value={{ text: `${contentOfModal5.content3}`, className: "w-full " }}
      />
    </div>
  );
}

export default Modal5;
