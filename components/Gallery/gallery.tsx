import { useContext, useState } from "react";
import styles from "./gallery.module.scss";
import Image from "next/future/image";
import { Context } from "../../context/Context";

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalsPerPage, setModalsPerPage] = useState(12);
  const indexOfLastModal = currentPage * modalsPerPage;
  const indexOfFirstModal = indexOfLastModal - modalsPerPage;

  const { changeModalIndex } = useContext(Context);

  function displayTemplates() {
    let imageArr = [];
    for (let i = 1; i <= 36; i++) {
      imageArr.push(
        <div key={i} className="group">
          <Image
            src={`/images/modals_preview/modal${i}.png`}
            alt={`preview of modal number ${i}`}
            width="0"
            height="0"
            sizes="134vw"
            className="w-auto h-auto z-10"
          />
          <div className="hidden absolute group-hover:z-20">
            <button
              value={`${i}`}
              className="text-purple-600 tracking-tight font-semibold hidden group-hover:block bg-white rounded-xl z-30 absolute px-6 py-4"
              onClick={() => changeModalIndex(`${i}`)}
            >
              Select template
            </button>
          </div>
        </div>
      );
    }
    const currentModals = imageArr.slice(indexOfFirstModal, indexOfLastModal);

    return <div className={styles.gallery}>{currentModals}</div>;
  }

  function changePage(event) {
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
