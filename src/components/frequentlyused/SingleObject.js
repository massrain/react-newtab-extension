import React from "react";

const SingleObject = props => {
  return (
    <>
      <div
        className={`container-fluid d-flex flex-column h-100 cursor--pointer Freq--SingleObject--boxStyle border border-${props.colorTextData.mains} text-${props.colorTextData.mains}`}
        onClick={() => props.redirectLink(props.contentLink)}
      >
        <div className="col-12 d-flex flex-column justify-content-center">
          <div className="row no-gutters justify-content-center">
            <div className="col-12 h-100 p-0 justify-content-center text-center">
              <img src={props.contentIcon} className="img-fluid" alt="" style={{ height: "32px" }} />
            </div>
          </div>
          <div className="row no-gutters text-center">
            <div className="col-12 h-100 p-0">
              <p className="mb-0">{props.contentName}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleObject;
//https://www.rubberduck.io/blog/browser-extensions-react/
