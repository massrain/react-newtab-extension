import React, { useRef, useState, useEffect } from "react";
import Modal from "react-modal";
//import { freqBuiltInWebsites } from "./options/methods";
import { useTranslation } from "react-i18next";

const AddFrequentlyPopup = props => {
  const [freqBuiltInWebsites, setFreqBuiltInWebsites] = useState([]);

  function json2array(json) {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key) {
      result.push(json[key]);
    });
    return result;
  }

  useEffect(() => {
    fetch("/methods/websites.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setFreqBuiltInWebsites(json2array(data));
      });
  }, []);

  const ibNewWebsiteLink = useRef(null);
  const ibNewWebsiteName = useRef(null);
  const { t } = useTranslation();

  const addWebsiteData = () => {
    let objSent = {
      name: ibNewWebsiteName.current.value,
      link: ibNewWebsiteLink.current.value,
      icon: `chrome://favicon/size/16@2x/${ibNewWebsiteLink.current.value}`
    };
    props.changeLayoutDetails(objSent);
  };

  const btnAddNewWebsiteConfirm = switchKey => {
    if (ibNewWebsiteName.current.value !== "" && ibNewWebsiteLink.current.value !== "") {
      addWebsiteData();
      let lastString = props.LayoutData.lg[props.LayoutData.lg.length - 1].i;
      let pushContent = {
        i: String.fromCharCode(lastString.charCodeAt(0) + 1),
        x: 0,
        //y: props.LayoutData.lg[props.LayoutData.lg.length - 1].y + 1,
        y: 0,
        w: 2,
        h: 2,
        minW: 2,
        minH: 2,
        maxW: 4,
        maxH: 4,
        static: false
      };
      let originalArray = props.LayoutData;
      let resultArray = {};
      resultArray.lg = originalArray.lg.concat(pushContent);
      resultArray.md = originalArray.md.concat(pushContent);
      resultArray.sm = originalArray.sm.concat(pushContent);
      resultArray.xs = originalArray.xs.concat(pushContent);
      resultArray.xxs = originalArray.xxs.concat(pushContent);
      props.setLayoutData(resultArray);
      //props.handleCloseAddFrequentlyModal();
    }
  };

  const addWebsiteDataFromBuildIn = data2 => {
    console.log(data2);
    let objSent = {
      name: data2.name,
      link: data2.link,
      icon: data2.icon
    };
    props.changeLayoutDetails(objSent);
  };

  const addFromBuiltIn = data => {
    addWebsiteDataFromBuildIn(data);
    let lastString = props.LayoutData.lg[props.LayoutData.lg.length - 1].i;

    let xposlast = props.LayoutData.lg[props.LayoutData.lg.length - 1].x;
    let pushContent = {
      i: String.fromCharCode(lastString.charCodeAt(0) + 1),
      x: xposlast >= 8 ? 0 : xposlast + 2,
      y: Infinity,
      //y: props.LayoutData.lg[props.LayoutData.lg.length - 1].y + 1,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: false
    };
    let originalArray = props.LayoutData;
    let resultArray = {};
    resultArray.lg = originalArray.lg.concat(pushContent);
    resultArray.md = originalArray.md.concat(pushContent);
    resultArray.sm = originalArray.sm.concat(pushContent);
    resultArray.xs = originalArray.xs.concat(pushContent);
    resultArray.xxs = originalArray.xxs.concat(pushContent);
    props.setLayoutData(resultArray);
    //props.handleCloseAddFrequentlyModal();
  };

  const btnClickAddFromSaved = number => {
    console.log(freqBuiltInWebsites[number]);
    addFromBuiltIn(freqBuiltInWebsites[number]);
    let objDiv = document.getElementById("BookmarklarRow");
    objDiv.scrollTop = objDiv.scrollHeight;
  };
  return (
    <>
      <Modal
        isOpen={props.showModal}
        onRequestClose={props.handleCloseAddFrequentlyModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        ariaHideApp={false}
        contentLabel="Minimal Modal Example"
        style={{
          overlay: {
            backgroundColor: "rgba(30,30,30,0.75)",
            zIndex: "99999"
          },
          content: {
            color: "lightsteelblue",
            backgroundColor: "rgba(30,30,30,0.75)",
            top: "5vh",
            left: "70vw",
            right: "1vw",
            bottom: "5vh"
          }
        }}
      >
        <div className="container-fluid h-100">
          <div className="row no-gutters justify-content-center">
            <div className="col-12 justify-content-center">
              <div className="row no-gutters justify-content-center mt-2">
                <h5>{t("mainscreen.title")}</h5>
              </div>
              <div className="row no-gutters justify-content-center">
                <div className="col-10">
                  <div className="form-group">
                    <label>{t("mainscreen.name")}</label>
                    <input
                      type="text"
                      placeholder={t("mainscreen.name_box")}
                      className="form-control rounded-0 bg-transparent text-white"
                      ref={ibNewWebsiteName}
                    />
                  </div>
                </div>
              </div>
              <div className="row no-gutters justify-content-center">
                <div className="col-10">
                  <div className="form-group">
                    <label>{t("mainscreen.link")}</label>
                    <input
                      type="text"
                      placeholder={t("mainscreen.link_box")}
                      className="form-control rounded-0 bg-transparent text-white"
                      ref={ibNewWebsiteLink}
                    />
                    <small className="form-text text-muted">
                      <span className="text-danger">{t("mainscreen.warning_format")}</span>
                      <br />
                      {t("mainscreen.warning_1")}
                      <br />
                      {t("mainscreen.warning_2")}
                    </small>
                  </div>
                </div>
              </div>
              <div className="row no-gutters justify-content-center">
                <button className="btn btn-success" onClick={btnAddNewWebsiteConfirm}>
                  {t("mainscreen.button_save")}
                </button>
              </div>
              <div className="row no-gutters justify-content-center">
                <button className="btn btn-primary" onClick={props.handleCloseAddFrequentlyModal}>
                  {t("mainscreen.button_close")}
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="row no-gutters h-100 justify-content-center">
            <div className="col-12">
              <div className="row no-gutters justify-content-center mt-2">
                <h5>{t("mainscreen.examples_title")}</h5>
              </div>
              <div className="row no-gutters justify-content-center">
                <div className="col-12">
                  <div className="row no-gutters">
                    {freqBuiltInWebsites.map((item, index) => (
                      <SingleBoxNewFrequently
                        data={item}
                        key={index}
                        itemIndex={index}
                        btnClickAddFromSaved={btnClickAddFromSaved}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddFrequentlyPopup;

const SingleBoxNewFrequently = props => {
  const { t } = useTranslation();
  return (
    <div className="col-4 px-2">
      <div className="card text-white bg-transparent border-white mb-3">
        <div className="text-center justify-content-center">
          <img src={props.data.icon} alt="" className="img-fluid freq--newitemadd mt-1" />
          <p className="mb-1 mt-2" style={{ fontSize: "0.8rem" }}>
            {props.data.name}
          </p>
          <p className="card-text mt-1">
            <button
              className="btn btn-outline-info btn-sm rounded-0"
              onClick={() => props.btnClickAddFromSaved(props.itemIndex)}
            >
              {t("mainscreen.examples_button_add")}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
