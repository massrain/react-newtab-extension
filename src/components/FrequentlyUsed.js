import React, { useState, useRef } from "react";
import SingleObject from "./frequentlyused/SingleObject";
import Modal from "react-modal";
import MyResponsiveGrid from "./options/ResponsiveGrid";
import { Responsive, WidthProvider } from "react-grid-layout";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const ResponsiveGridLayout = WidthProvider(Responsive);

const FrequentlyUsed = props => {
  //const [LayoutState, setLayoutState] = useState(props.LayoutData);
  //const [GridComponentKey, setGridComponentKey] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [mousePositionX, setMousePositionX] = useState(null);

  const ibNewWebsiteLink = useRef(null);
  const ibNewWebsiteName = useRef(null);

  const onLayoutChange = (newLayout, allLayouts) => {
    console.log(newLayout);
    props.setLayoutData(allLayouts);
  };

  const redirectLink = link => {
    if (isDragging !== true) {
      console.log("nenkd");
    } else {
      console.log("elsesss");
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
  const addWebsiteData = () => {
    let objSent = {
      name: ibNewWebsiteName.current.value,
      link: ibNewWebsiteLink.current.value,
      icon: `chrome://favicon/size/16@2x/${ibNewWebsiteLink.current.value}`
    };

    props.changeLayoutDetails(objSent);
  };
  const btnAddNewWebsiteConfirm = () => {
    if (ibNewWebsiteName.current.value !== null || ibNewWebsiteLink.current.value !== null) {
      addWebsiteData();

      let lastString = props.LayoutData[props.LayoutData.lg.length - 1].i;
      let pushContent = {
        i: String.fromCharCode(lastString.charCodeAt(0) + 1),
        x: 0,
        y: props.LayoutData[props.LayoutData.length - 1].y + 1,
        w: 2,
        h: 2,
        minW: 2,
        maxW: 4,
        minH: 2,
        maxH: 4,
        static: true
      };
      let originalArray = props.LayoutData;
      let resultArray = originalArray.lg.concat(pushContent);
      props.setLayoutData(resultArray);

      handleCloseModal();
    }
  };
  const handleOnDragStart = () => {
    setIsDragging(true);
  };
  const handleOnDragStop = () => {
    setIsDragging(false);
  };
  const handleContextMenu = e => {};

  const btnAddNewFrequentlyVisited = () => {
    console.log("new");
  };
  const btnRemoveFreqObject = () => {
    console.log("remove item = " + 12);
  };
  const handleCollect = props => {
    console.log(props.children.props["data-index"]);
    console.log(props.children.props["data-id"]);
  };
  return (
    <>
      <div className="row no-gutters mt-3">
        <div className="col-12">
          <ResponsiveGridLayout
            className="layout"
            layouts={props.LayoutData}
            onDragStart={handleOnDragStart}
            onDragStop={handleOnDragStop}
            rowHeight={50}
            onLayoutChange={onLayoutChange}
            breakpoints={{ lg: 1080, md: 720, sm: 540, xs: 240, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          >
            {props.LayoutData.lg.map((item, index) => {
              return (
                <div key={item.i}>
                  <SingleObject
                    redirectLink={redirectLink}
                    contentName={props.LayoutDetails[index].name}
                    colorTextData={props.colorTextData}
                    contentLink={props.LayoutDetails[index].link}
                    contentIcon={props.LayoutDetails[index].icon}
                    handleCollect={handleCollect}
                    dataid={item.i}
                    dataindex={index}
                  />
                </div>
              );
            })}
          </ResponsiveGridLayout>
        </div>
        {/*         <GridLayout
          className="layout"
          layout={props.LayoutData}
          onLayoutChange={onLayoutChange}
          cols={12}
          rowHeight={50}
          width={1200}
        >
          {props.LayoutData.map((item, index) => {
            return (
              <div key={item.i}>
                <SingleObject
                  redirectLink={redirectLink}
                  contentName={props.LayoutDetails[index].name}
                  colorTextData={props.colorTextData}
                  contentLink={props.LayoutDetails[index].link}
                  contentIcon={props.LayoutDetails[index].icon}
                />
              </div>
            );
          })}
        </GridLayout> */}
      </div>
      <ContextMenu id="some_unique_identifier" style={{ marginLeft: "-200px" }}>
        <MenuItem>ContextMenu Item 1</MenuItem>
        <MenuItem>ContextMenu Item 2</MenuItem>
        <MenuItem divider />
        <MenuItem>ContextMenu Item 3</MenuItem>
      </ContextMenu>
      {/* props.LayoutData[props.LayoutData.length - 1].i === "d" */}
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
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
