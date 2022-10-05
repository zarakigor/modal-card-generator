import styles from "./primaryButton.module.scss";

function PrimaryButton(props) {
  return (
    <button className={`${props.value.className} text-white ${styles.btn}`}>
      {props.value.text}
    </button>
  );
}

export default PrimaryButton;
