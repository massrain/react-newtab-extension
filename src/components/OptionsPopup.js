import React from "react";
import { useLocalStorage } from "./options/methods";

const OptionsPopup = () => {
  const [LayoutData, setLayoutData] = useLocalStorage("freqlayouts", "Bob");

  const saveLayoutData = () => {
    setLayoutData("emre");
  };
  const exportLayoutData = () => {
    // 1. get data from localstorage or state
    let blob = new Blob([LayoutData], { type: "application/json;charset=utf-8" });
    //saveAs(blob, filename + ".json");
    // 2. save it to json file
  };
  const importLayoutData = () => {
    //1. get json file from browser.
    //2. check some areas
    //3. load it to localstorage
  };

  return <></>;
};

export default OptionsPopup;
