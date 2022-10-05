import { bodyStreamToNodeStream } from "next/dist/server/body-streams";
import { useContext, useState } from "react";
import { SiTarget } from "react-icons/si";
import { Context } from "../../context/Context";
import styles from "./appearance.module.scss";

function Appearance() {
  const { chosenModalSize, changeChosenModalSize, changeChosenModalPosition } =
    useContext(Context);
  const [activePositionButton, setActivePositionButton] = useState("5");

  function handleChange(e) {
    setActivePositionButton(e.target.name);
  }

  return (
    <div className={styles.appearance}>
      <h3>
        <span>2</span> Appearance
        <span className="font-normal ml-1"> (Size, colors, logo)</span>
      </h3>
      <p>Size</p>
      <div className={styles.btn__group}>
        <button
          value="Small"
          onClick={(e) => changeChosenModalSize(e)}
          className={
            chosenModalSize == "Small" ? styles.active : styles.inactive
          }
        >
          Small
        </button>
        <button
          value="Medium"
          onClick={(e) => changeChosenModalSize(e)}
          className={
            chosenModalSize == "Medium" ? styles.active : styles.inactive
          }
        >
          Medium
        </button>
        <button
          value="Large"
          onClick={(e) => changeChosenModalSize(e)}
          className={
            chosenModalSize == "Large" ? styles.active : styles.inactive
          }
        >
          Large
        </button>
      </div>
      <p>Position</p>
      <div className={styles.cellbox}>
        <button
          name="1"
          className={
            activePositionButton === "1"
              ? `${styles.btn__active}  rounded-tl`
              : "rounded-tl bg-white"
          }
          value="absolute top-0 left-0"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChange(e);
          }}
        ></button>
        <button
          name="2"
          className={
            activePositionButton === "2"
              ? styles.btn__active
              : styles.btn__inactive
          }
          value="absolute top-0 self-center"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChange(e);
          }}
        ></button>
        <button
          name="3"
          className={
            activePositionButton === "3"
              ? `${styles.btn__active}  rounded-tr`
              : "rounded-tr bg-white"
          }
          value="absolute top-0 right-0"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChange(e);
          }}
        ></button>
        <button
          name="4"
          className={
            activePositionButton === "4" ? styles.btn__active : "bg-white"
          }
          value="absolute left-0 self-center"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChange(e);
          }}
        ></button>
        <button
          name="5"
          className={
            activePositionButton === "5" ? styles.btn__active : "bg-white"
          }
          value="absolute self-center"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChange(e);
          }}
        ></button>
        <button
          name="6"
          className={
            activePositionButton === "6" ? styles.btn__active : "bg-white"
          }
          value="absolute right-0"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChange(e);
          }}
        ></button>
        <button
          name="7"
          className={
            activePositionButton === "7"
              ? `${styles.btn__active}  rounded-bl`
              : "rounded-bl bg-white"
          }
          value="absolute bottom-0 left-0 "
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChange(e);
          }}
        ></button>
        <button
          name="8"
          className={
            activePositionButton === "8" ? styles.btn__active : "bg-white"
          }
          value="absolute bottom-0 self-center"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChange(e);
          }}
        ></button>
        <button
          name="9"
          className={
            activePositionButton === "9"
              ? `${styles.btn__active}  rounded-br`
              : "rounded-br bg-white"
          }
          value="absolute bottom-0 right-0"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChange(e);
          }}
        ></button>
      </div>
    </div>
  );
}

export default Appearance;
