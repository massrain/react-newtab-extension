import React from "react";

export const ChooseBgPopup = props => {
  const handleBlur = () => {
    console.log("outside");
  };
  return (
    <>
      <div
        className="container-fluid p-1 ImageBackgroundPopup text-white text-center"
        style={{ display: props.ChooseBgVisibility }}
        onBlur={handleBlur}
        contentEditable
      >
        <div className="row no-gutters justify-content-center overflowx--scroll h-100 w-100 scrollbarStyle2">
          <div className="col-12 justify-content-center text-center h-100 w-100">
            <div className="row no-gutters d-flex h-100 w-100" style={{ flexWrap: "nowrap" }}>
              {/* <img src="/assets/wallpapers/bing1.jpg" alt="" className="img-fluid" /> */}
              <img
                src="/assets/wallpapers/bing1.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 p-2 cursor--pointer"
                onClick={() => props.selectImageBackground(1)}
              />
              <img
                src="/assets/wallpapers/bing2.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 p-2 cursor--pointer"
                onClick={() => props.selectImageBackground(2)}
              />
              <img
                src="/assets/wallpapers/bing3.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 p-2 cursor--pointer"
                onClick={() => props.selectImageBackground(3)}
              />
              <img
                src="/assets/wallpapers/bing4.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 p-2 cursor--pointer"
                onClick={() => props.selectImageBackground(4)}
              />
              <img
                src="/assets/wallpapers/bing5.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 p-2 cursor--pointer"
                onClick={() => props.selectImageBackground(5)}
              />
              <img
                src="/assets/wallpapers/bing6.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 p-2 cursor--pointer"
                onClick={() => props.selectImageBackground(6)}
              />
              <img
                src="/assets/wallpapers/bing7.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 p-2 cursor--pointer"
                onClick={() => props.selectImageBackground(7)}
              />
              <img
                src="/assets/wallpapers/bing8.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 p-2 cursor--pointer"
                onClick={() => props.selectImageBackground(8)}
              />
              <img
                src="/assets/wallpapers/bing9.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 p-2 cursor--pointer"
                onClick={() => props.selectImageBackground(9)}
              />
              <img
                src="/assets/wallpapers/bing10.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 p-2 cursor--pointer"
                onClick={() => props.selectImageBackground(10)}
              />
              <img
                src="/assets/wallpapers/bing11.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 p-2 cursor--pointer"
                onClick={() => props.selectImageBackground(11)}
              />
              <img
                src="/assets/wallpapers/bing12.jpg"
                alt=""
                className="img-fluid inline--block h-100 mx-3 p-2 cursor--pointer"
                onClick={() => props.selectImageBackground(12)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
