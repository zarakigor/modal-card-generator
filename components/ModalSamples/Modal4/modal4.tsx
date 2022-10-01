import styles from "./modal4.module.scss";
import { MdDeleteOutline } from "react-icons/md";

import PrimaryButton from "../../ModalComponents/PrimaryButton/primaryButton";
import SecondaryButton from "../../ModalComponents/SecondaryButton/secondaryButton";

function Modal4() {
  return (
    <div className={styles.modal}>
      <div className="w-24 h-24 bg-primary_purple rounded-full flex justify-center items-center">
        <MdDeleteOutline className="w-12 h-12   text-white" />
      </div>

      <h2 className="text-3xl font-bold mt-7 mb-5">Delete your profile</h2>
      <p className="text-xl mb-7">
        Your profile will be automatically deleted after 1 month.
      </p>
      <p className="text-gray-500 leading-tight">
        You won’t be able to access to your profile after
        <span className="text-black"> 30.08.2021</span>.
      </p>

      <div className="  w-full mt-8">
        <PrimaryButton
          value={{ text: "Delete my profile", className: "w-full mb-4" }}
        />
        <SecondaryButton value={{ text: "Cancel", className: "w-full" }} />
      </div>
    </div>
  );
}

export default Modal4;
