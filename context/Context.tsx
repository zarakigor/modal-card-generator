import { useState, useEffect, createContext } from "react";

const Context = createContext(null);

function ContextProvider({ children }) {
  const [indexOfChosenModal, setIndexOfChosenModal] = useState(1);
  const [chosenModalSize, setChosenModalSize] = useState("scale-100");
  const [chosenModalPosition, setChosenModalPosition] = useState(
    "absolute self-center"
  );
  const [chosenModalColor, setChosenModalColor] = useState(
    "bg-primary_purple text-white"
  );

  const [contentsOfModals, setContentsOfModals] = useState({
    Modal1: {
      content1: "Security Code",
      content2: "This code expires in 24 hours",
      content3: "Code",
      content4: "Cancel",
      content5: "Continue",
    },

    Modal2: {
      content1: "Install local now",
      content2: "We’ve gone native, try it!",
      content3: "Continue",
      content4: "Not now",
    },

    Modal3: {
      content1: "",
      content2: "",
      content3: "",
      content4: "",
    },

    Modal4: {
      content1: "Delete your profile",
      content2: "Your profile will be automatically deleted after 1 month.",
      content3: "You won’t be able to access to your profile after",
      content4: "30.08.2021",
      content5: "Delete my profile",
      content6: "Cancel",
    },

    Modal5: {
      content1: "The file is on it's way",
      content2:
        "You’ll get an notified when the receiver has opened the email.",
      content3: "Go to dashboard",
    },
  });

  function changeModalIndex(index) {
    setIndexOfChosenModal(index);
  }

  function changeChosenModalContents(e, index) {
    let updatedModal = contentsOfModals[`Modal${index}`];

    setContentsOfModals((prevState) => {
      let update = { ...prevState };
      update[`Modal${index}`] = {
        ...updatedModal,
        [e.target.name]: e.target.value,
      };
      return update;
    });
  }

  function changeChosenModalSize(e) {
    setChosenModalSize(e.target.value);
  }

  function changeChosenModalPosition(e) {
    setChosenModalPosition(e.target.value);
  }

  function changeChosenModalColor(e) {
    setChosenModalColor(e.target.value);
  }

  return (
    <Context.Provider
      value={{
        indexOfChosenModal,
        changeModalIndex,
        changeChosenModalContents,
        contentsOfModals,
        setContentsOfModals,
        chosenModalSize,
        changeChosenModalSize,
        chosenModalPosition,
        changeChosenModalPosition,
        chosenModalColor,
        changeChosenModalColor,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
