import styles from "./generator.module.scss";
import Image from "next/future/image";
import React, { lazy, useContext } from "react";
import { Context } from "../../context/Context";
import Gallery from "../Gallery/gallery";

import Modal1 from "../ModalSamples/Modal1/modal1";
import Modal2 from "../ModalSamples/Modal2/modal2";
import Modal4 from "../ModalSamples/Modal4/modal4";
import Modal5 from "../ModalSamples/Modal5/modal5";

import dynamic from "next/dynamic";

function Generator() {
  const { indexOfChosenModal } = useContext(Context);

  function loadComponent(index: string) {
    const Component = dynamic(
      () => import(`../ModalSamples/Modal${index}/modal${index}.tsx`)
    );
    return Component;
  }
  const ChosenModal = loadComponent(indexOfChosenModal);

  return (
    <div className={styles.generator}>
      <h1>Modal Card Generator</h1>
      <p>
        Measure your return on email marketing efforts easier and faster by
        using thebest online tools. Popupsmart is ready to help you build an
        efficient email list!
      </p>
      <Gallery />

      <ChosenModal />
    </div>
  );
}

export default Generator;
