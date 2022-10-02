import styles from "./primaryButton.module.scss";

function PrimaryButton(props) {
  return (
    <button
      className={`${props.value.className} ${styles.btn}  bg-primary_purple`}
    >
      {props.value.text}
    </button>
  );
}

export default PrimaryButton;
// className={styles.btn}
