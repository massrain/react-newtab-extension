import React, { useState } from "react";
import GridLayout from "react-grid-layout";

const FrequentlyUsed = () => {
  const layout = [
    { i: "b", x: 0, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true },
    { i: "a", x: 2, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true },
    { i: "c", x: 4, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true },
    { i: "d", x: 6, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true },
    { i: "e", x: 8, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true },
  ];

  const [LayoutState, setLayoutState] = useState(layout);
  const [GridComponentKey, setGridComponentKey] = useState(5);

  const boxStyle = { alignItems: "flex-end", justifyContent: "center" };

  const btnEditGrid = () => {
    let layoutCopy = LayoutState;
    layoutCopy.forEach(element => {
      element.static = false;
    });
    setLayoutState(layoutCopy);
    setGridComponentKey(Math.floor(Math.random() * 100));
  };
  const btnFinishEditGrid = () => {
    setLayoutState(layout);
    setGridComponentKey(Math.floor(Math.random() * 100));
  };

  const redirectLink = link => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="row no-gutters justify-content-end">
        <button className="btn btn-sm btn-warning rounded-0" onClick={btnEditGrid}>
          Düzenle
        </button>
        <button className="btn btn-sm btn-secondary rounded-0 ml-1" onClick={btnFinishEditGrid}>
          Düzenlemeyi Bitir
        </button>
      </div>
      <div className="row no-gutters mt-3">
        <GridLayout
          className="layout"
          layout={LayoutState}
          cols={12}
          rowHeight={30}
          width={1200}
          key={GridComponentKey}
        >
          <div key="a" className="border border-warning">
            <div className="container-fluid d-flex h-100" style={boxStyle}>
              <div className="row no-gutters">
                <p className="lead mb-0 cursor--pointer" onClick={() => redirectLink("https://google.com.tr")}>
                  Google
                </p>
              </div>
            </div>
          </div>
          <div key="b" className="border border-danger">
            <div className="container-fluid d-flex h-100" style={boxStyle}>
              <div className="row no-gutters">
                <p className="lead mb-0 cursor--pointer" onClick={() => redirectLink("https://rerererarara.net")}>
                  Galatasaray Sözlük
                </p>
              </div>
            </div>
          </div>
          <div key="c" className="border border-success">
            <div className="container-fluid d-flex h-100" style={boxStyle}>
              <div className="row no-gutters">
                <p className="lead mb-0 cursor--pointer" onClick={() => redirectLink("https://eksisozluk.com")}>
                  Ekşi Sözlük
                </p>
              </div>
            </div>
          </div>
          <div key="d" className="border border-danger">
            <div className="container-fluid d-flex h-100" style={boxStyle}>
              <div className="row no-gutters">
                <p className="lead mb-0 cursor--pointer" onClick={() => redirectLink("https://youtube.com")}>
                  Youtube
                </p>
              </div>
            </div>
          </div>
          <div key="e" className="border border-secondary">
            <div className="container-fluid d-flex h-100" style={boxStyle}>
              <div className="row no-gutters">
                <p className="lead mb-0 cursor--pointer" onClick={() => redirectLink("https://gmail.com")}>
                  Gmail
                </p>
              </div>
            </div>
          </div>
        </GridLayout>
      </div>
    </>
  );
};

export default FrequentlyUsed;
