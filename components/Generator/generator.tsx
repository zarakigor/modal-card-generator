import styles from "./generator.module.scss";
import Image from "next/future/image";
import dynamic from "next/dynamic";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { nanoid } from "nanoid";
import Gallery from "../Gallery/gallery";
import Appearance from "../Appearance/appearance";

function Generator() {
  const {
    indexOfChosenModal,
    handleChange,
    contentsOfModals,
    setContentsOfModals,
  } = useContext(Context);

  function loadComponent(index: string) {
    const Component = dynamic(
      () => import(`../ModalSamples/Modal${index}/modal${index}.tsx`)
    );
    return Component;
  }

  const PreviewModal = loadComponent(indexOfChosenModal);

  function InputElements() {
    let contentArr = [];
    for (const [contentName, contentValue] of Object.entries(
      contentsOfModals[`Modal${indexOfChosenModal}`]
    )) {
      contentArr.push(
        <input
          key={contentName}
          type="text"
          className="form-input"
          name={contentName}
          value={contentValue}
          onChange={(e) => handleChange(e, indexOfChosenModal)}
        />
      );
    }
    return contentArr;
  }

  return (
    <div className={styles.generator}>
      <h1>Modal Card Generator</h1>
      <p className="w-2/5 tracking-tight mb-24">
        Measure your return on email marketing efforts easier and faster by
        using thebest online tools. Popupsmart is ready to help you build an
        efficient email list!
      </p>

      <h3>
        <span>1</span> Choose your template
      </h3>
      <Gallery />
      <div className="flex justify-between mt-24">
        <div>
          <Appearance />
          <h3 className="mb-7">
            <span>3</span> Content
          </h3>
          <p>Edit your content</p>
          <div className="flex flex-col">{InputElements()}</div>
        </div>
        <PreviewModal />
      </div>
    </div>
  );
}

export default Generator;
