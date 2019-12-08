import React, { useRef } from "react";
import { saveAs } from "file-saver";
import iziToast from "izitoast";
import { CirclePicker } from "react-color";
import { bootstrapToHexColors } from "./options/methods";
import { useTranslation } from "react-i18next";

const OptionsPopup = props => {
  const ibWeatherCity = useRef(null);
  const ibFileUpload = useRef(null);
  const { t, i18n } = useTranslation();

  const localStorageToObject = () => {
    let newObject = {};
    Object.keys(localStorage).forEach(element => {
      newObject[element] = localStorage.getItem(element);
    });
    console.log(newObject);
    return newObject;
  };

  const objectToLocalStorage = parsed => {
    Object.keys(parsed).forEach(element => {
      console.log(parsed[element]);
      localStorage.removeItem(element);
      localStorage.setItem(element, parsed[element]);
    });
    iziToast.success({
      title: t("options.frequently_used_popup_title"),
      message: t("options.frequently_used_popup_text")
    });
  };

  const exportLayoutData = () => {
    /*     let resultData = JSON.stringify(localStorageToObject(), function replacer(key, value) {
      return value;
    }); */
    let resultData2 = JSON.stringify(localStorageToObject());
    let blob = new Blob([resultData2], { type: "application/json", charset: "utf-8" });
    var date = new Date();
    let filename =
      Math.floor(Math.random() * 99) + 1 + "tabext_" + date.getDate() + date.getMonth() + date.getFullYear() + ".json";
    saveAs(blob, filename);
  };

  const onFileUploadChange = event => {
    let result;
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event) {
      result = event.target.result;
      objectToLocalStorage(JSON.parse(result));
    };
    //console.log(result);
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
  const onChangeLanguage = e => {
    props.setLanguageChoice(e.target.value);
    i18n.changeLanguage(e.target.value);
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
            <div className="container-fluid optionsColumnContainer h-100 scroll-y scrollbarStyle py-4 d-flex flex-column justify-content-evenly">
              <div className="row no-gutters align-items-center" style={{ justifyContent: "space-evenly" }}>
                <h5 className="m-0">{t("options.title")}</h5>
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
                    <h5 className="mb-1">{t("options.weather_title")}</h5>
                  </div>
                  <div className="row no-gutters mt-2 justify-content-center text-center">
                    <label>{t("options.weather_city")}</label>
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
                              title: t("options.weather_popup_title"),
                              message: t("options.weather_popup_text")
                            });
                          }}
                        >
                          {t("options.weather_button_confirm")}
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
                <div className="col-12 px-3">
                  <p className="mb-1">{t("options.clock_title")}</p>
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
                <div className="col-12 px-3">
                  <p className="mb-1">{t("options.language_title")}</p>
                  <div className="row no-gutters">
                    <div className="col-12">
                      <select
                        className="form-control rounded-0 bg-transparent text-white"
                        onChange={onChangeLanguage}
                        value={props.languageChoice}
                      >
                        <option value="tr" className="text-primary">
                          Türkçe
                        </option>
                        <option value="en" className="text-primary">
                          English
                        </option>
                        <option value="am" className="text-primary">
                          {t("languages.am")}
                        </option>
                        <option value="bn" className="text-primary">
                          {t("languages.bn")}
                        </option>
                        <option value="da" className="text-primary">
                          {t("languages.da")}
                        </option>
                        <option value="fa" className="text-primary">
                          {t("languages.fa")}
                        </option>
                        <option value="fr" className="text-primary">
                          {t("languages.fr")}
                        </option>
                        <option value="hr" className="text-primary">
                          {t("languages.hr")}
                        </option>
                        <option value="it" className="text-primary">
                          {t("languages.it")}
                        </option>
                        <option value="lt" className="text-primary">
                          {t("languages.lt")}
                        </option>
                        <option value="ms" className="text-primary">
                          {t("languages.ms")}
                        </option>
                        <option value="pl" className="text-primary">
                          {t("languages.pl")}
                        </option>
                        <option value="ro" className="text-primary">
                          {t("languages.ro")}
                        </option>
                        <option value="sl" className="text-primary">
                          {t("languages.sl")}
                        </option>
                        <option value="sw" className="text-primary">
                          {t("languages.sw")}
                        </option>
                        <option value="zh_CN" className="text-primary">
                          {t("languages.zh_CN")}
                        </option>
                        <option value="ar" className="text-primary">
                          {t("languages.ar")}
                        </option>
                        <option value="ca" className="text-primary">
                          {t("languages.ca")}
                        </option>
                        <option value="de" className="text-primary">
                          {t("languages.de")}
                        </option>
                        <option value="es" className="text-primary">
                          {t("languages.es")}
                        </option>
                        <option value="fi" className="text-primary">
                          {t("languages.fi")}
                        </option>
                        <option value="he" className="text-primary">
                          {t("languages.he")}
                        </option>
                        <option value="hu" className="text-primary">
                          {t("languages.hu")}
                        </option>
                        <option value="ja" className="text-primary">
                          {t("languages.ja")}
                        </option>
                        <option value="lv" className="text-primary">
                          {t("languages.lv")}
                        </option>
                        <option value="nl" className="text-primary">
                          {t("languages.nl")}
                        </option>
                        <option value="pt_BR" className="text-primary">
                          {t("languages.pt_BR")}
                        </option>
                        <option value="ru" className="text-primary">
                          {t("languages.ru")}
                        </option>
                        <option value="sr" className="text-primary">
                          {t("languages.sr")}
                        </option>
                        <option value="ta" className="text-primary">
                          {t("languages.ta")}
                        </option>
                        <option value="uk" className="text-primary">
                          {t("languages.uk")}
                        </option>
                        <option value="zh_TW" className="text-primary">
                          {t("languages.zh_TW")}
                        </option>
                        <option value="bg" className="text-primary">
                          {t("languages.bg")}
                        </option>
                        <option value="cs" className="text-primary">
                          {t("languages.cs")}
                        </option>
                        <option value="el" className="text-primary">
                          {t("languages.el")}
                        </option>
                        <option value="et" className="text-primary">
                          {t("languages.et")}
                        </option>
                        <option value="fil" className="text-primary">
                          {t("languages.fil")}
                        </option>
                        <option value="hi" className="text-primary">
                          {t("languages.hi")}
                        </option>
                        <option value="id" className="text-primary">
                          {t("languages.id")}
                        </option>
                        <option value="ko" className="text-primary">
                          {t("languages.ko")}
                        </option>
                        <option value="ml" className="text-primary">
                          {t("languages.ml")}
                        </option>
                        <option value="no" className="text-primary">
                          {t("languages.no")}
                        </option>
                        <option value="pt_PT" className="text-primary">
                          {t("languages.pt_PT")}
                        </option>
                        <option value="sk" className="text-primary">
                          {t("languages.sk")}
                        </option>
                        <option value="sv" className="text-primary">
                          {t("languages.sv")}
                        </option>
                        <option value="th" className="text-primary">
                          {t("languages.th")}
                        </option>
                        <option value="vi" className="text-primary">
                          {t("languages.vi")}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-white mx-3" />

              <div className="row no-gutters justify-content-center">
                <div className="col-12 px-4">
                  <p className="mb-1">{t("options.frequently_used")}</p>
                  <div className="row no-gutters">
                    <div className="col-12">
                      <button className="btn btn-sm btn-info mr-2" onClick={exportLayoutData}>
                        {t("options.frequently_used_export")}
                      </button>
                      <div className="file btn btn-sm btn-info fileuploaddiv">
                        {t("options.frequently_used_import")}
                        <input
                          type="file"
                          className="fileuploadinput"
                          onChange={onFileUploadChange}
                          ref={ibFileUpload}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-white mx-3" />

              <div className="row no-gutters justify-content-center">
                <div className="col-12 px-4">
                  <p className="mb-1">{t("options.background_title")}</p>
                  <div className="row no-gutters">
                    <div className="col-12">
                      <select
                        className="form-control rounded-0 bg-transparent text-white"
                        onChange={props.changeImgBackgroundChoice}
                        value={props.imgBackgroundChoice}
                      >
                        <option value="default" className="text-primary">
                          {t("options.background_choice_1")}
                        </option>
                        <option value="alternative" className="text-primary">
                          {t("options.background_choice_2")}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-white mx-3" />

              <div className="row no-gutters justify-content-center">
                <div className="col-12 px-4">
                  <p className="mb-1">{t("options.colors_title")}</p>
                  <div className="row no-gutters">
                    <div className="col-12 justify-content-center text-center">
                      <div className="row no-gutters justify-content-center text-center">
                        <span>{t("options.colors_buttons")}</span>
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
                        <span>{t("options.colors_texts")}</span>
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
                  <div className="row no-gutters">
                    <div className="col-12">
                      <span>{t("options.icon_display_title")}</span>
                      <select
                        className="form-control rounded-0 bg-transparent text-white"
                        onChange={props.changeIconsVisibility}
                        value={props.iconsVisibility}
                      >
                        <option value="true" className="text-primary">
                          {t("options.icon_display_open")}
                        </option>
                        <option value="false" className="text-primary">
                          {t("options.icon_display_close")}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-white mx-3" />
              <div className="row no-gutters justify-content-start">
                <div className="col-12 px-4">
                  <p className="mb-1">{t("options.button_display_title")}</p>
                  <div className="row no-gutters">
                    <div className="col-12 text-left">
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Yardim"
                          checked={props.navIconVisibilities.Yardim}
                          onChange={event => onChangeButtonVisibilities(event, "Yardim")}
                        />
                        <label className="custom-control-label" htmlFor="Yardim">
                          {t("options.button_display_help")}
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
                          {t("options.button_display_review")}
                        </label>
                      </div>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Oyunlar"
                          checked={props.navIconVisibilities.Oyunlar}
                          onChange={event => onChangeButtonVisibilities(event, "Oyunlar")}
                        />
                        <label className="custom-control-label" htmlFor="Oyunlar">
                          {t("options.button_display_oyunlar")}
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
                          {t("options.button_display_weather")}
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
                          {t("options.button_display_background")}
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
                          {t("options.button_display_mainscreen")}
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
                          {t("options.button_display_bookmarks")}
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
                          {t("options.button_display_history")}
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
                          {t("options.button_display_notes")}
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
