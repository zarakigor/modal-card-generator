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
    changeChosenModalContents,
    contentsOfModals,
    chosenModalPosition,
    chosenModalSize,
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
          className="form-input mt-4 rounded-lg border-gray-300 "
          name={contentName}
          value={`${contentValue}`}
          onChange={(e) => changeChosenModalContents(e, indexOfChosenModal)}
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
        <div className={styles.left_col}>
          <Appearance />
          <h3 className="mt-24 mb-7">
            <span>3</span> Content
          </h3>
          <p>Edit your content</p>
          <div className="flex flex-col">{InputElements()}</div>
        </div>
        <div className="flex justify-center w-3/5 relative">
          <div
            className={`${chosenModalPosition} ${chosenModalSize} shadow-[0_5px_30px_rgba(0,0,0,0.15)] rounded-xl`}
          >
            <PreviewModal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generator;
