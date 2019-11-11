import React, { useRef } from "react";
import { saveAs } from "file-saver";
import iziToast from "izitoast";

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
  return (
    <>
      <div className="container-fluid p-0 optionsPopup animated fadeIn" style={{ display: props.OptionsVisibility }}>
        <div className="row h-100 no-gutters justify-content-end text-center">
          <div
            className="col-md-10"
            onClick={() => {
              props.setOptionsVisibility("none");
            }}
          ></div>
          <div className="col-md-2 text-white optionsContainer">
            <div className="container-fluid optionsColumnContainer py-5">
              <div className="row no-gutters justify-content-center">
                <h4>TabExtension</h4>
              </div>
              <hr className="border-white" />
              <div className="row no-gutters mt-3 justify-content-center">
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
                              message: "Bir sonraki açılışta şehir yenilenecektir."
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
              <hr className="border-white" />
              <div className="row no-gutters mt-3 justify-content-center">
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

              <hr className="border-white" />
              <div className="row no-gutters mt-3 justify-content-center">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionsPopup;
