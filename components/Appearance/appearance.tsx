import { useContext, useState } from "react";
import { SiTarget } from "react-icons/si";
import { Context } from "../../context/Context";
import styles from "./appearance.module.scss";

function Appearance() {
  const {
    changeChosenModalSize,
    changeChosenModalPosition,
    changeChosenModalColor,
  } = useContext(Context);
  const [activePositionButton, setActivePositionButton] = useState("5");
  const [activeSizeButton, setActiveSizeButton] = useState("Medium");

  function handleChangePosition(e) {
    setActivePositionButton(e.target.name);
  }

  function handleChangeSize(e) {
    setActiveSizeButton(e.target.name);
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
          name="Small"
          value="scale-75"
          onClick={(e) => {
            handleChangeSize(e);
            changeChosenModalSize(e);
          }}
          className={
            activeSizeButton == "Small" ? styles.active : styles.inactive
          }
        >
          Small
        </button>
        <button
          name="Medium"
          value="scale-100"
          onClick={(e) => {
            handleChangeSize(e);
            changeChosenModalSize(e);
          }}
          className={
            activeSizeButton == "Medium" ? styles.active : styles.inactive
          }
        >
          Medium
        </button>
        <button
          name="Large"
          value="scale-125"
          onClick={(e) => {
            handleChangeSize(e);
            changeChosenModalSize(e);
          }}
          className={
            activeSizeButton == "Large" ? styles.active : styles.inactive
          }
        >
          Large
        </button>
      </div>

      <p>Position</p>
      <div className={styles.positionbox}>
        <button
          name="1"
          className={
            activePositionButton === "1"
              ? `${styles.btn__active}  rounded-tl`
              : "rounded-tl bg-white"
          }
          value="absolute top-0 left-0 origin-top-left"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChangePosition(e);
          }}
        ></button>
        <button
          name="2"
          className={
            activePositionButton === "2"
              ? styles.btn__active
              : styles.btn__inactive
          }
          value="absolute top-0 self-center origin-top"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChangePosition(e);
          }}
        ></button>
        <button
          name="3"
          className={
            activePositionButton === "3"
              ? `${styles.btn__active}  rounded-tr`
              : "rounded-tr bg-white"
          }
          value="absolute top-0 right-0 origin-top-right"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChangePosition(e);
          }}
        ></button>
        <button
          name="4"
          className={
            activePositionButton === "4" ? styles.btn__active : "bg-white"
          }
          value="absolute left-0 self-center origin-left"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChangePosition(e);
          }}
        ></button>
        <button
          name="5"
          className={
            activePositionButton === "5" ? styles.btn__active : "bg-white"
          }
          value="absolute self-center origin-center"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChangePosition(e);
          }}
        ></button>
        <button
          name="6"
          className={
            activePositionButton === "6" ? styles.btn__active : "bg-white"
          }
          value="absolute right-0 origin-right"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChangePosition(e);
          }}
        ></button>
        <button
          name="7"
          className={
            activePositionButton === "7"
              ? `${styles.btn__active}  rounded-bl`
              : "rounded-bl bg-white"
          }
          value="absolute bottom-0 left-0 origin-bottom-left"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChangePosition(e);
          }}
        ></button>
        <button
          name="8"
          className={
            activePositionButton === "8" ? styles.btn__active : "bg-white"
          }
          value="absolute bottom-0 self-center origin-bottom"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChangePosition(e);
          }}
        ></button>
        <button
          name="9"
          className={
            activePositionButton === "9"
              ? `${styles.btn__active}  rounded-br`
              : "rounded-br bg-white"
          }
          value="absolute bottom-0 right-0 origin-bottom-right"
          onClick={(e) => {
            changeChosenModalPosition(e);
            handleChangePosition(e);
          }}
        ></button>
      </div>

      <p>Colors</p>
      <div className={styles.colorbox}>
        <button
          name="black"
          className="bg-black"
          value="bg-black text-white"
          onClick={(e) => changeChosenModalColor(e)}
        ></button>
        <button
          name="orange"
          className="bg-primary_orange"
          value="bg-primary_orange text-white"
          onClick={(e) => changeChosenModalColor(e)}
        ></button>
        <button
          name="purple"
          className="bg-primary_purple"
          value="bg-primary_purple text-white"
          onClick={(e) => changeChosenModalColor(e)}
        ></button>
        <button
          name="gray"
          className="bg-gray-300"
          value="bg-gray-300 text-black"
          onClick={(e) => changeChosenModalColor(e)}
        ></button>
        <button
          name="white"
          className="bg-white"
          value="bg-white text-black"
          onClick={(e) => changeChosenModalColor(e)}
        ></button>
      </div>
    </div>
  );
}

export default Appearance;
