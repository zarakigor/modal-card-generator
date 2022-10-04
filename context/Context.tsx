import { useState, useEffect, createContext } from "react";

const Context = createContext(null);
//<string | null>

function ContextProvider({ children }) {
  const [indexOfChosenModal, setIndexOfChosenModal] = useState(1);

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

  const [chosenModalSize, setChosenModalSize] = useState("Medium");
  const [chosenModalPosition, setChosenModalPosition] = useState(
    "absolute self-center"
  );

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
    console.log(e.target.name);
    setChosenModalPosition(e.target.name);
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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
