import React, { useRef } from "react";
import Modal from "react-modal";

const AddFrequentlyPopup = props => {
  const ibNewWebsiteLink = useRef(null);
  const ibNewWebsiteName = useRef(null);

  const addWebsiteData = () => {
    let objSent = {
      name: ibNewWebsiteName.current.value,
      link: ibNewWebsiteLink.current.value,
      icon: `chrome://favicon/size/16@2x/${ibNewWebsiteLink.current.value}`
    };
    props.changeLayoutDetails(objSent);
  };

  const btnAddNewWebsiteConfirm = () => {
    //console.log(ibNewWebsiteName.current.value);
    //console.log(ibNewWebsiteLink.current.value);
    //console.log(props.LayoutData.lg.length - 1);
    if (
      ibNewWebsiteName.current.value !== null ||
      ibNewWebsiteLink.current.value !== null ||
      ibNewWebsiteLink.current.value !== "" ||
      ibNewWebsiteLink.current.value !== ""
    ) {
      addWebsiteData();
      let lastString = props.LayoutData.lg[props.LayoutData.lg.length - 1].i;
      let pushContent = {
        i: String.fromCharCode(lastString.charCodeAt(0) + 1),
        x: 0,
        y: props.LayoutData.lg[props.LayoutData.lg.length - 1].y + 1,
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
      console.log(originalArray);
      console.log(resultArray);
      props.setLayoutData(resultArray);
      props.handleCloseAddFrequentlyModal();
    }
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
            top: "20vh",
            left: "20vw",
            right: "20vw",
            bottom: "20vh"
          }
        }}
      >
        <div className="container">
          <div className="row no-gutters justify-content-center">
            <div className="col-10 justify-content-center">
              <div className="row no-gutters justify-content-center mt-2">
                <h5>Yeni Ekle</h5>
              </div>
              <div className="row no-gutters justify-content-center mt-2">
                <div className="col-10">
                  <div className="form-group">
                    <label>İsim</label>
                    <input
                      type="text"
                      placeholder="Yeni site ismi"
                      className="form-control rounded-0 bg-transparent text-white"
                      ref={ibNewWebsiteName}
                    />
                  </div>
                </div>
              </div>
              <div className="row no-gutters justify-content-center mt-3">
                <div className="col-10">
                  <div className="form-group">
                    <label>Link:</label>
                    <input
                      type="text"
                      placeholder="Yeni site linki"
                      className="form-control rounded-0 bg-transparent text-white"
                      ref={ibNewWebsiteLink}
                    />
                    <small className="form-text text-muted">
                      Site linki tam halinde, (http veya https ile), eklediğiniz web sitesinin tarayıcı'dan kopyalanan
                      hali ile olmalıdır. <br /> Örnek format: "https://google.com"
                      <br />
                      Chrome tarayıcısına bağlı olarak bir sonraki açılışta otomatik site ikonu gelir.
                    </small>
                  </div>
                </div>
              </div>
              <div className="row no-gutters justify-content-center mt-2">
                <button className="btn btn-success" onClick={btnAddNewWebsiteConfirm}>
                  Kaydet
                </button>
              </div>
              <div className="row no-gutters justify-content-center mt-2">
                <button className="btn btn-primary" onClick={props.handleCloseAddFrequentlyModal}>
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddFrequentlyPopup;
