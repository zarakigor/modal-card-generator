import styles from "./gallery.module.scss";
import Image from "next/future/image";

// import modal1 from "/public/images/modals_preview/modal1.png";
// import modal2 from "/public/images/modals_preview/modal2.png";
// import modal3 from "/public/images/modals_preview/modal3.png";
// import modal4 from "/public/images/modals_preview/modal4.png";

import { usePagination, DOTS } from "../hooks/usePagination";

function Gallery() {
  function displayTemplates() {
    let imageArr = [];
    for (let i = 1; i < 13; i++) {
      imageArr.push(
        <div>
          <Image
            src={`/images/modals_preview/modal${i}.png`}
            alt={`preview of modal number ${i}`}
            width="0"
            height="0"
            sizes="134vw"
            className="w-auto h-auto"
          />
        </div>
      );
    }
    return imageArr;
  }

  return <div className={styles.gallery}>{displayTemplates()}</div>;
}

export default Gallery;
