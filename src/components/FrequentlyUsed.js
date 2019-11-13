import React, { useState, useRef } from "react";
import GridLayout from "react-grid-layout";
import SingleObject from "./frequentlyused/SingleObject";
import Modal from "react-modal";

const FrequentlyUsed = props => {
  //const [LayoutState, setLayoutState] = useState(props.LayoutData);
  const [GridComponentKey, setGridComponentKey] = useState(5);
  const [EditMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const ibNewWebsiteLink = useRef(null);
  const ibNewWebsiteName = useRef(null);
  const btnEditGrid = () => {
    setEditMode(true);
    let layoutCopy = props.LayoutData;
    layoutCopy.forEach(element => {
      element.static = false;
    });
    props.setLayoutData(layoutCopy);
    setGridComponentKey(Math.floor(Math.random() * 100));
  };
  const btnFinishEditGrid = () => {
    setEditMode(false);
    let layoutCopy = props.LayoutData;
    layoutCopy.forEach(element => {
      element.static = true;
    });
    props.setLayoutData(layoutCopy);
    setGridComponentKey(Math.floor(Math.random() * 100));
  };

  const onLayoutChange = newLayout => {
    props.setLayoutData(newLayout);
  };

  const redirectLink = link => {
    if (EditMode === false) {
      window.open(link, "_blank");
    }
  };

  const btnAddNew = () => {
    handleOpenModal();
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const btnAddNewWebsiteConfirm = () => {
    console.log(props.LayoutData);
    let pushContent = {
      i: "f",
      x: 8,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      minH: 2,
      maxH: 4,
      static: true
    };
    let originalArray = props.LayoutData;
    let resultArray = originalArray.concat(pushContent);
    //props.setLayoutData(resultArray);
    //props.setLayoutData();
  };

  return (
    <>
      <div className="row no-gutters justify-content-end">
        <button
          className="btn btn-sm btn-primary rounded-0"
          type="button"
          style={{ display: EditMode ? "block" : "none" }}
          onClick={btnAddNew}
        >
          Yeni Ekle
        </button>
        <button
          className="btn btn-sm btn-success rounded-0 ml-1"
          style={{ display: EditMode ? "block" : "none" }}
          onClick={btnFinishEditGrid}
        >
          Düzenlemeyi Bitir
        </button>
        <button className="btn btn-sm btn-warning rounded-0 ml-1" onClick={btnEditGrid}>
          Düzenle
        </button>
      </div>

      <div className="row no-gutters mt-3">
        {console.log(props.LayoutData[3].datag)}
        <GridLayout
          className="layout"
          layout={props.LayoutData}
          onLayoutChange={onLayoutChange}
          cols={12}
          rowHeight={30}
          width={1200}
          key={GridComponentKey}
        >
          {/*           <div key="a">
            <SingleObject
              redirectLink={redirectLink}
              contentName={"Google"}
              colorTextData={props.colorTextData}
              contentLink={"https://google.com.tr"}
              contentIcon={"/assets/site/google.png"}
            />
          </div>
          <div key="b">
            <SingleObject
              redirectLink={redirectLink}
              contentName={"Galatasaray Sözlük"}
              colorTextData={props.colorTextData}
              contentLink={"https://rerererarara.net"}
              contentIcon={"/assets/site/gssozluk.jpg"}
            />
          </div>
          <div key="c">
            <SingleObject
              redirectLink={redirectLink}
              contentName={"Ekşi Sözlük"}
              colorTextData={props.colorTextData}
              contentLink={"https://eksisozluk.com"}
              contentIcon={"/assets/site/eksisozluk.png"}
            />
          </div>
          <div key="d">
            <SingleObject
              redirectLink={redirectLink}
              contentName={"Youtube"}
              colorTextData={props.colorTextData}
              contentLink={"https://youtube.com"}
              contentIcon={"/assets/site/youtube.png"}
            />
          </div>
          <div key="e">
            <SingleObject
              redirectLink={redirectLink}
              contentName={"Gmail"}
              colorTextData={props.colorTextData}
              contentLink={"https://gmail.com"}
              contentIcon={"/assets/site/gmail.png"}
            />
          </div> */}

          {props.LayoutData.map((item, index) => {
            return (
              <div key={item.i}>
                <SingleObject
                  redirectLink={redirectLink}
                  contentName={"Gmail"}
                  colorTextData={props.colorTextData}
                  contentLink={"https://gmail.com"}
                  contentIcon={"/assets/site/gmail.png"}
                />
              </div>
            );
          })}
        </GridLayout>
      </div>
    
      {/* props.LayoutData[props.LayoutData.length - 1].i === "d" */}
      <Modal
        isOpen={showModal}
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
                <input
                  type="text"
                  placeholder="Yeni site ismi"
                  className="form-control rounded-0 bg-transparent text-white"
                  ref={ibNewWebsiteName}
                />
              </div>
              <div className="row no-gutters justify-content-center mt-2">
                <input
                  type="text"
                  placeholder="Yeni site linki"
                  className="form-control rounded-0 bg-transparent text-white"
                  ref={ibNewWebsiteLink}
                />
              </div>
              <div className="row no-gutters justify-content-center mt-2">
                <button className="btn btn-success" onClick={btnAddNewWebsiteConfirm}>
                  Kaydet
                </button>
              </div>
              <div className="row no-gutters justify-content-center mt-2">
                <button className="btn btn-primary" onClick={handleCloseModal}>
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

export default FrequentlyUsed;
