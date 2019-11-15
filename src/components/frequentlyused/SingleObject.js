import React from "react";

const SingleObject = props => {
  return (
    <>
      <div
        className={`container-fluid d-flex flex-column h-100 cursor--pointer Freq--SingleObject--boxStyle text-${props.colorTextData.mains}`}
      >
        <div className="col-12 d-flex flex-column justify-content-center frequentlyBox">
          <div className={`row no-gutters justify-content-center`}>
            <div className={`col-12 h-100 p-0 justify-content-center text-center`}>
              <img
                src={props.contentIcon}
                className={`img-fluid rounded-lg`}
                onClick={() => props.redirectLink(props.contentLink)}
                alt=""
                style={{ height: "64px" }}
              />
            </div>
          </div>
          <div className="row no-gutters text-center">
            <div className="col-12 h-100 p-0">
              <p className="mb-0" onClick={() => props.redirectLink(props.contentLink)}>
                {props.contentName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleObject;
//https://www.rubberduck.io/blog/browser-extensions-react/
//border border-${props.colorTextData.mains}
