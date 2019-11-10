import React from "react";
import { useLocalStorage } from "./options/methods";

const OptionsPopup = props => {
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

  return (
    <>
      <div
        className="container-fluid p-0 optionsPopup animated fadeInDown"
        style={{ display: props.OptionsVisibility }}
      >
        <div className="row h-100 no-gutters justify-content-end text-center">
          <div
            className="col-md-10"
            onClick={() => {
              props.setOptionsVisibility("none");
            }}
          ></div>
          <div className="col-md-2 text-white optionsContainer">
            <div className="container-fluid optionsColumnContainer py-4">
              <div className="row no-gutters justify-content-center">
                <h5>TabExtension</h5>
              </div>
              <hr className="border-white" />
              <div className="row no-gutters mt-3 justify-content-center">
                <div className="col-12 px-4">
                  <p className="mb-1">Hava durumu ayarları</p>
                  <label>Şehir</label>
                  <input type="text" className="form-control form-control-sm text-primary" />
                  <button className="btn btn-sm btn-info">Onayla</button>
                </div>
              </div>
              <hr className="border-white" />
              <div className="row no-gutters mt-3 justify-content-center">
                <div className="col-12 px-4">
                  <p className="mb-1">Sık Ziyaret Edilenler</p>
                  <button className="btn btn-sm btn-info">Dışa Aktar</button>
                  <br />
                  <button className="btn btn-sm btn-info">İçe Aktar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionsPopup;
