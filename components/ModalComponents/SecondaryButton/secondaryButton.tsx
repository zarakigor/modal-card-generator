import styles from "./secondaryButton.module.scss";

function SecondaryButton(props) {
  return (
    <button className={`${props.value.className} ${styles.btn}  bg-white`}>
      {props.value.text}
    </button>
  );
}

export default SecondaryButton;
