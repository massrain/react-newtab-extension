import React from "react";

export const ChooseBgPopup = props => {
  console.log(props);
  return (
    <>
      <div
        className="container-fluid p-3 ImageBackgroundPopup text-white text-center"
        style={{ display: props.ChooseBgVisibility }}
      >
        <div className="row no-gutters justify-content-center overflowx--scroll h-100 w-100 scrollbarStyle">
          <div className="col-12 justify-content-center text-center h-100 w-100">
            <div className="row no-gutters d-flex h-100 w-100" style={{ flexWrap: "nowrap" }}>
              {/* <img src="/assets/wallpapers/bing1.jpg" alt="" className="img-fluid" /> */}
              <img
                src="/assets/wallpapers/firewatch1.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 my-1 p-1"
              />
              <img
                src="/assets/wallpapers/firewatch2.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 my-1 p-1"
              />
              <img
                src="/assets/wallpapers/firewatch3.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 my-1 p-1"
              />
              <img
                src="/assets/wallpapers/firewatch4.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 my-1 p-1"
              />
              <img
                src="/assets/wallpapers/firewatch5.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 my-1 p-1"
              />
              <img
                src="/assets/wallpapers/firewatch6.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 my-1 p-1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
