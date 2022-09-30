import styles from "./generator.module.scss";
import Image from "next/future/image";
import Gallery from "../Gallery/gallery";

function Generator() {
  return (
    <div className={styles.generator}>
      <h1>Modal Card Generator</h1>
      <p>
        Measure your return on email marketing efforts easier and faster by
        using thebest online tools. Popupsmart is ready to help you build an
        efficient email list!
      </p>
      <Gallery />
    </div>
  );
}

export default Generator;
