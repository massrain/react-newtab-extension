import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import SingleObject from "./frequentlyused/SingleObject";

const FrequentlyUsed = () => {
  const initialLayout = [
    { i: "b", x: 0, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true },
    { i: "a", x: 2, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true },
    { i: "c", x: 4, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true },
    { i: "d", x: 6, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true },
    { i: "e", x: 8, y: 0, w: 2, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4, static: true }
  ];

  const [LayoutState, setLayoutState] = useState(initialLayout);
  const [GridComponentKey, setGridComponentKey] = useState(5);
  const [EditMode, setEditMode] = useState(false);

  const btnEditGrid = () => {
    setEditMode(true);
    let layoutCopy = LayoutState;
    layoutCopy.forEach(element => {
      element.static = false;
    });
    setLayoutState(layoutCopy);
    setGridComponentKey(Math.floor(Math.random() * 100));
  };
  const btnFinishEditGrid = () => {
    setEditMode(false);
    let layoutCopy = LayoutState;
    layoutCopy.forEach(element => {
      element.static = true;
    });
    setLayoutState(layoutCopy);
    setGridComponentKey(Math.floor(Math.random() * 100));
  };

  const onLayoutChange = newLayout => {
    setLayoutState(newLayout);
  };

  const redirectLink = link => {
    if (EditMode === false) {
      window.open(link, "_blank");
    }
  };

  return (
    <>
      <div class="modal fade bd-example-modal-sm" role="dialog" tabindex="-1">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">asdasldkalksdalsd</div>
        </div>
      </div>
      <div className="row no-gutters justify-content-end">
        <button
          className="btn btn-sm btn-primary rounded-0"
          type="button"
          data-toggle="modal"
          data-target=".bd-example-modal-sm"
          style={{ display: EditMode ? "block" : "none" }}
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
        <GridLayout
          className="layout"
          layout={LayoutState}
          onLayoutChange={onLayoutChange}
          cols={12}
          rowHeight={30}
          width={1200}
          key={GridComponentKey}
        >
          <div key="a">
            <SingleObject
              redirectLink={redirectLink}
              contentName={"Google"}
              contentLink={"https://google.com.tr"}
              contentIcon={"https://img.icons8.com/plasticine/2x/google-logo.png"}
            />
          </div>
          <div key="b">
            <SingleObject
              redirectLink={redirectLink}
              contentName={"Galatasaray Sözlük"}
              contentLink={"https://rerererarara.net"}
              contentIcon={"https://img.icons8.com/plasticine/2x/google-logo.png"}
            />
          </div>
          <div key="c">
            <SingleObject
              redirectLink={redirectLink}
              contentName={"Ekşi Sözlük"}
              contentLink={"https://eksisozluk.com"}
              contentIcon={"https://img.icons8.com/plasticine/2x/google-logo.png"}
            />
          </div>
          <div key="d">
            <SingleObject
              redirectLink={redirectLink}
              contentName={"Youtube"}
              contentLink={"https://youtube.com"}
              contentIcon={"https://img.icons8.com/plasticine/2x/google-logo.png"}
            />
          </div>
          <div key="e">
            <SingleObject
              redirectLink={redirectLink}
              contentName={"Gmail"}
              contentLink={"https://gmail.com"}
              contentIcon={"https://img.icons8.com/plasticine/2x/google-logo.png"}
            />
          </div>
        </GridLayout>
      </div>
    </>
  );
};

export default FrequentlyUsed;
