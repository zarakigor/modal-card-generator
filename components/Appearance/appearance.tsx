import { useContext } from "react";
import { Context } from "../../context/Context";
import styles from "./appearance.module.scss";

function Appearance() {
  const {
    chosenModalSize,
    changeChosenModalSize,
    changeModalPosition,
    changeChosenModalPosition,
  } = useContext(Context);
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
          className="rounded-tl"
          name="absolute top-0 left-0"
          onClick={(e) => changeChosenModalPosition(e)}
        ></button>
        <button
          className=""
          name="absolute top-0 self-center"
          onClick={(e) => changeChosenModalPosition(e)}
        ></button>
        <button
          className="rounded-tr"
          name="absolute top-0 right-0"
          onClick={(e) => changeChosenModalPosition(e)}
        ></button>
        <button
          className=""
          name="absolute left-0 self-center"
          onClick={(e) => changeChosenModalPosition(e)}
        ></button>
        <button
          className=""
          name="absolute self-center"
          onClick={(e) => changeChosenModalPosition(e)}
        ></button>
        <button
          className=""
          name="absolute right-0"
          onClick={(e) => changeChosenModalPosition(e)}
        ></button>
        <button
          className="rounded-bl"
          name="absolute bottom-0 left-0 "
          onClick={(e) => changeChosenModalPosition(e)}
        ></button>
        <button
          className=""
          name="absolute bottom-0 self-center"
          onClick={(e) => changeChosenModalPosition(e)}
        ></button>
        <button
          className="rounded-br"
          name="absolute bottom-0 right-0"
          onClick={(e) => changeChosenModalPosition(e)}
        ></button>
      </div>
    </div>
  );
}

export default Appearance;
