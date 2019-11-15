import React, { useRef } from "react";
import { saveAs } from "file-saver";
import iziToast from "izitoast";
import { CirclePicker } from "react-color";
import { bootstrapToHexColors } from "./options/methods";

const OptionsPopup = props => {
  const ibWeatherCity = useRef(null);

  const exportLayoutData = () => {
    // 1. get data from localstorage or state
    let blob = new Blob([JSON.stringify(props.LayoutData)], { type: "application/json;charset=utf-8" });
    saveAs(blob, "layoutdata.json");
    // 2. save it to json file
  };
  const importLayoutData = () => {
    //1. get json file from browser.
    //2. check some areas
    //3. load it to localstorage
  };

  const onChangeWeatherUnits = e => {
    props.changeWeatherUnits(e.target.value);
  };
  const handleNavbarColorComplete = (color, event) => {
    props.changeColorTextData(color.hex.toLowerCase(), "navButtons");
  };
  const handleTextColorComplete = (color, event) => {
    props.changeColorTextData(color.hex.toLowerCase(), "mains");
  };
  const onChangeButtonVisibilities = (event, button) => {
    let originalObject = { ...props.navIconVisibilities };
    originalObject[button] ? (originalObject[button] = false) : (originalObject[button] = true);
    props.setNavIconVisibilities(originalObject);
  };

  const onChangeDateTimeFormat = e => {
    props.setDateTimeFormat(e.target.value);
  };
  return (
    <>
      <div className="container-fluid p-0 optionsPopup animated fadeIn" style={{ display: props.OptionsVisibility }}>
        <div className="row h-100 no-gutters justify-content-end text-center">
          <div
            className="col-md-10 optionsContainer h-100"
            onClick={() => {
              props.setOptionsVisibility("none");
            }}
          ></div>
          <div className="col-md-2 text-white optionsContainer h-100">
            <div className="container-fluid optionsColumnContainer h-100 scroll-y scrollbarStyle py-5 d-flex flex-column justify-content-evenly">
              <div className="row no-gutters align-items-center" style={{ justifyContent: "space-evenly" }}>
                <h5 className="m-0">TabExtension</h5>
                <button
                  className="btn btn-link text-danger p-1"
                  onClick={() => {
                    props.setOptionsVisibility("none");
                  }}
                >
                  X
                </button>
              </div>
              <hr className="border-white mx-3" />

              <div className="row no-gutters justify-content-center">
                <div className="col-12 px-4">
                  <div className="row no-gutters mt-1 justify-content-center text-center">
                    <h5 className="mb-1">Hava Durumu</h5>
                  </div>
                  <div className="row no-gutters mt-2 justify-content-center text-center">
                    <label>Şehir</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control form-control-sm text-primary"
                        placeholder={props.weatherCity}
                        ref={ibWeatherCity}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-sm btn-info"
                          onClick={() => {
                            props.changeWeatherCity(ibWeatherCity.current.value);
                            iziToast.success({
                              title: "Başarılı",
                              message: "Şehir yenilendi"
                            });
                          }}
                        >
                          Onayla
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row no-gutters mt-2 justify-content-center text-center">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="weatherRadios"
                        id="rdWeatherFahrenheit"
                        value="metric"
                        checked={props.weatherUnits === "metric"}
                        onChange={onChangeWeatherUnits}
                      />
                      <label className="form-check-label" htmlFor="rdWeatherFahrenheit">
                        [°C]
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="weatherRadios"
                        id="rdWeatherCelcius"
                        checked={props.weatherUnits === "imperial"}
                        onChange={onChangeWeatherUnits}
                        value="imperial"
                      />
                      <label className="form-check-label" htmlFor="rdWeatherCelcius">
                        [°F]
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-white mx-3" />

              <div className="row no-gutters justify-content-center">
                <div className="col-12 px-4">
                  <p className="mb-1">Saat Formatı</p>
                  <div className="row no-gutters">
                    <div className="col-12">
                      <select
                        className="form-control rounded-0 bg-transparent text-white"
                        onChange={onChangeDateTimeFormat}
                        value={props.dateTimeFormat}
                      >
                        <option value="en-US" className="text-primary">
                          12
                        </option>
                        <option value="tr-TR" className="text-primary">
                          24
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-white mx-3" />

              <div className="row no-gutters justify-content-center">
                <div className="col-12 px-4">
                  <p className="mb-1">Sık Kullanılanlar</p>
                  <div className="row no-gutters">
                    <div className="col-12">
                      <button className="btn btn-sm btn-info" onClick={exportLayoutData}>
                        Dışa Aktar
                      </button>
                      <button className="btn btn-sm btn-info" onClick={importLayoutData}>
                        İçe Aktar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-white mx-3" />

              <div className="row no-gutters justify-content-center">
                <div className="col-12 px-4">
                  <p className="mb-1">Arkaplan</p>
                  <div className="row no-gutters">
                    <div className="col-12">
                      <select
                        className="form-control rounded-0 bg-transparent text-white"
                        onChange={props.changeImgBackgroundChoice}
                        value={props.imgBackgroundChoice}
                      >
                        <option value="tabext" className="text-primary">
                          Uzantı
                        </option>
                        <option value="bing" className="text-primary">
                          Bing
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-white mx-3" />

              <div className="row no-gutters justify-content-center">
                <div className="col-12 px-4">
                  <p className="mb-1">Renkler</p>
                  <div className="row no-gutters">
                    <div className="col-12 justify-content-center text-center">
                      <div className="row no-gutters justify-content-center text-center">
                        <span>Üst Butonlar</span>
                      </div>
                      <div className="row no-gutters justify-content-center text-center">
                        <CirclePicker
                          circleSize={22}
                          width={"150px"}
                          circleSpacing={12}
                          colors={["#2c3e50", "#95a5a6", "#18bc9c", "#3498db", "#f39c12", "#e74c3c", "#ecf0f1"]}
                          onChangeComplete={handleNavbarColorComplete}
                          color={bootstrapToHexColors(props.colorTextData.navButtons)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col-12">
                      <div className="row no-gutters justify-content-center text-center">
                        <span>Yazılar</span>
                      </div>
                      <div className="row no-gutters justify-content-center text-center">
                        <CirclePicker
                          circleSize={22}
                          width={"150px"}
                          circleSpacing={12}
                          colors={["#2c3e50", "#95a5a6", "#18bc9c", "#3498db", "#f39c12", "#e74c3c", "#ecf0f1"]}
                          onChangeComplete={handleTextColorComplete}
                          color={bootstrapToHexColors(props.colorTextData.mains)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-white mx-3" />
              <div className="row no-gutters justify-content-center">
                <div className="col-12 px-4">
                  <p className="mb-1">Renkler</p>
                  <div className="row no-gutters">
                    <div className="col-12">
                      <span>İkon Görünümü</span>
                      <select
                        className="form-control rounded-0 bg-transparent text-white"
                        onChange={props.changeIconsVisibility}
                        value={props.iconsVisibility}
                      >
                        <option value="true" className="text-primary">
                          Açık
                        </option>
                        <option value="false" className="text-primary">
                          Kapalı
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-white mx-3" />
              <div className="row no-gutters justify-content-start">
                <div className="col-12 px-4">
                  <p className="mb-1">Butonlar</p>
                  <div className="row no-gutters">
                    <div className="col-12 text-left">
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Ekranigizle"
                          checked={props.navIconVisibilities.Ekranigizle}
                          onChange={event => onChangeButtonVisibilities(event, "Ekranigizle")}
                        />
                        <label className="custom-control-label" htmlFor="Ekranigizle">
                          Ekranı Gizle
                        </label>
                      </div>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Yardim"
                          checked={props.navIconVisibilities.Yardim}
                          onChange={event => onChangeButtonVisibilities(event, "Yardim")}
                        />
                        <label className="custom-control-label" htmlFor="Yardim">
                          Yardım
                        </label>
                      </div>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Yorumla"
                          checked={props.navIconVisibilities.Yorumla}
                          onChange={event => onChangeButtonVisibilities(event, "Yorumla")}
                        />
                        <label className="custom-control-label" htmlFor="Yorumla">
                          Uzantıyı Yorumla
                        </label>
                      </div>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Havadurumu"
                          checked={props.navIconVisibilities.Havadurumu}
                          onChange={event => onChangeButtonVisibilities(event, "Havadurumu")}
                        />
                        <label className="custom-control-label" htmlFor="Havadurumu">
                          Hava Durumu
                        </label>
                      </div>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Arkaplan"
                          checked={props.navIconVisibilities.Arkaplan}
                          onChange={event => onChangeButtonVisibilities(event, "Arkaplan")}
                        />
                        <label className="custom-control-label" htmlFor="Arkaplan">
                          Arkaplan
                        </label>
                      </div>
                      {/*  */}
                      <div className="custom-control custom-switch mt-1">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Anasayfa"
                          checked={props.navIconVisibilities.Anasayfa}
                          onChange={event => onChangeButtonVisibilities(event, "Anasayfa")}
                        />
                        <label className="custom-control-label" htmlFor="Anasayfa">
                          Anasayfa
                        </label>
                      </div>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Yerimleri"
                          checked={props.navIconVisibilities.Yerimleri}
                          onChange={event => onChangeButtonVisibilities(event, "Yerimleri")}
                        />
                        <label className="custom-control-label" htmlFor="Yerimleri">
                          Yer imleri
                        </label>
                      </div>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Gecmis"
                          checked={props.navIconVisibilities.Gecmis}
                          onChange={event => onChangeButtonVisibilities(event, "Gecmis")}
                        />
                        <label className="custom-control-label" htmlFor="Gecmis">
                          Geçmiş
                        </label>
                      </div>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Notlar"
                          checked={props.navIconVisibilities.Notlar}
                          onChange={event => onChangeButtonVisibilities(event, "Notlar")}
                        />
                        <label className="custom-control-label" htmlFor="Notlar">
                          Notlar
                        </label>
                      </div>
                      {/*  */}
                    </div>
                  </div>
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
