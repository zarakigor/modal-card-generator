import { useState } from "react";
import styles from "./gallery.module.scss";
import Image from "next/future/image";

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalsPerPage, setModalsPerPage] = useState(12);
  const indexOfLastModal = currentPage * modalsPerPage;
  const indexOfFirstModal = indexOfLastModal - modalsPerPage;

  function displayTemplates() {
    let imageArr = [];
    for (let i = 1; i <= 36; i++) {
      imageArr.push(
        <div key={i}>
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
    const currentModals = imageArr.slice(indexOfFirstModal, indexOfLastModal);

    return <div className={styles.gallery}>{currentModals}</div>;
  }

  function changePage(event) {
    console.log(event.target.value);
    setCurrentPage(event.target.value);
  }

  return (
    <div>
      {displayTemplates()}
      <div className={styles.btn__group}>
        <button
          value="1"
          onClick={(e) => changePage(e)}
          className={currentPage == 1 ? styles.active : styles.inactive}
        >
          1
        </button>
        <button
          value="2"
          onClick={(e) => changePage(e)}
          className={currentPage == 2 ? styles.active : styles.inactive}
        >
          2
        </button>
        <button
          value="3"
          onClick={(e) => changePage(e)}
          className={currentPage == 3 ? styles.active : styles.inactive}
        >
          3
        </button>
      </div>
    </div>
  );
}

export default Gallery;

{
  /* <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        /> */
}
